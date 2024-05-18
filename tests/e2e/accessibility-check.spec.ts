import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('PON DESIGN', () => {
  test('should not have any automatically detectable accessibility issues', async ({ context }) => {
    const page = await context.newPage()
    await page.goto('http://localhost:3000/pon-design')
    await page.waitForURL('pon-design')
    const accessibilityScanResults = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })
})

test.describe('DAILY TRIAL', () => {
  test('should not have any automatically detectable accessibility issues', async ({ context }) => {
    const page = await context.newPage()
    await page.goto('http://localhost:3000/daily-trial')
    await page.waitForURL('daily-trial')
    const accessibilityScanResults = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })
})

test.describe('Sneakers', () => {
  test('should not have any automatically detectable accessibility issues', async ({ context }) => {
    const page = await context.newPage()
    await page.goto('http://localhost:3000/sneaker')
    await page.waitForURL('sneaker')
    const accessibilityScanResults = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })
})
