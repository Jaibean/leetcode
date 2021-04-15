""" Your job is to create a hashtag generator. Here is what you need to know:
The input of your function will be a string.
It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Example
hashtag('Hello world') ==> #HelloWorld
hashtag('This is a roundtable coding challenge') ==> #ThisIsARoundTableCodingChallenge
hashtag(' ') ==> false 

Challenge 2
Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid. """

# input string


string = "this is a test"
hashTagString = "#" + string.title().replace(" ", "")

print(hashTagString)

    
        
# make first level of each word upper case use title()
# remove white space use replace(" ", "")