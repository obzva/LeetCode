/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const array = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        const str = "(" + board[i][j] + ")";
        if (!array.includes(String(i) + str)) array.push(String(i) + str);
        else return false;
        if (!array.includes(str + String(j))) array.push(str + String(j));
        else return false;
        if (
          !array.includes(
            String(Math.floor(i / 3)) + str + String(Math.floor(j / 3))
          )
        )
          array.push(
            String(Math.floor(i / 3)) + str + String(Math.floor(j / 3))
          );
        else return false;
      }
    }
  }
  return true;
};

const board = [
  [".", ".", "4", ".", ".", ".", "6", "3", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ["5", ".", ".", ".", ".", ".", ".", "9", "."],
  [".", ".", ".", "5", "6", ".", ".", ".", "."],
  ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
  [".", ".", ".", "7", ".", ".", ".", ".", "."],
  [".", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
];

isValidSudoku(board);
