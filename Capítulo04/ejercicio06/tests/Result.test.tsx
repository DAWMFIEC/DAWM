import '@testing-library/jest-dom/vitest';
import { afterEach, describe, it, expect } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'

import Result from '../components/Result';

describe('App', () => {

    afterEach(cleanup);

    it('render Result Content', () => {
        render(<Result />)
        expect(screen.getByText("Result Component")).toBeInTheDocument();  
    })

    
})