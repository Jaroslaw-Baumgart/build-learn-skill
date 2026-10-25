# Build & Learn — Coding Tutor for Codex

**Build & Learn** is a Codex skill for learning to code through your own project. The repository is named `build-learn-skill`; the installed skill is named `coding-tutor` and invoked with `$coding-tutor`.

Work on one project at a time, preferably an existing portfolio application. Improve its code, fix bugs, and add useful features while learning to implement changes, diagnose problems, and explain technical decisions. Starting a new project is also supported when that is your choice.

The skill does not ship with a fixed application roadmap or a previous learner's profile. It adapts assignments to your code and demonstrated skills. Technical interview preparation draws on the work you actually do in the project.

## Installation

Copy the entire skill directory into `.agents/skills/coding-tutor/` in your project. Keep `SKILL.md` and the `agents/`, `references/`, `scripts/`, and `assets/` directories together.

Alternatively, install it in `~/.codex/skills/coding-tutor` to make it available across projects. Each mentoring engagement still focuses on one selected project. You do not need both installations. Restart Codex if the skill does not appear.

The repository name differs from the skill name: when copying a downloaded or cloned repository, name the destination directory `coding-tutor`.

Open Codex in your project and send, for example:

```text
$coding-tutor
I want to improve an existing portfolio project and learn while developing it.
Inspect the code, suggest improvements and new features, and help me agree on a learning plan.
```

The mentor follows your language; you do not need to use English for lessons.

## Improvements and new features

The plan can include bug fixes, quality improvements, and new features. The mentor proactively identifies opportunities based on the application, your goals, and observed learning gaps.

Each proposal explains its user value, learning goal, approximate scope, and relevant prerequisites or tradeoffs. The mentor asks about your preferences and agrees on extensions beyond the accepted roadmap before adopting them. Agreed changes become part of the plan; already accepted tasks do not require repeated approval. A proposal does not automatically interrupt the current task.

Features, dependencies, and architectural rewrites should serve the project rather than exist solely to practice a technology. Agreeing on a feature does not hand implementation over to the mentor. By default, you write production code, run checks, and perform Git operations. A direct request for a specific edit or check authorizes that work within its scope.

## First use and project records

Starting mentoring in a selected project authorizes creation of missing learning records and a short `AGENTS.md` pointer. The skill first inspects existing code and documentation, then asks for missing information that affects the plan. Unknown facts remain explicitly unestablished.

The default records are:

- `AGENTS.md`: the skill, context sources, and continuity rules.
- `docs/README.md`: an index of learning documents.
- `docs/ROADMAP.md`: goals, scope, decisions, milestones, and acceptance criteria.
- `docs/PROGRESS.md`: completed work, actual check results, limitations, and the next step.
- `docs/LEARNING_SUMMARY.md`: independent and guided skills, evidence, review topics, and technical interview preparation.
- `docs/APP_GUIDE.md`: application behavior, technical decisions, a short introduction, a demo walkthrough, and rehearsal questions.
- `docs/MENTOR.md`: local work ownership, testing preference, constraints, and agreed exceptions.

The skill uses [templates](assets/project/) and a [first-use procedure](references/onboarding.md). It preserves existing documents, equivalent records, and history. Only missing records are created; future sessions maintain the same documentation rather than starting a second set.

The initial roadmap is a proposal to agree on before implementation assignments begin. The mentor also asks whether you prefer to write tests with guidance or receive complete tests. You can change that preference at any time.

`LEARNING_SUMMARY.md` distinguishes implementation, explanation, diagnosis, and applying knowledge to a new situation, including the level of assistance. Working code and passing tests do not establish independent understanding. Unasked questions remain unassessed. Minor observations are batched into short entries.

`APP_GUIDE.md` changes with application behavior and startup instructions. It distinguishes implemented and planned features and identifies unverified demo steps. Having a prepared script does not demonstrate independent presentation ability.

Opening a folder, reviewing the skill, or using only `/free` does not initialize learning records. The skill does not assume your ability or invent test results. It does not automatically change `.gitignore`, make commits, or run the application without appropriate authorization.

## Conversation and continuity

- `/mentor`: structured learning and project work; resumes the last unfinished step.
- `/free`: informal discussion without compulsory exercises or knowledge checks. It does not change editing or Git permissions.

These are message conventions, not additional native interface commands. A new mentoring conversation defaults to mentor mode; a resumed conversation preserves an explicitly established mode available in its conversation context.

The mentor calibrates assistance from your attempts and notes. Familiar logic receives a task or scaffold; an unfamiliar API receives a minimal example and explanation. Full solutions are available on request. Using a supplied example is not recorded as independent implementation.

`SKILL.md` includes a compact `Continuity contract`. The project's `AGENTS.md` points to it and the learning records. On resumption, after context compaction, or when continuity is uncertain, the mentor reads the relevant instructions and records to recover the task, support level, and unresolved questions. Missing records are repaired without erasing history.

When you report a teaching-rule violation, the mentor corrects the current step without restarting the curriculum or making you retype a disclosed solution. Skill maintenance and informal discussions are not recorded as application progress. This reduces context loss; it does not guarantee perfect instruction following and requires no automatic hook.

## Tools and package checks

The teaching workflow itself does not require Node.js or additional services. Optional scripts require Node.js 20 or newer and have no npm dependencies. From the skill directory:

```powershell
node scripts/session-context.mjs 'C:\path\to\your-project'
node --test scripts/session-context.test.mjs scripts/package.test.mjs
```

The first script only reads bounded documentation excerpts and Git status. It does not initialize a project, assess knowledge, or detect the conversation mode. There are no automatic hooks or paid model runners.

The formal validator provided with the `skill-creator` skill requires Python and `PyYAML`. It checks package structure rather than teaching quality. The [behavioral scenarios](references/behavioral-cases.json) and [evaluation guide](references/evaluation.md) require separate execution and review. Package and helper tests do not establish the effectiveness of model responses.

## Maintenance

The working `coding-tutor` directory is the maintained source; the installed skill is a copy. Make and verify changes in the source, then synchronize the relevant installation files while preserving independent changes.

Communication-guidance provenance and the upstream MIT notice are in [attribution.md](references/attribution.md). Preserve this information when redistributing the package.

## License

The package is available under the [MIT License](LICENSE). Adapted upstream material also retains its original notice in [attribution.md](references/attribution.md).
