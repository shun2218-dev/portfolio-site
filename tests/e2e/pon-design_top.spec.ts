import { test, expect } from '@playwright/test'

test('pon-design_top-page', async ({ context }) => {
  const page = await context.newPage()
  const pupupPromise = page.waitForEvent('popup')
  await page.goto('http://localhost:3000')
  await page.getByRole('link', { name: 'pon design' }).click()
  const ponDesign = await pupupPromise
  // const loadPromise = page2.waitForEvent('load')
  // const ponDesign = await loadPromise

  const waitForScreenshots = async (path: string, fullPage = true, timeout = 3000) => {
    await ponDesign.waitForTimeout(timeout)
    await ponDesign.screenshot({ path, fullPage })
  }
  await expect(ponDesign).toHaveURL('pon-design')
  await waitForScreenshots('tests/e2e/results/top-page.png')

  await ponDesign.getByTestId('hero-contact').click()
  await ponDesign.waitForURL('**/contact')
  await expect(ponDesign).toHaveURL('pon-design/contact')
  await waitForScreenshots('tests/e2e/results/contact-page_from-hero.png')

  await ponDesign.getByTestId('header-logo').click()
  await ponDesign.waitForURL('**/pon-design')
  await ponDesign.getByTestId('web-magazine').click()
  await ponDesign.waitForURL('**/web-magazine')
  await expect(ponDesign).toHaveURL('pon-design/news/web-magazine')
  await waitForScreenshots('tests/e2e/results/web-magazine-page.png')

  await ponDesign.getByTestId('header-logo').click()
  await ponDesign.waitForURL('**/pon-design')
  await ponDesign.getByTestId('more-service').click()
  await ponDesign.waitForURL('**/service')
  await expect(ponDesign).toHaveURL('pon-design/service')
  await waitForScreenshots('tests/e2e/results/service-page.png')

  await ponDesign.getByTestId('header-logo').click()
  await ponDesign.waitForURL('**/pon-design')
  await ponDesign.getByTestId('more-works').click()
  await ponDesign.waitForURL('**/works')
  await expect(ponDesign).toHaveURL('pon-design/works')
  await waitForScreenshots('tests/e2e/results/works-page.png')

  await ponDesign.getByTestId('header-logo').click()
  await ponDesign.waitForURL('**/pon-design')
  await ponDesign.getByTestId('more-company').click()
  await ponDesign.waitForURL('**/company')
  await expect(ponDesign).toHaveURL('pon-design/company')
  await waitForScreenshots('tests/e2e/results/company-page.png')

  await ponDesign.getByTestId('header-logo').click()
  await ponDesign.waitForURL('**/pon-design')
  await ponDesign.getByTestId('more-recruit').click()
  await ponDesign.waitForURL('**/recruit')
  await expect(ponDesign).toHaveURL('pon-design/recruit')
  await waitForScreenshots('tests/e2e/results/recruit-page.png')

  await ponDesign.getByTestId('header-logo').click()
  await ponDesign.waitForURL('**/pon-design')
  await ponDesign.getByTestId('more-contact').click()
  await ponDesign.waitForURL('**/contact')
  await expect(ponDesign).toHaveURL('pon-design/contact')
  await waitForScreenshots('tests/e2e/results/contact-page.png')

  await ponDesign.getByTestId('header-logo').click()
  await ponDesign.waitForURL('**/pon-design')
  await expect(ponDesign).toHaveURL('pon-design')

  await context.close()
})
