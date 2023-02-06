const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25; 
const expected3 = 7;

function sumToOne(num){
    if ( num < 10 ) return num;
    let numList = num.toString();

    let newNum = 0;
    for(let i = 0; i < numList.length; i++){
        newNum += parseInt(numList[i]);
    }
    
    return sumToOne(newNum);
}
console.log(sumToOne(num1));
console.log(sumToOne(num2));
console.log(sumToOne(num3));
console.log(sumToOne(198));


// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2129
/* 
String Anagrams
Given a string,
return array where each element is a string representing a different anagram (a different sequence of the letters in that string).
Ok to use built in methods
*/

const two_str1 = "lim";
const two_expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
// Order of the output array does not matter

// function ana(str){
//     arr = str.split("");
//     let newStr = "";
//     for(let i = 0; i < str.length ; i++){
//         newStr = arr[i] + arr[0]
//     }

//     return ana(someString)
// }
// console.log(ana(two_str1));