# VS Code Keyboard Shortcuts — Windows

**Context:** JavaScript / Playwright course workflow.
**Reference File:** `03_Chapter_Identifiers/03_Comments.js` — `ctrl + /` (comment/uncomment)

---

## General Editing

| Shortcut | Action | Use Case |
|----------|--------|----------|
| `Ctrl + S` | Save file | Quick save after edits |
| `Ctrl + Z` | Undo | Revert last change |
| `Ctrl + Y` / `Ctrl + Shift + Z` | Redo | Reapply undone change |
| `Ctrl + X` | Cut line (with nothing selected) | Delete & copy entire line |
| `Ctrl + C` | Copy line (with nothing selected) | Duplicate line to clipboard |
| `Ctrl + V` | Paste | Paste clipboard content |
| `Ctrl + A` | Select All | Select entire file content |

---

## Code Comments

| Shortcut | Action | Use Case |
|----------|--------|----------|
| `Ctrl + /` | Toggle line comment | Comment/uncomment selected lines (as seen in `03_Comments.js`) |
| `Shift + Alt + A` | Toggle block comment | Add/remove `/* */` block comment |

---

## Multi-Cursor & Selection

| Shortcut | Action | Use Case |
|----------|--------|----------|
| `Ctrl + D` | Add selection to next find match | Select repeated variable names one by one |
| `Ctrl + Shift + L` | Select all occurrences | Rename all instances of a variable at once |
| `Alt + Click` | Insert cursor at click position | Edit multiple lines simultaneously |
| `Ctrl + Alt + ↑/↓` | Insert cursor above/below | Add cursors on adjacent lines |
| `Ctrl + Shift + \` | Jump to matching bracket | Navigate between `{ }` or `( )` pairs |

---

## Code Formatting & Refactoring

| Shortcut | Action | Use Case |
|----------|--------|----------|
| `Shift + Alt + F` | Format document | Auto-indent and format JS code |
| `Ctrl + .` | Quick Fix / Show Code Actions | Apply suggested fixes (e.g., add missing import) |
| `F2` | Rename symbol | Rename variable/function across entire file/project |
| `Ctrl + Shift + O` | Go to symbol in file | Jump to a function or variable declaration |
| `Ctrl + T` | Go to symbol in workspace | Search across all files |

---

## Code Intelligence (IntelliSense)

| Shortcut | Action | Use Case |
|----------|--------|----------|
| `Ctrl + Space` | Trigger suggestion | Manually open autocomplete suggestions |
| `Ctrl + Shift + Space` | Trigger parameter hints | See function parameter list |
| `Ctrl + K → Ctrl + I` | Show hover info | Check type/description of a symbol |
| `Ctrl + Shift + I` | Show hover (alternative) | Quick peek at type info |

---

## Navigation

| Shortcut | Action | Use Case |
|----------|--------|----------|
| `Ctrl + P` | Quick Open file | Jump to any file by name |
| `Ctrl + G` | Go to line | Jump to specific line number |
| `Ctrl + Shift + P` | Command Palette | Run any VS Code command |
| `Ctrl + Tab` | Cycle through open files | Switch between recent editors |
| `Ctrl + B` | Toggle Sidebar | Show/hide Explorer sidebar |
| `Ctrl + \`` | Toggle Terminal | Open/close integrated terminal |

---

## Search & Replace

| Shortcut | Action | Use Case |
|----------|--------|----------|
| `Ctrl + F` | Find in file | Search within current file |
| `Ctrl + H` | Find & Replace in file | Replace text in current file |
| `Ctrl + Shift + F` | Find in files | Search across entire project |
| `Ctrl + Shift + H` | Find & Replace in files | Replace across entire project |

---

## Integrated Terminal

| Shortcut | Action | Use Case |
|----------|--------|----------|
| `Ctrl + \`` | Toggle terminal | Show/hide terminal panel |
| `Ctrl + Shift + \`` | Create new terminal | Open additional terminal instance |
| `Ctrl + C` (in terminal) | Cancel running command | Stop `npm test` or Node.js process |
| `Ctrl + L` (in terminal) | Clear terminal | Remove previous output |

---

## Debugging (Node.js / Playwright)

| Shortcut | Action | Use Case |
|----------|--------|----------|
| `F5` | Start / Continue debugging | Launch debug session |
| `Ctrl + F5` | Start without debugging | Run script normally |
| `F9` | Toggle breakpoint | Set breakpoint on a line of code |
| `F10` | Step over | Execute current line, skip into functions |
| `F11` | Step into | Enter a function call |
| `Shift + F11` | Step out | Exit current function |
| `Ctrl + Shift + D` | Show Run & Debug view | View debug panel |

---

## Editor Layout & Panels

| Shortcut | Action | Use Case |
|----------|--------|----------|
| `Ctrl + B` | Toggle Sidebar | Maximize editor space |
| `Ctrl + J` | Toggle Panel | Show/hide bottom panel (terminal, output) |
| `Ctrl + K V` | Open Markdown preview | Preview `.md` files side-by-side |
| `Ctrl + Shift + E` | Focus Explorer | Navigate file tree |
| `Ctrl + Shift + G` | Open Source Control | View Git changes |

---

## Git Integration

| Shortcut | Action | Use Case |
|----------|--------|----------|
| `Ctrl + Shift + G` | Source Control view | Stage, commit, push from editor |
| `Ctrl + Enter` | Commit (when in Source Control input) | Confirm staged commit |
| `Alt + G → H` | View git history | Quick file history access |

---

## Notes

- All shortcuts above are for **Windows**. Mac equivalents replace `Ctrl` → `Cmd` and `Alt` → `Option`.
- The most heavily used shortcut in this course is **`Ctrl + /`** (comment/uncomment lines), as demonstrated in `03_Comments.js`.
- For running JavaScript / Playwright scripts, use `Ctrl + \`` to open the integrated terminal, then run `node <filename>.js` or `npx playwright test`.
