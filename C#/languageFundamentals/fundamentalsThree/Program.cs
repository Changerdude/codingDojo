static void PrintList(List<string> MyList)
{
    foreach (string name in MyList)
    {
        System.Console.WriteLine(name);
    }
}
List<string> TestStringList = new List<string>() {"Harry", "Steve", "Carla", "Jeanne"};
PrintList(TestStringList);

static void SumOfNumbers(List<int> IntList)
{
    int sum = 0;
    foreach (int num in IntList)
    {
        sum += num;
    }
    System.Console.WriteLine(sum);
}
List<int> TestIntList = new List<int>() {2,7,12,9,3};
// You should get back 33 in this example
SumOfNumbers(TestIntList);

static int FindMax(List<int> IntList)
{
    return IntList.Max();
}
List<int> TestIntList2 = new List<int>() {-9,12,10,3,17,5};
// You should get back 17 in this example

System.Console.WriteLine(FindMax(TestIntList2));

static List<int> SquareValues(List<int> IntList)
{
    return IntList.ConvertAll<int>(num => num*num);
}
List<int> TestIntList3 = new List<int>() {1,2,3,4,5};
// You should get back [1,4,9,16,25], think about how you will show that this worked
SquareValues(TestIntList3).ForEach(num => System.Console.WriteLine(num));

static int[] NonNegatives(int[] IntArray)
{
    int[] NewArray = IntArray.ToList().ConvertAll<int>(num => {
        if ( num < 0){
            return 0;
        } else {
            return num;
        }
    }).ToArray();
    return NewArray;
}
int[] TestIntArray = new int[] {-1,2,3,-4,5};
// You should get back [0,2,3,0,5], think about how you will show that this worked
Array.ForEach(NonNegatives(TestIntArray), Console.WriteLine);

static void PrintDictionary(Dictionary<string,string> MyDictionary)
{
    foreach (KeyValuePair<string,string> item in MyDictionary){
        System.Console.WriteLine($"{item.Key}: {item.Value}");
    }
}
Dictionary<string,string> TestDict = new Dictionary<string,string>();
TestDict.Add("HeroName", "Iron Man");
TestDict.Add("RealName", "Tony Stark");
TestDict.Add("Powers", "Money and intelligence");
PrintDictionary(TestDict);

static bool FindKey(Dictionary<string,string> MyDictionary, string SearchTerm)
{
    return MyDictionary.ContainsKey(SearchTerm);

}
// Use the TestDict from the earlier example or make your own
// This should print true
Console.WriteLine(FindKey(TestDict, "RealName"));
// This should print false
Console.WriteLine(FindKey(TestDict, "Name"));

// Ex: Given ["Julie", "Harold", "James", "Monica"] and [6,12,7,10], return a dictionary
// {
//	"Julie": 6,
//	"Harold": 12,
//	"James": 7,
//	"Monica": 10
// } 
static Dictionary<string,string> GenerateDictionary(List<string> Names, List<int> Numbers) //Changed the return to use prior print dictionary function
{
    Dictionary<string,string> NewDictionary = new Dictionary<string, string>();
    for(int i = 0; i < Names.Count; i++){
        NewDictionary.Add(Names[i],Numbers[i].ToString());
    }
    return NewDictionary;
}
List<string> test1 = new List<string> {"Julie", "Harold", "James", "Monica"};
List<int> test1Int = new List<int> {6,12,7,10};
PrintDictionary(GenerateDictionary(test1,test1Int));
// We've shown several examples of how to set your tests up properly, it's your turn to set it up!
// Your test code here

