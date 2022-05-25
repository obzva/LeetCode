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
  for (let i = 0; i < obj[digits[0]].length; i++) {
    if (digits.length === 1) result.push(obj[digits[0]][i]);
    if (digits.length > 1) {
      for (let j = 0; j < obj[digits[1]].length; j++) {
        if (digits.length === 2)
          result.push(obj[digits[0]][i] + obj[digits[1]][j]);
        if (digits.length > 2) {
          for (let k = 0; k < obj[digits[2]].length; k++) {
            if (digits.length === 3)
              result.push(
                obj[digits[0]][i] + obj[digits[1]][j] + obj[digits[2]][k]
              );
            if (digits.length > 3) {
              for (let l = 0; l < obj[digits[3]].length; l++) {
                if (digits.length === 4)
                  result.push(
                    obj[digits[0]][i] +
                      obj[digits[1]][j] +
                      obj[digits[2]][k] +
                      obj[digits[3]][l]
                  );
              }
            }
          }
        }
      }
    }
  }
  return result;
};

//testCase
let digits = "23";
letterCombinations(digits);
