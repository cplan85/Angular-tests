import { Player } from './class';

xdescribe ('Test for classes', ()=> {


    let player = new Player();

    beforeAll( () => {
        console.log('beforeAll');
    });
    beforeEach( () => {
     //   player.hp = 100;
     player = new Player();
    });

    afterAll(() => {

    });
    
    afterEach( () => {
        player.hp = 100;
    });

    it('should return 80 of hp, if I receive 20 damage', () => {

        const response = player.recieveDamage(20);

        expect (response ).toBe(80);
    });
    

    it('should return 50 of hp, if I receive 50 damage', () => {


        const response = player.recieveDamage(50);

        expect (response ).toBe(50);
    });

    it('should return 0 of hp, if I receive damage greater than 100', () => {

        const response = player.recieveDamage(100);

        expect (response ).toBe(0);
    });
})