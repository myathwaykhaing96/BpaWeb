using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BpaWeb.Domain.Models.HttpRequest
{
    public class ConfirmRequest
    {
        public string? channelCode { get; set; }
        public string? billerCode { get; set; }
        public string? channelRefId { get; set; }
        public int? transactionAmount { get; set; }
        public string? detail { get; set; }
    }
}
