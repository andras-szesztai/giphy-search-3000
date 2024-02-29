import { test, expect } from '@playwright/test'

import { trendingTerms } from './mock/data'

test.beforeEach(async ({ page }) => {
    await page.route('**/trending/searches?*', (route) =>
        route.fulfill({
            body: JSON.stringify({ data: trendingTerms }),
        })
    )
})

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

    await expect(
        page.getByTestId('trending-terms-container').getByRole('button')
    ).toHaveCount(trendingTerms.length)

    await page.getByRole('button', { name: trendingTerms[0] }).click()

    await expect(
        page.getByPlaceholder('Search all the GIFs there is...')
    ).toHaveValue(trendingTerms[0])
})
