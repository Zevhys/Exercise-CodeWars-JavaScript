// (7 kyu) Alternate capitalization

// https://www.codewars.com/kata/59cfc000aeb2844d16000075

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s) {
  let arr = ["", ""];

  for (let i = 1; i <= s.length; i++) {
    if (i % 2 !== 0) {
      arr[0] += s[i - 1].toUpperCase();
    } else if (i % 2 === 0) {
      arr[0] += s[i - 1].toLowerCase();
    }

    if (i % 2 === 0) {
      arr[1] += s[i - 1].toUpperCase();
    } else if (i % 2 !== 0) {
      arr[1] += s[i - 1].toLowerCase();
    }
  }

  return arr;
}

console.log(capitalize("abcdef"));
