import { getRobots } from "./arrays"

describe('Tests of arrays', () => {

    xit('Should return at least 3 robots', () => {
        const response = getRobots();

        expect(response.length).toBeGreaterThanOrEqual(3);
    });

    it('There should be Megaman and Ultron', () => {
        const response = getRobots();

        expect(response).toContain('Megaman' );
        expect(response).toContain('Ultron');
    });
})