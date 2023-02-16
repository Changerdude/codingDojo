/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

// const numsA1 = [0, 1, 2, 2, 2, 7];
// const numsB1 = [2, 2, 6, 6, 7];
// const expected1 = [2, 7];

// const numsA2 = [0, 1, 2, 2, 2, 7];
// const numsB2 = [2, 2];
// const expected2 = [2];

// const numsA3 = [0, 1, 2, 2, 2, 7];
// const numsB3 = [10];
// const expected3 = [];

/**
 * Efficiently combine the two sorted arrays into a new array that is the a
 * sorted set intersection.
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) {
    let result = [];
    for(let i=0; i< sortedA.length;i++){
        if(sortedB.includes(sortedA[i]) && !result.includes(sortedA[i])) result.push(sortedA[i]);
    }
    return result;
}

// console.log(orderedIntersection(numsA1,numsB1));
// console.log(orderedIntersection(numsA2,numsB2));
// console.log(orderedIntersection(numsA3,numsB3));

/* 
  Given an array of ints, find all the non-consecutive integers
  A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
  The first element is never considered non-consecutive.
  Return an array of objects where each object contains the number itself
  and it's index.
*/

const nums1 = [1, 2, 3, 4, 6, 7, 8, 10];
const expected1 = [
  { i: 4, n: 6 },
  { i: 7, n: 10 },
];

const nums2 = [];
const expected2 = [];

const nums3 = [1, 3, 7, 9];
const expected3 = [
  { i: 1, n: 3 },
  { i: 2, n: 7 },
  { i: 3, n: 9 },
];
// Explanation: Index 0 has no number before it, so it is not included.

/**
 * Finds all the non-consecutive (out of order) numbers from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @typedef {Array<{i: number, n: number}>} NonConsecNums Array of objects.
 * @property {number} i The index of the non consecutive number.
 * @property {number} n The non consecutive number itself.
 * @returns {NonConsecNums}
 */
function allNonConsecutive(sortedNums) {
  if(sortedNums.length<1) return [];

  let result = []
  for( let i = 1;i<sortedNums.length;i++){
    if(sortedNums[i] !== (sortedNums[i-1]+1)) {
      result.push({i:i,n:sortedNums[i]});
    }
  }
  return result;
}
console.log(allNonConsecutive(nums1));
console.log(allNonConsecutive(nums2));
console.log(allNonConsecutive(nums3));