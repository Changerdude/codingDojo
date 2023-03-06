// Challenge 1
bool amProgrammer = true; //Changed from true string to true value
int Age = 27; // Changed from float value to int
List<string> Names = new List<string>();
Names.Add("Monica"); //Use add to append to Lists
Dictionary<string, string> MyDictionary = new Dictionary<string, string>();
MyDictionary.Add("Hello", "0");
MyDictionary.Add("Hi there","0"); //changed 0 value to 0 string
// This is a tricky one! Hint: look up what a char is in C#
string MyName = "MyName"; // Single quote donated a single char vs. a double quotes being a string
// Challenge 2
List<int> Numbers = new List<int>() {2,3,6,7,1,5};
for(int i = Numbers.Count -1 ; i >= 0; i--) //Count is the number of entries not index's
{
    Console.WriteLine(Numbers[i]);
}
// Challenge 3
List<int> MoreNumbers = new List<int>() {12,7,10,-3,9};
foreach(int i in MoreNumbers)
{
    Console.WriteLine(i);//i is the value here, not the index
}
// Challenge 4
List<int> EvenMoreNumbers = new List<int> {3,6,9,12,14};
foreach(int num in EvenMoreNumbers)
{
    if(num % 3 == 0)
    {
        //num = 0; cannot assign the iteration variable foreach is read only from the collection
    }
}
// Challenge 5
// What can we learn from this error message?
string MyString = "superduberawesome";
// MyString[7] = "p"; string says its read only, cannot assign like an array
System.Console.WriteLine(MyString);
// Challenge 6
// Hint: some bugs don't come with error messages
Random rand = new Random();
int randomNum = rand.Next(13);//The end arg of rand is exclusive changed from 12 to 13 to include 12 
if(randomNum == 12)
{
    Console.WriteLine("Hello");
}

