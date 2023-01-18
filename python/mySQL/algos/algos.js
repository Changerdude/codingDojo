function freqTable(arr){
    let freqTable = {};
    for(let i = 0; i < arr.length; i++){
        if(arr[1] in freqTable){
            freqTable[arr[i]]++;
        } else {
            freqTable[arr[i]] = 1;
        }
    }
    return freqTable
}
const arr1 = ["a", "a", "a"];
const expected1 = {
a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
a: 2,
b: 1,
c: 3,
B: 1,
d: 1,
};

const arr3 = [];
const expected3 = {};

console.log(freqTable(arr1));

function dupes(str){
    let newFreqTable = freqTable(str);
    let result = "";
    for(let key of Object.keys(newFreqTable)){
        result += key;
    }
    return result
}
console.log(dupes(arr2));