import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { Observable, of, from, EMPTY, throwError} from 'rxjs';


describe('MedicosComponent', () => {

    let component: MedicosComponent;
    const httpSpy = jasmine.createSpyObj('HttpClient', { post: of({}), get: of({}) })
    const service = new MedicosService(httpSpy);
    beforeEach( () => {
        component = new MedicosComponent(service);
    });


    it('Init should load the doctors ("medicos").', () => {
        
        const medicos = ['medico1', 'medico2', 'medico3'];    
        //this allows us to make false petitioncs.
        spyOn(service, 'getMedicos').and.callFake(() => {
            //In Fernando Herrera function is Observable.from. Now it is just from([])
            return from([medicos])
        })

        component.ngOnInit();
        expect(component.medicos.length).toBeGreaterThan(0);
    });

    it('Should call service to add medicos when you execute agregarMedico from Component', () => {

        //this spy goes into the service's agregarMedico function and returns EMPTY Observable. 
        //Here we only want to check that it was called
      const spy =  spyOn(service, 'agregarMedico').and.callFake(() => {
            //In Fernando Herrera function is Observable.from. Now it is just from([])
            return EMPTY
        })
            //In Fernando Herrera function is Observable.from. Now it is just from([])
       
     component.agregarMedico();

     expect( spy ).toHaveBeenCalled();
    });

    it('Should add a new Medico to the medicos Array', () => {

        const medico = {id:1, name: 'Juan'}
         const spy =  spyOn(service, 'agregarMedico').and.returnValue( from([ medico]));

         component.agregarMedico();
        //this test makes the medicoDB equal to medico and so it confirms that this medico is added to the array.
        expect(component.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
        
    });

    it ('If the adding fails, the message Error should be the same as', () => {

        const myError = `Can't add a medico error message`;
        const spy =  spyOn(service, 'agregarMedico').and.returnValue( throwError(myError));

        component.agregarMedico();

        expect(component.mensajeError).toBe(myError);
        
    })

    it('should call the server to delete the medico', ()=> {

        const spy = spyOn(service, 'borrarMedico').and.returnValue(EMPTY);
        //this mimics when the user clicks confirm on the confirm prompt.
        spyOn(window, 'confirm').and.returnValue(true);

        component.borrarMedico('1');
        expect(spy).toHaveBeenCalledWith('1');
    })

    
    it('should  not call the server to delete the medico', ()=> {

        const spy = spyOn(service, 'borrarMedico').and.returnValue(EMPTY);
        //this mimics when the user doesn't confirm on the website.
        spyOn(window, 'confirm').and.returnValue(false);

        component.borrarMedico('1');
        expect(spy).not.toHaveBeenCalledWith('1');
    })

});
