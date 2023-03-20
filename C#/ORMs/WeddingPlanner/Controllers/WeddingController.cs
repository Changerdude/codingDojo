using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using WeddingPlanner.Models;

namespace WeddingPlanner.Controllers;

public class WeddingController : Controller
{
    private readonly ILogger<WeddingController> _logger;
    private MyContext _context;

    public WeddingController(ILogger<WeddingController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    [SessionCheck]
    [HttpGet("/weddings")]
    public IActionResult Index()
    {
        List<Wedding> AllWeddings = _context.Weddings.Include(w => w.RSVP).ToList();
        return View("Index", AllWeddings);
    }

    [SessionCheck]
    [HttpGet("/weddings/new")]
    public IActionResult WeddingNew()
    {
        return View("WeddingForm");
    }

    [SessionCheck]
    [HttpPost("/weddings/create")]
    public IActionResult WeddingCreate(Wedding newWedding)
    {
        if(!ModelState.IsValid)
        {
            return View("WeddingForm");
        }
        newWedding.CreatorId = HttpContext.Session.GetInt32("UUID");
        _context.Weddings.Add(newWedding);
        _context.SaveChanges();
        return RedirectToAction("Index");
    }

    [SessionCheck]
    [HttpGet("/weddings/{WeddingId}")]
    public IActionResult WeddingShow(int WeddingId)
    {
        Wedding? Wedding = _context.Weddings.Include(w => w.GuestList).ThenInclude(r => r.User).FirstOrDefault(w => w.WeddingId == WeddingId);
        if(Wedding == null)
        {
            return RedirectToAction("Index");
        }
        return View("WeddingShow", Wedding);
    }

    [SessionCheck]
    [HttpGet("/weddings/destroy/{WeddingId}")]
    public IActionResult WeddingDestroy(int WeddingId)
    {
        Wedding? Wedding = _context.Weddings.SingleOrDefault(w => w.WeddingId == WeddingId);
        if(Wedding == null || Wedding.CreatorId != HttpContext.Session.GetInt32("UUID"))
        {
            return RedirectToAction("Index");
        }
        _context.Weddings.Remove(Wedding);
        _context.SaveChanges();
        return RedirectToAction("Index");
    }

    [HttpGet("/weddings/rsvp/{WeddingId}")]
    public IActionResult WeddingRSVPToggle(int WeddingId){
        bool isUser = _context.Users.Any(u => u.UserId == HttpContext.Session.GetInt32("UUID"));
        bool ValidWedding = _context.Weddings.Any(w => w.WeddingId == WeddingId);
        if(!isUser || !ValidWedding)
        {
            return RedirectToAction("Index");
        }
        RSVP RSVP = _context.RSVPs.SingleOrDefault(r => r.WeddingId == WeddingId && r.UserId == HttpContext.Session.GetInt32("UUID"));
        if(RSVP == null)
        {
            RSVP newRSVP = new RSVP()
            {
                WeddingId = WeddingId,
                UserId = HttpContext.Session.GetInt32("UUID")
            };
            _context.RSVPs.Add(newRSVP);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
        _context.RSVPs.Remove(RSVP);
        _context.SaveChanges();
        return RedirectToAction("Index");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}