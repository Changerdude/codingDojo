using Microsoft.AspNetCore.Mvc;
namespace RazorFun.Controllers;
public class IndexController : Controller
{
    [HttpGet("")]
    public ViewResult Index()
    {            
        return View();
    }
}