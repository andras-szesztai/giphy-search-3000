import { render, screen } from '@testing-library/react'

import App from './App'

it('renders headline', () => {
    render(<App />)
    expect(
        screen.getByRole('heading', { name: /let's gif this party started/i })
    ).toBeInTheDocument()
})
