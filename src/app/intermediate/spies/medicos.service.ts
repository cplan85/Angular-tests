import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable()
export class MedicosService {

  constructor( public http: HttpClient ) { }

  getMedicos() {
    return this.http.get('...')
//.map( (resp:any) => resp['medicos'] );
  }

  agregarMedico( medico: any ) {
    return this.http.post('...', medico )
              //  .map( (resp:any) => resp['medico'] );
  }

  borrarMedico( id: string ) {
    return this.http.delete('...' )
             //   .map( (resp:any) => resp['medico'] );
  }


}
