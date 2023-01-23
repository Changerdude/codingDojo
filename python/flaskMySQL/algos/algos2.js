/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).
*/

const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

/**
 * Determines whether each occupied space in the line of people is separated by
 * 6 empty spaces.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<0|1>} queue
 * @returns {Boolean}
 */


/*****************************************************************************/

/* 
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
  
*/

const two_nums1 = [-2, 5, 7, 0, 3];
const two_expected1 = 2;

const two_nums2 = [9, 9];
const two_expected2 = -1;

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */

function sixFeet(arr){
    let found = false;
    let space = 0;
    for(let i = 0; i < arr.length ; i++){
        if(found){
            if(arr[i] === 0){
                space += 1;
            } else {
                if(space < 6) return false;
                space = 0;
            }
        }
        if(arr[i] === 1) found = true;
    }
    return true;
}
function sixFeet2(arr){
    for(let i = 1 ; i < arr.length; i++){
        if(arr[i] === 1){
            let check = arr.slice(i+1,i+7);
            if (check.includes(1)) return false;
        }
    }
    return true;
}
console.log(sixFeet2(queue1));
console.log(sixFeet2(queue2));
console.log(sixFeet2(queue3));
console.log(sixFeet2(queue4));

function balancing(arr){
    if(arr.length < 3) return -1;
    for(let i=1; i<arr.length;i++) if( arr.slice(0,i).reduce((sum, a) => sum + a, 0) === arr.slice(i+1, arr.length).reduce((sum, a) => sum + a, 0) ) return i;
    return -1;
}
console.log(balancing(two_nums1));
console.log(balancing(two_nums2));