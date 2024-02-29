import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { SearchInput } from './SearchInput'

it('renders without error', async () => {
    const testValue = 'some value'
    const mockOnChange = vi.fn()
    const user = userEvent.setup()
    render(<SearchInput value={testValue} onChange={mockOnChange} />)

    expect(
        screen.getByPlaceholderText('Search all the GIFs there is...')
    ).toBeInTheDocument()
    expect(screen.getByDisplayValue(testValue)).toBeInTheDocument()
    expect(
        screen.getByRole('button', {
            name: /clear search/i,
        })
    ).toBeInTheDocument()

    await user.click(
        screen.getByRole('button', {
            name: /clear search/i,
        })
    )

    expect(mockOnChange).toHaveBeenCalledWith('')
    expect(mockOnChange).toHaveBeenCalledTimes(1)
})

it('calls onChange when input value changes', async () => {
    const mockOnChange = vi.fn()
    const user = userEvent.setup()
    render(<SearchInput value={''} onChange={mockOnChange} />)

    expect(
        screen.queryByRole('button', {
            name: /clear search/i,
        })
    ).not.toBeInTheDocument()

    const newValue = 'new value'
    await user.type(
        screen.getByPlaceholderText('Search all the GIFs there is...'),
        newValue
    )

    expect(mockOnChange).toHaveBeenLastCalledWith('e')
    expect(mockOnChange).toHaveBeenCalledTimes(newValue.length)
})
