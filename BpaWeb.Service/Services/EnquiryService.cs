using BpaWeb.Domain.Interfaces;
using BpaWeb.Domain.Models.Domain;
using BpaWeb.Domain.Models.HttpRequest;
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
    public class EnquiryService : IEnquiryService
    {
        public async Task<Enquiry> GetEnquiryAsync(EnquiryRequest request)
        {
            var response = new Enquiry();
            var client = new HttpClient();
            var url = API_Enquiry;

            var postResponse = client.PostAsJsonAsync(url, request).Result;

            if (postResponse.IsSuccessStatusCode)
            {
                var data = await postResponse.Content.ReadAsStringAsync();
                response = JsonSerializer.Deserialize<Enquiry>(data);
                return response;
            }
            return response;
        }
    }
}
