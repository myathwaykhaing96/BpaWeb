using AutoMapper;
using BpaWeb.Domain.Interface;
using BpaWeb.Domain.Interfaces;
using BpaWeb.Domain.Models.HttpRequest;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BpaWeb.Ui.Controllers;

[Route("api/v1/billerproduct")]
[ApiController]
public class BillerProductController : ControllerBase
{
    private readonly ILogger<BillerCategoryController> _logger;
    private readonly IConfiguration _config;
    private readonly ICacheService _cache;
    private readonly IBillerProductService _billerProductService;
    private readonly IMapper _mapper;

    public BillerProductController(ILogger<BillerCategoryController> logger, IConfiguration config, 
        ICacheService cache, IBillerProductService billerProductService, IMapper mapper)
    {
        _logger = logger;
        _config = config;
        _cache = cache;
        _billerProductService = billerProductService;
        _mapper = mapper;
    }

    [HttpPost("List")]
    public async Task<IActionResult> GetBillerProductsAsync([FromBody] BillerProductRequest request)
    {
        var billerProducts = await _billerProductService.GetBillerProductsAsync(request);
        if (billerProducts == null && billerProducts.ProductList?.Count() <= 1) return NoContent();
        return Ok(billerProducts);
    } 
}
