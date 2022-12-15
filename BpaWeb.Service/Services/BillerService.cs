using System.Security.Cryptography;
using System.Text;
using BpaWeb.Domain.Models;
using BpaWeb.Domain.Interface;
using BpaWeb.Service;
using AutoMapper;

namespace BpaWeb.Service
{
  public class BillerService : IBillerService
  {
    private readonly ICacheService _cache;
    private readonly IMapper _mapper;

    public BillerService(ICacheService cache, IMapper mapper)
    {
      _cache = cache;
      _mapper = mapper;
    }
    public async Task<Biller?> GetBillerAsync(BillerDto request)
    {
      var handshakeData = await _cache.GetDataAsync<Handshake>(request.SessionKey);
      if (handshakeData == null) 
        return null;

      var biller = Biller.MyBillers().Where(biller => biller.BillerCode == request.BillerCode).FirstOrDefault();
        
      return biller;
    }

    public async Task<IEnumerable<Biller>?> GetBillersAsync(BillerDto request)
    {
      var handshakeData = await _cache.GetDataAsync<Handshake>(request.SessionKey);
      if (handshakeData == null) 
        return null;

      var biller = Biller.MyBillers();
        
      return biller;
    }
  }
}

