import '@testing-library/jest-dom/vitest';
import { afterEach, describe, it } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import App from '../App'

describe('App', () => {

    afterEach(cleanup);

    it('render App', () => {
        render(<App />)
    })
})