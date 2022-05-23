/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let result = 0;
  let i = 0;
  while (i < s.length) {
    //in case of 'I'
    if (s[i] === "I") {
      if (s[i + 1] === "V") {
        result += 4;
        i += 2;
      } else if (s[i + 1] === "X") {
        result += 9;
        i += 2;
      } else {
        result += 1;
        i += 1;
      }
    }

    //in case of 'V'
    if (s[i] === "V") {
      result += 5;
      i += 1;
    }

    //in case of 'X'
    if (s[i] === "X") {
      if (s[i + 1] === "L") {
        result += 40;
        i += 2;
      } else if (s[i + 1] === "C") {
        result += 90;
        i += 2;
      } else {
        result += 10;
        i += 1;
      }
    }

    //in case of 'L'
    if (s[i] === "L") {
      result += 50;
      i += 1;
    }

    //in case of 'C'
    if (s[i] === "C") {
      if (s[i + 1] === "D") {
        result += 400;
        i += 2;
      } else if (s[i + 1] === "M") {
        result += 900;
        i += 2;
      } else {
        result += 100;
        i += 1;
      }
    }

    //in case of 'D'
    if (s[i] === "D") {
      result += 500;
      i += 1;
    }

    //in case of 'M'
    if (s[i] === "M") {
      result += 1000;
      i += 1;
    }
  }
  return result;
};
