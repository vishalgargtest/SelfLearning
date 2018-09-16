import { Component, OnInit } from '@angular/core';
import {patientService} from '../../Services/patientServices.service'

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})
export class PatientAddComponent implements OnInit {

  constructor(private patientService1:patientService) { }

  ngOnInit() {
  }
  onSubmit(form){
    this.patientService1.addDetails(form).subscribe((response)=>
      {}
    )
  }
}
