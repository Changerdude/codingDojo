using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace LoginAndReg.Models;

public class User
{
    [Key]
    public int UserId {get;set;}
    [Required(ErrorMessage="First Name is required.")]
    [MinLength(2)]
    public string FirstName {get;set;}
    [Required(ErrorMessage="Last Name is required.")]
    [MinLength(2)]
    public string LastName {get;set;}
    [Required(ErrorMessage="Email is required.")]
    [EmailAddress]
    [UniqueEmail]
    public string Email {get;set;}
    [Required(ErrorMessage="Password is required.")]
    [DataType(DataType.Password)]
    [MinLength(8)]
    public string Password {get;set;}
    [Required(ErrorMessage="Password Confirmation is required.")]
    [DataType(DataType.Password)]
    [NotMapped]
    [Compare("Password")]
    public string PwConfirm {get;set;}
    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;
}