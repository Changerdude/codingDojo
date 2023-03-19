using System.ComponentModel.DataAnnotations;
namespace ChefsNDishes.Models;

public class DishFormViewModel
{
    public Dish? Dish {get;set;}
    public List<Chef>? AllChefs {get;set;}
}