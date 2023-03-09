using System.ComponentModel.DataAnnotations;
namespace FormSubmission.Models;

public class PrevDateAttribute : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)    
    {
        string DateString = (string)value;
        string[] DateVals = DateString.Split('-');
        DateTime CheckedDate = new DateTime(Int32.Parse(DateVals[0]), Int32.Parse(DateVals[1]), Int32.Parse(DateVals[2]), 8, 00, 00);
        DateTime CurrentTime = DateTime.Now;
        if (DateTime.Compare(CheckedDate,CurrentTime) > 0)
        {
            return new ValidationResult("Date cant be past today!");
        } else {
            return ValidationResult.Success;
        }
    }
}