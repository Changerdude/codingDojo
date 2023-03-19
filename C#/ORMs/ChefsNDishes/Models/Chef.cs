using System.ComponentModel.DataAnnotations;
namespace ChefsNDishes.Models;

public class Chef
{
    [Key]
    public int ChefId {get;set;}
    [Required]
    public string FirstName {get;set;}
    [Required]
    public string LastName {get;set;}
    [Required]
    [DataType(DataType.Date)]
    [Over18]
    public string Birthday {get;set;}
    public List<Dish> Dishes {get;set;} = new List<Dish>();
    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;

    public int GetAge()
    {
        string[] DateVals = this.Birthday.Split('-');
        DateTime BirthdayDateTime = new DateTime(Int32.Parse(DateVals[0]), Int32.Parse(DateVals[1]), Int32.Parse(DateVals[2]), 8, 00, 00);
        DateTime Today = DateTime.Today;
        if(Today.Month < BirthdayDateTime.Month)
        {
        return Today.Year - BirthdayDateTime.Year - 1;
        }
        else
        {
        return Today.Year - BirthdayDateTime.Year;
        }
    }
}