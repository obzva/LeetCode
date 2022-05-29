const isValid = (s) => {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const chr = s.charAt(i);
    switch (chr) {
      case "(":
        stack.push(")");
        break;
      case "{":
        stack.push("}");
        break;
      case "[":
        stack.push("]");
        break;
      default:
        const popped = stack.pop();
        if (chr !== popped) {
          return false;
        }
    }
  }
  return stack.length === 0;
};

//testCase
const s = "()";
isValid(s);
