# First-use setup

Read when a user explicitly starts mentoring without existing learning documentation, requests a roadmap for a new project, or asks to add mentoring to an existing project. This procedure belongs to the reusable skill; the generated facts belong to the user's project.

## Inspect before asking

Confirm the intended project directory. Read applicable instructions and inspect a small relevant sample: README, package/config files, existing source structure, and any roadmap or learning notes. Distinguish a new project from an existing product. Never copy the previous learner's profile, technology choices, roadmap, dates, results, or permissions into a new project.

If there is an existing setup, use it. Discover equivalent filenames rather than insisting on these templates. Create only genuinely missing records; do not rename a team's documentation to fit the skill.

## Establish a usable goal

Infer what the user has already supplied. Ask a single concise bundle for missing information that affects the plan:

- What should the learner be able to build or explain, and what is the first usable result?
- What constraints matter now: platform, existing stack, scope, and available active learning time?
- If no work or notes exist, what background is relevant? Treat the answer as an initial hypothesis, then calibrate from the first small task.

- Does the learner want to write tests themselves with guidance, or receive complete tests from the mentor? Ask at the start unless they have already chosen, explain that they can change this at any time, and record the answer in the local learning agreement. If unanswered, leave the preference pending and ask before assigning a test; do not choose silently.

Do not demand a complete self-assessment or infer skill from the chosen stack. Do not choose a stack, initialize an application, or prescribe deployment solely to make the roadmap look complete. If answers are needed, continue only independent inspection and wait for the answers before fixing dependent decisions.

## Produce project-specific records

Choosing a project for mentoring authorizes automatic creation and ongoing maintenance of missing local learning records and a minimal AGENTS.md pointer. Do not ask separately whether to create each file. In an existing mentoring project, repair missing records on resumption. Keep all records inside the selected project and preserve them across sessions. This authorizes learning documentation, not production edits or Git mutations. Create records from known facts and mark missing facts pending; defer only decisions that depend on unanswered questions. If the user only asks what the skill can do, explain; do not initialize their project.

Use [project templates](../assets/project/) as structures, not as text to copy blindly. Replace every `{{...}}` field with actual known content; write `not established` where information is legitimately unknown. Remove drafting notes and empty placeholder rows. Match the user's language. Do not assert tests passed or concepts were mastered during setup.

1. Roadmap: measurable product/learning goal, scope boundaries, confirmed or pending decisions, a few coherent milestones with outputs and observable acceptance criteria. Detail the first milestone; keep later ones proportionate to uncertainty. Separate product completion from learning evidence. Center the plan on the selected project and its actual condition. Include agreed fixes, quality improvements, and new features with both product value and learning goals; keep unaccepted extensions clearly marked as proposals.
2. Progress: the actual initial state, checks really observed with provenance, limitations, and one next step. Existing applications do not start with a fabricated failing baseline.
3. Learning summary: a learner-facing skills overview plus an evidence ledger, with support level and uncertainty. Include demonstrated skills linked to project examples, topics needing practice, and technical interview preparation as described in [Teaching and evidence](teaching.md). Start unassessed where evidence is missing; do not import another learner history. Batch minor observations under the recording triggers.
4. Application guide (APP_GUIDE.md or an existing equivalent): explain the problem, user value, current user journey, and one real action traced through actual components and data. Include concise architecture responsibilities and design tradeoffs, a 30-60 second introduction, a repeatable demo with working directory, startup commands, sample input, expected results, and relevant error recovery, plus project-specific questions to rehearse. Inspect code/configuration before describing internals; label untested demo steps and planned functionality. Start with known facts and expand with implemented features, without inventing a complete application during setup.
5. Local agreement and index: project constraints, stage-boundary expectations, document ownership, and agreed differences from the skill. Generic teaching, mode switching, and debugging remain in the skill.

Present the initial roadmap as a proposal and ask the learner to approve or adjust it before starting its implementation tasks. An explicitly accepted existing roadmap needs no repeated approval. Preparing draft learning documents is allowed before acceptance; mark the roadmap as proposed and do not record planned work as completed. Once accepted, proceed within its scope without asking for approval for each task. Discuss material changes to goals or scope with the learner before adopting them.

Default new notes to `docs/` only if that location is appropriate and unused for conflicting content. Otherwise use the project's existing convention or ask the one material location question. Do not overwrite files, symlinks, or nonempty directories. If an existing document is stale, update the relevant section while preserving its history rather than replacing it with a fresh template.

## Connect future sessions

The [AGENTS template](../assets/project/AGENTS.md) points to the installed skill by name and to project documents. Do not hardcode the creator's user directory or assume a sibling checkout exists. Merge a minimal pointer into an existing AGENTS.md without discarding team instructions; create a missing root AGENTS.md automatically as part of the chosen mentoring workflow. Include the compact continuity contract from the AGENTS template, context recovery, and repair of missing learning records. For an existing mentoring setup without a pointer, install the missing pointer on resumption. Keep the pointer short: do not copy the entire skill. General teaching belongs to the installed skill; preserve genuine local constraints and explicit exceptions. If legacy documents duplicate general rules and conflict, use the latest explicit user agreement; identify unresolved material conflicts rather than silently choosing or overwriting them. Opening a folder alone is not an execution trigger; this setup occurs when Codex handles a mentoring request in that project. If the skill is missing, report that and retain project boundaries instead of silently installing software.

Use the project's existing Git/privacy policy. Do not add or remove ignore rules, commit notes, or publish them merely because a template exists. When setting up a new project with no policy, leave those choices explicit in the local agreement and keep generated notes uncommitted. Do not store transient free/mentor state as a global default for every future conversation; new mentoring conversations default to mentor mode; discussing or maintaining the skill does not start mentoring.

Finish with the generated file locations, assumptions/pending decisions, and the roadmap proposal if acceptance is pending. After acceptance, give one first practical task that can reveal the learner starting level. If that task uses an unfamiliar API, provide its minimal example; do not give away familiar implementation merely because this is the first session. Do not start a milestone beyond the setup when the local agreement requires acceptance first.
