//tree sum


class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// recursion
// const treeSum = (root) => {
//     if ( root === null) return 0;
//     return root.val + treeSum(root.left) + treeSum(root.right);
//   };
  
  //iterative
  const treeSum = (root) => {
    if ( root === null) return 0;
    let totalSum = 0;
    const queue = [root];
    
    while (queue.length > 0){
      const current = queue.shift();
      console.log(current);
      totalSum += current.val;
      if (current.left !== null) queue.push(current.left);
      if (current.left !== null) queue.push(current.left);
      
    }
    return totalSum;
  };

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

treeSum(a); // -> 21