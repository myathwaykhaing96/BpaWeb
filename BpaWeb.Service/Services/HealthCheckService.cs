using BpaWeb.Domain.Interfaces;
using BpaWeb.Domain.Models.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Json;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using static BpaWeb.Service.Common.Common;

namespace BpaWeb.Service.Services
{
    public class HealthCheckService : IHealthCheckService
    {
        public async Task<HealthCheck> GetHealthCheckAsync()
        {
            var response = new HealthCheck();
            var client = new HttpClient();
            var url = API_HealthCheck;

            var postResponse = client.PostAsJsonAsync(url, "").Result;

            if (postResponse.IsSuccessStatusCode)
            {
                var data = await postResponse.Content.ReadAsStringAsync();
                response = JsonSerializer.Deserialize<HealthCheck>(data);
                return response;
            }
            return response;
        }
    }
}
