using Microsoft.AspNetCore.Mvc;

namespace test_2.Controllers
{
    public class CoursesController : Controller
    {
        public IActionResult List()
        {
            return Content("LISTA DI CORSI");
        }

        public IActionResult Details(int id)
        {
            return Content($"id numero {id}");
        }
    }
}