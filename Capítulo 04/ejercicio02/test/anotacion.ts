import {anotacionEntero,anotacionCadena,anotacionArray,anotacionAny,anotacionObjeto} from '../src/anotacion'
import {expect} from 'chai'


describe("Anotación de tipo de datos",()=>{

    it('Tipo entero',()=>{
        expect(anotacionEntero()).to.equal(237)
    })

    it('Tipo cadena de caracteres',()=>{
        expect(anotacionCadena()).to.equal('Mensaje de texto')
    })

    it('Tipo array',()=>{
        let skills = ['Problem Solving','Software Design','Programming','Design']
        expect(anotacionArray(4, "Design")).to.deep.equal(skills)
    })

    it('Tipo any',()=>{
        let array = [ 1, 'data1', 'data2', 2, 'data3', 3 ]
        expect(anotacionAny()).to.deep.equal(array)
    })

    it('Tipo objeto',()=>{
        let person = { name: 'Jayme', age: 30 }
        expect(anotacionObjeto()).to.deep.equal(person)
    })

})