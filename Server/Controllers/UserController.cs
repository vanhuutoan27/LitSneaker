using Microsoft.AspNetCore.Mvc;

namespace LitSneaker.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
