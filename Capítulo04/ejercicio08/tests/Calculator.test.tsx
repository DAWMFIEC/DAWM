import '@testing-library/jest-dom/vitest';
import { afterEach, describe, it, expect } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import Calculator from '../components/Calculator';

describe('App', () => {

    afterEach(cleanup);

    it('render Calculator Content has a Select', () => {
        render(<Calculator />)
        
        const selectOne = screen.getByRole("combobox");
        expect(selectOne).toBeInTheDocument();  
    })

    it('render Calculator Content has a Select with default value "Seleccione un tipo de promoción"', () => {
        render(<Calculator />)
        
        const selectOne = screen.getByRole("combobox");
        const dropdownOptions = screen.getByText("Seleccione un tipo de promoción")
        expect(selectOne.children[0].textContent).toBe(dropdownOptions.textContent)
    })

    it('render Calculator Content has a RadioGroup', () => {
        render(<Calculator />)
        
        const selectOne = screen.getByRole("radiogroup");
        expect(selectOne).toBeInTheDocument();  
    })

    it('render Calculator Content has a RadioGroup with "1 mes"', () => {
        render(<Calculator />)
        
        const selectOne = screen.getByRole("radiogroup")
        const radioOptions = screen.getByText("1 mes")
        expect(selectOne.children[0].textContent).toBe(radioOptions.textContent)
    })
    
})