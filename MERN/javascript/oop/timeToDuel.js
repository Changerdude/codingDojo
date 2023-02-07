class Card{
    constructor(name,cost){
        this.name = name,
        this.cost = cost
    }
}

class Unit extends Card{
    constructor(name,cost,power,resiliance){
        super(name,cost),
        this.power = power,
        this.resiliance = resiliance
    }

    takeEffect(stat,mag){
        stat == "power" ? this.power += mag : this.resiliance += mag;
    }

    attack(target){
        if( target instanceof Unit ) {
            target.getAttacked(this.power)
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }

    getAttacked(attackDmg){
        this.resiliance -= attackDmg
        if(this.resiliance <= 0) console.log(this.name + " is dead.");
    }
}

class Effect extends Card{
    constructor(name,cost,text,stat,magnitude){
        super(name,cost)
        this.text = text,
        this.stat = stat,
        this.magnitude = magnitude
    }

    playEffect(target){
        if( target instanceof Unit ) {
            target.takeEffect(this.stat,this.magnitude)
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const rbn = new Unit("Red Belt Ninja", 3,3,4);
const bbn = new Unit("Black Belt Ninja", 4,5,4);

const efc1 = new Effect("Hard Algorithm",2,"increase target's resiliance by 3","resiliance",3)
const efc2 = new Effect("Unhandled Promise Rejection",1,"reduce target's resilience by 2","resiliance",-2)
const efc3 = new Effect("Pair Programming",3,"increase target's power by 2","power",2)

efc1.playEffect(rbn);
efc2.playEffect(bbn);
efc3.playEffect(rbn);
rbn.attack(bbn)