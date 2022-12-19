//Print Odds from 1-20
for(let i = 1; i <= 20; i+=2){
    console.log(i);
}

//Decreasing multiples of three
for(let i = 100; i > 0; i--){
    if(i % 3 == 0){
        console.log(i);
    }
}

//Print the sequence
var arr = [4,2.5,1,-0.5,-2,-3.5];
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

//Sigma
var sum = 0;
for(let i = 1; i <= 100; i++){
    sum += i;
}
console.log(sum);

//Factorial
var product = 1;
for(let i = 2; i <= 12; i++){
    product *= i;
}
console.log(product);