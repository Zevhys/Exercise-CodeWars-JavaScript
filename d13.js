// (6 kyu) Build Tower

// Description:
// Build Tower

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]

// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

function towerBuilder(nFloors) {
  let star = [];
  let pad = 2 * nFloors - 1;

  for (var i = 1; i <= nFloors; i++) {
    star.push(
      "*"
        .repeat(2 * i - 1)
        .padStart(Math.ceil(pad / 2 + i - 1), " ")
        .padEnd(pad, " ")
    );
  }
  return star;
}
