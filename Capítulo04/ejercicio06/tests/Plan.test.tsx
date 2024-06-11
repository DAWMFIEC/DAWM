import '@testing-library/jest-dom/vitest';
import { afterEach, describe, it, expect } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'

import Plan from '../components/Plan';

describe('App', () => {

    afterEach(cleanup);

    it('render Plan Content', () => {
        render(<Plan />)
        expect(screen.getByText("Plan Component")).toBeInTheDocument();  
    })

    
})