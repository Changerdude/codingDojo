class RangedFighter : Enemy {
    public int Distance = 5;

    public RangedFighter(string name) : base(name){
        Attack Shoot = new Attack("Shoot an arrow",20);
        base.AddAttack(Shoot);
        Attack Throw = new Attack("Throw a knife",15);
        base.AddAttack(Throw);
    }

    public override void PerformAttack(Enemy target, Attack attack)
    {
        if (Distance > 10){
            base.PerformAttack(target, attack);
        } else {
            System.Console.WriteLine($"{Name} was too close to attack");
        }
    }

    public void Dash(){
        Distance = 20;
    }
}