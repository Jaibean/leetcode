
// Given a string of digits, generate all strings that could represent that number given the standard phone pad mapping.
// "23" -> ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

// "86" -> [tm, tn, to, um, un, uo, vm, vn, vo]
// "286" -> [atm, atn, ato, aum, aun.....


// ["[0][0]", "[0][1]", "[0][2]", "[1][0]", "[1][1]", "[1][2]", "[2][0]", etc]


const PHONE_PAD = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
}

console.log(PHONE_PAD[2])

//ANSWER GOES HERE :D
// input: string of digits = num
//oputput: array of strings = newArray
//constraint: phone pad - dictionary 

// call key in dictionary to iterate through the values 
// iterate through array (value) to create new string of digits

//reference digit to dictionary and join ...

var num = "32"
// create empty array to place new string of digits
var newArray = []

function digitG(num){
  // split string to separate digits
  var newNum = num.split('');
  // join values of first digit and second digit to create new "digit string"
  var newArray = PHONE_PAD[parseInt(newNum[0])]
    
  
  
  
  
  //return newNum;
}

console.log(digitG(num))


function bennosSolution(input){
  if (input.length === 0) {
    return [""];
  }
  const lettersForFirstNum = PHONE_PAD[parseInt(input[0])]  // 8 => t,u,v.   6=> m,n,o
  const remainingResult = bennosSolution(input.slice(1)) // rm first character from string // [""]
  const finalResult = []
  for l in lettersForFirstNum {
    for r in remainingResult {
       finalResult.append(l + r)
    }
  }
  return finalResult // [m, n, o]
  
  
  //return newNum;
}