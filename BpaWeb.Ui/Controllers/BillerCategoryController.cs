using AutoMapper;
using BpaWeb.Domain.Interface;
using BpaWeb.Domain.Interfaces;
using BpaWeb.Domain.Models.HttpRequest;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BpaWeb.Ui.Controllers;

[ApiController]
[Route("api/v1/billercategory")]
public class BillerCategoryController : ControllerBase
{
    private readonly ILogger<BillerCategoryController> _logger;
    private readonly IConfiguration _config;
    private readonly ICacheService _cache;
    private readonly IBillerCategoryService _billerCategoryService;
    private readonly IMapper _mapper;

    public BillerCategoryController(ILogger<BillerCategoryController> logger, IConfiguration config, ICacheService cache, 
        IBillerCategoryService billerCategoryService, IMapper mapper)
    {
        _logger = logger;
        _config = config;
        _cache = cache;
        _billerCategoryService = billerCategoryService;
        _mapper = mapper;
    }

    [HttpPost("list")]
    public async Task<IActionResult> GetAllBillerCategoriesAsync([FromBody] BillerCategoryRequest request)
    {
         var billerCategories =await _billerCategoryService.GetBillerCategoriesAsync(request);

         if (billerCategories == null && billerCategories.CategoryList?.Count() <= 1) return NoContent();
         return Ok(billerCategories);
    }
}
