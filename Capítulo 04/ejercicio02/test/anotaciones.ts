import {anotacionEntero,anotacionCadena,anotacionFuncion,anotacionObjeto,anotacionFuncionR} from '../src/anotaciones'
import {expect} from 'chai'


describe("Anotación de tipo de datos",()=>{

    it('Tipo entero',()=>{
        expect(anotacionEntero()).to.equal(237)
    })

    it('Tipo cadena de caracteres',()=>{
        expect(anotacionCadena()).to.equal('Mensaje de texto')
    })

    it('Tipo arreglos',()=>{
        expect(anotacionFuncion(['spray', 'elite', 'exuberant', 'destruction', 'present', 'limit'], 1)).to.equal('elite')
    })

    it('Tipo de objeto',()=>{
        let person = { name: 'Jayme', age: 30 }
        expect(JSON.stringify(anotacionObjeto())).to.equal(JSON.stringify(person))
    })


    it('Tipo de retorno',()=>{
        expect(anotacionFuncionR('Bye! Bye!')).to.equal('Bye! Bye!')
    })

})