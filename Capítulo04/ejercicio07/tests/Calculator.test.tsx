import '@testing-library/jest-dom/vitest';
import { afterEach, describe, it, expect } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'

import Calculator from '../components/Calculator';

describe('App', () => {

    afterEach(cleanup);

    it('render Calculator Content', () => {
        render(<Calculator />)
        expect(screen.getByText("Calculator Component")).toBeInTheDocument();  
    })

    
})