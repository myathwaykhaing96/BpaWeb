using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static BpaWeb.Service.Common.Common;

namespace BpaWeb.Service.Common
{
    public static class Common
    {
        public static string API_BillerProduct = "https://03m7s3bhdg.execute-api.ap-southeast-1.amazonaws.com/UAT/bpa/biller/product";
        public static string API_BillerCategory = "https://03m7s3bhdg.execute-api.ap-southeast-1.amazonaws.com/UAT/bpa/biller/category";
        public static string API_Enquiry = "https://03m7s3bhdg.execute-api.ap-southeast-1.amazonaws.com/UAT/bpa/enquiry";
        public static string API_Confirm = "https://03m7s3bhdg.execute-api.ap-southeast-1.amazonaws.com/UAT/bpa/confirm";
        public static string API_HealthCheck = "https://03m7s3bhdg.execute-api.ap-southeast-1.amazonaws.com/UAT/bpa/healthcheck";
    }
}
