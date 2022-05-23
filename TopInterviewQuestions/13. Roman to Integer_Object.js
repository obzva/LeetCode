/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  s = s
    .replace("IV", "IIII")
    .replace("IX", "VIIII")
    .replace("XL", "XXXX")
    .replace("XC", "LXXXX")
    .replace("CD", "CCCC")
    .replace("CM", "DCCCC");
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    result += romans[s[i]];
  }
  /*for (const char of s) {
          result += romans[char]
      }*/
  return result;
};
