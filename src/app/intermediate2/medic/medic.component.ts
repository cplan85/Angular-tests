import { MedicService } from './medic.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medic',
  templateUrl: './medic.component.html',
  styles: [
  ]
})
export class MedicComponent implements OnInit {

  medics: any[] = [];

  constructor( public _medicService: MedicService) { }

  ngOnInit(): void {
  }

  greetMedic( name:string) {
    return `Hello ${name}`
  }

  getMedics() {
    this._medicService.getMedics().subscribe( (medics:any) => {
      this.medics = medics
    })
  }

}
