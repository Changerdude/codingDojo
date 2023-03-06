MeleeFighter Tristan = new MeleeFighter("Tristan");
RangedFighter Aaorkra = new RangedFighter("Aaorkra");
MagicCaster Wilber = new MagicCaster("Wilber");

Tristan.PerformAttack(Aaorkra,Tristan.AttackList[1]);
Tristan.Rage(Wilber);
Aaorkra.PerformAttack(Tristan, Aaorkra.AttackList[0]);
Aaorkra.Dash();
Aaorkra.PerformAttack(Tristan, Aaorkra.AttackList[0]);
Wilber.PerformAttack(Tristan, Wilber.AttackList[0]);
Wilber.Heal(Aaorkra);
Wilber.Heal(Wilber);