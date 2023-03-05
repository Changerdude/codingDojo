int[] basicArray = {0,1,2,3,4,5,6,7,8,9};

string[] names = {"Tim", "Martin", "Nikki", "Sara"};

bool[] boolArray = new bool[10];

bool flipper = true;
for(int i = 0; i < boolArray.Length; i++){
    boolArray[i] = flipper;
    flipper = !flipper;
}

List<string> iceCream = new List<string>();
iceCream.Add("Vanilla");
iceCream.Add("Chocolate");
iceCream.Add("Strawberry");
iceCream.Add("Carmel Swirl");
iceCream.Add("Rocky Road");
System.Console.WriteLine(iceCream.Count);
System.Console.WriteLine(iceCream.ElementAt(2));
iceCream.RemoveAt(2);
System.Console.WriteLine(iceCream.Count);

Dictionary<string,string> favFlavors = new Dictionary<string, string>();
Random rand = new Random();
foreach (string name in names)
{
    favFlavors.Add(name,iceCream[rand.Next(0,4)]);
}

foreach(KeyValuePair<string,string> person in favFlavors){
    System.Console.WriteLine($"{person.Key}'s favorite flavor is {person.Value}.");
}