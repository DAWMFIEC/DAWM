import '@testing-library/jest-dom/vitest';
import { afterEach, describe, it, expect } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import App from '../App'


describe('App', () => {

    afterEach(cleanup);

    it('render App', () => {
        render(<App />)
    })

    it('render ¡Hola mundo!', () => {
        render(<App />)

        // Busca el elemento con el texto "¡Hola mundo!"
        const h1Element = screen.getByText('¡Hola mundo!');

        // Verifica que el elemento esté en el documento
        expect(h1Element).toBeInTheDocument();

        screen.debug();

    })

})