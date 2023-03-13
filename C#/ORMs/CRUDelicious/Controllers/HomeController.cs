using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using CRUDelicious.Models;
namespace CRUDelicious.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private MyContext _context;

    public HomeController(ILogger<HomeController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet("")]
    public IActionResult Index()
    {
        List<Dish> AllDishes = _context.Dishes.ToList();
        return View("Index", AllDishes);
    }

    [HttpGet("/dishes/new")]
    public IActionResult New(){
        ViewBag.IsEdit = "false";
        return View("DishForm");
    }

    [HttpPost("/dishes/create")]
    public IActionResult Create(Dish newDish){
        if(ModelState.IsValid){
            _context.Add(newDish);
            _context.SaveChanges();
            return RedirectToAction("Index");
        } else {
            ViewBag.IsEdit = "false";
            return View("DishForm");
        }
    }

    [HttpGet("/dishes/{id}")]
    public IActionResult Show(int id){
        Dish? dish = _context.Dishes.FirstOrDefault(d => d.DishId == id);
        if(dish == null){
            return RedirectToAction("Index");
        } else {
            return View("Show", dish);
        }
    }

    [HttpGet("/dishes/{id}/edit")]
    public IActionResult Edit(int id){
        ViewBag.IsEdit = "true";
        Dish? dish = _context.Dishes.FirstOrDefault(d => d.DishId == id);
        if(dish == null){
            return RedirectToAction("Index");
        } else {
            return View("DishForm", dish);
        }
    }

    [HttpPost("/dishes/{id}/update")]
    public IActionResult Update(Dish newDish, int id){
        Dish? dish = _context.Dishes.FirstOrDefault(d => d.DishId == id);
        if(dish == null){
            return RedirectToAction("Index");
        } else {
            if(ModelState.IsValid){
                dish.Name = newDish.Name;
                dish.Chef = newDish.Chef;
                dish.Calories = newDish.Calories;
                dish.Tastiness = newDish.Tastiness;
                dish.Description = newDish.Description;
                dish.UpdatedAt = DateTime.Now;
                _context.SaveChanges();
                return RedirectToAction("Index");
            } else {
                ViewBag.IsEdit = "true";
                return View("DishForm", dish);
            }
        }
    }

    [HttpGet("/dishes/{id}/destroy")]
    public IActionResult Destroy(int id){
        Dish? dish = _context.Dishes.SingleOrDefault(d => d.DishId == id);
        if(dish == null){
            return RedirectToAction("Index");
        } else {
            _context.Dishes.Remove(dish);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
    }

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
