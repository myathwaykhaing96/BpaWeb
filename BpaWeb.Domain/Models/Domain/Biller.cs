
namespace BpaWeb.Domain.Models
{
  public class Biller
  {
    public string? BillerCode { get; set; }
    public string? BillerName { get; set; }
    public string? BillerLogo { get; set; }
    public string? CategoryCode { get; set; }
    public string? CategoryName { get; set; }
    public static IEnumerable<Biller> MyBillers()
    {
      return new List<Biller> {
        new Biller()
        {
          BillerCode = "atom",
          BillerName = "Atom",
          BillerLogo = "assets/images/companyImages/AbankLogo.svg",
          CategoryCode = "topup",
          CategoryName = "Topup"
        },
        new Biller()
        {
          BillerCode = "ooredoo",
          BillerName = "Ooredoo",
          BillerLogo = "assets/images/companyImages/AbankLogo.svg",
          CategoryCode = "topup",
          CategoryName = "Topup"
        },
        new Biller()
        {
          BillerCode = "mpt",
          BillerName = "MPT",
          BillerLogo = "assets/images/companyImages/AbankLogo.svg",
          CategoryCode = "topup",
          CategoryName = "Topup"
        },
        new Biller()
        {
          BillerCode = "itunes",
          BillerName = "iTunes",
          BillerLogo = "assets/images/companyImages/AbankLogo.svg",
          CategoryCode = "gift-card",
          CategoryName = "Gift Card"
        },
        new Biller()
        {
          BillerCode = "mlbb",
          BillerName = "Mobile Legends: Bang Bang",
          BillerLogo = "assets/images/companyImages/AbankLogo.svg",
          CategoryCode = "games",
          CategoryName = "Games"
        },
        new Biller()
        {
          BillerCode = "pubg-mobile",
          BillerName = "PUBG Mobile",
          BillerLogo = "assets/images/companyImages/AbankLogo.svg",
          CategoryCode = "games",
          CategoryName = "Games"
        },
        new Biller()
        {
          BillerCode = "ooredoo-ftth",
          BillerName = "Ooredoo FTTH",
          BillerLogo = "assets/images/companyImages/AbankLogo.svg",
          CategoryCode = "internet",
          CategoryName = "Internet"
        }
      };
    }
  }
}
