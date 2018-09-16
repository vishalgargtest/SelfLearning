import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.css']
})
export class PatientViewComponent implements OnInit {
name:string
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{this.name=params.id})
  }

}
