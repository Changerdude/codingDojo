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

// const nums1 = [1, 2, 3, 4, 6, 7, 8, 10];
// const expected1 = [
//   { i: 4, n: 6 },
//   { i: 7, n: 10 },
// ];

// const nums2 = [];
// const expected2 = [];

// const nums3 = [1, 3, 7, 9];
// const expected3 = [
//   { i: 1, n: 3 },
//   { i: 2, n: 7 },
//   { i: 3, n: 9 },
// ];
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
// console.log(allNonConsecutive(nums1));
// console.log(allNonConsecutive(nums2));
// console.log(allNonConsecutive(nums3));

// From a technical interview with an AWS engineer: https://youtu.be/t0OQAD5gjd8

/* 
  Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
  You can assume there is always a valid solution
  These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order
  Hard Bonus: make it O(n) time
*/

// const nums1 = [1, 1, 1, 2, 2, 3];
// const k1 = 2;
// const expected1 = [1, 2];
// // Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

// const nums2 = [0, 0, 0, 2, 2, 3];
// const k2 = 1;
// const expected2 = [0];
// // Explanation: k being 1 means return the single most frequent element

// // 6 occurs 6 times, 3 occurs 3 times, 2 occurs 2 times, 1 occurs 1 time.
// const nums3 = [1, 6, 3, 3, 6, 6, 3, 6, 2, 2, 6, 6];
// const k3 = 3;
// const expected3 = [6, 3, 2];

/**
 * Returns the k most frequently occurring numbers from the given unordered
 * nums.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered.
 * @param {number} k Represents the amount of numbers that should be returned.
 * @returns {Array<number>} The k most frequently occurring numbers.
 */
function kMostFrequent(nums, k) {
  const freqTable = new Map();
  freqTable.set(nums[0],1);
  for(let i = 1; i < nums.length;i++){
    freqTable.has(nums[i]) ? freqTable.set(nums[i],freqTable.get(nums[i])+1) : freqTable.set(nums[i], 1);
  }
  const freqSort = new Map([...freqTable.entries()].sort((a, b) => b[1] - a[1]));
  let result = [];
  const iter = freqSort.entries();
  for(let i = 0; i < k ; i++){
    result.push(iter.next().value[0]);
    if (result.length === k) break;
  }
  return result;
}

// console.log(kMostFrequent(nums1,k1));
// console.log(kMostFrequent(nums2,k2));
// console.log(kMostFrequent(nums3,k3));

/* 
  Given a table name string and an object whose key value pairs represent column names and values for the columns
  return a SQL insert statement string
  
  Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
const expected1 =
  "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
  first_name: "John",
  last_name: "Doe",
  age: 30,
  is_admin: false,
};
const expected2 =
  "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
// Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.

/**
 * Generates a SQL insert statement from the inputs
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} tableName
 * @param {Object} columnValuePairs
 * @returns {string} A string formatted as a SQL insert statement where the
 *    columns and values are extracted from columnValuePairs.
 */
function insert(tableName, columnValuePairs) {
  let values = ""
  let variables = ""
  for(const [key,val] of Object.entries(columnValuePairs)){
    variables = variables.concat(key + ", ");
    typeof(val) == 'string' ? values = values.concat("'"+ val + "', ") : values = values.concat(val + ", ")
  }
  values = values.slice(0,values.length - 2);
  variables = variables.slice(0,variables.length - 2);
  return ('"INSERT INTO ' + tableName +'(' + variables + ') VALUES (' + values + ');"')

}

function insertFunctional(tableName, columnValuePairs){
  const variables = Object.keys(columnValuePairs).join(", ");
  const vals = Object.values(columnValuePairs).map((val) =>{
    return typeof val === "string" ? `'${val}'` : val;
  }).join(", ")

  return `INSERT INTO ${tableName} (${variables}) VALUES (${vals});`
}
console.log(insertFunctional(table, insertData1));
console.log(insertFunctional(table, insertData2));
