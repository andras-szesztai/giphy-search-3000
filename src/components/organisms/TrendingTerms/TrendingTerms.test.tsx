import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { TrendingTermsContent } from './TrendingTerms'

it('renders with correct elements when loading', () => {
    render(
        <TrendingTermsContent
            data={undefined}
            isLoading
            isError={false}
            onTermSelect={vi.fn}
        />
    )

    expect(screen.getByTestId('trending-terms-icon')).toBeInTheDocument()
    expect(screen.getByText('Loading...')).toBeInTheDocument()
    expect(
        screen.queryByText(/Sorry, something went wrong/i)
    ).not.toBeInTheDocument()
    expect(screen.queryAllByRole('button')).toHaveLength(0)
})

it('renders with correct elements when error', () => {
    render(
        <TrendingTermsContent
            data={undefined}
            isLoading={false}
            isError
            onTermSelect={vi.fn}
        />
    )

    expect(screen.getByTestId('trending-terms-icon')).toBeInTheDocument()
    expect(screen.getByText(/Sorry, something went wrong/i)).toBeInTheDocument()
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
    expect(screen.queryAllByRole('button')).toHaveLength(0)
})

it('renders with correct elements when data is present, calls `onTermSelect` with correct value', async () => {
    const testData = [
        'test1',
        'test2',
        'test3',
        'test4',
        'test5',
        'test6',
        'test7',
        'test8',
        'test9',
    ]
    const onTermSelect = vi.fn()
    const user = userEvent.setup()
    render(
        <TrendingTermsContent
            data={testData}
            onTermSelect={onTermSelect}
            isLoading={false}
            isError={false}
        />
    )

    expect(screen.getByTestId('trending-terms-icon')).toBeInTheDocument()
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
    expect(
        screen.queryByText(/Sorry, something went wrong/i)
    ).not.toBeInTheDocument()
    expect(screen.queryAllByRole('button')).toHaveLength(8)

    await user.click(screen.getByRole('button', { name: testData[0] }))

    expect(onTermSelect).toHaveBeenCalledWith(testData[0])
    expect(onTermSelect).toHaveBeenCalledTimes(1)
})
