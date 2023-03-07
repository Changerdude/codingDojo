Car car = new Car("Honda", 4, "Silver");
Horse horse = new Horse("Jeff","Brown");
Bicycle bicycle = new Bicycle("Tricle","Red",false);

// Vehicle vehicle = new Vehicle("name", "purple");
// Cannot create an instance of Vehicle because it is abstract

List<Vehicle> vehicles = new List<Vehicle>() {car,horse,bicycle};

List<INeedFuel> needFuel = new List<INeedFuel>();

foreach (var vehicle in vehicles)
{
    if((vehicle is INeedFuel)){
        needFuel.Add(vehicle as INeedFuel);
    }
}
needFuel.ConvertAll<int>(vehicle => vehicle.FuelTotal+=10);
needFuel.ForEach(vehicle => System.Console.WriteLine($"Fuel level: {vehicle.FuelTotal}"));

