using System.ComponentModel.DataAnnotations;
namespace ProductsNCategories.Models;

public class Category
{
    [Key]
    public int CategoryId {get;set;}
    [Required]
    public string Name {get;set;}
    public List<ProdCatRelation> ProdCatRelations {get;set;} = new List<ProdCatRelation>();
    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;
}