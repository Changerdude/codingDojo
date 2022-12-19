function rollD6(min, max){
    max += 1;
    return Math.floor(Math.random() * (max - min) + min);
}

const answers = new Map();
answers.set(rollD6(1,6), 1);

for(let i = 0; i < 99; i++){
    var roll = rollD6(1,6);
    if(answers.has(roll)){
        answers.set(roll, (answers.get(roll) + 1));
    } else {
        answers.set(roll , 1);
    }
}
console.log(answers);