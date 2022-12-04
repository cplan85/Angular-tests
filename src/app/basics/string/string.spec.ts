import { message } from './string';
//describe('String Tests');

//it('It should return a string');

describe('String Tests', ()=> {

it('Should return a string', () => {

    const resp = message('Carlos');

    expect( typeof resp).toBe('string');
})

it('Should return a greeting with a name', () => {

    const name = 'Juan';
    const resp = message(name);

    //this is better than using toBe because toBe is too specific. if we change string in code test will fail.
    expect( resp).toContain( name);
})



});