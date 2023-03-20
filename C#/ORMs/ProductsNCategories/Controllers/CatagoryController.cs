using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductsNCategories.Models;

namespace ProductsNCategories.Controllers;

public class CategoryController : Controller
{
    private readonly ILogger<CategoryController> _logger;
    private MyContext _context;

    public CategoryController(ILogger<CategoryController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet("/categories")]
    public IActionResult Index()
    {
        MyViewModel ViewModel = new MyViewModel()
        {
            Categories = _context.Categories.ToList()
        };
        return View("Index", ViewModel);
    }

    [HttpPost("/categories/create")]
    public IActionResult CategoryCreate(MyViewModel ViewModel)
    {
        if(!ModelState.IsValid)
        {
            ViewModel.Categories = _context.Categories.ToList();
            return View("Index", ViewModel);
        }
        _context.Categories.Add(ViewModel.Category);
        _context.SaveChanges();
        return RedirectToAction("Index");
    }

    [HttpGet("/categories/{CategoryId}")]
    public IActionResult CategoryShow(int CategoryId)
    {
        Category? CategoryLookup = _context.Categories.Include(c => c.ProdCatRelations).ThenInclude(r => r.Product).FirstOrDefault(c => c.CategoryId == CategoryId);
        if(CategoryLookup == null)
        {
            return RedirectToAction("Index");
        }
        MyViewModel ViewModel = new MyViewModel()
        {
            Category = CategoryLookup,
            Products = _context.Products.ToList()
        };
        return View("CategoryShow" , ViewModel);
    }

    [HttpPost("/categories/relation/create")]
    public IActionResult CategoryRelationCreate(MyViewModel ViewModel)
    {
        if(ViewModel.Relation.ProductId == 0)
        {
            return RedirectToAction("CategoryShow", new { CategoryId = ViewModel.Relation.CategoryId });
        }
        _context.ProdCatRelations.Add(ViewModel.Relation);
        _context.SaveChanges();
        return RedirectToAction("CategoryShow", new { CategoryId = ViewModel.Relation.CategoryId });
    }

    [HttpGet("/categories/relation/destroy/{CategoryId}/{RelationId}")]
    public IActionResult CategoryRelationDestroy(int CategoryId, int RelationId)
    {
        ProdCatRelation? Relation = _context.ProdCatRelations.SingleOrDefault(r => r.ProdCatRelationId == RelationId);
        if(Relation == null)
        {
            return RedirectToAction("CategoryShow", new{ CategoryId = CategoryId });
        }
        _context.ProdCatRelations.Remove(Relation);
        _context.SaveChanges();
        return RedirectToAction("CategoryShow", new{ CategoryId = CategoryId });
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}