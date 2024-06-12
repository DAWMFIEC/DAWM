import '@testing-library/jest-dom/vitest';
import { afterEach, describe, it, expect } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'

import Result from '../components/Result';

describe('App', () => {

    afterEach(cleanup);

    it('render Result', () => {
        render(<Result />)
    })

    it('render Result has title, subtitle and description', () => {
        render(<Result title="$120" subtitle="6 meses" description="Plan 100 Gb"/>)
        expect(screen.getByRole('heading', { level: 2, name: "6 meses" })).toBeInTheDocument();
        expect(screen.getByText("$120")).toBeInTheDocument();
        expect(screen.getByText("Plan 100 Gb")).toBeInTheDocument();
    })

    
    
})