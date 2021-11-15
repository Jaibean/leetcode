// Write a function, uncompress, that takes in a string as an argument. 
// The input string will be formatted into multiple groups according to the following pattern:
// <number><char> for example, '2c' or '3a'.
// The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. 
// You may assume that the input string is well-formed according to the previously mentioned pattern.

const uncompress = s => {
    // pointers both starting at index 0 to count number portion of string
    let i = 0;
    // end of number portion
    let j = 0;
    // reference string for numbers
    let nums = '0123456789'
    // outout array for finall result
    let output = [];
    // loop through length of string using j as pointer
    while (j < s.length){
      //looking to see if the string of numbers include string at j index
      if (nums.includes(s[j])){
        // if it does then progress j to the next index
        j++
        // once j is nont a number we have to take those numbers behind it
      } else {
        // use Number cast to get number between i and j but not including j (slice)
        let num = Number(s.slice(i,j))
        //loop through as many times that number apears to push the j character to output
        for (let count = 0; count < num; count++){
          //push character to end of array for constant time
          output.push(s[j]);
        }
        // keep progressing j
        j++;
        //bring i up to speed
        i = j;
      }
    }
    // need to join to make the array a string of all characters
    return output.join('')
  };
  