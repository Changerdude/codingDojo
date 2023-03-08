using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using DojoSurveyWithModel.Models;

namespace DojoSurveyWithModel.Controllers;

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
        return View();
    }

    [HttpPost("/submit")]
    public RedirectToActionResult Submit(FormData Data){
        if(Data.Comment == null) Data.Comment = "No Comments";
        return RedirectToAction("Details", Data);
    }

    [HttpGet("/details")]
    public ViewResult Details(FormData Data){
        return View(Data);
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
