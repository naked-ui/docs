# Basics

## Core assumptions

### How & what we validate

- Primarily we validate regular form elements such as `<input>`, `<textarea>` and `<select>` and we leverage HTML-native `validity` for those
- If there is custom, non-native element (e.g. multiselect), we provide custom validation logic for it

### Validation styling

- By default we don't have any colors for `:valid` / `:invalid` form elements unless they are provided
- Most basic way to provide colors for validation is via `colorValid` / `colorInvalid` props which produce `--color-valid` and `--color-invalid` CSS variables that are used in the component styles. These colors are global for the component scope and they are used for `color` for Validation Alerts message text as well as `border-color` for main form element
- Besides colors set via props above, we also can set custom `color` for each of the Validation Alerts messages directly so that we can have different colors for each of the messages separately

### Types of validity

We have these types of validity available:

- `typeMismatch` (only for `<input>` elements with `type="url"` and `type="email"`)
- `patternMismatch` (for `pattern` attribute)
- `badInput` 
- `stepMismatch` (for `step` attribute)
- `rangeUnderflow` (for `min` attribute)
- `rangeOverflow` (for `max` attribute)
- `tooShort` (for `minlength` attribute)
- `tooLong` (for `maxlength` attribute)
- `default` (fallback if any of the types is not active and we have custom invalid state)

Each of the types of validity has their default validation message text. It can be always overwritten by providing the custom Objects in Arrray to `customMessages` prop.

For example:

```js
customMessages: {
  typeMismatch: {
    text: 'Custom alert for type mismatch',
    color: '#00dd22"
  },
  patternMismatch: {
    text: 'Custom alert for pattern mismatch',
    color: '#1122ee"
  }
}
```
