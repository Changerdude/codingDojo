using System.ComponentModel.DataAnnotations;
namespace WeddingPlanner.Models;

public class Wedding
{
    [Key]
    public int WeddingId {get;set;}
    [Required]
    public string WedderOne {get;set;}
    [Required]
    public string WedderTwo {get;set;}
    [Required]
    [DataType(DataType.Date)]
    public DateTime Date {get;set;}
    [Required]
    public string Address {get;set;}
    public int CreatorId {get;set;}
    public List<RSVP> GuestList {get;set;} = new List<RSVP>();
    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;
}