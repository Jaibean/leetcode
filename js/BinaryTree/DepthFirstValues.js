
// depth first values of a tree


// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const depthFirstValues = (root) => {
    if (root === null) return [];
    const result = [];
    const stack = [root];
    while(stack.length > 0){
      const current = stack.pop();
      result.push(current.val)
      
      // this will iterate through left side first since its at top of stack
      if (current.right) stack.push(current.right); 
      if (current.left) stack.push(current.left);
      
    }
    return result;
  };

  //recursive
  const depthFirstValues = (root) => {
    if (root === null) return [];
    const leftValues = depthFirstValues(root.left);
    //console.log(leftValues);
    const rightValues = depthFirstValues(root.right);
    //console.log(rightValues);
    return [root.val, ...leftValues, ...rightValues];
  };
  