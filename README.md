# Google Cloud Translation Languages

[![Build Status](https://github.com/eliottvincent/google-cloud-translation-languages/actions/workflows/action.yml/badge.svg)](https://github.com/eliottvincent/google-cloud-translation-languages/actions) [![NPM](https://img.shields.io/npm/v/google-cloud-translation-languages.svg)](https://www.npmjs.com/package/google-cloud-translation-languages) [![Downloads](https://img.shields.io/npm/dt/google-cloud-translation-languages.svg)](https://www.npmjs.com/package/google-cloud-translation-languages)

Maps the languages currently supported by operations of the Google Cloud Translation API. The data **auto-updates every 3 days**, if needed.


## Usage

```js
const { isLanguageSupported } = require("google-cloud-translation-languages");

console.log(isLanguageSupported("en"));
// true
```


## API

### Access to supported languages

The raw sets of supported languages, as returned by Google Cloud Translation API, are made accessible:

```js
const { languages } = require("google-cloud-translation-languages");

console.log(languages);
// [{language: 'hu', name: 'Hungarian'}, {…}, {…}, …]

// OR
const gct = require("google-cloud-translation-languages");

console.log(gct.dataLanguages);
// [{language: 'hu', name: 'Hungarian'}, {…}, {…}, …]
```

### Check if a language is supported
`isLanguageSupported(code)` returns whether a language is supported or not:
* `code` must be a BCP 47 language tag, as per [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1)

```js
const { isLanguageSupported } = require("google-cloud-translation-languages");

console.log(isLanguageSupported("en"));
// true

console.log(isLanguageSupported("hu"));
// true
```


## License

google-cloud-translation-languages is released under the MIT License. See the bundled LICENSE file for details.
