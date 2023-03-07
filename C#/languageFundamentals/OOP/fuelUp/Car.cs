class Car : Vehicle, INeedFuel {
    public string FuelType {get;set;} = "gas";
    public int FuelTotal {get;set;} = 10;
    public Car(string name, int passangerLimit, string color):base(name,passangerLimit,color,true){

    }

    public void GiveFuel(int Amount){
        FuelTotal += Amount;
    }
}