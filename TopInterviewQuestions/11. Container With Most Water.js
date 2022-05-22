/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  const N = height.length;
  let [head, tail] = [0, N - 1];
  let result = 0;
  while (tail - head > 0) {
    let area = (tail - head) * Math.min(height[head], height[tail]);
    result = Math.max(result, area);
    if (height[head] > height[tail]) {
        tail--;
    }
    else head++;
  }
  return result;
};
