import { render, screen } from '@testing-library/react'

import { GifResultsContent } from './GifResults'
import { GifResponse } from './types'

it('renders with correct elements when loading', () => {
    render(<GifResultsContent data={undefined} isLoading isError={false} />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()
    expect(
        screen.queryByText(/Sorry, something went wrong/i)
    ).not.toBeInTheDocument()
    expect(screen.queryAllByRole('img')).toHaveLength(0)
})

it('renders with correct elements when error', () => {
    render(<GifResultsContent data={undefined} isLoading={false} isError />)

    expect(screen.getByText(/Sorry, something went wrong/i)).toBeInTheDocument()
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
    expect(screen.queryAllByRole('img')).toHaveLength(0)
})

it('renders with correct elements when data is present', () => {
    const testData = [
        {
            id: '1',
            alt_text: 'test-1',
            images: { original: { webp: 'test1' } },
        },
        { id: '2', images: { original: { webp: 'test2' } } },
        { id: '3', images: { original: { webp: 'test3' } } },
        { id: '4', images: { original: { webp: 'test4' } } },
    ]

    render(
        <GifResultsContent
            data={testData as GifResponse}
            isLoading={false}
            isError={false}
        />
    )

    expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
    expect(
        screen.queryByText(/Sorry, something went wrong/i)
    ).not.toBeInTheDocument()
    expect(screen.queryAllByRole('img')).toHaveLength(4)

    expect(screen.getByRole('img', { name: 'test-1' })).toBeInTheDocument()
})
