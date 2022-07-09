import {interfazPropiedades} from '../src/interfaz'
import {expect} from 'chai'


describe("Interfaz",()=>{

    it('Propiedades de la interfaz',()=>{
        let person = interfazPropiedades()
        expect(person).to.have.property('ssn')
        expect(person).to.have.property('firstName')
        expect(person).to.have.property('lastName')
        expect(person).to.have.property('age')
        expect(person).to.have.property('married')
    })


    
})