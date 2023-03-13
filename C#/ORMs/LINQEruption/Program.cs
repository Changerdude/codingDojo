List<Eruption> eruptions = new List<Eruption>()
{
    new Eruption("La Palma", 2021, "Canary Is", 2426, "Stratovolcano"),
    new Eruption("Villarrica", 1963, "Chile", 2847, "Stratovolcano"),
    new Eruption("Chaiten", 2008, "Chile", 1122, "Caldera"),
    new Eruption("Kilauea", 2018, "Hawaiian Is", 1122, "Shield Volcano"),
    new Eruption("Hekla", 1206, "Iceland", 1490, "Stratovolcano"),
    new Eruption("Taupo", 1910, "New Zealand", 760, "Caldera"),
    new Eruption("Lengai, Ol Doinyo", 1927, "Tanzania", 2962, "Stratovolcano"),
    new Eruption("Santorini", 46, "Greece", 367, "Shield Volcano"),
    new Eruption("Katla", 950, "Iceland", 1490, "Subglacial Volcano"),
    new Eruption("Aira", 766, "Japan", 1117, "Stratovolcano"),
    new Eruption("Ceboruco", 930, "Mexico", 2280, "Stratovolcano"),
    new Eruption("Etna", 1329, "Italy", 3320, "Stratovolcano"),
    new Eruption("Bardarbunga", 1477, "Iceland", 2000, "Stratovolcano")
};
// Example Query - Prints all Stratovolcano eruptions
IEnumerable<Eruption> stratovolcanoEruptions = eruptions.Where(c => c.Type == "Stratovolcano");
// PrintEach(stratovolcanoEruptions, "Stratovolcano eruptions.");
// Execute Assignment Tasks here!
Eruption Chile = eruptions.FirstOrDefault(eru => eru.Location == "Chile");
System.Console.WriteLine(Chile.ToString());

Eruption Haw = eruptions.FirstOrDefault(eru => eru.Location == "Hawaiian Is");
System.Console.WriteLine(Haw != null ? Haw.ToString() : "No Hawaiian Is Eruption Found");

Eruption Greenland = eruptions.FirstOrDefault(eru => eru.Location == "Greenland");
System.Console.WriteLine(Greenland != null ? Greenland.ToString() : "No Greenland Eruption Found");

Eruption NZ = eruptions.Where(eru=> eru.Year > 1900).FirstOrDefault(eru=>eru.Location == "New Zealand");
System.Console.WriteLine(NZ.ToString());

IEnumerable<Eruption> Tall = eruptions.Where(eru=>eru.ElevationInMeters > 2000);
PrintEach(Tall, "Over 2000m");

IEnumerable<Eruption> Ls = eruptions.Where(eru=>eru.Volcano.StartsWith("L"));
PrintEach(Ls, "Starting with L");
System.Console.WriteLine($"Found {Ls.Count()} matches in total.");

int HighestEle = eruptions.Max(eru=>eru.ElevationInMeters);
System.Console.WriteLine(HighestEle);

Eruption Tallest = eruptions.FirstOrDefault(eru=>eru.ElevationInMeters == HighestEle);
System.Console.WriteLine(Tallest.ToString());

IEnumerable<Eruption> Alphabetical = eruptions.OrderBy(eru=>eru.Volcano);
PrintEach(Alphabetical, "Alphabetical");

System.Console.WriteLine(eruptions.Sum(eru=>eru.ElevationInMeters));

bool EruptIn2000 = eruptions.Any(eru=>eru.Year == 2000);
System.Console.WriteLine(EruptIn2000 ? "Found an eruption in the year 2000" : "Found no eruption in the year 2000");

IEnumerable<Eruption> ThreeStrato = eruptions.Where(eru=>eru.Type == "Stratovolcano").Take(3);
PrintEach(ThreeStrato, "First three Stratovolcano found");

IEnumerable<Eruption> Before1000 = eruptions.Where(eru=>eru.Year < 1000).OrderBy(eru=>eru.Volcano);
PrintEach(Before1000, "Before year 1000");

IEnumerable<string> Before1000Names = eruptions.Where(eru=>eru.Year < 1000).OrderBy(eru=>eru.Volcano).Select(eru=>eru.Volcano);
foreach (string name in Before1000Names)
{
    System.Console.WriteLine(name);
}

// Helper method to print each item in a List or IEnumerable. This should remain at the bottom of your class!
static void PrintEach(IEnumerable<Eruption> items, string msg = "")
{
    Console.WriteLine("\n" + msg);
    foreach (Eruption item in items)
    {
        Console.WriteLine(item.ToString());
    }
}