using Microsoft.AspNetCore.Mvc;
namespace Profile1.Controllers;
public class IndexController : Controller
{
    [HttpGet("")]
    public ViewResult Index()
    {            
        return View();
    }

    [HttpGet("projects")]
    public ViewResult Projects()
    {
        Project pro1 = new Project("img1.png","Project 1", "Very cool project");
        Project pro2 = new Project("img2.png","Project 2", "Very cool other project");
        Project pro3 = new Project("img3.png","Project 3", "Kinda cool something project");
        Project pro4 = new Project("img4.png","Project 4", "Very not cool project");
        ViewBag.List = new List<Project>() {pro1,pro2,pro3,pro4};
        return View("Projects");
    }

    [HttpGet("contact")]
    public ViewResult Contact()
    {
        return View("Contact");
    }
}
