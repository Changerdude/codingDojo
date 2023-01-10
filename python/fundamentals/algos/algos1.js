function reverseString(incString){
    let newString = "";
    for(let i = incString.length - 1; i >= 0; i--){
        newString += incString[i];
    }
    console.log(newString);
}


reverseString("creature")

function acronym(str){
    arr = str.split(" ");
    acr = "";
    for(let i = 0; i < arr.length; i++){
        acr += arr[i][0];
    }
    console.log(acr);
}

acronym("object oriented programming")