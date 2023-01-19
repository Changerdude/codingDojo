function validatePar(str){
    let open = 0;
    let close = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == "("){
            open++;
        } else if(str[i] == ")"){
            close++;
        }
        if(close > open){
            return false;
        }
    }
    if( open > close){
        return false;
    }
    return true;
}
const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.


const two_str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const two_expected1 = true;

const two_str2 = "D(i{a}l[ t]o)n{e";
const two_expected2 = false;

const two_str3 = "A(1)s[O (n]0{t) 0}k";
const two_expected3 = false;

console.log(validateParBetter(two_str1));
console.log(validateParBetter(two_str2));
console.log(validateParBetter(two_str3));

function validatePar2(str){
    let surrounds = {
        "(": 0,
        ")": 0,
        "{": 0,
        "}": 0,
        "[": 0,
        "]": 0,
        "openSeq": []
    }
    for(let i = 0; i < str.length; i++){
        if(str[i] == "("){
            surrounds["("]++;
            surrounds["openSeq"].push("paren");
        } else if(str[i] == ")"){
            
            if(surrounds["openSeq"][surrounds["openSeq"].length -1] != "paren"){
                return false;
            } else {
                surrounds[")"]++;
                surrounds["openSeq"].pop()
            }
        }else if(str[i] == "{"){
            surrounds["{"]++;
            surrounds["openSeq"].push("curl");
        }else if(str[i] == "}"){
            if(surrounds["openSeq"][surrounds["openSeq"].length -1] != "curl"){
                return false;
            } else {
                surrounds["}"]++;
                surrounds["openSeq"].pop()
            }
        }else if(str[i] == "["){
            surrounds["["]++;
            surrounds["openSeq"].push("squar");
        }else if(str[i] == "]"){
            if(surrounds["openSeq"][surrounds["openSeq"].length -1] != "squar"){
                return false;
            } else {
                surrounds["]"]++;
                surrounds["openSeq"].pop()
            }
        }
        if(surrounds[")"] > surrounds["("]){
            return false;
        } else if(surrounds["}"] > surrounds["{"]){
            return false;
        }
        if(surrounds["]"] > surrounds["["]){
            return false;
        }
    }
    if(surrounds["("] == surrounds[")"] && surrounds["["] == surrounds["]"] && surrounds["{"] == surrounds["}"]){
        return true;
    } else {
        return false;
    }

}

function validateParBetter(str){
    let stack = [];
    let opens = "([{";
    let closeToOpen = {
        ")":"(",
        "}":"{",
        "]":"["
    }
    for(let i = 0; i < str.length; i++){
        if(opens.includes(str[i])){
            stack.push(str[i]);
        }
        if(closeToOpen[str[i]]){
            if (closeToOpen[str[i]] === stack[stack.length -1]){
                stack.pop()
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}