import { test, expect, Page } from '@playwright/test'

test.describe('sneakers_top', () => {
  const waitForScreenshots = async (page: Page, fullPage = true, timeout = 12000) => {
    await page.waitForTimeout(timeout)
    await expect(page).toHaveScreenshot({ fullPage, timeout, mask: await page.locator('video').all() })
  }

  test.beforeEach(async ({ page }) => {
    const url = 'http://localhost:3000/sneakers'
    await page.goto(url)
    await page.waitForURL(url)
  })

  test.afterEach(async ({ page, context }) => {
    await waitForScreenshots(page)
    await context.close()
  })

  test('top-page', async ({ page }) => {
    await expect(page).toHaveURL('sneakers')
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.evaluate(() => window.scrollTo(0, 0))
  })
})
