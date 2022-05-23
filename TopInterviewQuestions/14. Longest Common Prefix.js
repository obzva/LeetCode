/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = "";
  const n = strs.length;
  const N = Math.min(...strs.map((str) => str.length));
  if (N === 0) return result;
  let i = 0;
  while (i < N) {
    let check = true;
    const prefix = strs[0][i];
    for (let j = 1; j < n; j++) {
      if (strs[j][i] !== prefix) check = false;
    }
    if (check) {
      result += prefix;
      i++;
    } else {
      break;
    }
  }
  return result;
};
