using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPi.Models
{
    public class Patient
    {
        public string PatientName { get; set; }
        public string FatherName { get; set; }
        public DateTime AdmittedDate { get; set; }
        public string Location { get; set; }
        public decimal Balance { get; set; }
    }
}