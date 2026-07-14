# JavaScript Identifier Rules

**Referenced Files:** `01_Identifiers_Rules_Part1.js`, `02_Identifiers_Rules_Part2.js`, `04_Identifiers_IQ.js`

---

## Valid Characters

An identifier can start with:

| Start Character | Example | Valid? |
|----------------|---------|--------|
| Letter (a–z, A–Z) | `let name = 'Meghadri';` | ✅ |
| Underscore (`_`) | `let _private = 'secret';` | ✅ |
| Dollar sign (`$`) | `let $jquery = 'value';` | ✅ |
| Unicode character | `let café = 'valid';` | ✅ |
| Unicode escape (`\uXXXX`) | `let \u0061pple = 'Apple';` | ✅ |
| Digit (0–9) | `let 1stPlace = 'x';` | ❌ |

After the first character, an identifier can contain **letters, digits (0–9), underscores (`_`), and dollar signs (`$`)**.

| Example | Valid? | Reason |
|---------|--------|--------|
| `item1` | ✅ | Starts with letter, ends with digit |
| `a1_b2` | ✅ | Mixed letters, digits, underscore |
| `meghadri_roy` | ✅ | Letters + underscore |
| `meghadri$roy` | ✅ | Letters + dollar sign |

---

## Invalid Identifier Patterns

| Pattern | Example | Why Invalid |
|---------|---------|-------------|
| Starts with digit | `var 45 = 34;` | Cannot begin with a digit |
| Contains space | `var Meghadri Roy;` | Spaces not allowed |
| Contains hyphen | `let my-name;` | `-` is a minus operator |
| Contains special chars | `let my@name;`, `let my#name;`, `let my!name;` | `@`, `#`, `!` not allowed |
| Reserved keywords | `let class;`, `let function;`, `let const;` | Keywords are reserved by the language |

---

## Case Sensitivity

JavaScript identifiers are **case-sensitive**. Two identifiers with different casing are treated as different variables.

```javascript
var Name = 'Meghadri';
var name = 'Subham';
// Name and name are two DIFFERENT variables
```

```javascript
let MyVar = 'Valid';
let myVar = 'Valid';
// MyVar and myVar are two DIFFERENT variables
```

---

## Reserved Keywords (Cannot Be Used as Identifiers)

Common JavaScript keywords that **cannot** be used as identifiers:

| `class` | `function` | `const` | `let` | `var` |
|---------|-----------|---------|-------|-------|
| `if` | `else` | `for` | `while` | `do` |
| `return` | `try` | `catch` | `finally` | `throw` |
| `new` | `this` | `typeof` | `instanceof` | `void` |
| `switch` | `case` | `break` | `continue` | `default` |
| `import` | `export` | `extends` | `super` | `yield` |
| `async` | `await` | `of` | `in` | `null` |

**Gotcha:** `Function` (capital F) **is valid** because JavaScript is case-sensitive and `Function` is not the same as the keyword `function`.

---

## Unicode Support

JavaScript identifiers can contain **Unicode characters** and **Unicode escape sequences**.

```javascript
let café = 'Valid';         // Unicode characters allowed
let \u0061pple = 'Valid';   // \u0061 = 'a' → 'apple'
let \u005f = 'Valid';       // \u005f = '_' → underscore
```

---

## Naming Conventions

| Convention | Pattern | Example | Used For |
|-----------|---------|---------|----------|
| **Camel Case** | `firstWordLower, thenCapitalized` | `userName`, `totalPrice`, `getUserInfo()` | Variables & Functions |
| **Pascal Case** | `Every First Letter Capitalized` | `UserProfile`, `ShoppingCart`, `Person()` | Classes & Constructors |
| **Snake Case** | `words_separated_by_underscores` | `user_profile`, `total_price` | General readability |
| **Screaming Snake Case** | `ALL_CAPS_WITH_UNDERSCORES` | `MAX_VALUE`, `API_KEY`, `DATABASE_URL` | Constants |
| **Hungarian Notation** | `prefixType + Name` | `strName`, `intAge`, `arrItems` | (Legacy / not recommended in modern JS) |

---

## Quick Reference

```
✅ ALLOWED to START with:    letter (a-z, A-Z), underscore (_), dollar sign ($), Unicode
✅ ALLOWED AFTER that:       letters, digits (0-9), underscore (_), dollar sign ($), Unicode
❌ CANNOT START with:        digit (0-9)
❌ CANNOT CONTAIN:           spaces, hyphens (-), special chars (@, #, !, etc.)
❌ CANNOT BE:                reserved keywords (class, function, const, let, etc.)

✅ Case-sensitive:           myVar and MyVar are DIFFERENT
✅ Unicode supported:        café, \u0061pple
```
