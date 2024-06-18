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

    it('render Calculator Content has a RadioGroup', () => {
        render(<Calculator />)
        
        const selectOne = screen.getByRole("radiogroup");
        expect(selectOne).toBeInTheDocument();  
    })
    
})