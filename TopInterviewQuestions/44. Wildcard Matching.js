const isMatch = (str, pattern) => {
  let [s, p, match, starIdx] = [0, 0, 0, -1];
  while (s < str.length) {
    //advance both pointers
    if (p < pattern.length && (pattern[p] === "?" || str[s] === pattern[p])) {
      s++;
      p++;
    }
    //* found, only advance pattern pointer
    else if (p < pattern.length && pattern[p] === "*") {
      starIdx = p;
      match = s;
      p++;
    }
    //last pattern pointer was *, advance string pointer
    else if (starIdx !== -1) {
      p = starIdx + 1;
      match++;
      s = match;
    }
    //current pattern pointer is not *, last pattern pointer was not *
    //characters do not match
    else return false;
  }
  //check for remaining characters in pattern
  while (p < pattern.length && pattern[p] === "*") {
    p++;
  }
  return p === pattern.length;
};
