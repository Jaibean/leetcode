// Write a function, compress, that takes in a string as an argument.
// The function should return a compressed version of the string where consecutive occurences of the same characters are compressed into the number of occurences followed by the character.
// Single character occurences should not be changed.
// 'aaa' compresses to '3a'
// 'cc' compresses to '2c'
// 't' should remain as 't'
// You can assume that the input only contains alphabetic characters.

const compress = (s) => {
  let result = [];
  let i = 0;
  let j = 0;

  while (j <= s.length) {
    if (s[i] === s[j]) {
      j += 1;
    } else {
      const num = j - i;
      if (num === 1) {
        result.push(s[i]);
      } else {
        result.push(String((num), s[i]));
      }
      i = j;
    }
  }
  return result.join('');
};

console.log(compress("ccsstssss"));
