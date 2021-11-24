// Write a function, bottomRightValue, that takes in the root of a binary tree.
// The function should return the right-most value in the bottom-most level of the tree.

// You may assume that the input tree is non-empty.


// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//breadth first
const bottomRightValue = (root) => {
    const queue = [root];
    let current = null
    while (queue.length > 0){
      current = queue.shift()
      
      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
       //if (queue.length === 0) return current.val;
    }
    
    return current.val;
  };