
using BpaWeb.Domain.Interfaces;
using BpaWeb.Domain.Models.Domain;
using BpaWeb.Domain.Models.HttpRequest;
using System.Net.Http.Json;
using System.Text.Json;
using static BpaWeb.Service.Common.Common;

namespace BpaWeb.Service.Services
{
    public class BillerCategoryService : IBillerCategoryService
    {
        public async Task<BillerCategory> GetBillerCategoriesAsync(BillerCategoryRequest request)
        {
            var response = new BillerCategory();
            var client = new HttpClient();
            var url = API_BillerCategory;

            var postResponse = client.PostAsJsonAsync(url, request).Result;

            if (postResponse.IsSuccessStatusCode)
            {
                var data = await postResponse.Content.ReadAsStringAsync();
                response = JsonSerializer.Deserialize<BillerCategory>(data);
                return response;
            }
            return response;
        }
    }
}
