
using System.ComponentModel.DataAnnotations;

namespace BpaWeb.Domain.Models
{
  public class BaseHttpRequest
  {
    [Required]
    public string? SessionKey { get; set; }
  }
}
