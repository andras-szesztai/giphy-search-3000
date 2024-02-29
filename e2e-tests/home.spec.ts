import { test, expect } from '@playwright/test'

test('Page has correct title and main text', async ({ page }) => {
    await page.goto('/')

    await expect(page).toHaveTitle(/Giphy Search 3000/)
    await expect(
        page.getByRole('heading', { name: "let's gif this party started" })
    ).toBeVisible()
})
