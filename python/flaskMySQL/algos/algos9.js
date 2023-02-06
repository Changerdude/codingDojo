/* 
Recursively find the lowest common multiple between two numbers
"A common multiple is a number that is a multiple of two or more integers. 
The common multiples of 3 and 4 are 0, 12, 24, .... 
The least common multiple (LCM) of two numbers is the smallest
number (not zero) that is a multiple of both."

Try writing two columns of multiples as a starting point:
starting with 15 and 25 and keep writing their multiples until you find the
lowest common one then turn this in to a step by step instruction
15 25
30 50
45 75
60 
75
75 is the first common
*/

const num1A = 1;
const num1B = 1;
const expected1 = 1;

const num2A = 5;
const num2B = 10;
const expected2 = 10;

const num3A = 10;
const num3B = 5;
const expected3 = 10;

const num4A = 6;
const num4B = 8;
const expected4 = 24;

const num5A = 15;
const num5B = 25;
const expected5 = 75;

function lowestCM( a, b, i=1 ){
let multi = a * i;
if(multi % b == 0) return multi
    return lowestCM(a,b,i+1)
}
console.log(lowestCM(num5A,num5B));
console.log(lowestCM(num4A,num4B));
console.log(lowestCM(num3A,num3B));
console.log(lowestCM(num2A,num2B));
console.log(lowestCM(num1A,num1B));
/* 
Binary String Expansion
You are given a STRING containing chars "0", "1", and "?"
For every "?" character, either "0" or "1" can be substituted.
Write a recursive function to return array of all valid strings with "?" chars expanded to "0" or "1". 
*/

const two_str1 = "1?0?";
const two_expected1 = ["1000", "1001", "1100", "1101"];
// output list order does not matter
function stringExpansion(str, solution = [], partial =""){
    //first instance of ?
    //replace with 0 and 1 and recusive call new string at end append to solutions
    let index = str.indexOf("?")
    if(index == -1){
        solution.push(partial + str)
    } else {
        let front = str.slice(0,index)
        let back = str.slice(index+1)
        let prefix = partial + front
        stringExpansion(back, solution, prefix + '0')
        stringExpansion(back, solution, prefix + '1')
    }
    return solution
}

console.log(stringExpansion(two_str1));