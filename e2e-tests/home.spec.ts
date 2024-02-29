import { test, expect } from '@playwright/test'

test('Page has correct elements when app mounts', async ({ page }) => {
    await page.goto('/')

    await expect(page).toHaveTitle(/Giphy Search 3000/)
    await expect(
        page.getByRole('heading', { name: "let's gif this party started" })
    ).toBeVisible()
    await expect(
        page.getByPlaceholder('Search all the GIFs there is...')
    ).toBeVisible()

    await page
        .getByPlaceholder('Search all the GIFs there is...')
        .fill('some gif')

    await expect(
        page.getByPlaceholder('Search all the GIFs there is...')
    ).toHaveValue('some gif')

    await page.getByRole('button', { name: /clear search/i }).click()

    await expect(
        page.getByPlaceholder('Search all the GIFs there is...')
    ).toHaveValue('')
})
