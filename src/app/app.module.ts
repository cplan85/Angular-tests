import { ROUTES } from './advanced/routes/app.routes';
import { RouterModule } from '@angular/router';
import { IncrementadorComponent } from './intermediate2/incrementor/incrementador.component';
import { MedicosComponent } from './intermediate/spies/medicos.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicComponent } from './intermediate2/medic/medic.component';
import { HospitalComponent } from './intermediate2/hospital/hospital.component';
import { NavbarComponent } from './advanced/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicComponent,
    HospitalComponent,
    IncrementadorComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
