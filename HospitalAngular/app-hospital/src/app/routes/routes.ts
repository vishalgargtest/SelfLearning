import{PatientDetailsComponent} from '../patient-details/patient-details.component'
import{PatientAddComponent} from '../patient-add/patient-add.component'
import{PatientViewComponent} from '../patient-view/patient-view.component'
export const Routes=[
    {
        path:'Patients',
        component:PatientDetailsComponent
    },
    {
        path:'AddPatients',
        component:PatientDetailsComponent,
        children:[
            {
            path:"user/:id",
            component:PatientViewComponent
            }
        ]
        
    },
    {
    path:'AddPatients1',
    component:PatientAddComponent,
    
    
}
]