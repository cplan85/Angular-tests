import { increment } from "./numbers";

describe('Numbers tests', () => {

    it('Should return number 100, if the number is greater is greater than 100', ()=> {
    
       const response = increment(300);
        expect(response).toBe(100);
    });

    it('Should return number plus 1 if the number is less than 100', ()=> {
    
        const response = increment(10);
         expect(response).toBe(11);
     });
})