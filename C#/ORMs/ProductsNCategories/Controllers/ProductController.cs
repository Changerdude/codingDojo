using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductsNCategories.Models;

namespace ProductsNCategories.Controllers;

public class ProductController : Controller
{
    private readonly ILogger<ProductController> _logger;
    private MyContext _context;

    public ProductController(ILogger<ProductController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet("/")]
    public IActionResult Index()
    {
        MyViewModel ViewModel = new MyViewModel()
        {
            Products = _context.Products.ToList()
        };
        return View("Index", ViewModel);
    }

    [HttpPost("/products/create")]
    public IActionResult ProductCreate(MyViewModel ViewModel)
    {
        if(!ModelState.IsValid)
        {
            ViewModel.Products = _context.Products.ToList();
            return View("Index", ViewModel);
        }
        _context.Products.Add(ViewModel.Product);
        _context.SaveChanges();
        return RedirectToAction("Index");
    }

    [HttpGet("/products/{ProductId}")]
    public IActionResult ProductShow(int ProductId)
    {
        Product? ProductLookup = _context.Products.Include(p => p.ProdCatRelations).ThenInclude(r => r.Category).FirstOrDefault(p => p.ProductId == ProductId);
        if(ProductLookup == null)
        {
            return RedirectToAction("Index");
        }
        MyViewModel ViewModel = new MyViewModel()
        {
            Product = ProductLookup,
            Categories = _context.Categories.ToList()
        };
        return View("ProductShow" , ViewModel);
    }

    [HttpPost("/products/relation/create")]
    public IActionResult ProductRelationCreate(MyViewModel ViewModel)
    {
        if(ViewModel.Relation.CategoryId == 0)
        {
            return RedirectToAction("ProductShow", new{ ProductId = ViewModel.Relation.ProductId });
        }
        _context.ProdCatRelations.Add(ViewModel.Relation);
        _context.SaveChanges();
        return RedirectToAction("ProductShow", new{ ProductId = ViewModel.Relation.ProductId });
    }

    [HttpGet("/products/relation/destroy/{ProductId}/{RelationId}")]
    public IActionResult ProductRelationDestroy(int ProductId, int RelationId)
    {
        ProdCatRelation? Relation = _context.ProdCatRelations.SingleOrDefault(r => r.ProdCatRelationId == RelationId);
        if(Relation == null)
        {
            return RedirectToAction("ProductShow", new{ ProductId = ProductId });
        }
        _context.ProdCatRelations.Remove(Relation);
        _context.SaveChanges();
        return RedirectToAction("ProductShow", new{ ProductId = ProductId });
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}