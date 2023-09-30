import {claseInstanciacion} from '../src/clase'
import {expect} from 'chai'


describe("Clase",()=>{

    it('Propiedades de la clase',()=>{
        let person = claseInstanciacion()
        expect(person).to.have.property('ssn')
        expect(person.ssn).to.be.a('number');
        expect(person).to.have.property('lastName')
        expect(person.lastName).to.be.a('string');
    })


    
})