import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ClickableTag } from './ClickableTag'

it('renders with correct elements and calls `onClick`', async () => {
    const onClick = vi.fn()
    const testLabel = 'test'
    const user = userEvent.setup()
    render(<ClickableTag onClick={onClick} label={testLabel} />)

    expect(
        screen.getByRole('button', {
            name: testLabel,
        })
    ).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: testLabel }))

    expect(onClick).toHaveBeenCalledTimes(1)
})
