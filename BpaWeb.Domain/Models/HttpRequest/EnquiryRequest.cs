using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BpaWeb.Domain.Models.HttpRequest
{
    public class EnquiryRequest
    {
        public string? channelCode { get; set; }
        public string? billerCode { get; set; }
        public string? detail { get; set; }
    }
}
