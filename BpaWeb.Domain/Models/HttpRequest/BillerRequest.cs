using System.ComponentModel.DataAnnotations;

namespace BpaWeb.Domain.Models
{
  public class BillerRequest: BaseHttpRequest
  {
    [Required]
    public string? BillerCode { get; set; } 
  }
}
