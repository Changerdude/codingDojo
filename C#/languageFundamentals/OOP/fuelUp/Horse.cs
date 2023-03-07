class Horse : Vehicle, INeedFuel {
    public string FuelType {get;set;} = "hay";
    public int FuelTotal {get;set;} = 10;
    public Horse(string name, string color):base(name,2,color,false){

    }
    public void GiveFuel(int Amount){
        FuelTotal += Amount;
    }
}