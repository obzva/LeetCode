/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  //adding space
  s = " " + s;
  p = " " + p;

  const sLength = s.length;
  const pLength = p.length;

  const T = [];

  //first column
  for (let i = 0; i <= sLength; i++) {
    if (i === 0) T.push([true]);
    else T.push([false]);
  }

  //first row
  for (let i = 1; i <= pLength; i++) {
    if (p[i] === "*") {
      T[0][i] = T[0][i - 2];
    } else T[0][i] = false;
  }

  for (let i = 1; i <= sLength; i++) {
    for (let j = 1; j <= pLength; j++) {
      if (s[i] === p[j] || p[j] === ".") T[i][j] = T[i - 1][j - 1];
      else if (p[j] === "*") {
        if (T[i][j - 2]) T[i][j] = T[i][j - 2];
        else {
          if (s[i] === p[j - 1] || p[j - 1] === ".") T[i][j] = T[i - 1][j];
          else T[i][j] = false;
        }
      } else T[i][j] = false;
    }
  }
  //console.log(T);
  return T[sLength][pLength];
};

//testCase
const s = "mississippi";
const p = "mis*is*p*.";
isMatch(s, p);
