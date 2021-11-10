// Write a function, uncompress, that takes in a string as an argument. 
// The input string will be formatted into multiple groups according to the following pattern:
// <number><char> for example, '2c' or '3a'.
// The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. 
// You may assume that the input string is well-formed according to the previously mentioned pattern.

const uncompress = (s) => {
    let output = [];
    const nums = '0123456789'
    let i = 0;
    let j = 0;
    while (j < s.length) {
      if(nums.includes(s[j])) {
        j += 1;
      } else {
        num = Number(s.slice(i, j))
        for (let count = 0; count < num; count++){
          output.push(s[j]);
        }
        j++;
        i = j;
      }
      
    }
    
      return output.join('');
  };
  
  