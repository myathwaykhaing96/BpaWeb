using Microsoft.AspNetCore.Mvc;
using BpaWeb.Domain.Models;
using BpaWeb.Domain.Interface;
using AutoMapper;

namespace BpaWeb.Ui.Controllers;

[ApiController]
[Route("api/v1/biller")]
public class BillerController : ControllerBase
{
  private readonly ILogger<BillerController> _logger;
  private readonly IConfiguration _config;
  private readonly ICacheService _cache;
  private readonly IBillerService _biller;
  private readonly IMapper _mapper;
  public BillerController(ILogger<BillerController> logger, IConfiguration config, ICacheService cache,
  IBillerService biller, IMapper mapper)
  {
    _logger = logger;
    _config = config;
    _cache = cache;
    _biller = biller;
    _mapper = mapper;
  }

  [HttpPost]
  public async Task<IActionResult> GetBillerAsync([FromBody] BillerRequest request)
  {
    var requestDto = _mapper.Map<BillerDto>(request);

    var biller = await _biller.GetBillerAsync(requestDto);

    var response = _mapper.Map<Biller>(biller);

    if (biller == null) return NotFound();
    return Ok(biller);
  }

  [HttpPost("list")]
  public async Task<IActionResult> GetAllBillersAsync([FromBody] BillersRequest request)
  {
    var requestDto = _mapper.Map<BillerDto>(request);

    var billers = await _biller.GetBillersAsync(requestDto);

    var response = _mapper.Map<IEnumerable<Biller>>(billers);

    if (response == null && response?.Count() <= 1) return NoContent();
    return Ok(response);
  }
}
