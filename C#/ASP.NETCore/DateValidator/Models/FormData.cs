#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace DateValidator.Models;
public class FormData
{
    [Required(ErrorMessage="Name is required.")]
    [MinLength(2,ErrorMessage="Name must be more that two characters.")]
    public string Name {get;set;}

    [Required(ErrorMessage="Location is required.")]
    public string Location {get;set;}

    [Required(ErrorMessage="Language is required.")]
    public string Language {get;set;}

    [PrevDate]
    [DataType(DataType.Date)]
    public string Date {get;set;}

    [MinLength(20,ErrorMessage="Comments must be longer that twenty characters.")]
    public string? Comment {get;set;}
}