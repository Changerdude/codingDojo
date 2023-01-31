const num1 = 3;
const expected1 = 6;
// Explanation: 1*2*3 = 6

const num2 = 6.8;
const expected2 = 720;
// Explanation: 1*2*3*4*5*6 = 720

const num3 = 0;
const expected3 = 1;

function factorial(num, i=1){
    if(num <= 0 ) return 1;

    num = Math.floor(num);

    if(i == num){
        return num;
    }
    return factorial(num,i+1) * (num-i);
}

console.log(factorial(num1));
console.log(factorial(num2));
console.log(factorial(num3));
/* 
Return the fibonacci number at the nth position, recursively.

Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
The next number is found by adding up the two numbers before it,
starting with 0 and 1 as the first two numbers of the sequence.
*/

const two_num1 = 0;
const two_expected1 = 0;

const two_num2 = 1;
const two_expected2 = 1;

const two_num3 = 2;
const two_expected3 = 1;

const two_num4 = 3;
const two_expected4 = 2;

const two_num5 = 4;
const two_expected5 = 3;

const two_num6 = 8;
const two_expected6 = 21;
function fib(position , i=0 , x=0, y=1){
    if(i == position){
        return x;
    }
    let temp = y;
    y = x+y;
    x = temp;
    i++;
    return fib(position,i,x,y);
}
console.log(fib(two_num1));
console.log(fib(two_num2));
console.log(fib(two_num3));
console.log(fib(two_num4));
console.log(fib(two_num5));
console.log(fib(two_num6));
console.log(fib(157));

//Teach using memo as a way to remember numbers already solved
function fibNaiveMemo(n, memo = { 0: 0, 1: 1 }) {
    if (n < 0) {
        return null;
    }

    if (memo[n] !== undefined) {
        return memo[n];
    }

    memo[n] = fibNaiveMemo(n - 1, memo) + fibNaiveMemo(n - 2, memo);

    return memo[n];
}