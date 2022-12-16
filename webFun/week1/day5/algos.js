// var fruit1 = "Apple";
// var fruit2 ="Kiwi";

// var temp = fruit1;
// fruit1 = fruit2;
// fruit2 = temp;

// console.log(fruit1);
// console.log(fruit2);

// var start = 0;
// var end = 12;
// while(start < end){
//     console.log(`Start: ${start}, end: ${end}`);
//     start += 2;
//     end -= 2;
// }

function reverse(arr){
    //your code here!
    for(var i = 0; i < arr.length / 2; i++){
        var temp = arr[arr.length-1-i];
        arr[arr.length-1-i] = arr[i];
        arr[i] = temp;
    }
    return arr;

    // var arr2 =[];
    // for(var x= arr.length-1; x >= 0; x--){
    //     arr2.push(arr[x]);
    // }
    // return arr2;
    
    // return arr.reverse();
}

var test1 = ["a","b","c","d","e"];
console.log(reverse(test1));