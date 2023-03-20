using System.ComponentModel.DataAnnotations;
namespace ProductsNCategories.Models;

public class MyViewModel
{
    public Product? Product {get;set;}
    public Category? Category {get;set;}
    public ProdCatRelation? Relation {get;set;}
    public List<Product>? Products {get;set;}
    public List<Category>? Categories {get;set;}
}