class Attack{
    private string Name;
    private int DamageAmount;

    public Attack(string Name, int DamageAmount){
        this.Name = Name;
        this.DamageAmount = DamageAmount;
    }

    public void UseAttack(){
        System.Console.WriteLine($"Just used {this.Name} for {this.DamageAmount} damage!");
    }
}