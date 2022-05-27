/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function (head, n) {
    let headLength = 1;
    let lengthChecker = head;
    while (lengthChecker.next !== null) {
        lengthChecker = lengthChecker.next;
        headLength++;
    }
    if (n === headLength) {
        return head.next;
    }
    let i = 1;
    let current = head;
    while (i < headLength - n) {
        current = current.next;
        i++;
    }
    if (n === 1) {
        current.next = null;
        return head;
    }
    current.next = current.next.next;
    return head;
};