import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import {Routes} from './routes/routes'
import { AppComponent } from './app.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import {RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'
import {patientService} from '../Services/patientServices.service'
import { HttpModule } from '@angular/http';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientViewComponent } from './patient-view/patient-view.component'
@NgModule({
  declarations: [
    AppComponent,
    PatientDetailsComponent,
    PatientAddComponent,
    PatientViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(Routes) 
  ],
  providers: [patientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
