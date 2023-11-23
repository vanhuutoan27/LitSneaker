using AutoMapper;

namespace LitSneaker.Helper
{
    public class ApplicationMapper : Profile
    {
        public ApplicationMapper () { 
        
       /*   CreateMap<UserVM, TbUser>().ReverseMap() //reverseMap 2 chieu
                .ForMember(dest => dest.Username, opt => opt.MapFrom(src => src.TbAccount.Username))
                .ForMember(dest => dest.Role, opt => opt.MapFrom(src => src.TbAccount.Role));*/
       
        }
}
}
