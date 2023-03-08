using Microsoft.AspNetCore.Mvc;
namespace Countdown.Controllers;
public class IndexController : Controller
{
    [HttpGet("")]
    public ViewResult Index()
    {            
        return View("Index");
    }

    [HttpPost("submit")]
    public RedirectToActionResult Submit(string name, string location, string language, string comment){
        Dictionary<string,string> FormInfo = new Dictionary<string, string>();
        FormInfo.Add("Name", name);
        FormInfo.Add("Location", location);
        FormInfo.Add("Language", language);
        FormInfo.Add("Comment", comment);
        if(FormInfo["Comment"] == null) FormInfo["Comment"] = "No Comment";
        return RedirectToAction("Details", FormInfo);
    }

    [HttpGet("details")]
    public ViewResult Details(Dictionary<string, string> FormInfo){
        ViewBag.FormInfo = FormInfo;
        return View("Details");
    }
}