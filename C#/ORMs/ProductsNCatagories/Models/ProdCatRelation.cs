using System.ComponentModel.DataAnnotations;
namespace ProductsNCatagories.Models;

public class ProdCatRelation
{
    [Key]
    public int ProdCatRelationId {get;set;}
    public int ProductId {get;set;}
    public int CatagoryId {get;set;}
    public Product? Product {get;set;}
    public Catagory? Catagory {get;set;}

    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;
}