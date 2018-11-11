using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using ProjectWebpack.Services;
using ProjectWebpack.Utilities;

namespace ProjectWebpack.Services
{
    public class EmailSender: IEmailSender
    {
        public Task SendEmailAsync(string email, string subject, string message)
        {

            const string emailAddress = SD.Email;
            const string passWord = SD.EmailPassword;

            SmtpClient client = new SmtpClient("smtp.gmail.com", 587)
            {
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential( emailAddress, passWord),
                EnableSsl = true

            };

            MailMessage mailMessage = new MailMessage
            {
                From = new MailAddress(emailAddress),
                To = {email},
                Body = message,
                IsBodyHtml = true,
                Subject = subject,
           
            };
            client.Send(mailMessage);
            return Task.CompletedTask;
        }
    }
}
