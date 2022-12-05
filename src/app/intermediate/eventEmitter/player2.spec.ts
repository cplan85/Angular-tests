import { Player2 } from "./player2";

describe('Player 2 Emit', () => {

    let player: Player2;

    beforeEach(() => {
        player = new Player2();
    })

    it ('Should emit an event when player receives damage', () => {

        let newHp = 0;
        //this is listening to when hpChange emits a new value
        player.hpChange.subscribe( hp => {
            newHp = hp;
        })
        //because recieve damage emits hpChange newHp will equal 0 in this case.
        player.recieveDamage(1000);
        expect( newHp).toBe(0);
    })

    it ('Should emit an event when player receives damage and player should survive when damage is less than 100', () => {

        let newHp = 0;
        //this is listening to when hpChange emits a new value
        player.hpChange.subscribe( hp => {
            newHp = hp;
        })
        //because recieve damage emits hpChange newHp will equal 0 in this case.
        player.recieveDamage(50);
        expect( newHp).toBe(50);
    })
})