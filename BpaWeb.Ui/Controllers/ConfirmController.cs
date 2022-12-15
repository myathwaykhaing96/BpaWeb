using AutoMapper;
using BpaWeb.Domain.Interface;
using BpaWeb.Domain.Interfaces;
using BpaWeb.Domain.Models.HttpRequest;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BpaWeb.Ui.Controllers
{
    [Route("api/v1/confirm")]
    [ApiController]
    public class ConfirmController : ControllerBase
    {
        private readonly ILogger<BillerCategoryController> _logger;
        private readonly IConfiguration _config;
        private readonly ICacheService _cache;
        private readonly IConfirmService _confirmService;
        private readonly IMapper _mapper;

        public ConfirmController(ILogger<BillerCategoryController> logger, IConfiguration config, 
            ICacheService cache, IConfirmService confirmService, IMapper mapper)
        {
            _logger = logger;
            _config = config;
            _cache = cache;
            _confirmService = confirmService;
            _mapper = mapper;
        }

        [HttpPost("list")]
        public async Task<IActionResult> GetConfirmAsync(ConfirmRequest request)
        {
            var confirm = await _confirmService.GetConfirmAsync(request);
            if (confirm == null) return BadRequest();

            return Ok(confirm);
        }
    }
}
