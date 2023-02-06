const str1 = "abc";
const expected1 = "cba";

const str2 = "abc def";
const expected2 = "fed cba";

const str3 = "";
const expected3 = "";


function reverse(string, i=0){
    if(string.length == 0) return "";
    if(i == string.length-1){
        return string[i];
    }
    return reverse(string, i+1) + string[i]
}
console.log(reverse(str1));

// ************************************************
/*
Recursive Binary Search
Input: SORTED array of ints, int value
Output: bool representing if value is found
Recursively search to find if the value exists, do not loop over every element.
Approach:
Take the middle item and compare it to the given value.
Based on that comparison, narrow your search to a particular section of the array
*/

const two_nums1 = [1, 3, 5, 6];
const two_searchNum1 = 4;
const two_expected1 = false;

const two_nums2 = [4, 5, 6, 8, 12];
const two_searchNum2 = 5;
const two_expected2 = true;

const two_nums3 = [3, 4, 6, 8, 12];
const two_searchNum3 = 3;
const two_expected3 = true;

function bSearch(arr,target){

}