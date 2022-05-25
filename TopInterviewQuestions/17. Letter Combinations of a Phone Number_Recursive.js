/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits === "") return [];
  const obj = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  const result = [];
  const recursiveFn = (i, s) => {
    if (i === digits.length) {
      result.push(s);
      return;
    }
    for (let j = 0; j < obj[digits[i]].length; j++) {
      recursiveFn(i + 1, s + obj[digits[i]][j]);
    }
  };
  recursiveFn(0, "");
  return result;
};

//testCase
let digits = "23";
console.log(letterCombinations(digits));
