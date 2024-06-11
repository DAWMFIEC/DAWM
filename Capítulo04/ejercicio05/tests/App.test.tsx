import '@testing-library/jest-dom/vitest';
import { afterEach, describe, it, expect } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import App from './App'


describe('App', () => {

    afterEach(cleanup);

    it('render App', () => {
        render(<App />)
    })

    it('render h1', () => {
        render(<App />)

        // Busca el elemento H1 con el texto "Título Principal"
        const h1Element = screen.getByText('Título Principal');

        // Verifica que el elemento H1 esté en el documento
        expect(h1Element).toBeInTheDocument();

        screen.debug();

    })

    it('render h2', () => {
        render(<App />)
        const h2Element = screen.getByText('Título Secundario');
        expect(h2Element).toBeInTheDocument();
    })

    it('render p', () => {
        render(<App />)
        const pElement = screen.getByTestId("content");
        expect(pElement).toBeInTheDocument();
    })
})