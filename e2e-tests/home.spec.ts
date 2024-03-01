import { test, expect } from '@playwright/test'

import { gifResults, trendingTerms } from './mock/data'

test.beforeEach(async ({ page }) => {
    await page.route('**/trending/searches?*', (route) =>
        route.fulfill({
            body: JSON.stringify({ data: trendingTerms }),
        })
    )
    await page.route('**/gifs/search?*', (route) =>
        route.fulfill({
            body: JSON.stringify({ data: gifResults }),
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
    await expect(
        page.getByTestId('trending-terms-container').getByRole('button')
    ).toHaveCount(trendingTerms.length)
    await expect(
        page.getByTestId('gif-results-container').getByRole('img')
    ).toHaveCount(0)
})

test('I can use the search input to search for gifs, with clear button results disappear', async ({
    page,
}) => {
    await page.goto('/')

    await expect(
        page.getByTestId('gif-results-container').getByRole('img')
    ).toHaveCount(0)

    await page
        .getByPlaceholder('Search all the GIFs there is...')
        .fill('some gif')

    await expect(
        page.getByTestId('gif-results-container').getByRole('img')
    ).toHaveCount(gifResults.length)

    await page.getByRole('button', { name: 'Clear search' }).click()

    await expect(
        page.getByTestId('gif-results-container').getByRole('img')
    ).toHaveCount(0)
})

test('I can use the trending tags to search for gifs, clearing the search field makes results disappear', async ({
    page,
}) => {
    await page.goto('/')

    await expect(
        page.getByTestId('gif-results-container').getByRole('img')
    ).toHaveCount(0)

    await page.getByRole('button', { name: trendingTerms[0] }).click()

    await expect(
        page.getByTestId('gif-results-container').getByRole('img')
    ).toHaveCount(gifResults.length)

    await page.getByPlaceholder('Search all the GIFs there is...').clear()

    await expect(
        page.getByTestId('gif-results-container').getByRole('img')
    ).toHaveCount(0)
})
