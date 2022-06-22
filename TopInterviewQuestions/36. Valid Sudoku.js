/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = [...board];
  /*console.log("rows");
  console.log(rows);*/

  const columns = Array.from({ length: 9 }, () => []);
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      columns[i].push(board[j][i]);
    }
  }
  /*console.log("columns");
  console.log(columns);*/

  const boxes = Array.from({ length: 9 }, () => []);
  for (let i = 0; i < 9; i++) {
    const colStart = (i % 3) * 3;
    const rowStart = Math.floor(i / 3) * 3;
    /*console.log("colStart");
    console.log(colStart);
    console.log("rowStart");
    console.log(rowStart);*/
    for (let j = rowStart; j < rowStart + 3; j++) {
      for (let k = colStart; k < colStart + 3; k++) {
        boxes[i].push(board[j][k]);
      }
    }
  }
  /*console.log("boxes");
  console.log(boxes);*/

  const check = (array) => {
    const nums = {};
    for (let i = 1; i < 10; i++) {
      nums[String(i)] = true;
    }

    for (let i = 0; i < 9; i++) {
      if (array[i] === ".") continue;
      else if (!nums[array[i]]) return false;
      else nums[array[i]] = false;
    }
    return true;
  };

  for (let i = 0; i < 9; i++) {
    if (!check(columns[i]) || !check(rows[i]) || !check(boxes[i])) return false;
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
