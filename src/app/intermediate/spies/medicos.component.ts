import { Component, OnInit } from '@angular/core';
import { MedicosService } from './medicos.service';

@Component({
  selector: 'app-medicos',
  template: `
    <p>
      medicos works!
    </p>
  `,
  styles: []
})
export class MedicosComponent implements OnInit {

  public medicos: any[] = [];
  public mensajeError: string = '';

  constructor( public _medicoService: MedicosService ) { }

  ngOnInit() {
    this._medicoService.getMedicos()
          .subscribe( (medicos:any) => this.medicos = medicos );
  }

  agregarMedico() {
    const medico = { nombre: 'Médico Juan Carlos' };

     this._medicoService.agregarMedico(medico)
           .subscribe(
             (medicoDB:any) => this.medicos.push(medicoDB),
             (err:any )=> this.mensajeError = err
           );
  }

  borrarMedico(id: string) {
    const confirmar = confirm('Are you sure you want to delete this médico');

    if ( confirmar ) {
      this._medicoService.borrarMedico( id );
    }

  }

}
