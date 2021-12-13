// Write a function, isUnivalueList, that takes in the head of a linked list as an argument.
// The function should return a boolean indicating whether or not the linked list contains exactly one unique value.
// You may assume that the input list is non-empty.

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }


const isUnivalueList = (head) => {
    let current = head;
    while (current !==null) {
    if (current.val !== head.val) return false
      current = current.next;
    }
  return true;
  };

// recursive
const isUnivalueList = (head, prev = null) => {
    if (head == null) return true;
    if (prev !== null && head.val !== prev) return false;
    return isUnivalueList(head.next, head.val);
  };
  