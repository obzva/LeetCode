/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const n = nums.length;
  let i = 0;
  let j = n - 1;
  const result = [-1, -1];

  //left boundary
  while (i < j) {
    let mid = Math.floor((i + j) / 2);
    if (nums[mid] < target) i = mid + 1;
    else j = mid;
  }
  if (nums[i] !== target) return result;
  else result[0] = i;

  //right boundary
  j = n - 1;
  while (i < j) {
    let mid = Math.floor((i + j) / 2) + 1;
    if (nums[mid] > target) j = mid - 1;
    else i = mid;
  }
  result[1] = j;
  return result;
};
