class Wine : Drink {
    private string Region;
    private int Year;

    public Wine(string name, string color, double temp, bool isCarb, int calories, string region, int year) : base(name,color,temp,isCarb,calories){
        Region = region;
        Year = year;
    }

    public override void ShowDrink()
    {
        base.ShowDrink();
        System.Console.WriteLine($"Region: {Region}");
        System.Console.WriteLine($"Year: {Year}");
    }
}