/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let isNegative = false;
  if (dividend > 0 !== divisor > 0) isNegative = true;
  let result = 0;
  let count = 1;
  let base = divisor;
  if (dividend < 0) dividend = -dividend;
  if (divisor < 0) divisor = -divisor;
  while (divisor <= dividend) {
      count = 1;
      base = divisor;
      while (base <= dividend >> 1) {
          base = base << 1;
          count = count << 1;
      }
    result += count;
    dividend -= base;
  }
  if (isNegative) result = -result;
  if (result > 2147483647) return 2147483647;
  else if (result < -2147483648) return -2147483648;
  return result;
};

const dividend = -2147483648;
const divisor = 7;
console.log(divisor << 1);
