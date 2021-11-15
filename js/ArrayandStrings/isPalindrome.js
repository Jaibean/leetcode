// is plaindrome

//with regex
const isPalindrom = str => {
    let reg = /[\W_]/g;
    let cleanStr = str.toLowerCase('').replace(reg, '')
    let reverseStr = cleanStr.split('').reverse('').join('');
    return str === reverseStr;

}



// const isPalindrom = str => {
//     let len = str.length;
//     let start = str.substring(0, Math.floor(len/2)).toLowerCase();
//     let end = str.substring(len - Math.floor(len/2)).toLowerCase();
//     let flip = end.split('').reverse().join('');
//     return start === flip

// };


// const clean = str => str.toLowerCase('').split(' ').join('')
// const isPalindrom = str => {
//     let cleanStr = clean(str)
//     let reverseStr = cleanStr.split(' ').reverse('').join('');
//     return str === reverseStr;

// }


console.log(isPalindrom('race car'));