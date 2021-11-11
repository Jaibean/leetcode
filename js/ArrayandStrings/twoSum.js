// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.


//using hashmap

const pairSum = (numbers, targetSum) => {
    let set = {};
    for(let i = 0; i < numbers.length; i ++){
      const num = numbers[i];
      const comp = targetSum - num;
      if (comp in set) return [i, set[comp]];
      set[num] = i;
    }
    console.log(set);
  };
  
  console.log(pairSum([3, 2, 5, 4, 1], 8));



// var twoSum = function(nums, target) {
//     result = [];
//     for (let i = 0; i < nums.length; i ++)
//         for (let j = i + 1; j < nums.length; j ++)
//             if (nums[i] + nums[j] == target){
//                 result.push(i);
// 				result.push(j);
//                 return result;
//             }
//         return -1;
// };