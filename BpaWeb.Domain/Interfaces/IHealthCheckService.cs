using BpaWeb.Domain.Models.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BpaWeb.Domain.Interfaces
{
    public interface IHealthCheckService
    {
        Task<HealthCheck> GetHealthCheckAsync();
    }
}
