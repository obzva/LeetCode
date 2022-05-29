/**
 * @param {string} s
 * @return {boolean}
 */
/*var isValid = function (s) {
  if (s[0] === ")" || s[0] === "}" || s[0] === "]") return false;
  s = s.split("");
  const obj = { "(": 1, ")": -1, "{": 2, "}": -2, "[": 3, "]": -3 };
  let result = false;
  const checker = (s, i) => {
    if (s.length === 0) {
      result = true;
      return;
    }
    if (obj[s[i]] < 0) {
      if (obj[s[i]] + obj[s[i - 1]] === 0) {
        s.splice(i - 1, 2);
        checker(s, i - 1);
      } else {
        return;
      }
    } else {
      i++;
      checker(s, i);
    }
  };
  checker(s, 0);
  console.log(result);
}; */

const isValid = (s) => {
  if (s.length === 1 || s[0] === ")" || s[0] === "}" || s[0] === "]")
    return false;
  s = s.split("");
  const obj = { "(": 1, ")": -1, "{": 2, "}": -2, "[": 3, "]": -3 };
  let i = 0;
  while (s.length > 0) {
    if (obj[s[i]] > 0) {
      if (i === s.length - 1) return false;
      else i++;
    } else {
      if (obj[s[i - 1]] + obj[s[i]] === 0) {
        s.splice(i - 1, 2);
        i--;
      } else return false;
    }
  }
  return true;
};

const s = "({{})";
console.log(isValid(s));
