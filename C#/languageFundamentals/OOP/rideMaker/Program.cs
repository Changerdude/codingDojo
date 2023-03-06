Vehicle car1 = new Vehicle("Honda","Silver");
Vehicle car2 = new Vehicle("Jeep",15,"Orange",true);
Vehicle car3 = new Vehicle("Dodge", "White");
Vehicle car4 = new Vehicle("Box",1,"Brown",false);

List<Vehicle> vehicles = new List<Vehicle>() {car1,car2,car3,car4};

foreach (Vehicle car in vehicles)
{
    car.ShowInfo();
}

car4.Travel(100);
car4.ShowInfo();