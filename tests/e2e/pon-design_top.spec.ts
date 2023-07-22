import { test, expect, Page } from '@playwright/test'

test.describe('pon-design_top-link', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/pon-design')
  })

  test.afterEach(async ({ context }) => {
    await context.close()
  })

  const waitForScreenshots = async (page: Page, fullPage = true, timeout = 8000) => {
    await page.waitForTimeout(timeout)
    await expect(page).toHaveScreenshot({ fullPage })
  }
  test('top-page', async ({ page }) => {
    await expect(page).toHaveURL('pon-design')
    await waitForScreenshots(page)
  })

  test('contact-page_from-hero', async ({ page }) => {
    await page.getByTestId('hero-contact').click()
    await page.waitForURL('**/contact')
    await expect(page).toHaveURL('pon-design/contact')
    await waitForScreenshots(page)
  })

  test('web-magazine-page', async ({ page }) => {
    await page.getByTestId('web-magazine').click()
    await page.waitForURL('**/web-magazine')
    await expect(page).toHaveURL('pon-design/news/web-magazine')
    await waitForScreenshots(page)
  })

  test('service-page', async ({ page }) => {
    await page.getByTestId('more-service').click()
    await page.waitForURL('**/service')
    await expect(page).toHaveURL('pon-design/service')
    await waitForScreenshots(page)
  })

  test('works-page', async ({ page }) => {
    await page.getByTestId('more-works').click()
    await page.waitForURL('**/works')
    await expect(page).toHaveURL('pon-design/works')
    await waitForScreenshots(page)
  })

  test('company-page', async ({ page }) => {
    await page.getByTestId('more-company').click()
    await page.waitForURL('**/company')
    await expect(page).toHaveURL('pon-design/company')
    await waitForScreenshots(page)
  })
  test('recruit-page', async ({ page }) => {
    await page.getByTestId('more-recruit').click()
    await page.waitForURL('**/recruit')
    await expect(page).toHaveURL('pon-design/recruit')
    await waitForScreenshots(page)
  })
  test('contact-page', async ({ page }) => {
    await page.getByTestId('more-contact').click()
    await page.waitForURL('**/contact')
    await expect(page).toHaveURL('pon-design/contact')
    await waitForScreenshots(page)
  })
})
