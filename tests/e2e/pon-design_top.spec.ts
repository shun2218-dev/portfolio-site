import { test, expect, Page } from '@playwright/test'

test.describe('pon-design_top-link', () => {
  const waitForScreenshots = async (page: Page, fullPage = true, timeout = 12000) => {
    await page.waitForTimeout(timeout)
    await expect(page).toHaveScreenshot({ fullPage })
  }

  test.beforeEach(async ({ page }) => {
    const url = 'http://localhost:3000/pon-design'
    await page.goto(url)
    await page.waitForURL(url)
  })

  test.afterEach(async ({ page, context }) => {
    await waitForScreenshots(page)
    await context.close()
  })

  test('top-page', async ({ page }) => {
    await expect(page).toHaveURL('pon-design')
  })

  test('contact-page_from-hero', async ({ page }) => {
    await page.getByTestId('hero-contact').click()
    await page.waitForURL('**/contact')
    await expect(page).toHaveURL('pon-design/contact')
  })

  test('web-magazine-page', async ({ page }) => {
    await page.getByTestId('web-magazine').click()
    await page.waitForURL('**/web-magazine')
    await expect(page).toHaveURL('pon-design/news/web-magazine')
  })

  test('service-page', async ({ page }) => {
    await page.getByTestId('more-service').click()
    await page.waitForURL('**/service')
    await expect(page).toHaveURL('pon-design/service')
  })

  test('works-page', async ({ page }) => {
    await page.getByTestId('more-works').click()
    await page.waitForURL('**/works')
    await expect(page).toHaveURL('pon-design/works')
  })

  test('company-page', async ({ page }) => {
    await page.getByTestId('more-company').click()
    await page.waitForURL('**/company')
    await expect(page).toHaveURL('pon-design/company')
  })
  test('recruit-page', async ({ page }) => {
    await page.getByTestId('more-recruit').click()
    await page.waitForURL('**/recruit')
    await expect(page).toHaveURL('pon-design/recruit')
  })
  test('contact-page', async ({ page }) => {
    await page.getByTestId('more-contact').click()
    await page.waitForURL('**/contact')
    await expect(page).toHaveURL('pon-design/contact')
  })
})
