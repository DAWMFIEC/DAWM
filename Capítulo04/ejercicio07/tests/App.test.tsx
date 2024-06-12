import '@testing-library/jest-dom/vitest';
import { afterEach, describe, it, expect } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {

    afterEach(cleanup);

    it('render App', () => {
        render(<App />)
    })

    it('render Calculator Component', () => {
        render(<App />)
        const calculatorComponent = screen.getByText("Calculator Component");
        expect(calculatorComponent).toBeInTheDocument();        
    })

    it('render Plan Component with title equal to "Plan"', () => {
        render(<App />)
        const resultComponent = screen.getByText('Plan')
        expect(resultComponent.innerHTML).to.equal('Plan');
    })

    it('render Plan Component with subtitle equal to "100 Gb"', () => {
        render(<App />)
        const resultComponent = screen.getByText("100 Gb")
        expect(resultComponent.innerHTML).to.equal("100 Gb");
    })

    it('render Plan Component with description equal to "Todos los servicios incluídos"', () => {
        render(<App />)
        const resultComponent = screen.getByText("Todos los servicios incluídos")
        expect(resultComponent.innerHTML).to.equal("Todos los servicios incluídos");
    })
 

    it('render Result Component with title equal to "$120"', () => {
        render(<App />)
        const resultComponent = screen.getByText('$120')
        expect(resultComponent.innerHTML).to.equal('$120');
    })

    it('render Result Component with subtitle equal to "6 meses"', () => {
        render(<App />)
        const resultComponent = screen.getByText('6 meses')
        expect(resultComponent.innerHTML).to.equal('6 meses');
    })

    it('render Result Component with description equal to "Plan 100 Gb"', () => {
        render(<App />)
        const resultComponent = screen.getByText("Plan 100 Gb")
        expect(resultComponent.innerHTML).to.equal("Plan 100 Gb");
    })
})