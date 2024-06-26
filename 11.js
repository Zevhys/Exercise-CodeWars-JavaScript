// (8 kyu) Grasshopper - Grade book

// https://www.codewars.com/kata/55cbd4ba903825f7970000f5

// Description:

// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score 	  Letter Grade
// 90 <= score <= 100 	  'A'
// 80 <= score < 90 	    'B'
// 70 <= score < 80 	    'C'
// 60 <= score < 70 	    'D'
// 0 <= score < 60 	    'F'

// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade(s1, s2, s3) {
  let score = (s1 + s2 + s3) / 3;

  const isInbetween = (a, b) => {
    return score < a && score >= b;
  };

  if (score <= 100 && score >= 90) {
    return "A";
  } else if (isInbetween(90, 80)) {
    return "B";
  } else if (isInbetween(80, 70)) {
    return "C";
  } else if (isInbetween(70, 60)) {
    return "D";
  }

  return "F";
}
