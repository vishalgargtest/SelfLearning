import{Injectable} from '@angular/core'
import {Http,HttpModule} from '@angular/http'
import {config} from '../config/config'

import {patient} from '../Models/patient'
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { Headers,RequestMethod,ResponseOptions,RequestOptions,ResponseContentType } from '@angular/http';

@Injectable()
export class patientService{
constructor(private http:Http

){}
 headerDict = {
    'Content-Type': 'application/json; charset=utf-8',
  }
  
  requestOptions = {    
    headers: new Headers(this.headerDict), 
  };
getDetails():Observable<any>{
   return this.http.get(config.Get_Patient_Details).pipe(map(this.extrct));
}
options = new RequestOptions({
    
    responseType: ResponseContentType.Json,
    withCredentials: false
  });
   
addDetails(form):Observable<any>{
    return this.http.post(config.Add_Patient_Details,{PatientName:form.value.name}).pipe(map(this.extrct));
 }
private extrct(res:Response){

    return res.json()
}
}