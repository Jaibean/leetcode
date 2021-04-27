
Challenge 1
Similar to last week, you will be given a list of objects, each representing a developer. Your job is to divide these developers into groups based on their preferred coding language. Each group must be sorted by the number of years each developer has with his/her preferred language.

Example

var developers = [
{firstName: 'Jeff', lastName: 'A', age: 28, language: 'C#', yearsOfExperience: 5},
{firstName: 'Lindsey', lastName: 'S', age: 35, language: 'Python', yearsOfExperience: 3},
{firstName: 'Gavin', lastName: 'K', age: 46, language: 'Java', yearsOfExperience: 12}, 
{firstName: 'Marleen', lastName: 'B', age: 51, language: 'C#', yearsOfExperience: 20}, 
{firstName: 'Brent', lastName: 'K', age: 21, language: 'JavaScript', yearsOfExperience: 1}, 
{firstName: 'Ashley', lastName: 'T', age: 33, language: 'JavaScript', yearsOfExperience: 6}, 
{firstName: 'Kristen', lastName: 'H', age: 41, language: 'Python', yearsOfExperience: 9}, 
{firstName: 'Joshua', lastName: 'Y', age: 50, language: 'Python', yearsOfExperience: 5}       
];

Output ==>
C#: Marleen B, Jeff A
Java: Gavin K
JavaScript: Ashley T, Brent K
Python: Kristen H, Joshua Y, Lindsey S

For extra points, you can create a GUI to represent the output of this code. 

Challenge 2
Given a two-dimensional array representation of a glass of mixed liquids, sort the array such that the liquids appear in the glass based on their density. (Lower density floats to the top) The width of the glass will not change from top to bottom.

Example
======================
|   Density Chart    |
======================
| Honey   | H | 1.36 |
| Water   | W | 1.00 |
| Alcohol | A | 0.87 |
| Oil     | O | 0.80 |
----------------------

[                            [
 ['H', 'H', 'W', 'O'],        ['O','O','O','O']
 ['W', 'W', 'O', 'W'],  =>    ['W','W','W','W']
 ['H', 'H', 'O', 'O']         ['H','H','H','H']
 ]                           ]