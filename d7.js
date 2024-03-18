// (6 kyu) CamelCase Method

// Description:

// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):

// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"

String.prototype.camelCase = function () {
  return this.toString() === ""
    ? ""
    : this.toString()
        .split(" ")
        .map((str) => {
          return str.toUpperCase()[0] + str.slice(1);
        })
        .join("");
};
