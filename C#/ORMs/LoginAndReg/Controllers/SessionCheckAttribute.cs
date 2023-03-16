using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
namespace LoginAndReg.Controllers;

public class SessionCheckAttribute : ActionFilterAttribute
{
    public override void OnActionExecuting(ActionExecutingContext context)
    {
        int? UserId = context.HttpContext.Session.GetInt32("UUID");
        if(UserId == null)
        {
            context.Result = new RedirectToActionResult("Index", "Home", null);
        }
    }
}