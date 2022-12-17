import { MedicComponent } from './../../intermediate2/medic/medic.component';
import { ROUTES } from './../../../../coverage/tests/app/advanced/routes/app.routes';

describe('principal Routes', () => {
    it('Should exist the route /medico/:id', () => {
        expect(ROUTES).toContain({
            path: 'medico/:id',
            component: MedicComponent
        })
    })
})