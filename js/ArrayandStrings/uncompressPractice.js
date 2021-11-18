//uncompress

const uncompress = (s) => {
  let result = [];
  let nums = '0123456789';
  let i = 0;
  let j = 0;

 while ( j < s.length){
     if (nums.includes(s[j])){
         j++;
     } else {
         let num = Number(s.slice(i,j))
         for (let count = 0; count < num; count++){
            result.push(s[j])
         }
         j++;
         i = j;
     }
 }
 return result.join('');
};

console.log(uncompress("2c3a1t"));
