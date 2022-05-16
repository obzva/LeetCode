/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
class Heap {
  constructor() {
    this.heap = [null];
  }

  heapPush(value) {
    this.heap.push(value);
    let currIdx = this.heap.length - 1;
    let parIdx = (currIdx / 2) >> 0;
    while (currIdx > 1 && this.heap[parIdx] > this.heap[currIdx]) {
      [this.heap[parIdx], this.heap[currIdx]] = [
        this.heap[currIdx],
        this.heap[parIdx],
      ];
      currIdx = parIdx;
      parIdx = (currIdx / 2) >> 0;
    }
  }

  heapPop() {
    const min = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if (!this.heap[leftIdx]) return min;
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx] < this.heap[curIdx]) {
        [this.heap[leftIdx], this.heap[curIdx]] = [
          this.heap[curIdx],
          this.heap[leftIdx],
        ];
      }
      return min;
    }

    while (
      this.heap[leftIdx] < this.heap[curIdx] ||
      this.heap[rightIdx] < this.heap[curIdx]
    ) {
      const minIdx =
        this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
      [this.heap[minIdx], this.heap[curIdx]] = [
        this.heap[curIdx],
        this.heap[minIdx],
      ];
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }
    return min;
  }
}

var findMedianSortedArrays = function (nums1, nums2) {
  const n = nums1.length;
  const m = nums2.length;
  const nums = nums1.concat(nums2);
  const numsHeap = new Heap();
  for (let i = 0; i < nums.length; i++) {
    numsHeap.heapPush(nums[i]);
  }
  if ((n + m) % 2 === 0) {
    for (let i = 1; i < (n + m) / 2; i++) {
      numsHeap.heapPop();
    }
    const m1 = numsHeap.heapPop();
    const m2 = numsHeap.heapPop();
    return (m1 + m2) / 2;
  } else {
    for (let i = 0; i < Math.floor((n + m) / 2); i++) {
      numsHeap.heapPop();
    }
    const M = numsHeap.heapPop();
    return M;
  }
};

//testCase
const n1 = [1, 3];
const n2 = [2, 4];
console.log(findMedianSortedArrays(n1, n2));
