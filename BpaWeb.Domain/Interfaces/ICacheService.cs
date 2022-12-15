using System;

namespace BpaWeb.Domain.Interface
{
  public interface ICacheService
  {
    /// <summary>
    /// Get Data using key
    /// </summary>
    /// <typeparam name="T"></typeparam>s
    /// <param name="key"></param>
    /// <returns></returns>
    Task<T?> GetDataAsync<T>(string key);

    /// <summary>
    /// Set Data with Value and Expiration Time of Key
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="key"></param>
    /// <param name="value"></param>
    /// <param name="absoluteExpiration"></param>
    /// <param name="slidingExpiration"></param>
    /// <returns></returns>
    Task<bool> SetDataAsync<T>(string key, T value, DateTimeOffset absoluteExpiration, TimeSpan slidingExpiration);

    /// <summary>
    /// Remove Data
    /// </summary>
    /// <param name="key"></param>
    /// <returns></returns>
    Task<bool> RemoveDataAsync(string key);
  }
}