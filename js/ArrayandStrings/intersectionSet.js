// Write a function, intersection, that takes in two arrays, a,b, as arguments.
// The function should return a new array containing elements that are in both of the two arrays.
// You may assume that each input array does not contain duplicate elements.

const intersection = (a, b) => {
    let result = [];
    const setA = new Set(a);
    for(let item of b) {
      if (setA.has(item)) {
        result.push(item);
      }
    }
    return result;
    
  };

//brute force
//   const intersection = (a, b) => {
//     const result = [];
//     for (let item of b) {
//       if (a.includes(item)) {
//         result.push(item);
//       }
//     }
//     return result;
//   };
  