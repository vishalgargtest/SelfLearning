using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebAPi.BusinessLayer.BusinessDomain;
using WebAPi.DataAccessLayer;
using WebAPi.Models;

namespace WebAPi.BusinessLayer
{
    public class PatientBO: IPatient
    {
        public List<Patient> getPatientDetails() {
            PatientDAO p = new PatientDAO();
            return p.getPatientDetails();
        }
        public bool addPatient(Patient patient) {
            PatientDAO p = new PatientDAO();
            return p.addPatient(patient);
        }
    }
}