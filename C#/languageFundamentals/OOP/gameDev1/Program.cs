Enemy jake = new Enemy("Jake");
Attack slash = new Attack("Slash",5);
Attack firebolt = new Attack("Firebolt",10);
Attack fireball = new Attack("Fireball",30);

jake.AddAttack(slash);
jake.AddAttack(firebolt);
jake.AddAttack(fireball);

for(int i =0; i<100 ; i++){
    jake.RandomAttack();
}
System.Console.WriteLine(jake.GetHealth());