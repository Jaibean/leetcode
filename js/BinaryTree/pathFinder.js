// Write a function, pathFinder, that takes in the root of a binary tree and a target value.
// The function should return an array representing a path to the target value.
// If the target value is not found in the tree, then return null.
// You may assume that the tree contains unique values.

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const pathFinder = (root, target) => {
    if (root === null) return null;
    if (root.val === target) return [root.val];
    
    const leftPath = pathFinder(root.left, target);
    if (leftPath !== null) return [ root.val, ...leftPath];
    
    const rightPath = pathFinder(root.right, target);
    if (rightPath !== null) return [ root.val, ...rightPath];
  
    return null;
  };
  
  
  