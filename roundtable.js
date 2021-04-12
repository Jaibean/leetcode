function challengeOne(str) {
	for(var i = 0; i<= str.length; i++) {
		for var j = i+1; j <= str.length; j++) {
			if(str[j] == str[i]){
				return false;
			}
		}
	}
	return true;
}
	

# You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters. Note: You will only be running single words through this function, not multi-word strings.

https://github.com/techacademyroundtable/weeklyChallenge 

function challengeTwo() {
	var even false = (s.length % 2 == 0)
	if (even) {
		return s[(s.length / 2) -1] + s.[s.length / 2];
	}
	else {
		return s[(s.length - 1) /2];
	}
}

function getMiddle(s) {
	return (s.length % 2 == 0 ? s[(s.length / 2) - 1] + s[s.length /2] : s[(s.length - 1) / 2])
}

console.log(getMiddle("Hello"));