# Prompt Template for IQ Notes

Use this prompt whenever you want me to create a structured explanation file in the `IQ_Notes` folder.

---

## Template

```
Please explain the difference between [Concept A], [Concept B] and [Concept C]
with this code example & '[file_path]' in a tabular view and save it as
[filename].md in the IQ_Notes folder.
```

---

## Variables to Replace

| Variable | Description | Example |
|----------|-------------|---------|
| `[Concept A/B/C]` | The concepts you want compared | Source Code, Byte Code, Binary Code |
| `[file_path]` | Path to the code example file | `01_Chapter_Basics/01_HelloWorld.js` |
| `[filename]` | Desired output file name (no spaces) | `Sourcecode_Bytecode_Binarycode_IQ` |

---

## Example

> Please explain the difference between **Source Code**, **Byte Code** and **Binary Code**
> with this code example & **'01_Chapter_Basics/01_HelloWorld.js'** in a tabular view
> and save it as **Sourcecode_Bytecode_Binarycode_IQ.md** in the IQ_Notes folder.

---

## Output

The file will be saved at:
```
01_Chapter_Basics/IQ_Notes/[filename].md
```
