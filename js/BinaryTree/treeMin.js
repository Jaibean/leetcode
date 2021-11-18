// tree min


// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
// iterative depth first
// const treeMinValue = (root) => {
//   // if (root === null) return undefined;
//   const stack = [root];
//   let min = Infinity;
//   while (stack.length > 0) {
//     const current = stack.pop()
//     if (current.val < min) min = current.val;
    
//     if (current.left !== null) stack.push(current.left)
//     if (current.right !== null) stack.push(current.right)
//   }
//   return min;
// };


const treeMinValue = (root) => {
    if ( root === null) return Infinity;
    const leftMin = treeMinValue(root.left);
    const rightMin = treeMinValue(root.right);
    return Math.min(root.val, leftMin, rightMin);
  };

  
