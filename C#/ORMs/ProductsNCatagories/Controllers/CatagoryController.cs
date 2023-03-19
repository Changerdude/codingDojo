using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductsNCatagories.Models;

namespace ProductsNCatagories.Controllers;

public class CatagoryController : Controller
{
    private readonly ILogger<CatagoryController> _logger;
    private MyContext _context;

    public CatagoryController(ILogger<CatagoryController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet("/catagories")]
    public IActionResult Index()
    {
        MyViewModel ViewModel = new MyViewModel()
        {
            Catagories = _context.Catagories.ToList()
        };
        return View("Index", ViewModel);
    }

    [HttpPost("/catagories/create")]
    public IActionResult CatagoryCreate(MyViewModel ViewModel)
    {
        if(!ModelState.IsValid)
        {
            ViewModel.Catagories = _context.Catagories.ToList();
            return View("Index", ViewModel);
        }
        _context.Catagories.Add(ViewModel.Catagory);
        _context.SaveChanges();
        return RedirectToAction("Index");
    }

    [HttpGet("/catagories/{CatagoryId}")]
    public IActionResult CatagoryShow(int CatagoryId)
    {
        Catagory? CatagoryLookup = _context.Catagories.Include(c => c.ProdCatRelations).ThenInclude(r => r.Product).FirstOrDefault(c => c.CatagoryId == CatagoryId);
        if(CatagoryLookup == null)
        {
            return RedirectToAction("Index");
        }
        MyViewModel ViewModel = new MyViewModel()
        {
            Catagory = CatagoryLookup,
            Products = _context.Products.ToList()
        };
        return View("CatagoryShow" , ViewModel);
    }

    [HttpPost("/catagories/relation/create")]
    public IActionResult CatagoryRelationCreate(MyViewModel ViewModel)
    {
        if(ViewModel.Relation.ProductId == 0)
        {
            return RedirectToAction("CatagoryShow", new { CatagoryId = ViewModel.Relation.CatagoryId });
        }
        _context.ProdCatRelations.Add(ViewModel.Relation);
        _context.SaveChanges();
        return RedirectToAction("CatagoryShow", new { CatagoryId = ViewModel.Relation.CatagoryId });
    }

    [HttpGet("/catagories/relation/destroy/{CatagoryId}/{RelationId}")]
    public IActionResult CatagoryRelationDestroy(int CatagoryId, int RelationId)
    {
        ProdCatRelation? Relation = _context.ProdCatRelations.SingleOrDefault(r => r.ProdCatRelationId == RelationId);
        if(Relation == null)
        {
            return RedirectToAction("CatagoryShow", new{ CatagoryId = CatagoryId });
        }
        _context.ProdCatRelations.Remove(Relation);
        _context.SaveChanges();
        return RedirectToAction("CatagoryShow", new{ CatagoryId = CatagoryId });
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}