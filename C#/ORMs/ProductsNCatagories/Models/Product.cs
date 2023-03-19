using System.ComponentModel.DataAnnotations;
namespace ProductsNCatagories.Models;

public class Product
{
    [Key]
    [Required]
    public int ProductId {get;set;}
    [Required]
    public string Name {get;set;}
    [Required]
    public string Description {get;set;}
    [Required]
    public float? Price {get;set;}
    public List<ProdCatRelation> ProdCatRelations {get;set;} = new List<ProdCatRelation>();
    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;
}