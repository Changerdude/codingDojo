const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";

function rotate(str, num){
    amnt = num % str.length;
    for(let i = 0; i < amnt; i++){
        str = str.slice(-1) + str.slice(0,-1); //Nested loops, inefficeant
    }
    return str;
}

function rotateBetter(str,num){ //More lines but not nested loops
    let amnt = num % str.length;
    let start = "";
    let end = "";
    for(let i = 0; i < str.length - amnt; i++){
        if( i < amnt){
            start = str[str.length-1 - i] + start;
        }
        end += str[i];
    }
    return start+end;
}

console.log(rotateBetter("Hello World", 4));

const two_strA1 = "ABCD";
const two_strB1 = "CDAB";
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated
const two_expected1 = true;
// CDAB
// BCDA
// ABCD

const two_strA2 = "ABCD";
const two_strB2 = "CDBA";
// Explanation: all same letters in 2nd string, but out of order
const two_expected2 = false;
// CDBA
// ACDB
// BACD
// DBAC
// CDBA

const two_strA3 = "ABCD";
const two_strB3 = "BCDAB";
// Explanation: same letters in correct order but there is an extra letter.
const two_expected3 = false;

function isRotation(str1,str2){
    currStr = str2
    for(let i = 0; i < str1.length; i++){
        if(str1 === currStr){
            return true;
        }else{
            currStr = rotate(currStr,1)
        }
    }
    return false;
}

function isRotationBetter(str1,str2){
    if(str1.length != str2.length || str1 === str2) return false;
    return (str1 + str1).includes(str2);
}

console.log(isRotationBetter(two_strA1,two_strB1));