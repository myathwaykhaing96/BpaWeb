using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BpaWeb.Domain.Models.Domain
{
    public class BillerCategory : ResponseResult
    {        
        public IEnumerable<Data> CategoryList { get; set; }
    }

    public class Data
    {
        public string? CategoryCode { get; set; }
        public string? CategoryName { get; set; }
    }
}
