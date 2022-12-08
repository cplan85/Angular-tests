import { IncrementadorComponent } from './incrementador.component';

describe('Incrementador Componet Unit Test', () => {

    let component: IncrementadorComponent;

    beforeEach(() => {
        component = new IncrementadorComponent();
    })

    it('Progress should not go past 100', () => {

        component.progreso = 50;
        component.cambiarValor( 5 );
        expect(component.progreso).toBe(55);
    })
})