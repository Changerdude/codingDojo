class MeleeFighter : Enemy {

    public MeleeFighter(string name) : base(name, 120){
        Attack Punch = new Attack("Punch",20);
        base.AddAttack(Punch);
        Attack Kick = new Attack("Kick",15);
        base.AddAttack(Kick);
        Attack Tackle = new Attack("Tackle",25);
        base.AddAttack(Tackle);
    }

    public void Rage(Enemy target){
        Random rand = new Random();
        Attack rageAttack = AttackList[rand.Next(AttackList.Count)];
        rageAttack.DamageAmount += 10;
        base.PerformAttack(target,rageAttack);
    }
}