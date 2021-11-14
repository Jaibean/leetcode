// is plaindrome

const clean = str => str.toLowerCase('').split(' ').join('')
const isPalindrom = str => {
    let cleanStr = clean(str)
    let reverseStr = cleanStr.split(' ').reverse('').join('');
    return str === reverseStr;

}


console.log(isPalindrom('race car'));