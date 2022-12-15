using System.ComponentModel.DataAnnotations;

namespace BpaWeb.Domain.Models
{
  public class HandshakeDto
  {
    public string? AccessToken { get; set; }
    public string? CredentialKey { get; set; }
    public string? Uuid { get; set; }
    public double AbsoluteExpiration { get; set; }
    public double SlidingExpiration { get; set; }
  }
}
