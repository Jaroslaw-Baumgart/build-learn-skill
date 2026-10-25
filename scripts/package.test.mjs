import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const text = relative => readFile(path.join(root, relative), 'utf8');

async function files(directory = root) {
  const output = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) output.push(...await files(absolute));
    else output.push(absolute);
  }
  return output;
}

test('entrypoint declares a portable skill with a first-use procedure', async () => {
  const skill = await text('SKILL.md');
  assert.match(skill, /^---\r?\nname: coding-tutor\r?\ndescription: "[^\r\n]+"\r?\n---/);
  assert.match(skill, /references\/onboarding\.md/);
  const ui = await text('agents/openai.yaml');
  assert.match(ui, /display_name: "Coding Tutor"/);
  assert.ok(ui.includes('$coding-tutor'));
});

test('all relative Markdown links resolve inside the portable package', async () => {
  for (const file of await files()) {
    if (!file.endsWith('.md')) continue;
    for (const match of (await readFile(file, 'utf8')).matchAll(/\]\(([^)]+)\)/g)) {
      const target = match[1].split('#')[0];
      if (!target || /^[a-z]+:/i.test(target)) continue;
      const absolute = path.resolve(path.dirname(file), target);
      const relative = path.relative(root, absolute);
      assert.ok(!relative.startsWith('..') && !path.isAbsolute(relative), `External file dependency in ${file}`);
      assert.ok(await stat(absolute), `Missing link in ${file}: ${target}`);
    }
  }
});

test('package has no personal paths, or live progress files', async () => {
  for (const file of await files()) {
    const relative = path.relative(root, file);
    if (relative.startsWith(`scripts${path.sep}`)) continue;
    const content = await readFile(file, 'utf8');
    assert.doesNotMatch(content, /[A-Z]:[\\/]Users[\\/]/i, relative);
    if (/^(ROADMAP|PROGRESS|LEARNING_SUMMARY|MENTOR)\.md$/.test(path.basename(file))) {
      assert.ok(relative.startsWith(`assets${path.sep}project${path.sep}`), `Live project record in package: ${relative}`);
    }
  }
});

test('blank templates can be rendered without placeholders or broken project links', async () => {
  const names = ['README.md', 'ROADMAP.md', 'PROGRESS.md', 'LEARNING_SUMMARY.md', 'MENTOR.md', 'APP_GUIDE.md'];
  const rendered = new Map();
  for (const name of names) {
    const template = await text(`assets/project/docs/${name}`);
    assert.ok(template.includes('{{'), `Expected blank template: ${name}`);
    const result = template.replace(/\{\{[A-Z_]+\}\}/g, 'Sample project-specific value');
    assert.ok(!result.includes('{{'));
    rendered.set(name, result);
  }
  for (const [name, content] of rendered) {
    for (const match of content.matchAll(/\]\(([^)]+)\)/g)) {
      assert.ok(rendered.has(match[1]), `Unresolved generated link: ${name} -> ${match[1]}`);
    }
  }
  const agents = (await text('assets/project/AGENTS.md')).replaceAll('{{PROJECT_NAME}}', 'Sample project');
  assert.ok(!agents.includes('{{'));
  assert.ok(agents.includes('$coding-tutor'));
});

test('behavior fixtures have unique IDs and observable requirements', async () => {
  const cases = JSON.parse(await text('references/behavioral-cases.json'));
  assert.equal(new Set(cases.map(item => item.id)).size, cases.length);
  for (const item of cases) {
    assert.ok(typeof item.message === 'string' && item.message.length > 0);
    assert.ok(Array.isArray(item.must) && item.must.length > 0);
    assert.ok(Array.isArray(item.must_not) && item.must_not.length > 0);
  }
  for (const id of ['first-use-known-goal', 'existing-project-onboarding', 'first-use-missing-goal', 'free-does-not-initialize']) {
    assert.ok(cases.some(item => item.id === id), `Missing onboarding scenario: ${id}`);
  }
});
