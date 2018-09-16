using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebAPi.Models;

namespace WebAPi.BusinessLayer.BusinessDomain
{
    public interface IPatient
    {
        List<Patient> getPatientDetails();
        bool addPatient(Patient patient);
    }
}
