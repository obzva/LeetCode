/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const n = height.length;

  let maxLeft = height[0];
  const leftArray = [maxLeft];
  for (let i = 1; i < n; i++) {
    maxLeft = Math.max(maxLeft, height[i]);
    leftArray.push(maxLeft);
  }

  let maxRight = height[n - 1];
  const tmpRightArray = [maxRight];
  for (let i = n - 2; i >= 0; i--) {
    maxRight = Math.max(maxRight, height[i]);
    tmpRightArray.push(maxRight); //unshift is much more expensive than push + reverse
  }
  const rightArray = tmpRightArray.reverse();

  let result = 0;
  for (let i = 0; i < n; i++) {
    result += Math.min(leftArray[i], rightArray[i]) - height[i];
  }

  return result;
};

const height = [4, 2, 0, 3, 2, 5];
trap(height);
