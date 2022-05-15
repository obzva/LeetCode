var lengthOfLongestSubstring = function (s) {
  const N = s.length;
  let result = 0;
  for (let i = 0; i < N; i++) {
    let subString = "";
    for (let j = i; j < N; j++) {
      if (!subString.includes(s[j])) subString += s[j];
      else break;
    }
    result = Math.max(result, subString.length);
  }
  console.log(result);
};

//testCase
const s = "dvdf";
lengthOfLongestSubstring(s);
