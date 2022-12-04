import { returnedUser } from "./booleans"

describe('Test of boolean', ()=> {
    it ('should return true', () => {
    
        const response = returnedUser();

        expect(response).toBeTruthy();
    })
})