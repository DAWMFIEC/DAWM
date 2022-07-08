import {anotacionFuncionParametros,anotacionFuncionRetorno} from '../src/funcion'
import {expect} from 'chai'


describe("Funciones",()=>{

    it('Anotación de parámetros',()=>{
        expect(anotacionFuncionParametros(['spray', 'elite', 'exuberant', 'destruction', 'present', 'limit'], 1)).to.equal('elite')
    })

    it('Anotación de retorno',()=>{
        expect(anotacionFuncionRetorno('Bye! Bye!')).to.equal('Bye! Bye!')
    })

})