using System.ComponentModel.DataAnnotations;
namespace CRUDelicious.Models;

public class PosCalAttribute : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)    
    {
        

        if ((int)value <= 0)
        {
            return new ValidationResult("Must have a calorie count above 0");
        } else {

            return ValidationResult.Success;
        }
    }
}