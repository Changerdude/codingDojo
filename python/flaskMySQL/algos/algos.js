const str1 = "   hello world     ";
const expected1 = "hello world";

const str2 = "   hello    world     ";
const expected2 = "hello    world";


const two_strA1 = "yesy";
const two_strB1 = "eyss";
const two_expected1 = true;

const two_strA2 = "yes";
const two_strB2 = "eYs";
const two_expected2 = true;

const two_strA3 = "no";
const two_strB3 = "noo";
const two_expected3 = false;

const two_strA4 = "silent";
const two_strB4 = "listen";
const two_expected4 = true;
function trimRemastered(str){
    let start = 0;
    let end = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] != " " && start == 0){
            start = i;
        }
        if(str[str.length -1 -i] != " " && end == 0){
            end = str.length -1 -i;
        }
    }
    console.log(start);
    console.log(end);
    return str.slice(start,end+1);
}

function annogram(str1,str2){
    if (str1.length != str2.length) return false;
    str1 = str1.toLowerCase().split("").sort();
    str2 = str2.toLowerCase().split("").sort();
    for(let i = str1.length-1; i >= 0 ; i--){
        if(str2[i] === str1[i]){
            str2.pop();
            str1.pop();
        }
    }
    return str1.length === 0;
}

console.log(trimRemastered(str2));
console.log(annogram(two_strA4,two_strB4));