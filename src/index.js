"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**************************************************************************
 * IMPORTS
 ***************************************************************************/

var data = {
  languages : require("../data/languages.json")
};

/**************************************************************************
 * FUNCTIONS
 ***************************************************************************/

/**
 * Checks whether a language is supported or not
 * @public
 * @param  {string}  code
 * @return {boolean} Whether the language is supported or not
 */
var isLanguageSupported = function(code) {
  if (!code) {
    throw new Error("Missing language code");
  }

  if (data.languages === undefined || data.languages === {}) {
    return false;
  }

  var _language = data.languages.find((language) => {
    return language.language === code.toLowerCase();
  });

  return !!_language;
};

/**************************************************************************
 * EXPORTS
 ***************************************************************************/

exports.isLanguageSupported = isLanguageSupported;

exports.languages           = data.languages;

exports.default             = {
  isLanguageSupported : isLanguageSupported,

  dataLanguages       : data.languages
};
