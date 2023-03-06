class Soda : Drink{
    private bool isDiet;

    public Soda(string name, string color, double temp, int calories, bool isDiet) : base(name,color,temp,true,calories){
        this.isDiet = isDiet;
    }
    public override void ShowDrink()
    {
        base.ShowDrink();
        System.Console.WriteLine($"Diet: {(isDiet ? "Yes" : "No")}");
    }
}