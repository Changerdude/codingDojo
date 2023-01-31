const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };
console.log(changeOther(cents1));
console.log(changeOther(cents2));
console.log(changeOther(cents3));
console.log(changeOther(cents4));

function changeOther(cents){
    let results={};
    if(cents >=25){
        results['quarter'] = parseInt(cents / 25)
        cents = cents % 25
    }
    if(cents >=10){
        results['dime'] = parseInt(cents / 10)
        cents = cents % 10
    }
    if(cents >=5){
        results['nickel'] = parseInt(cents / 5)
        cents = cents % 5
    }
    if(cents > 0){
        results['penny'] = parseInt(cents / 1)
    }
    return results
}
function change(cents){
    results = {};
    while(cents >= 25 ){
        if('quarter' in results){
            results['quarter'] += 1;
        } else {
            results['quarter'] = 1;
        }
        cents -= 25;
    }
    while(cents >= 10 ){
        if('dime' in results){
            results['dime'] += 1;
        } else {
            results['dime'] = 1;
        }
        cents -= 10;
    }
    while(cents >= 5 ){
        if('nickel' in results){
            results['nickel'] += 1;
        } else {
            results['nickel'] = 1;
        }
        cents -= 5;
    }
    while(cents > 0 ){
        if('penny' in results){
            results['penny'] += 1;
        } else {
            results['penny'] = 1;
        }
        cents -= 1;
    }
    return results
}

const two_nums1 = [3, 0, 1];
const two_expected1 = 2;

const two_nums2 = [3, 0, 1, 2];
const two_expected2 = null;
// Explanation: nothing is missing

/* 
Bonus: now the lowest value can now be any integer (including negatives),
instead of always being 0. 
*/

const two_nums3 = [2, -4, 0, -3, -2, 1];
const two_expected3 = -1;

const two_nums4 = [5, 2, 7, 8, 4, 9, 3];
const two_expected4 = 6;
console.log(missingValue(two_nums1));
console.log(missingValue(two_nums2));
console.log(missingValue(two_nums3));
console.log(missingValue(two_nums4));
function missingValue(arr){
    //find lowest
    let lowest = arr[0];
    for(let i =1; i < arr.length;i++){
        if(arr[i] < lowest){
            lowest = arr[i];
        }
    }
    arr = arr.sort();
    //sorts negatives strangly.
    for(let i= 1; i< arr.length;i++){
        if(arr[i] != lowest+i){
            return (lowest + i)
        }
    }
    return null

}