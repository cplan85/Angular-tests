import { IncrementadorComponent } from './../../intermediate2/incrementor/incrementador.component';
import { MedicComponent } from './../../intermediate2/medic/medic.component';
import { HospitalComponent } from './../../intermediate2/hospital/hospital.component';
import { Routes } from "@angular/router";


export const ROUTES: Routes = [
    {path: 'hospital', component: HospitalComponent},
    {path: 'medico/:id', component: MedicComponent},
    {path: '**', component: IncrementadorComponent}
]