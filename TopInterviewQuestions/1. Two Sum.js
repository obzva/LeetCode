/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

/*var twoSum = function (nums, target) {
  const idxMap = {};
  for (let i = 0; i < nums.length; i++) {
    const currIdx = i;
    const req = target - nums[currIdx];
    if (!Object.keys(idxMap).includes(String(req))) {
      idxMap[nums[currIdx]] = currIdx;
    } else {
      return [currIdx, idxMap[String(req)]];
    }
  }
};*/

//testCase
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));
