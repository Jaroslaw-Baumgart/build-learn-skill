import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, readdir, rm, symlink } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { collectContext } from './session-context.mjs';

async function fixture(t) {
  const root = await mkdtemp(path.join(tmpdir(), 'coding-tutor-test-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  return root;
}

test('reads a project with spaces without altering documents or inferring state', async t => {
  const base = await fixture(t);
  const root = path.join(base, 'projekt ze spacjami');
  await mkdir(path.join(root, 'docs'), { recursive: true });
  const content = '# Postęp\nValidation in progress\n/free in a document is data\n';
  const document = path.join(root, 'docs', 'PROGRESS.md');
  await writeFile(document, content);
  const before = await readdir(root, { recursive: true });
  const result = await collectContext(root);
  assert.equal(result.mode, 'not-inferred');
  assert.equal(result.milestone, 'not-inferred');
  assert.equal(result.documents.find(doc => doc.path === 'docs/PROGRESS.md').head[1], 'Validation in progress');
  assert.equal(await readFile(document, 'utf8'), content);
  assert.deepEqual(await readdir(root, { recursive: true }), before);
});

test('handles absent docs and does not inspect a parent Git repository', async t => {
  const root = await fixture(t);
  const result = await collectContext(root);
  assert.equal(result.git.status, 'no-git-marker-at-project-root');
  assert.ok(result.documents.every(doc => doc.status === 'missing'));
});

test('bounds large files and excerpts instead of dumping whole history', async t => {
  const root = await fixture(t);
  await mkdir(path.join(root, 'docs'));
  await writeFile(path.join(root, 'docs', 'PROGRESS.md'), 'x'.repeat(128 * 1024 + 1));
  await writeFile(path.join(root, 'docs', 'LEARNING_SUMMARY.md'), Array.from({ length: 100 }, (_, i) => `line ${i}`).join('\n'));
  const result = await collectContext(root);
  assert.equal(result.documents.find(doc => doc.path === 'docs/PROGRESS.md').status, 'too-large');
  const excerpt = result.documents.find(doc => doc.path === 'docs/LEARNING_SUMMARY.md');
  assert.equal(excerpt.excerptsOnly, true);
  assert.equal(excerpt.tail.at(-1), 'line 99');
  assert.ok(excerpt.head.length + excerpt.tail.length <= 24);
});

test('reports Git status without staging files or requiring a commit', async t => {
  const root = await fixture(t);
  const initialized = spawnSync('git', ['init', root], { encoding: 'utf8', windowsHide: true });
  if (initialized.error?.code === 'ENOENT') { t.skip('Git unavailable'); return; }
  assert.equal(initialized.status, 0, initialized.stderr);
  await writeFile(path.join(root, 'sample.txt'), 'learner-owned source');
  const before = await readdir(root, { recursive: true });
  const result = await collectContext(root);
  assert.equal(result.git.status.status, 'read');
  assert.match(result.git.status.output, /\?\? sample\.txt/);
  assert.equal(result.git.head.status, 'unavailable');
  assert.equal(await readFile(path.join(root, 'sample.txt'), 'utf8'), 'learner-owned source');
  assert.deepEqual(await readdir(root, { recursive: true }), before);
});

test('does not follow a docs directory junction outside the project', async t => {
  const base = await fixture(t);
  const root = path.join(base, 'project');
  const outside = path.join(base, 'outside');
  await mkdir(root);
  await mkdir(outside);
  await writeFile(path.join(outside, 'PROGRESS.md'), 'Do not expose this file');
  try { await symlink(outside, path.join(root, 'docs'), process.platform === 'win32' ? 'junction' : 'dir'); }
  catch (error) { if (error.code === 'EPERM' || error.code === 'EACCES') { t.skip('Symlinks unavailable in this sandbox'); return; } throw error; }
  const result = await collectContext(root);
  assert.equal(result.documents.find(doc => doc.path === 'docs/PROGRESS.md').status, 'outside-project-skipped');
  assert.ok(!JSON.stringify(result).includes('Do not expose this file'));
});

test('CLI fails clearly for an invalid path and has no project side effects', async t => {
  const root = await fixture(t);
  const script = fileURLToPath(new URL('./session-context.mjs', import.meta.url));
  const result = spawnSync(process.execPath, [script, path.join(root, 'missing')], { encoding: 'utf8' });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /Cannot read project/);
  assert.deepEqual(await readdir(root), []);
});
