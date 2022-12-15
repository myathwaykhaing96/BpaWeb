using Microsoft.AspNetCore.Mvc;
using BpaWeb.Domain.Models;
using Microsoft.AspNetCore.Http;
using BpaWeb.Ui.Extensions;

namespace BpaWeb.Ui.Controllers;

public class SessionController : BaseApiController
{
  private readonly ILogger<SessionController> _logger;
  public SessionController(ILogger<SessionController> logger)
  {
    _logger = logger;
  }

  // public BaseApiController(ILogger<WebViewController> logger)
  // {
  //   _logger = logger;
  // }

  [HttpPost]
  public async Task<IActionResult> SetSession()
  {
    //Load data from distributed data store asynchronously
    await HttpContext.Session.LoadAsync();
    //Get value from session
    var storedValue = HttpContext.Session.Get<Handshake>("TestValue");
    var sessionKey = "";
    if (storedValue == null)
    {
        //No value stored, set one
        //storedValue = "Testing session in Redis. Time of storage: " + DateTime.Now.ToString("s");

        storedValue = new Handshake() {
          AccessToken = "123456789",
          CredentialKey = "Aplus_ZXC",
          Uuid = "AplueUser001"
        };

        sessionKey = "session-key";

        HttpContext.Session.Set<Handshake>(sessionKey, storedValue);

        //Store session data asynchronously
        await HttpContext.Session.CommitAsync();
    }
    // string? resultContent = "Value in session: " + storedValue;

    return Ok(sessionKey);
  }

  [HttpPost]
  public async Task<IActionResult> GetSession()
  {
    //Load data from distributed data store asynchronously
    await HttpContext.Session.LoadAsync();
    //Get value from session
    var storedValue = HttpContext.Session.Get<Handshake>("session-key");

    return Ok(storedValue);
  }

  [HttpPost]
  public async Task<IActionResult> ClearSession()
  {
    //Load data from distributed data store asynchronously
    await HttpContext.Session.LoadAsync();
    //Clear value from session
    HttpContext.Session.Clear();

    return Ok();
  }
}
