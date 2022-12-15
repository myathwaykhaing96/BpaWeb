using System.Security.Cryptography;
using System.Text;
using BpaWeb.Domain.Models;
using BpaWeb.Domain.Interface;
using BpaWeb.Service;
using AutoMapper;

namespace BpaWeb.Service
{
  public class ChannelService : IChannelService
  {
    private readonly ICacheService _cache;
    private readonly IMapper _mapper;

    public ChannelService(ICacheService cache, IMapper mapper)
    {
      _cache = cache;
      _mapper = mapper;
    }

    public async Task<string?> HandshakeAsync(HandshakeDto request)
    {
      string sSourceData;
      byte[] tmpSource;
      byte[] tmpHash;
      //Create new Guid
      sSourceData = Guid.NewGuid().ToString();
      //Create a byte array from source data.
      tmpSource = ASCIIEncoding.ASCII.GetBytes(sSourceData);
      //Compute hash based on source data.
      tmpHash = new MD5CryptoServiceProvider().ComputeHash(tmpSource);
      string sessionKey = ConvertingStringHelper.ByteArrayToString(tmpHash);

      var userCredentials = _mapper.Map<Handshake>(request);

      var isSet = await _cache.SetDataAsync<Handshake>
        (
          sessionKey,
          userCredentials,
          DateTime.Now.AddSeconds(request.AbsoluteExpiration),
          TimeSpan.FromSeconds(request.SlidingExpiration)
        );

      if (!isSet) return null;
      return sessionKey;
    }

    public async Task<Channel?> GetChannelAsync(ChannelDto request)
    {

      var handshakeData = await _cache.GetDataAsync<Handshake>(request.SessionKey);
      if (handshakeData == null) 
        return null;

      var channel = Channel.MyChannel();
        
      return channel;
    }
  }
}

