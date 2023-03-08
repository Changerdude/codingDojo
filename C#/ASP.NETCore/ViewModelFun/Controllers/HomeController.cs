using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ViewModelFun.Models;

namespace ViewModelFun.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }
    [HttpGet("/")]
    public IActionResult Index()
    {
        string Message = "A message from the ViewModel";
        return View("Index", Message);
    }
    [HttpGet("/numbers")]
    public IActionResult Numbers()
    {
        int[] NumArr = new int[] {2,5,4,77,4,2,4};
        return View(NumArr);
    }
    [HttpGet("/user")]
    public IActionResult User()
    {
        User Jim = new User("Jim","Jeffries");
        return View(Jim);
    }
    [HttpGet("/users")]
    public IActionResult Users()
    {
        User Jim = new User("Jim","Jeffries");
        User Alice = new User("Alice","Cooper");
        User Mary = new User("Mary","Anne");
        User Jawn = new User("Jawn","ONiel");
        List<User> UserList = new List<User>(){Jim,Alice,Mary,Jawn};
        return View(UserList);
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
