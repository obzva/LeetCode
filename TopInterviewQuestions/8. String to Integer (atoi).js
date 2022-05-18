/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let i = 0;
  let isPositive = true;
  let result = 0;

  //1
  while (s[i] === " ") i++;

  //2
  if (s[i] === "-") {
    isPositive = false;
    i++;
  } else if (s[i] === "+") i++;

  //3
  for (let j = i; j < s.length; j++) {
    if (s.charCodeAt(j) >= 48 && s.charCodeAt(j) <= 57) {
      result *= 10;
      result += s.charCodeAt(j) - 48;
    } else break;
  }

  //4
  result = isPositive ? result : -result;

  //5
  if (result < -(2 ** 31)) result = -(2 ** 31);
  else if (result > 2 ** 31 - 1) result = 2 ** 31 - 1;

  //6
  return result;
};
