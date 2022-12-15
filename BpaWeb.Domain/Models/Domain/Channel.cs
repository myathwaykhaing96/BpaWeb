
namespace BpaWeb.Domain.Models
{
  public class Channel
  {
    public string? ChannelCode { get; set; }
    public string? ChannelName { get; set; }
    public string? ChannelLogo { get; set; }

    public string? ChannelCountry { get; set; }
    public string? ChannelCurrency { get; set; }
    public string? ChannelStatus { get; set; }

    public static Channel MyChannel()
    {
      return new Channel()
      {
        ChannelCode = "aplus",
        ChannelName = "A Plus",
        ChannelLogo = "assets/images/companyImages/AbankLogo.svg",
        ChannelCountry = "Myanmar",
        ChannelCurrency = "MMK",
        ChannelStatus = "true",
      };
    }
  }
}
