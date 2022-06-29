const permute = (nums) => {
  const res = [];
  const N = nums.length;
  if (N === 1) return nums.map((e) => [e]);
  for (let i = 0; i < nums.length; i++) {
    const rest = [...nums.slice(0, i), ...nums.slice(i + 1)];
    const permutations = permute(rest);
    const attach = permutations.map((permutation) => [nums[i], ...permutation]);
    res.push(...attach);
  }
  return res;
};
