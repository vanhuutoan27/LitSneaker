using AutoMapper;
using LitSneaker.DTO;
using LitSneaker.Models;
using LitSneaker.Repository.Interface;
using LitSneaker.Utility;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.IdentityModel.Tokens;
using System.Data.Entity;

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

        public DTO.User checkLogin(string username, string password)
        {
            try
            {
                var user = _context.TbAccounts.FirstOrDefault(p => p.Username == username && p.Password == password);
                var UserListModel = _mapper.Map<DTO.User>(user);
                return UserListModel;

            }
            catch (Exception ex)
            {
                throw ex;

            }
        }

        public List<UserModel> registerAccount(UserModel model)
        {
            try
            {
                //check All fied is required --> on FE 
                // check email va username , phone  co trong database khong 
                var Ultility = new SearchUtility(_context);
                bool User = Ultility.SearchUsername(model.Username);
                if (!User)
                {
                    User = Ultility.SearchEmail(model.Email);
                    if (!User)
                    {
                        User = Ultility.SearchPhone(model.Phone);
                        if (!User)
                        {

                            var tableName = "TbAccounts";
                            var generatedId = Ultility.GenerateId(tableName);
                            var newAccount = new TbAccount { 
                            /*Password = model.,*/
                            
                            }; 
                        }
                        else
                        {
                            throw new Exception("This Phone is already registed,Please enter a new Phone");
                        }
                    }
                    else
                    {
                        throw new Exception("This Email is already registed,Please enter a new Email");
                    }
                }
                else
                {
                    throw new Exception("This Username is already registed,Please enter a new Username");
                }


            }
            catch (Exception ex)
            {
                throw ex;
            }

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
                var Ultility = new SearchUtility(_context);

                var tableName = "Users";
                var generatedId = Ultility.GenerateId(tableName);
                Console.WriteLine("generatedId : "+generatedId);
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
