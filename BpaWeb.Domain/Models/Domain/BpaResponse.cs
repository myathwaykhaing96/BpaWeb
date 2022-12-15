

namespace BpaWeb.Domain.Models
{
  public class BpaResponse<T>
  {
    public int StatusCode { get; set; } = 200;
    public string? Message { get; set; } = "Success";
    public T? data { get; set; }
  }
}