using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ChefsNDishes.Models;

namespace ChefsNDishes.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private MyContext _context;

    public HomeController(ILogger<HomeController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet("/")]
    public IActionResult Index()
    {
        List<Chef> AllChefs = _context.Chefs.Include(c => c.Dishes).ToList();
        return View("Index" , AllChefs);
    }


    [HttpGet("/chefs/new")]
    public IActionResult ChefNew()
    {
        return View("ChefForm");
    }

    [HttpPost("/chefs/create")]
    public IActionResult ChefCreate(Chef newChef)
    {
        if(!ModelState.IsValid)
        {
            return View("ChefForm");
        }
        _context.Chefs.Add(newChef);
        _context.SaveChanges();
        return RedirectToAction("Index");
    }

    [HttpGet("/dishes")]
    public IActionResult DishShow()
    {
        List<Dish> AllDishes = _context.Dishes.Include(d => d.Chef).ToList();
        return View("DishShow" , AllDishes);
    }

    [HttpGet("/dishes/new")]
    public IActionResult DishNew()
    {
        DishFormViewModel ViewModel = new DishFormViewModel()
        {
            AllChefs = _context.Chefs.ToList()
        };
        return View("DishForm", ViewModel);
    }

    [HttpPost("/dishes/create")]
    public IActionResult DishCreate(DishFormViewModel newDish)
    {
        if(!ModelState.IsValid)
        {
        DishFormViewModel ViewModel = new DishFormViewModel()
        {
            AllChefs = _context.Chefs.ToList()
        };
            return View("DishForm", ViewModel);
        }
        _context.Dishes.Add(newDish.Dish);
        _context.SaveChanges();
        return RedirectToAction("DishShow");
    }

    [HttpGet("/privacy")]
    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
