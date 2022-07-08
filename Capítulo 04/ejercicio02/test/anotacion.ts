import {anotacionEntero,anotacionCadena,anotacionObjeto} from '../src/anotaciones'
import {expect} from 'chai'


describe("Anotación de tipo de datos",()=>{

    it('Tipo entero',()=>{
        expect(anotacionEntero()).to.equal(237)
    })

    it('Tipo cadena de caracteres',()=>{
        expect(anotacionCadena()).to.equal('Mensaje de texto')
    })

    it('Tipo de objeto',()=>{
        let person = { name: 'Jayme', age: 30 }
        expect(JSON.stringify(anotacionObjeto())).to.equal(JSON.stringify(person))
    })

})