const generateParentheses = (n) => {
  const result = [];
  const generator = (i, char, used) => {
    if (i < n) {
      for (let j = 0; j <= i - used; j++) {
        let newChar = char + "(";
        if (j !== 0) newChar += ")".repeat(j);
        generator(i + 1, newChar, used + j);
      }
    } else {
      result.push(char + "(" + ")".repeat(n - used));
    }
  };
  generator(1, "", 0);
  return result;
};

const n = 1;
generateParentheses(n);
