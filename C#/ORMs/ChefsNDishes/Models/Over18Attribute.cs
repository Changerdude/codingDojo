using System.ComponentModel.DataAnnotations;
namespace ChefsNDishes.Models;

public class Over18Attribute : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)    
    {
        string DateString = (string)value;
        string[] DateVals = DateString.Split('-');
        DateTime BirthdayDateTime = new DateTime(Int32.Parse(DateVals[0]), Int32.Parse(DateVals[1]), Int32.Parse(DateVals[2]), 8, 00, 00);
        DateTime Today = DateTime.Today;
        int Age;
        if(Today.Month < BirthdayDateTime.Month)
        {
        Age = Today.Year - BirthdayDateTime.Year - 1;
        }
        else
        {
        Age = Today.Year - BirthdayDateTime.Year;
        }
        if (Age < 18)
        {
            return new ValidationResult("Chef must be over 18");
        } else {
            return ValidationResult.Success;
        }
    }
}