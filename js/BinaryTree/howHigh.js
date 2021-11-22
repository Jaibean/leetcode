// Write a function, howHigh, that takes in the root of a binary tree.
// The function should return a number representing the height of the tree.
// The height of a binary tree is defined as the maximal number of edges from the root node to any leaf node.
// If the tree is empty, return -1.

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const howHigh = (node) => {
    if (node === null) return -1;
    const leftTreeHeight = howHigh(node.left);
    const rightTreeHeight = howHigh(node.right);
    return 1 + Math.max(leftTreeHeight, rightTreeHeight);
  };

  