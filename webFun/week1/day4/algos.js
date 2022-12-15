function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) { //Staring at the left, cycle through the array until half way
        var right = arr.length-1-left; // right is last index - left
        if(arr[left] != arr[right]) { //if not equal end possibility of it being a palindrome
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!"; //If it gets to the end without ever being different, must be a palindrome
}

function splitString(myString){
    return myString.split("");
}

var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);

var result3 = isPal( [5,6,7,8,3,4,4,3,8,7,6,5] );
console.log(result3);

var result4 = isPal( ["t","a","c","o","c","a","t"] );
console.log(result4);

var result5 = isPal( splitString("Jeff") );
console.log(result5);