import '@testing-library/jest-dom/vitest';
import { afterEach, describe, it, expect } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'

import Plan from '../components/Plan';

describe('App', () => {

    afterEach(cleanup);

    it('render Plan', () => {
        render(<Plan />)
    })

    it('render Plan has title, subtitle and description', () => {
        render(<Plan title="Plan" subtitle="100 Gb" description="Todos los servicios incluídos" />)
        expect(screen.getByRole('heading', { level: 2, name: "100 Gb" })).toBeInTheDocument();
        expect(screen.getByText("Plan")).toBeInTheDocument();
        expect(screen.getByText("Todos los servicios incluídos")).toBeInTheDocument();
    })
})