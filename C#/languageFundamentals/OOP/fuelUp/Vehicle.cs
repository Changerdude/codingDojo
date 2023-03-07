abstract class Vehicle{
    private string Name;
    private int PassangerLimit;
    private string Color;
    private bool HasEngine;
    private int Mileage = 0;
    public Vehicle(string name, string color){
        Name = name;
        PassangerLimit = 4;
        Color = color;
        HasEngine = true;
    }
    public Vehicle(string name,int passangerLimit,string color,bool hasEngine){
        Name = name;
        PassangerLimit = passangerLimit;
        Color = color;
        HasEngine = hasEngine;
    }

    public void ShowInfo(){
        System.Console.WriteLine(Name);
        System.Console.WriteLine(PassangerLimit);
        System.Console.WriteLine(Color);
        System.Console.WriteLine(HasEngine);
        System.Console.WriteLine(Mileage);
    }

    public void Travel(int distance){
        Mileage += distance;
        System.Console.WriteLine($"This {Name} has driven {Mileage} miles.");
    }
}