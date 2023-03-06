class Enemy{
    public string Name;
    public int Health;
    public List<Attack> AttackList;

    public Enemy(string Name){
        this.Name = Name;
        this.Health = 100;
        this.AttackList = new List<Attack>();
    }
    public Enemy(string Name, int Health){
        this.Name = Name;
        this.Health = Health;
        this.AttackList = new List<Attack>();
    }

    public void AddAttack(Attack newAttack){
        this.AttackList.Add(newAttack);
    }

    public virtual void PerformAttack(Enemy target, Attack attack){
        target.TakeDamage(attack.DamageAmount);
        System.Console.WriteLine($"{Name} uses {attack.Name} on {target.Name} for {attack.DamageAmount} damage, reducing health to {target.Health}.");
    }

    public void TakeDamage(int damage){
        Health -= damage;
    }
}