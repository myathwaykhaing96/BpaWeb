using AutoMapper;
using BpaWeb.Domain.Interface;
using BpaWeb.Domain.Interfaces;
using BpaWeb.Domain.Models.HttpRequest;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BpaWeb.Ui.Controllers
{
    [Route("api/v1/enquiry")]
    [ApiController]
    public class EnquiriesController : ControllerBase
    {
        private readonly ILogger<BillerCategoryController> _logger;
        private readonly IConfiguration _config;
        private readonly ICacheService _cache;
        private readonly IEnquiryService _enquiryService;
        private readonly IMapper _mapper;

        public EnquiriesController(ILogger<BillerCategoryController> logger, IConfiguration config, 
            ICacheService cache, IEnquiryService enquiryService, IMapper mapper)
        {
            _logger = logger;
            _config = config;
            _cache = cache;
            _enquiryService = enquiryService;
            _mapper = mapper;
        }

        [HttpPost("list")]
        public async Task<IActionResult> GetEnquiriesAsync([FromBody] EnquiryRequest request)
        {
            var enquires = await _enquiryService.GetEnquiryAsync(request);
            if (enquires == null) return BadRequest();

            return Ok(enquires);
        }
    }
}
