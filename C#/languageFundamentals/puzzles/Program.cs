// Directions
// Using the skills you have gained so far, complete these challenges:

// Coin Flip
// We've likely all flipped a coin at least once in our lives when trying to decide on this or that.
// Flipping a coin in person is easy. But how would you write your own coin flip function? 
// Write a function that returns "heads" or "tails" depending on the result you get.

// If you don't know where to start, consider the following prompts:

// How many results can you get when you flip a coin?
// How can we write code that produces a single, random result from our pool of options?
// What happens after the coin lands? (i.e. How do you determine what the result was and convey that to your user?)

static string FlipCoin()
{
    Random rand = new Random();
    string[] results = new string[] { "heads", "tails" };
    return results[rand.Next(2)];
}

for(int i = 0; i<10; i++){
    System.Console.WriteLine(FlipCoin());
}

// Dice Roll
// Once you have figured out coin flip, take your learning to the next level by creating 
// a dice roller. Once again, think about what it is like to roll a die in real life. How could you replicate those actions in code?

// Consider the following:

// How many sides is your die? (We recommend you start with a standard 6-sided die but feel free to start wherever you like!)
// How many results can we get based on how many sides there are? Write down all possible results if needed.
// Tip: Make sure to return the value rolled at the end.

// Bonus: Can you rewrite your function to accept a parameter for the number of sides so you can roll any number-sided die?
static int DiceRoll(int sides = 6)
{
    Random rand = new Random();
    return rand.Next(1, sides + 1);
}

for(int i = 0; i<10; i++){
    System.Console.WriteLine(DiceRoll(12));
}

// Stat Roll
// Once you have your dice roller all worked out, write a new function that will roll your dice 4 times 
// and returns a List of those 4 results. You can write your function to hard-code 4 dice rolls.

// Consider the following:

// How do you make a function run repeatedly?
// How can we see the results of our rolls? (What happens when you try to Console.WriteLine a List?)
// Bonus: Write your function to roll any number of times you would like.

// Bonus: After finishing your rolls, print the largest value you rolled.

static Dictionary<int, int> StatRoll(int rollAmount = 4)
{
    Dictionary<int, int> freqTable = new Dictionary<int, int>();
    for (int i = 0; i < rollAmount; i++)
    {
        int roll = DiceRoll();
        if (freqTable.ContainsKey(roll))
        {
            freqTable[roll]++;
        }else{
            freqTable.Add(roll, 1);
        }
    }
    foreach (KeyValuePair<int, int> item in freqTable)
    {
        System.Console.WriteLine($"{item.Key}: {item.Value}");
    }
    System.Console.WriteLine(freqTable.Keys.Max());
    return freqTable;
}

StatRoll();

// Roll Until...
// Write a new function that will roll your 6-sided die until you land on a certain result and 
// tracks how many rolls occurred until it lands on the given number. For example, you could tell your 
// code to keep rolling until your 6-sided die rolls the number 2. When you land on the number, return a 
// string that says "Rolled a {number} after {count} tries". 
// Tip: Do not hard-code the number you're looking for. Be able to accept any number.

// Consider the following:

// Do we know how many times our die will roll before it lands on the number we asked for? 
// If not, how will this influence the logical options we have?
// What would happen if we ask for a number that is not on our die? 
// (i.e. What happens if we tell our die to roll until it lands on 8 on a 6-sided die?) How can we prevent or handle unwanted inputs?

static string RollUntill(int target, int sides = 6){
    if( target > sides) return $"A {sides} sided dice will never roll a {target}.";

    int count = 0;
    int roll = 0;
    while( roll != target){
        roll = DiceRoll(sides);
        count++;
    }
    return $"Rolled a {target} after {count} tries.";

}

System.Console.WriteLine(RollUntill(3));
System.Console.WriteLine(RollUntill(13));
System.Console.WriteLine(RollUntill(13,20));
System.Console.WriteLine(RollUntill(100,100));