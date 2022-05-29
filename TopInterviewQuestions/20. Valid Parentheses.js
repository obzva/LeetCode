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
