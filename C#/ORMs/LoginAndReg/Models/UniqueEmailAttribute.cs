using System.ComponentModel.DataAnnotations;
namespace LoginAndReg.Models;

public class UniqueEmailAttribute : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)    
    {
        if (value == null)
        {
            return new ValidationResult("Email is required");
        }
        MyContext _context = (MyContext)validationContext.GetService(typeof(MyContext));
        if(_context.Users.Any(e=>e.Email == value.ToString()))
        {
            return new ValidationResult("Email must be unique!");
        }
        return ValidationResult.Success;
        
    }
}