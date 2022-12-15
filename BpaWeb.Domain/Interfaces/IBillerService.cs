using System;
using BpaWeb.Domain.Models;

namespace BpaWeb.Domain.Interface
{
  public interface IBillerService
  {

    /// <summary>
    /// Get Billers
    /// </summary>
    /// <typeparam name="Biller"></typeparam>s
    /// <param name="code"></param>
    /// <returns></returns>
    Task<IEnumerable<Biller>> GetBillersAsync(BillerDto request);
    /// <summary>
    /// Get Biller using id 
    /// </summary>
    /// <typeparam name="Biller"></typeparam>s
    /// <param name="code"></param>
    /// <returns></returns>
    Task<Biller?> GetBillerAsync(BillerDto request);
  }
}