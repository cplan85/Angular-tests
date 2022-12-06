import { IncrementadorComponent } from './intermediate2/incrementor/incrementador.component';
import { MedicosComponent } from './intermediate/spies/medicos.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicComponent } from './intermediate2/medic/medic.component';
import { HospitalComponent } from './intermediate2/hospital/hospital.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicComponent,
    HospitalComponent,
    IncrementadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
