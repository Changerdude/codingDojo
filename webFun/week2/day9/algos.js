
// for(let i = 0; i < arr2d.length; i++){
//     for(let x = 0; x < arr2d[i].length; x++){
//         console.log(arr2d[i][x]);
//     }
// }
var arr2d2 = [
    [2,3,4],
    [3,6,9],
    [5,7,7]
];
console.log(flatten(arr2d2));
console.log(isPresent(arr2d2, 99));
function flatten(arr2d){
    let newArr = [];
    for(let i = 0; i < arr2d.length; i++){
        // newArr = newArr.concat(arr2d[i]);
        for(let x = 0; x < arr2d[i].length; x++){
            newArr.push(arr2d2[i][x]);
        }
    }
    return newArr;
}

function isPresent(arr2d, target){
    for(let i = 0; i < arr2d.length; i++){
        for(let x = 0; x < arr2d[i].length; x++){
            if(arr2d[i][x] == target){
                return true;
            }
        }
    }
    return false;
}