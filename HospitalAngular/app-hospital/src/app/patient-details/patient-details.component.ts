import { Component, OnInit } from '@angular/core';
import {patientService} from '../../Services/patientServices.service'
import {patient} from '../../Models/patient'

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  public patientDetails:patient
  public init
  constructor(private patientService1:patientService) { }

  ngOnInit() {
    this.patientService1.getDetails().subscribe((response)=>
      {this.patientDetails=response.result;
      this.init=true;}
    )
  }

  click(){
    console.log('test')
  }

}
