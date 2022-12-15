using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BpaWeb.Domain.Models.Domain
{
    public class ResponseResult
    {
        public string? ErrorCode { get; set; }
        public string? ErrorMessage { get; set; }
    }
}
