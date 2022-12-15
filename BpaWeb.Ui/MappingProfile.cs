using AutoMapper;
using BpaWeb.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BpaWeb.Domain
{
  public class MappingProfile : Profile
  {
    public MappingProfile()
    {
      
      CreateMap<HandshakeRequest, HandshakeDto>();
      CreateMap<HandshakeDto, Handshake>();
      
      CreateMap<ChannelRequest, ChannelDto>();
      CreateMap<ChannelDto, Channel>();

      CreateMap<BillerRequest, BillerDto>();
      CreateMap<BillersRequest, BillerDto>();
      CreateMap<BillerDto, Biller>();
      
    }
  }
}
