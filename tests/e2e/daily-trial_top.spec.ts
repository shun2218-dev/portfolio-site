import { test, expect, Page } from '@playwright/test'

test.describe('daily-trial_top', () => {
  const waitForScreenshots = async (page: Page, fullPage = true, timeout = 12000) => {
    await expect(page).toHaveScreenshot({ fullPage, maxDiffPixelRatio: 0.5, maxDiffPixels: 1, timeout })
  }

  test.beforeEach(async ({ page }) => {
    const url = 'http://localhost:3000/daily-trial'
    await page.goto(url)
    await page.waitForURL(url)
  })

  test.afterEach(async ({ page, context }) => {
    await waitForScreenshots(page)
    await context.close()
  })

  test('top-page', async ({ page }) => {
    await expect(page).toHaveURL('daily-trial')
  })
})
