using Microsoft.AspNetCore.Mvc;
namespace Countdown.Controllers;
public class IndexController : Controller
{
    [HttpGet("")]
    public ViewResult Index()
    {            
        return View();
    }
}