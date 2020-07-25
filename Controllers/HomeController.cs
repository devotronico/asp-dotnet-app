using Microsoft.AspNetCore.Mvc;

namespace test_2.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return Content("Home");
        }
    }
}