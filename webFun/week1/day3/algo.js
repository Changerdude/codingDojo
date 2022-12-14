// var isSunny = true;
// var temp = 45;
// var isRaining = false;
// var whatToBring = "I should bring: "
// if(isSunny && !isRaining){
//     whatToBring += "sunglasses, ";
// }
// if(temp < 50){
//     whatToBring += "a jacket, ";
// }
// if(isRaining){
//     whatToBring += "an umbrella, "
// }
// whatToBring += "and a smile!"
// console.log(whatToBring);


// for(var i = 10; i > 0; i--){
//     if(i !== 2){
//         console.log(i);
//     } else {
//         console.log("ignition");
//     }
// }
// console.log("liftoff!!");


var countPositives =0;
var numbers = [3,4,-2,7,16,-8,0,12,-3,4,2,123,-23,45,00,1,"taco", "pizza", -1,55];

for(var i = 0; i < numbers.length; i++){
    if(typeof(numbers[i] === "number")){
        if(numbers[i] > 0){
            countPositives++;
        }
    }
}
console.log("There are " + countPositives + " positive values.");