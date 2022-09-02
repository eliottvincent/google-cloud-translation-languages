"use strict";

/**************************************************************************
 * IMPORTS
 ***************************************************************************/

var src = require("./../src/");

/**************************************************************************
 * CONFIGURATION
 ***************************************************************************/

var DEFAULT_LANGUAGE = "en";
var WRONG_LANGUAGE = "azerty";

/**************************************************************************
 * TESTS
 ***************************************************************************/

module.exports = {
  testData: function(test) {
    test.expect(2);

    var actual = src.languages;
    var message = "languages should not be empty."
    test.ok(actual, message);
    test.equal(Object.keys(actual).length > 0, true, message);

    test.done();
  },

  testIsLanguageSupported: function(test) {
    test.expect(5);

    var actual = src.isLanguageSupported;
    var message = "isLanguageSupported should be defined."
    test.ok(actual, message);
    test.equal(typeof actual, "function", message);

    var actual = function() { src.isLanguageSupported() };
    test.throws(actual, Error, "isLanguageSupported with no language code should throw an error.");

    var actual = src.isLanguageSupported(DEFAULT_LANGUAGE);
    test.equals(actual, true, "default usage should work.");

    var actual = src.isLanguageSupported(WRONG_LANGUAGE);
    test.equals(actual, false, "usage with wrong language code shouldn't work.");

    test.done();
  }
};
