using System.ComponentModel.DataAnnotations;
namespace ProductsNCatagories.Models;

public class MyViewModel
{
    public Product? Product {get;set;}
    public Catagory? Catagory {get;set;}
    public ProdCatRelation? Relation {get;set;}
    public List<Product>? Products {get;set;}
    public List<Catagory>? Catagories {get;set;}
}