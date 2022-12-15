using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BpaWeb.Domain.Models.Domain
{
    public class BillerProduct : ResponseResult
    {
        public string? BillerCode { get; set; }
        public IEnumerable<ProductList> ProductList { get; set; }
    }

    public class ProductList
    {
        public string? ProductCode { get; set; }
        public string? ProductName { get; set; }
        public string? ProductAmount { get; set; }
    }
}
