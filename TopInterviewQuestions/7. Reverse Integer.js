/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const numString = String(x);
  const reversedNum =
    numString[0] === "-"
      ? -Number(numString.slice(1).split("").reverse().join(""))
      : Number(numString.split("").reverse().join(""));
  if (reversedNum >= -(2 ** 31) && reversedNum <= 2 ** 31 - 1)
    return reversedNum;
  else return 0;
};
