class Ninja{
    constructor(name,health=10,speed=3,strength=3){
        this.name = name,
        this.health = health,
        this.speed = speed,
        this.strength = strength
    }

    sayName(){
        console.log(this.name);
    }

    showStats(){
        this.sayName();
        console.log("Str: " + this.strength + "\nSpd: " + this.speed + "\nHp: " + this.health);
    }

    drinkSake(){
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hybusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();