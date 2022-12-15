using System.ComponentModel.DataAnnotations;

namespace BpaWeb.Domain.Models
{
  public class HandshakeRequest
  {
    [Required]
    public string? AccessToken { get; set; }
    [Required]
    public string? CredentialKey { get; set; }
    [Required]
    public string? Uuid { get; set; }
  }
}
