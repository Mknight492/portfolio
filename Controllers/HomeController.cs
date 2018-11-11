using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProjectWebpack.Services;
using ProjectWebpack.Models;
using ProjectWebpack.Utilities;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProjectWebpack.Controllers
{
    public class HomeController : Controller
    {
        private  readonly IEmailSender _emailSender;
        private readonly IViewRender _viewRender;

        public HomeController(IEmailSender emailSender, IViewRender viewRender)
        {
            _emailSender = emailSender;
            _viewRender = viewRender;
        }

        // GET: /<controller>/
        public async Task<IActionResult> Index()
        {
            
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> FormSubmit(ContactForm model)
        {
            
            //string html = await _viewRender.RenderAsync("~/Emails/Email.cshtml", model);
            var html = "sigh";
            await _emailSender.SendContactDetails(model.email,html,model.name);
            //await _emailSender.SendContactDetails(SD.Email, html, model.email);
            return View();
        }
    }
}
