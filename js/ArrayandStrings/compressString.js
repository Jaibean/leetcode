// Write a function, compress, that takes in a string as an argument.
// The function should return a compressed version of the string where consecutive occurences of the same characters are compressed into the number of occurences followed by the character.
// Single character occurences should not be changed.
// 'aaa' compresses to '3a'
// 'cc' compresses to '2c'
// 't' should remain as 't'
// You can assume that the input only contains alphabetic characters.

const compress = (s) => {
    let result = [];
    //start of consecutive streak
    let i = 0;
    //end of consecutive streak
    let j = 0;
    
    // less than equal to in order to use the index of the last empty character
    while (j <= s.length) {
      //looking for the streak to stop
      if (s[i] === s[j]) {
        j++
      } else {
        // var for the amount the streak lasts
        const num = j - i;
        // if there is only one streak, no number is needed
        if (num === 1 ) {
          result.push(s[i])
        } else {
          // if there is more than one streak
          result.push(String(num), s[i]);
        }
        i = j;
      }
    }
    return result.join('');
  };