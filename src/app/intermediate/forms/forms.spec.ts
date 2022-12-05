import { FormBuilder } from '@angular/forms';
import { FormRegister } from './forms';



describe('Forms', () => {

    let component: FormRegister;

    beforeEach(() => {

        component = new FormRegister( new FormBuilder() );
    })

    it('Should create a form with 2 fields, email and password', () => {

        expect(component.form.contains('email')).toBeTruthy();
        expect(component.form.contains('password')).toBeTruthy();
    })

    it('The email should be obligatory', () => {
        const control = component.form.get('email');
        control?.setValue('jdoe@gmail.com');

        expect(control!.valid).toBeTruthy()
    })
})