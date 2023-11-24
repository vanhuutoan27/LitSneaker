using AutoMapper;
using LitSneaker.DTO;
using LitSneaker.Models;
using LitSneaker.Repository.Interface;

namespace LitSneaker.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly LitSneakerDbContext _context;
        private readonly IMapper _mapper;
        public UserRepository(LitSneakerDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        List<UserModel> IUserRepository.getAll()
        {
            /*Console.WriteLine("sss");
            LitSneakerDbContext context = new LitSneakerDbContext();
    context.testMethod();*/

            try
            {
                var UserList = _context.Users.ToList();
                var userListModel = _mapper.Map<List<UserModel>>(UserList);
                return userListModel;
            }
            catch (AutoMapperMappingException ex)
            {
                Console.WriteLine(ex.Message);

                if (ex.InnerException != null)
                {
                    Console.WriteLine(ex.InnerException.Message);
                }

                if (ex.MemberMap != null)
                {
                    Console.WriteLine("MemberMap: " + ex.MemberMap);
                }

                if (ex.TypeMap != null)
                {
                    Console.WriteLine("TypeMap: " + ex.TypeMap);
                }
            }
            return null;
        }
    }
}
