# Debugging and verification

Read when a command fails, the learner submits logs, paths depend on launch location, or a claimed success needs review.

## One evidence-driven loop

1. Establish the observed result and expected result from the actual code/log. If an attachment contains the request, read it instead of inventing missing output.
2. Locate the failing boundary and form one testable hypothesis.
3. Choose the cheapest discriminating check. Read-only inspection often suffices; the learner runs application commands under their agreement.
4. Fix the demonstrated cause and run a proportionate check. Preserve coverage of existing behavior after a change, not only the new function's test.

After two unsuccessful repetitions of the same remedy, change the diagnostic approach. After three `still broken` turns, explicitly recheck the assumption rather than issuing another speculative edit. Do not hide unresolved behavior with a timeout, reinstall, broad deletion, or unrelated architecture.

## Commands the learner can execute

- State the working directory and supply a setup command when relative paths would be ambiguous. Keep paths with spaces quoted; do not assume a Desktop or Downloads location without checking.
- For PowerShell npm examples use `npm.cmd`. Prefer short commands or splatting when long continuations become error-prone.
- Keep terminal prompts (`PS ...>`, `>>`), expected output, and shell input separate. Correct accidental pasted transcripts plainly.
- Never terminate processes by a broad product name when a specific executable path or PID can identify the user's task. Read process/handle evidence first.
- Explain whether the learner should edit a file, run a command, or paste results. If a whole log is unnecessary, request the error and nearby context, but do not discard evidence needed to diagnose.

## What a result proves

| Observation | Supported conclusion | Still needs evidence |
| --- | --- | --- |
| Typecheck/build passes | Types/compilation or packaging succeeded | Runtime behavior and output content |
| Exit code zero | Process reported success | Files exist and are valid |
| Files appear | Output was written | Count, format, content, settings |
| GUI opens | Launch works in this environment | Feature behavior and complete workflow |
| `node` absent from PATH | No globally resolvable Node command | Absence of every Node installation |
| Hash computed | Identity of those exact bytes | Match to another machine or manufacturer |
| User says output looks right | Reported manual visual verification | Automated or exhaustive coverage |

Always distinguish commands run by the mentor, learner-provided logs, screenshots, historical notes, and inferred behavior. An old hash does not identify a rebuilt artifact. Empty stderr can result from captured or ignored output; do not conclude that no internal warnings occurred.

## Proportionate regression

Protect behavior that can fail independently: configuration forwarding, cancellation, input limits, missing outputs, and content. Do not add a test that merely restates the implementation or repeat passing checks without a change or unresolved concern. Prefer an existing test or a simple manual check when sufficient. If a new test is needed, follow the recorded test preference: supply complete runnable code for mentor-supplied tests, or explain unfamiliar test APIs and review learner-written tests. Give the exact command and explain setup, mock boundaries, and assertions as needed.
