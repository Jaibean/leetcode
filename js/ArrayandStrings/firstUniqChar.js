
// find first unique character not repeating, if none return -1

const firstUniqChar = s => {
    let hash = {};
    for(const letter of s) {
    if(hash[letter]) hash[letter]++
    else hash[letter] = 1
  }
    for( let i = 0; i < s.length; i++) {
    const stringLetter = s[i]

    if (hash[stringLetter] === 1) {
        return i
    }
  }

  return -1
};