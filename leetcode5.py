Challenge 1
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"


Challenge 2
You will be given a sequence of objects representing data about developers including their name, where they are from, their preferred coding language, and their age. Your task is to return the oldest developer(s).

Example:
var list = [
  { firstName: 'John', lastName: 'X.', country: 'Monaco', age: 40, language: 'JavaScript' },
  { firstName: 'Olivia', lastName: 'F.', country: 'Mongolia', age: 38, language: 'C#' },
  { firstName: 'Emily', lastName: 'S.', country: 'Lithuania', age: 19, language: 'Python' },
  { firstName: 'Saul', lastName: 'B.', country: 'Japan', age: 49, language: 'JavaScript' },
  { firstName: 'Rick', lastName: 'A.', country: 'Germany', age: 49, language: 'C#' },
  { firstName: 'Renee', lastName: 'R.', country: 'England', age: 49, language: 'JavaScript' },   
];
 
Should return:
{ firstName: 'Saul', lastName: 'B.', country: 'Japan', age: 49, language: 'JavaScript' }
 
If there are multiple developers of the same age, return a list containing all of them:
[
  { firstName: 'Saul', lastName: 'B.', country: 'Japan', age: 49, language: 'JavaScript' },
  { firstName: 'Betty', lastName: 'W.', country: 'United States', age: 49, language: 'Java' }   
]
Challenge 2.5
Using the same list of objects from above, write to the console the count of each preferred language, in descending order.

Example:
JavaScript: 3
C#: 2
Python: 1