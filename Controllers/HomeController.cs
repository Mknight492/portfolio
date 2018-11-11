using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProjectWebpack.Services;
using ProjectWebpack.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProjectWebpack.Controllers
{
    public class HomeController : Controller
    {
        private  readonly IEmailSender _emailSender;

        public HomeController(IEmailSender emailSender)
        {
            _emailSender = emailSender;
        }

        // GET: /<controller>/
        public async Task<IActionResult> Index()
        {
            
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> formSubmit(ContactForm model)
        {

            await _emailSender.SendContactDetails("michaelknight492@gmail.com",model.message, "fail");
            return View();
        }
    }
}
