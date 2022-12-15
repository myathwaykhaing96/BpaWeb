using Microsoft.AspNetCore.Mvc;
using BpaWeb.Domain.Models;
using BpaWeb.Domain.Interface;
using AutoMapper;

namespace BpaWeb.Ui.Controllers;

[ApiController]
[Route("api/v1/channel")]
public class ChannelController : ControllerBase
{
  private readonly ILogger<ChannelController> _logger;
  private readonly IConfiguration _config;
  private readonly ICacheService _cache;
  private readonly IChannelService _channel;
  private readonly IMapper _mapper;
  public ChannelController(ILogger<ChannelController> logger, IConfiguration config, ICacheService cache,
  IChannelService channel, IMapper mapper)
  {
    _logger = logger;
    _config = config;
    _cache = cache;
    _channel = channel;
    _mapper = mapper;
  }

  [HttpPost("handshake")]
  public async Task<IActionResult> HandshakeAsync([FromBody] HandshakeRequest request)
  {
    double absoluteExpiration = Convert.ToDouble(_config.GetValue<int>("Redis:AbsoluteExpiration"));
    double slidingExpiration = Convert.ToDouble(_config.GetValue<int>("Redis:SlidingExpiration"));

    var requestDto = _mapper.Map<HandshakeDto>(request);
    requestDto.AbsoluteExpiration = absoluteExpiration;
    requestDto.SlidingExpiration = slidingExpiration;

    var sessionKey = await _channel.HandshakeAsync(requestDto);

    if (string.IsNullOrEmpty(sessionKey)) return BadRequest();
    return Ok(sessionKey);
  }

  [HttpPost]
  public async Task<IActionResult> GetChannelAsync([FromBody] ChannelRequest request)
  {
    var requestDto = _mapper.Map<ChannelDto>(request);

    var response = await _channel.GetChannelAsync(requestDto);

    if (response == null) return NotFound();
    return Ok(response);
  }

  [HttpPost("credential")]
  public async Task<IActionResult> GetCredentialInfo([FromBody] BaseHttpRequest request)
  {
    var userCredentials = await _cache.GetDataAsync<Handshake>(request.SessionKey);
    if (userCredentials == null) return BadRequest();

    return Ok(userCredentials);
  }

}
