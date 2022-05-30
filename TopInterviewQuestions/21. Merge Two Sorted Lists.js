function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const result = new ListNode();
  let resCurrent = result;
  let list1Current = list1;
  let list2Current = list2;
  /*
  console.log("---before loop---");
  console.log(list1Current);
  console.log(list2Current);
  console.log(resCurrent);
  console.log(result);
  */
  //let i = 0;
  while (list1Current || list2Current) {
    //i++;
    if (!list1Current || !list2Current) {
      if (!list1Current) {
        resCurrent.next = { val: list2Current.val, next: null };
        resCurrent = resCurrent.next;
        list2Current = list2Current.next;
      } else {
        resCurrent.next = { val: list1Current.val, next: null };
        resCurrent = resCurrent.next;
        list1Current = list1Current.next;
      }
    } else {
      if (list1Current.val >= list2Current.val) {
        resCurrent.next = { val: list2Current.val, next: null };
        resCurrent = resCurrent.next;
        list2Current = list2Current.next;
      } else if (list1Current.val < list2Current.val) {
        resCurrent.next = { val: list1Current.val, next: null };
        resCurrent = resCurrent.next;
        list1Current = list1Current.next;
      }
    }
    /*
    console.log(`---loop ${i}---`);
    console.log(list1Current);
    console.log(list2Current);
    console.log(resCurrent);
    console.log(result);
    */
  }
  /*
  console.log("---after loop---");
  console.log(list1Current);
  console.log(list2Current);
  console.log(resCurrent);
  console.log(result);
  */
  return result.next;
};

//testCase
const list1 = { val: 1, next: { val: 2, next: { val: 4, next: null } } };
const list2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };
mergeTwoLists(list1, list2);
