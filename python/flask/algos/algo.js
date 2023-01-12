function isPalandrome(str){
    for(let i = 0; i < (str.length / 2); i++){
        if(str[i] != str[str.length - 1 - i]){
            return false;
        }
    }
    return true
}


const two_expected1 = "dad";

const two_str2 = "uh, not much";
const two_expected2 = "u";
// forLoop1
// forLoop2
const two_str3 = "Yikes! my favorite racecar erupted!";
                // fl1 = i                    fl2=!
const two_expected3 = "e racecar e";

const two_str4 = "a1001x20002y5677765z";
const two_expected4 = "5677765";

const two_str5 = "a1001x20002y567765z";
const two_expected5 = "567765";
/**
 * Finds the longest palindromic substring in the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The longest palindromic substring from the given string.
 */
const two_str1 = "what up, daddy-o?";
function longestPalindromicSubstring(str) {
    let longestPal = str[0];
    for( let i = 0; i < str.length; i++){ //forLoop1
        for(let y = str.length -1; y >= 0; y--){// forLoop2
            if(str[i] == str[y]){
                let checking = str.substring(i,y+1);
                if(isPalandrome(checking) && checking.length > longestPal.length){
                    longestPal = checking;
                }
            }
        }
    }
    return longestPal;
}

console.log(longestPalindromicSubstring(two_str1));