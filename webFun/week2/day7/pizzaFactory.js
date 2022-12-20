function pizzaOven(){
    var pizza1 = {
        "crustType":"deep dish",
        "sauceType":"traditional",
        "cheeses":["mozzarella"],
        "toppings":["pepperoni","sausage"]
    } 
    var pizza2 = {
        "crustType":"hand tossed",
        "sauceType":"marinara",
        "cheeses":["mozzarella","feta"],
        "toppings":["mushrooms", "olives", "onions"]
    }
    var pizza3 = {
        "crustType":"thin crust",
        "sauceType":"alfredo",
        "cheeses":["mozzarella"],
        "toppings":["chicken", "broccoli"]
    }
    var pizza4 = {
        "crustType":"hand tossed",
        "sauceType":"barbecue",
        "cheeses":["mozzarella","chedder"],
        "toppings":["chicken", "bacon", "onions"]
    }
return pizza2;
}

function randomPizza(){
    var crusts = ["deep dish", "hand tossed", "thin crust"];
    var sauces = ["traditional", "marinara", "alfredo", "barbecue"];
    var cheeses = ["mozzarella", "feta", "chedder"];
    var toppings = ["pepperoni", "sausage", "mushrooms", "olives", "onions", "chicken", "broccoli", "bacon"];
    var selectedCheeses = [];
    for(var cheese in cheeses){
        if(randomSelect()){
            selectedCheeses.push(cheeses[cheese]);
        }
    }
    console.log(selectedCheeses);
    var selectedToppings = [];
    for(var topping in toppings){
        if(randomSelect()){
            selectedToppings.push(toppings[topping]);
        }
    }
    console.log(selectedToppings);
    var randomPizza = {
        "crustType":(crusts[Math.floor(Math.random()*crusts.length)]),
        "sauceType":(sauces[Math.floor(Math.random()*sauces.length)]),
        "cheeses":selectedCheeses,
        "toppings":selectedToppings
    }
return randomPizza;
}

function randomSelect(){
    var ran = Math.random();
    if(ran > 0.5){
        return true;
    } else {
        return false;
    }
}

for(let i = 0; i < 25; i++){
    console.log(randomPizza());
}
