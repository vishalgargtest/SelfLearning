using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using WebAPi.DataAccessLayer.DAOInterfaces;
using WebAPi.Models;

namespace WebAPi.DataAccessLayer
{
    public class PatientDAO: IPatientDAO
    {
        IDataReader dr = null;
        string connString = @"Data Source=DESKTOP-7P9OL0C\MYSQL;Initial Catalog=Hospital;Integrated Security=True;Connect Timeout=15;Encrypt=False;TrustServerCertificate=True;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
        public List<Patient> getPatientDetails() {
            List<Patient> Patientlist = new List<Patient>();
            try {
                using (SqlConnection conn = new SqlConnection(connString))
                {
                    conn.Open();
                    using (SqlCommand cmd = conn.CreateCommand())
                    {
                        cmd.CommandText = "USP_GetPatients";
                        cmd.CommandType = CommandType.StoredProcedure;
                        dr = cmd.ExecuteReader();
                        while (dr.Read())
                        {
                            var patient = new Patient()
                            {
                                PatientName = dr["Name"].ToString(),
                                FatherName = dr["Father_Name"].ToString(),
                                Location = dr["Location"].ToString(),
                                Balance = Convert.ToDecimal(dr["Balance"]),
                                AdmittedDate = Convert.ToDateTime(dr["AdmittedDate"])

                            };
                            Patientlist.Add(patient);
                        }
                    }
                }
            }
            catch (Exception ex)
            {
            }
            return Patientlist;
        }
        public bool addPatient(Patient patient) {
            int a = 0;
            try
            {
                using (SqlConnection conn = new SqlConnection(connString))
                {
                    conn.Open();
                    using (SqlCommand cmd = conn.CreateCommand())
                    {
                        cmd.CommandText = "USP_SavePatients";
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add(new SqlParameter("@name", patient.PatientName));
                        a=cmd.ExecuteNonQuery();
                    }
                }
            }
            catch (Exception ex)
            {
            }
            return a > 0;
        }
    }
}