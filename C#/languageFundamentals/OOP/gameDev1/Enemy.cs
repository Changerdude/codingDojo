class Enemy{
    private string Name;
    private int Health;
    private List<Attack> AttackList;

    public Enemy(string Name){
        this.Name = Name;
        this.Health = 100;
        this.AttackList = new List<Attack>();
    }

    public int GetHealth(){
        return this.Health;
    }
    public void RandomAttack(){
        Random rand = new Random();
        this.AttackList[rand.Next(this.AttackList.Count)].UseAttack();
    }

    public void AddAttack(Attack newAttack){
        this.AttackList.Add(newAttack);
    }
}