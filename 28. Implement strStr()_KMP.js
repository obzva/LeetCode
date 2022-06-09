/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === "") return 0;
  if (haystack.length < needle.length) return -1;

  const makingPi = (str) => {
    const pi = new Array(str.length);
    pi.fill(0);

    let j = 0;
    for (let i = 1; i < str.length; i++) {
      console.log(pi);
      while (j > 0 && str[i] !== str[j]) {
        j = pi[j - 1];
      }
      if (str[i] === str[j]) {
        pi[i] = ++j;
      }
    }
    return pi;
  };

  const pi = makingPi(needle);
  let j = 0;
  for (let i = 0; i < haystack.length; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = pi[j - 1];
    }
    if (haystack[i] === needle[j]) {
      j++;
    }
    if (j === needle.length) return i - j + 1;
  }
  return -1;
};

const a = "mississippi";
const b = "issip";
console.log(strStr(a, b));
