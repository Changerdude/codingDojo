function join(arr,sep){
    result = "";
    if(arr.length > 0){
        result += arr[0];
        for(let i = 1; i < arr.length; i++){
            result += sep;
            result += arr[i];
        }
    } else if(arr.length == 1){
        result = arr[1];
    }
    return result;
}
const arr1 = [1, 2, 3];
const separator1 = ", ";
const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5 = "";
console.log(join(arr5, separator5));

function bookmark(arr){
    if(arr.length > 0){
        let temp = "";
        let notFound = true;
        let result = "";
        for(let i = 0; i < arr.length; i++){
            if(i > 0){
                result += ", ";
            }
            notFound = true;
            result += arr[i];
            if(arr[i]+1 == arr[i+1]){
                i++;
                result += "-";
                temp = arr[i];
                while(notFound){
                    if(temp+1 == arr[i+1]){
                        i++;
                        temp = arr[i];
                    } else {
                        result += arr[i]
                        notFound = false;
                    }
                }
            }
        }
        return result;
    }
    return "";
}

const two_nums1 = [1, 13, 14, 15, 37, 38, 70];
const two_expected1 = "1, 13-15, 37-38, 70";

const two_nums2 = [5, 6, 7, 8, 9];
const two_expected2 = "5-9";

const two_nums3 = [1, 2, 3, 7, 9, 15, 16, 17];
const two_expected3 = "1-3, 7, 9, 15-17";

console.log(bookmark(two_nums3));