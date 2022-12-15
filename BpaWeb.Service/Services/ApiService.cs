

using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Text.Json;
using BpaWeb.Domain.Models;

namespace BpeWeb.Service.ApiController
{
  public class ApiService
  {
    public ApiService()
    {

    }

    public async Task<BpaResponse<T>?> GetChannel<T>(ChannelDto requestModel, string path)
    {
      var response = new BpaResponse<T>();
      try
      {
        using (var client = new HttpClient())
        {
          client.BaseAddress = new Uri("http://localhost:8312/");
          client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
          client.Timeout = new TimeSpan(1, 0, 0);

          var postResponse = client.PostAsJsonAsync(path, requestModel).Result;

          if (postResponse.IsSuccessStatusCode)
          {
            var data = await postResponse.Content.ReadAsStringAsync();
            response = JsonSerializer.Deserialize<BpaResponse<T>>(data);
            return response;
          }
          else
          {
            response.StatusCode = 014;
            response.Message = "System Error";
            return response;
          }
        }
      }
      catch (Exception ex)
      {
        response.StatusCode = 014;
        response.Message = "System Error";
        return response;
      }
    }
  }
}