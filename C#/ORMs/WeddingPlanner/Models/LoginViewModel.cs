using System.ComponentModel.DataAnnotations;
namespace WeddingPlanner.Models;

public class LoginViewModel
{
    public User? User {get;set;}
    public Login? Login {get;set;}
}