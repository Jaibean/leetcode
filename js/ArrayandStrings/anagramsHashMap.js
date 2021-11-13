// Write a function, anagrams, that takes in two strings as arguments.
// The function should return a boolean indicating whether or not the strings are anagrams.
// Anagrams are strings that contain the same characters, but in any order.

const anagrams = (s1, s2) => {
// create object to reference letters as keys and amount as values
  const count = {};

  //iterate through string 1 to create object of letter count
  for (let char of s1) {
      // if char is not in the object then do nothing 
    if (!(char in count)) {
      count[char] = 0;
    }
    // if char is in object add an initial value or another value
    count[char] += 1;
  }
  // iterate through string 2 to compare to new object of s1's key value pairs
  for (let char of s2) {
    if (char in count) {
    // minus the count if it is in there in hopes to zero out the characters 
      count[char] -= 1;
    } else {
    //otherwise return false because then they are not anagrams 
      return false;
    }
  }
  // use for in loop to look at values of the object 
  for (let char in count) {
    if (count[char] !== 0) {
      return false;
    }
  }
  return true;
};
