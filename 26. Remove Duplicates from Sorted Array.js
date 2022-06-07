var removeDuplicates = function (nums) {
  if (nums.length < 2) return nums;

  let i = 1;
  while (i < nums.length) {
    if (i === 1 && nums[i - 1] === nums[i]) {
      nums.shift();
    } else if (nums[i - 1] !== nums[i]) {
      i++;
    } else if (i > 1 && nums[i - 1] === nums[i]) {
      nums.splice(i - 1, 1);
    }
  }
  return nums;
};

const nums = [1, 1, 2];
removeDuplicates(nums);
