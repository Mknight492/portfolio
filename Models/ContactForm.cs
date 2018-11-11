using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectWebpack.Models
{
    public class ContactForm
    {
        [Required]
        public string name { get; set; }

        [Required]
        public string email { get; set; }
        [Required]
        public string message { get; set; }
        [Required]
        public bool newsletter { get; set; }

    }
}
