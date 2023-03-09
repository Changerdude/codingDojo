using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using SessionWorkshop.Models;

namespace SessionWorkshop.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    [HttpPost("Login")]
    public RedirectToActionResult Login(string Username){
        HttpContext.Session.SetString("Username", Username);
        HttpContext.Session.SetInt32("Num", 22);
        return RedirectToAction("Dashboard");
    }

    [HttpGet("Dashboard")]
    public IActionResult Dashboard(){
        if(HttpContext.Session.GetString("Username") != null){
            return View("Dashboard");
        } else {
            return RedirectToAction("Index");
        }
    }

    [HttpPost("Math")]
    public RedirectToActionResult Math(string Op){
        int Num = HttpContext.Session.GetInt32("Num").Value;
        switch (Op)
        {
            case "+1":
                Num++;
                break;
            case "-1":
                Num--;
                break;
            case "x2":
                Num *= 2;
                break;
            case "+R":
                Random rand = new Random();
                Num += rand.Next(0,101);
                break;
            default:
                break;
        }
        HttpContext.Session.SetInt32("Num", Num);
        return RedirectToAction("Dashboard");
    }

    [HttpGet("Logout")]
    public RedirectToActionResult Logout(){
        HttpContext.Session.Clear();
        return RedirectToAction("Index");
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
