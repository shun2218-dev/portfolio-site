import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('PON DESIGN', () => {
  test('should not have any automatically detectable accessibility issues', async ({ context }) => {
    const page = await context.newPage()
    const pupupPromise = page.waitForEvent('popup')
    await page.goto('https://portfolio-site-dun-rho.vercel.app/')
    await page.getByRole('link', { name: 'pon design' }).click()
    const page2 = await pupupPromise
    const loadPromise = page2.waitForEvent('load')
    const pageLoaded = await loadPromise
    const accessibilityScanResults = await new AxeBuilder({ page: pageLoaded }).analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })
})
