// Write a function, linkedListValues, that takes in the head of a linked list as an argument.
// The function should return an array containing all values of the nodes in the linked list.

// const linkedListValues = (head) => {
//   const values = [];
//   let current = head;
//   while (current !== null) {
//     values.push(current.val)
//     current = current.next;
//   }
//   return values;
// };

// recursion
const linkedListValues = (head) => {
    const values = [];
    fillValues(head, values);
    return values;
  };
  
  const fillValues = (head, values) => {
    if (head === null) return;
    values.push(head.val);
    fillValues(head.next, values);
  };