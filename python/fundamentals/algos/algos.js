/* 
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

const str3 = "hello";
const expected3 = "olleh";

const str4 = "";
const expected4 = "";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 * 
 * Psuedo code
 * - create a function that takes in a string
 * - create a new string
 * - create a for loop and loop over the string -> start the for at the end of the string
 *      - concat the current character into the new string (ie: "t" + "y" = "ty")
 * - return new string
 * 
 */
function reverseString(str) {
    var newString = "";
    for(var i = 0; i < str.length; i++){
        newString += str[str.length - 1 - i];
    }
    return newString;
}

console.log(reverseString(str2))

// ***************************************************************************

/* 
  Acronyms
  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 
  Do it with .split first if you need to, then try to do it without
*/

const two_str1 = "object oriented programming";
const two_expected1 = "OOP";

// The 4 pillars of OOP
const two_str2 = "abstraction polymorphism inheritance encapsulation";
const two_expected2 = "APIE";

const two_str3 = "software development life cycle";
const two_expected3 = "SDLC";

// Bonus: ignore extra spaces
const two_str4 = "  global   information tracker    ";
const two_expected4 = "GIT";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string to be turned into an acronym.
 * @returns {string} The acronym.
 */
function acronymize(str) {
    if(str[0] != " "){
        var newString = str[0];
    } else {
        newString = "";
    }
    for(var i = 0; i < str.length; i++){
        if (str[i] == " "){
            if(str[i+1] != " " && str[i+1] != undefined){
            newString += str[i+1];
            }
        }
    }
    return newString.toUpperCase();
}
// function acronymize(str) {
//     \ba-zA-z
// }
console.log(acronymize(two_str4));