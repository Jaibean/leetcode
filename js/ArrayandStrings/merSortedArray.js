// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
//and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
//Merge nums1 and nums2 into a single array sorted in non-decreasing order.
//The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
//To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 
// function sortAra(a, b) {
//     return a - b;
// }
// function merge(nums1, m, nums2, n) {
//     for (let i = m, j = 0; i < m + n; i++, j++) {
//         nums1[i] = nums2[j];
//     }
//     return nums1.sort(sortAra);
// };

let merge = (nums1, m, nums2, n) => {
    nums1.splice(m); // Removes all items after m(th) item
  
    for (let i = 0; i < n; i++) { // Push into nums1 n items from nums2
      nums1.push(nums2[i]);
    }
  
    nums1.sort((a, b) => { // Sort nums1 with .sort
      return a - b;
    });
  };

console.log(merge(nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3));