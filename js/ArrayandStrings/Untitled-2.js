

//first unique char

const mostFreq = s => {
    let obj = {};

    for (let i of s){
        if(!(i in obj)){
            obj[i] = 0
        }
        obj[i] += 1
    }

    for (let j = 0; j < s.length; j++){
        const str = s[j]

        if (obj[str] === 1){
            return j;
        }
    }
    return -1
};