using AutoMapper;
using BpaWeb.Domain.Interface;
using BpaWeb.Domain.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BpaWeb.Ui.Controllers
{
    [Route("api/v1/healthcheck")]
    [ApiController]
    public class HealthCheckController : ControllerBase
    {
        private readonly ILogger<BillerCategoryController> _logger;
        private readonly IConfiguration _config;
        private readonly ICacheService _cache;
        private readonly IHealthCheckService _healthCheckService;
        private readonly IMapper _mapper;

        public HealthCheckController(ILogger<BillerCategoryController> logger, IConfiguration config, 
            ICacheService cache, IHealthCheckService healthCheckService, IMapper mapper)
        {
            _logger = logger;
            _config = config;
            _cache = cache;
            _healthCheckService = healthCheckService;
            _mapper = mapper;
        }

        [HttpPost("list")]
        public async Task<IActionResult> GetHealthCheckAsync()
        {
            var healthCheck = await _healthCheckService.GetHealthCheckAsync();
            if (healthCheck == null) return BadRequest();

            return Ok(healthCheck);
        }
    }
}
