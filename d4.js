// (7 kyu) Vowel Count

// Description:

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let a = 0;
  str.split("").forEach((chr) => {
    "aeiou".split("").forEach((vowel) => {
      if (chr === vowel) {
        a += 1;
      }
    });
  });
  return a;
}
