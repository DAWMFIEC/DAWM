import {comparandoCadenas,comparandoEnteros} from '../src/tipo'
import {expect} from 'chai'


describe("Tipos de datos",()=>{

    it('Comparando cadenas',()=>{
        expect(comparandoCadenas()).to.equal(true)
    })

    it('Comparando enteros',()=>{
        expect(comparandoEnteros()).to.equal(false)
    })

})