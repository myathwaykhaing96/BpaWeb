using BpaWeb.Domain.Models.Domain;
using BpaWeb.Domain.Models.HttpRequest;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BpaWeb.Domain.Interfaces
{
    public interface IEnquiryService
    {
        Task<Enquiry> GetEnquiryAsync(EnquiryRequest request);
    }
}
