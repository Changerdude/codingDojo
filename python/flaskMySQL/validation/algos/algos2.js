let result = [];
let curVal = arr[0];
function dedupeSorted(arr){
    for(let i = 1; i < arr.length; i++){
        if(arr[i] != curVal){
            result.push[arr[i]];
            curVal = arr[i];
        }
    }
    return result
}

function nonDuped(arr){
    let freqTable = {};
    for(let i = 0; i < arr.length; i++){
        if(arr[i] in freqTable){
            freqTable[arr[i]]++;
        } else {
            freqTable[arr[i]] = 1;
        }
    }
    return Object.keys(freqTable).find((key) => obj[key] === 1);
}