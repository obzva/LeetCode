const trap = (height) => {
  const n = height.length;
  let [left, right, res, maxLeft, maxRight] = [0, n - 1, 0, 0, 0];
  while (left <= right) {
    if (height[left] <= height[right]) {
      if (height[left] >= maxLeft) maxLeft = height[left];
      else res += maxLeft - height[left];
      left++;
    } else {
      if (height[right] >= maxRight) maxRight = height[right];
      else res += maxRight - height[right];
      right--;
    }
  }
  return res;
};
