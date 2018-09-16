using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPi.BusinessLayer;
using WebAPi.BusinessLayer.BusinessDomain;
using WebAPi.Models;

namespace WebAPi.Controllers
{
    public class PatientController : ApiController
    {
        private readonly IPatient _repo;

        public PatientController(IPatient repo)
        {
            _repo = repo;
        }
        [HttpGet]
        public IHttpActionResult getPatientResult() {
            PatientBO patientBO = new PatientBO();
            var patientDtl=patientBO.getPatientDetails();
            return Ok(new { result = patientDtl });
        }
        [HttpPost]
        public IHttpActionResult addPatient([FromBody] Patient p)
        {
            //PatientBO patientBO = new PatientBO();
            var patientDtl = _repo.addPatient(p);
            return Ok(new { result = patientDtl });
        }
    }
}
