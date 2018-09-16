import { Component, OnInit } from '@angular/core';
import {patient} from '../Models/patient'
import {patientService} from '../Services/patientServices.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public patientDetails:patient
  constructor(private patientService:patientService
    
  ){}
  ngOnInit(){
    //this.patientService.getDetails().subscribe((res)=>this.patientDetails=res)
  }
  title = 'app-hospital';
}
