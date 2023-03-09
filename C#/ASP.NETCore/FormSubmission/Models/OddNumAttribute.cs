using System.ComponentModel.DataAnnotations;
namespace FormSubmission.Models;

public class OddNumAttribute : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)    
    {
        int CheckedInt = (int)value;
        if ((int)value % 2 == 0)
        {
            return new ValidationResult("Has to be odd!");
        } else {
            return ValidationResult.Success;
        }
    }
}