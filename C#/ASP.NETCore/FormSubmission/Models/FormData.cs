#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace FormSubmission.Models;
public class FormData
{
    [Required(ErrorMessage="Name is required.")]
    [MinLength(2,ErrorMessage="Name must be more that two characters.")]
    public string Name {get;set;}

    [Required(ErrorMessage="Email is required.")]
    [EmailAddress]
    public string Email {get;set;}

    [Required(ErrorMessage="Password is required.")]
    [MinLength(8,ErrorMessage="Password must be at least 8 characters long.")]
    [DataType(DataType.Password)]
    public string Password {get;set;}

    [Required]
    [PrevDate]
    [DataType(DataType.Date)]
    public string Date {get;set;}

    [Required(ErrorMessage="Favorite odd  is required.")]
    [OddNum]
    public int? OddNumber {get;set;}
}