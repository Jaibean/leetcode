


// Write a function, pairProduct, that takes in an array and a target product as arguments. 
// The function should return an array containing a pair of indices whose elements multiply to the given target.
// The indices returned must be unique.
// Be sure to return the indices, not the elements themselves.
// There is guaranteed to be one such pair whose product is the target.

const pairProduct = (numbers, targetProduct) => {
  let set = {};
  for (let i = 0; i < numbers.length; i++){
    const num = numbers[i];
    const comp = targetProduct / num;
    if (comp in set) return [set[comp], i];
    set[num] = i;
  }
};

console.log(pairProduct([3, 2, 5, 4, 1], 8));

// const pairProduct = (numbers, targetProduct) => {
//     let result = [];
    
//     for (let i = 0; i < numbers.length; i++)
//       for (let j= i + 1; j < numbers.length; j++)
//         if (numbers[i] * numbers[j] === targetProduct) {
//           result.push(i, j);
//           return result;
//         }
//     return -1;
//   };
  
  
  
  
  
  