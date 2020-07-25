using Microsoft.AspNetCore.Mvc;

namespace test_2.Controllers
{
    public class CoursesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Details(int id)
        {
            return Content($"id numero {id}");
        }
    }
}