/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let i = 1;
  let say = "1";
  while (i < n) {
    let idx = 0;
    let tmp = say[0];
    let count = 1;
    let newSay = "";
    while (idx < say.length) {
      idx++;
      if (say[idx] === tmp) {
        count++;
        if (idx === say.length - 1) {
          newSay += String(count) + tmp;
          break;
        }
      } else {
        newSay += String(count) + tmp;
        tmp = say[idx];
        count = 1;
      }
    }
    i++;
    say = newSay;
  }
  return say;
};

