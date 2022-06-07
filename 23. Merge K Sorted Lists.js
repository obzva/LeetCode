/*
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? 0 : val;
  }
}

const listNodeMaker = (list) => {
    let res = new ListNode();
  
    if (list.length === 0) {
      return res;
    }
  
    let resCurrent = res;
    for (let i = 0; i < list.length; i++) {
      resCurrent.next = new ListNode(list[i]);
      resCurrent = resCurrent.next;
    }
  
    return res.next;
  };
*/

var mergeKLists = function (lists) {
  const N = lists.length;
  const res = new ListNode(null, null);
  if (N === 0) return res.next;

  let maxListLength = 0;
  for (let i = 0; i < N; i++) {
    let listLength = 0;
    let currNode = lists[i];
    if (!currNode) continue;
    while (true) {
      if (currNode === null) break;
      listLength++;
      currNode = currNode.next;
    }
    maxListLength = maxListLength >= listLength ? maxListLength : listLength;
  }

  if (maxListLength === 0) return res.next;

  let values = [];

  for (let i = 0; i < maxListLength; i++) {
    for (let j = 0; j < N; j++) {
      if (lists[j] !== null) {
        values.push(lists[j].val);
        lists[j] = lists[j].next;
      }
    }
  }
  values.sort((a, b) => a - b);

  let resCurrent = res;

  for (let i = 0; i < values.length; i++) {
    resCurrent.next = new ListNode(values[i]);
    resCurrent = resCurrent.next;
  }

  return res.next;
};
