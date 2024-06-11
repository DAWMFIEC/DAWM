import '@testing-library/jest-dom/vitest';
import { afterEach, describe, it, expect } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {

    afterEach(cleanup);

    it('render App', () => {
        render(<App />)
        screen.debug();
    })

    it('render Calculator Component', () => {
        render(<App />)
        const calculatorComponent = screen.getByText("Calculator Component");
        expect(calculatorComponent).toBeInTheDocument();        
    })

    it('render Plan Component', () => {
        render(<App />)
        const planComponent = screen.getByText("Plan Component");
        expect(planComponent).toBeInTheDocument();
    })

    it('render Result Component', () => {
        render(<App />)
        const resultComponent = screen.getByText("Result Component");
        expect(resultComponent).toBeInTheDocument();
    })
})