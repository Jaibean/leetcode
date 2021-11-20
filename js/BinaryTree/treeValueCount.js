// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeValueCount = (root, target) => {
    if (root === null) return 0;
    const match = root.val === target ? 1 : 0;
    return match + treeValueCount(root.left, target) + treeValueCount(root.right, target);
  };
  
  
  //depth first
  // const treeValueCount = (root, target) => {
  //   if (root === null) return 0;
    
  //   let count = 0;
  //   const stack = [ root ];
  //   while (stack.length > 0) {
  //     const current = stack.pop();
  //     if (current.val === target) count += 1;
      
  //     if (current.left) stack.push(current.left);
  //     if (current.right) stack.push(current.right);
  //   }
    
  //   return count;
  // };
  