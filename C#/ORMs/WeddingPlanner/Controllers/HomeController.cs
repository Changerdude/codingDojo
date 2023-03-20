using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using WeddingPlanner.Models;

namespace WeddingPlanner.Controllers;

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
        return View();
    }

    [HttpPost("/user/create")]
    public IActionResult CreateUser(LoginViewModel newUser)
    {
        if(!ModelState.IsValid)
        {
            return View("Index", newUser);
        }
        PasswordHasher<User> Hasher = new PasswordHasher<User>();
        newUser.User.Password = Hasher.HashPassword(newUser.User, newUser.User.Password);
        _context.Add(newUser.User);
        _context.SaveChanges();
        HttpContext.Session.SetInt32("UUID", newUser.User.UserId);
        HttpContext.Session.SetInt32("UserName", userInDb.FirstName);
        return RedirectToAction("Index","Wedding");
    }

    [HttpPost("/login")]
    public IActionResult Login(LoginViewModel loginAttempt)
    {

        if(!ModelState.IsValid)
        {
            return View("Index", loginAttempt);
        }
        User? userInDb = _context.Users.FirstOrDefault(u => u.Email == loginAttempt.Login.Email);
        if(userInDb == null)
        {
            ModelState.AddModelError("Login.Email", "Invalid Email/Password");
            return View("Index", loginAttempt);
        }
        PasswordHasher<Login> Hasher = new PasswordHasher<Login>();
        var result = Hasher.VerifyHashedPassword(loginAttempt.Login, userInDb.Password, loginAttempt.Login.Password);
        if(result == 0)
        {
            ModelState.AddModelError("Login.Email", "Invalid Email/Password");
            return View("Index", loginAttempt);
        }
        HttpContext.Session.SetInt32("UUID", userInDb.UserId);
        HttpContext.Session.SetInt32("UserName", userInDb.FirstName);
        return RedirectToAction("Index","Wedding");
    }

    [SessionCheck]
    [HttpGet("/success")]
    public IActionResult Success()
    {
        return View("Success");
    }

    [HttpGet("/logout")]
    public IActionResult Logout(){
        HttpContext.Session.Clear();
        return RedirectToAction("Index");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
