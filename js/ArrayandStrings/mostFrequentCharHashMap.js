// Write a function, mostFrequentChar, that takes in a string as an argument.
// The function should return the most frequent character of the string.
// If there are ties, return the character that appears earlier in the string.
// You can assume that the input string is non-empty.

const mostFrequentChar = s => {
    // create an object to set the string in key value pairs
    obj = {};
    //iterate over the string
    for (let char of s){
        // if the character is not in the object do nothing to the value
        if (!(char in obj)){
            obj[char] = 0;
        }
        // otherwise as char as a key and the value is plus 1
        obj[char] += 1;
    }
    // set a worst case for a variable best
    let best = null;
    // iterate over the string again
    for (let char of s) {
        // set a base case for if there is no frequesnt then a case for if the next iteration is better than the best
        if ( best === null || obj[char] > obj[best]){
            // if the iteration is greater than best then it is turned to new best for next iteration check
            best = char;
        }
    }
    //once through the iteration, return the best which will be the value in the string 
    return best;
};

console.log(mostFrequentChar("ksdfhaa"));





// const mostFrequentChar = (s) => {
//   const count = {};

//   for (let char of s) {
//     if (!(char in count)) {
//       count[char] = 0;
//     }
//     count[char] += 1;
//   }
//   let best = null;
//   for (let char of s) {
//     if (best === null || count[char] > count[best]) {
//       best = char;
//     }
//   }
//   return best;
// };

// console.log(mostFrequentChar("ksdfhaa"));
