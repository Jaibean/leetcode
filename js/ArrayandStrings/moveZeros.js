// Given an integer array nums, 
// move all 0's to the end of it while maintaining the relative order of the non-zero elements.


var moveZeroes = function(nums) {
    let j = 0
   for(let i = 0; i < nums.length; i++) {
       if(nums[i] !== 0) {
           //storing the index we are iterating on
           let n = nums[i]
           //changing the index in place to 0
           nums[i] = 0
           //place stored value at index j then increment j
           nums[j++] = n
           console.log(nums);
       }
   }
   return nums;
};

console.log(moveZeroes([0,1,0,3,12]));