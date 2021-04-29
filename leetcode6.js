
/* Challenge 1
Similar to last week, you will be given a list of objects, each representing a developer. 
Your job is to divide these developers into groups based on their preferred coding language.
Each group must be sorted by the number of years each developer has with his/her preferred language.

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
Python: Kristen H, Joshua Y, Lindsey S */

function devSort(developers) {
    // create object to store results {key:[values]}
    var groups = {};
    //loop through list
    for (let i in developers){
        var lang = developers[i].language;
        var name = developers[i].firstName + " " + developers[i].lastName;
        //If the object doesnt contain the language, add it in as a key and add name property to the values list
        if (!groups[lang]) {
            groups[lang] = [name];
        }
        // else if object contains key (language) add name property to values list
        else {
            group[lang].push(name);
        }
    }
    //return object
    for (let [key, value] of Object.defineProperties(groups)) {
        output.innerHTML += '</br ${key}: ${value}'
    }

}


/*Challenge 2
Given a two-dimensional array representation of a glass of mixed liquids, sort the array such that the liquids appear in 
the glass based on their density. (Lower density floats to the top) The width of the glass will not change from top to bottom.

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
*/

 function seperateLiquids(List) {
     var O = [];
     var W = [];
     var H = [];
     var result = [];
     for (var i of list) {
         for(var j of i){
             if(j == 'O')O.push(j)
             else if (j == 'W')
         }
     }
 }