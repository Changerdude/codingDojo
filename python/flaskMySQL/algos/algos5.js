const nums1 = [1, 2, 3];
const expected1 = 6;

const nums2 = [1];
const expected2 = 1;

const nums3 = [];
const expected3 = 0;

function sum(nums, i=0){
    if(i == nums.length){
        return 0
    }
    return sum(nums,i+1)+ nums[i]
}
console.log(sum(nums1));
console.log(sum(nums2));
console.log(sum(nums3));

const two_num1 = 5;
const two_expected1 = 15;
// Explanation: (1+2+3+4+5)

const two_num2 = 2.5;
const two_expected2 = 3;
// Explanation: (1+2)

const two_num3 = -1;
const two_expected3 = 0;

function sum_sigma(num, i=1){
    if(num < 0 ) return 0

    num = Math.floor(num)

    if(i == num){
        return num
    }
    return sum_sigma(num,i+1) + (num-i)
}
console.log(sum_sigma(two_num1));
console.log(sum_sigma(two_num2));
console.log(sum_sigma(two_num3));