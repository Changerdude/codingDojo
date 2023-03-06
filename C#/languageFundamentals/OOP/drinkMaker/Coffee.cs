class Coffee : Drink {
    private string Roast;
    private string Beans;

    public Coffee(string name, string color, double temp, bool isCarb, int calories, string roast, string beans) : base(name,color,temp,isCarb,calories){
        Roast = roast;
        Beans = beans;
    }

    public override void ShowDrink()
    {
        base.ShowDrink();
        System.Console.WriteLine($"Roast: {Roast}");
        System.Console.WriteLine($"Beans: {Beans}");
    }
}