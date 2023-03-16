using System.ComponentModel.DataAnnotations;
namespace LoginAndReg.Models;

public class Login
{
    [Required]
    [EmailAddress]
    public string Email {get;set;}
    [Required]
    [DataType(DataType.Password)]
    public string Password {get;set;}

    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;
}