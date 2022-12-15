using BpaWeb.Service;
using System.Text.Json;
using StackExchange.Redis;
using System;
using Microsoft.Extensions.Caching.Distributed;
using System.Text;
using BpaWeb.Domain.Interface;

namespace BpaWeb.Service
{
  public class CacheService : ICacheService
  {
    private readonly IDistributedCache _cache;

    public CacheService(IDistributedCache cache)
    {
      _cache = cache;
    }

    public async Task<T?> GetDataAsync<T>(string key)
    {
      // Get data from cache
      var cachedData = await _cache.GetAsync(key);

      if (cachedData != null)
      {
        // If data found in cache, encode and deserialize cached data
        var cachedDataString = Encoding.UTF8.GetString(cachedData);
        return JsonSerializer.Deserialize<T>(cachedDataString);
      }

      return default;
    }

    public async Task<bool> SetDataAsync<T>(string key, T value, DateTimeOffset absoluteExpiration, TimeSpan slidingExpiration)
    {
      try
      {
        TimeSpan expiryTime = absoluteExpiration.DateTime.Subtract(DateTime.Now);
        
        // serialize data
        var cachedDataString = JsonSerializer.Serialize(value);
        var newDataToCache = Encoding.UTF8.GetBytes(cachedDataString);

        // set cache options 
        var options = new DistributedCacheEntryOptions()
            .SetAbsoluteExpiration(absoluteExpiration) //DateTime.Now.AddMinutes(2)
            .SetSlidingExpiration(slidingExpiration); //TimeSpan.FromMinutes(1)

        // Add data in cache
        await _cache.SetAsync(key, newDataToCache, options);

        return true;
      }
      catch (Exception ex)
      {
        return false;
      }
    }

    public async Task<bool> RemoveDataAsync(string key)
    {
      try
      {
        // Get data from cache
        var cachedData = await _cache.GetAsync(key);

        if (cachedData == null)
        {
          return false;
        }
        await _cache.RemoveAsync(key);
        return true;
      }
      catch (Exception ex)
      {
        return false;
      }
    }


  }
}

