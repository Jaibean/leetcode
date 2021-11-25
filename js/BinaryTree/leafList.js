// Write a function, leafList, that takes in the root of a binary tree and returns an array 
// containing the values of all leaf nodes in left-to-right order.

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//iterative
const leafList = (root) => {
    if ( root === null) return [];
    const stack = [root ];
    const leaves = [];
    while (stack.length > 0){
      const current = stack.pop();
      if (current.left === null && current.right === null) leaves.push(current.val);
      if (current.right !== null) stack.push(current.right)
      if (current.left !== null) stack.push(current.left)
    }
    return leaves;
  };
  
  //recursive
  const leafList = (root) => {
    const leaves = [];
    fillLeaves(root, leaves);
    return leaves;
  };
  
  const fillLeaves = (root, leaves) => {
    if (root === null) return;
    if (root.left === null && root.right === null) leaves.push(root.val);
    fillLeaves(root.left, leaves);
    fillLeaves(root.right, leaves);
  };