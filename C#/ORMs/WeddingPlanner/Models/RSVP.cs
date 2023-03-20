using System.ComponentModel.DataAnnotations;
namespace WeddingPlanner.Models;

public class RSVP
{
    [Key]
    public int RSVPId {get;set;}
    [Required]
    public int WeddingId {get;set;}
    [Required]
    public int UserId {get;set;}
    public Wedding? Wedding {get;set;}
    public User? User {get;set;}

    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;
}