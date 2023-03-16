using System.ComponentModel.DataAnnotations;
namespace LoginAndReg.Models;

public class ViewModel
{
    public User? User {get;set;}
    public Login? Login {get;set;}
}