using System;
using BpaWeb.Domain.Models;

namespace BpaWeb.Domain.Interface
{
  public interface IChannelService
  {

    /// <summary>
    /// Channel handshake using 
    /// </summary>
    /// <typeparam name="Channel"></typeparam>s
    /// <param name="code"></param>
    /// <returns></returns>
    Task<string?> HandshakeAsync(HandshakeDto request);
    /// <summary>
    /// Get Channel using id
    /// </summary>
    /// <typeparam name="Channel"></typeparam>s
    /// <param name="code"></param>
    /// <returns></returns>
    Task<Channel?> GetChannelAsync(ChannelDto request);
  }
}