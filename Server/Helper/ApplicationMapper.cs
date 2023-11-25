using AutoMapper;
using LitSneaker.DTO;
using LitSneaker.Models;

namespace LitSneaker.Helper
{
    public class ApplicationMapper : Profile
    {
        public ApplicationMapper () {

            /*   CreateMap<UserVM, TbUser>().ReverseMap() //reverseMap 2 chieu
                     .ForMember(dest => dest.Username, opt => opt.MapFrom(src => src.TbAccount.Username))
                     .ForMember(dest => dest.Role, opt => opt.MapFrom(src => src.TbAccount.Role));*/
            CreateMap<Models.User, UserModel>().ReverseMap();
            CreateMap<Models.User, TbAccount>().ReverseMap();

            // .ForMember(dest => dest.Username, opt => opt.MapFrom(src => src.TbAccount.Username));
            CreateMap<Models.User, registerDTO>()
                     .ForMember(dest => dest.Username, opt => opt.MapFrom(src => src.TbAccount.Username))
                .ForMember(dest => dest.Password, opt => opt.MapFrom(src => src.TbAccount.Password))
                .ReverseMap();



        }
    }
}
