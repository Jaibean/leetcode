// Write a function, levelAverages, that takes in the root of a binary tree that contains number values.
// The function should return an array containing the average value of each level.


class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  const levelAverages = (root) => {
    const levels = [];
    const avgs = [];
    fillLevels(root, levels, 0)
    for (let level of levels){
      avg(level);
      avgs.push(avg(level));
    }
    return avgs;
  };
  
  const avg = (array) => {
    let sum = 0;
    for (let num of array){
      sum += num;
    }
    return sum / array.length;
  };
  
  const fillLevels = (root, levels, levelNum) => {
    if (root === null) return;
    if (levels.length === levelNum){
      levels.push([ root.val ]);
    } else {
      levels[levelNum].push(root.val);
    }
    
    fillLevels(root.left, levels, levelNum +1);
    fillLevels(root.right, levels, levelNum + 1);
  };