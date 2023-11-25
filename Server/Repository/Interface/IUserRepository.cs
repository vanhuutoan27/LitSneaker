using LitSneaker.DTO;

namespace LitSneaker.Repository.Interface
{
    public interface IUserRepository
    {
        List<UserModel> getAll();
        User checkLogin(string username, string password);
        //List<UserModel> registerAccount(UserModel model);



    }
}
