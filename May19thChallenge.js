// Your goal is to write a function that will receive an array of strings as its argument and returns an array of strings each representing the longest substring
// of contiguous vowels  ( aeiouAEIOU ).


str1 = "what a beautiful day today"
str2 = "it's okay, but very breezy"
strArray = [str1,str2]

const vowels = ["a", "e", "i", "o", "u"]

contiguousVowels(strArray) {
    const vowels = /[aeiouAEIOU]+/g;  // g means global 
    for (let i in strArray){
        const letters = strArray[i].match(vowels);
            if (letters) {
                const longest = letters.reduce((acc, val)) => acc.length > val.length ? acc : val, '');
                result.push(longest);
            }
    }
    return result;
}  

contigousVowels(strArray)

// Output to window here:
document.getElementById("result-box").innerHTML = `[${contigousVowels(strArray)}]`
