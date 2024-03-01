import { render, screen } from '@testing-library/react'

import { RequestFeedback } from './RequestFeedback'

it('returns null when not loading and no error', () => {
    const { container } = render(
        <RequestFeedback isError={false} isLoading={false} />
    )
    expect(container.firstChild).toBeNull()
})

it('renders loading message', () => {
    render(<RequestFeedback isError={false} isLoading={true} />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
})

it('renders error message', () => {
    render(<RequestFeedback isError={true} isLoading={false} />)
    expect(
        screen.getByText(
            'Sorry, something went wrong while trying to fetch trending terms'
        )
    ).toBeInTheDocument()
})
