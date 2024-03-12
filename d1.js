// Write a function that will check if two given characters are the same case.

// 1. If either of the characters is not a letter, return -1
// 2. If both characters are the same case, return 1
// 3. If both characters are letters, but not the same case, return 0

// Examples
// 1. 'a' and 'g' returns 1
// 2. 'A' and 'C' returns 1
// 3. 'b' and 'G' returns 0
// 4. 'B' and 'g' returns 0
// 5. '0' and '?' returns -1

function sameCase(char1, char2) {
  if (!isLetter(char1) || !isLetter(char2)) {
    return -1;
  }

  if ((char1.toUpperCase() === char1 && char2.toUpperCase() === char2) || (char1.toLowerCase() === char1 && char2.toLowerCase() === char2)) {
    return 1;
  } else {
    return 0;
  }
}

function isLetter(char) {
  return /^[a-zA-Z]$/.test(char);
}
