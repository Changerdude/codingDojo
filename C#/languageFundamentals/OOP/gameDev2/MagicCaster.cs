class MagicCaster : Enemy {

    public MagicCaster(string name) : base(name,80){
        Attack FireBall = new Attack("FireBall",25);
        base.AddAttack(FireBall);
        Attack LightingBolt = new Attack("LightingBolt",20);
        base.AddAttack(LightingBolt);
        Attack StaffStrike = new Attack("StaffStrike",10);
        base.AddAttack(StaffStrike);
    }

    public void Heal(Enemy target){
        target.Health += 40;
        System.Console.WriteLine($"{target.Name} is healed to {target.Health}.");
    }
}