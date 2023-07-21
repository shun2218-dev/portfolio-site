import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('PON DESIGN', () => {
  test('should not have any automatically detectable accessibility issues', async ({ context }) => {
    const page = await context.newPage()
    await page.goto('http://localhost:3000/pon-design')
    await page.waitForURL('pon-design')
    const accessibilityScanResults = await new AxeBuilder({ page: page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })
})
