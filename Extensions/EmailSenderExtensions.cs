using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using ProjectWebpack.Services;


namespace ProjectWebpack.Services
{
    public static class EmailSenderExtensions
    {
        public static Task SendEmailConfirmationAsync(this IEmailSender emailSender, string email, string link)
        {
            return emailSender.SendEmailAsync(email, "Confirm your email",
                $"Please confirm your account by clicking this link: <a href='{HtmlEncoder.Default.Encode(link)}'>link</a>");
        }



        public static Task SendContactDetails(this IEmailSender emailSender, string email, string html,string name)
        {
            const string subject = "contacting Knight Web Development Services";

            return emailSender.SendEmailAsync(email, subject, html);
        }
    }
}
