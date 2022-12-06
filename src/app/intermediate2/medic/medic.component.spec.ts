import { MedicService } from './medic.service';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicComponent } from './medic.component';
import { HttpClientModule } from '@angular/common/http';

describe('Medic Component', () => {
    let component: MedicComponent;
    let fixture: ComponentFixture<MedicComponent>

    beforeEach( ()=> {

        TestBed.configureTestingModule({
            declarations: [MedicComponent],
            providers: [MedicService],
            imports: [HttpClientModule]

        });

       fixture = TestBed.createComponent( MedicComponent);
       component = fixture.componentInstance;

    });

    it('Should create a component', () => {
        expect(component).toBeTruthy();
    } )

    it('Should return the name of the medic', () => {
        
        const name = 'Juan';

        const response = component.greetMedic('Juan');
        expect(response).toContain(name);
    } )
})