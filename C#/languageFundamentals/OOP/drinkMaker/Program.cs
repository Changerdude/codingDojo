Soda coke = new Soda("Coke","Black",40.00,250,false);
Coffee coffee = new Coffee("coffee","Black",40.00,false,40,"dark","BEANS");
Wine red = new Wine("red","red",65.00,false,40,"italy",1999);

List<Drink> drinks = new List<Drink>() {coke,coffee,red};

foreach (Drink drink in drinks)
{
    drink.ShowDrink();
}