class Vehicle{
    private string name;
    private int passangerLimit;
    private string color;
    private bool hasEngine;
    private int mileage = 0;
    public Vehicle(string name, string color){
        this.name = name;
        this.passangerLimit = 4;
        this.color = color;
        this.hasEngine = true;
    }
    public Vehicle(string name,int passangerLimit,string color,bool hasEngine){
        this.name = name;
        this.passangerLimit = passangerLimit;
        this.color = color;
        this.hasEngine = hasEngine;
    }

    public void ShowInfo(){
        System.Console.WriteLine(this.name);
        System.Console.WriteLine(this.passangerLimit);
        System.Console.WriteLine(this.color);
        System.Console.WriteLine(this.hasEngine);
        System.Console.WriteLine(this.mileage);
    }

    public void Travel(int distance){
        this.mileage += distance;
        System.Console.WriteLine($"This car has driven {this.mileage} miles.");
    }
}