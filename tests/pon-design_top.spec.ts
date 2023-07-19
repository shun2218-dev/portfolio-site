import { test, expect } from '@playwright/test'

test('pon-design_top-page', async ({ context }) => {
  const page = await context.newPage()
  const pupupPromise = page.waitForEvent('popup')
  await page.goto('https://portfolio-site-dun-rho.vercel.app/')
  await page.getByRole('link', { name: 'pon design' }).click()
  const page2 = await pupupPromise
  const loadPromise = page2.waitForEvent('load')
  const pageLoaded = await loadPromise
  await pageLoaded.locator('div').filter({ hasText: 'WEB DESIGN SPECIALISTお客様の夢を叶えるWebサイトを制作CONTACT' }).getByRole('link').click()
  await pageLoaded.getByRole('link', { name: 'PON DESIGN' }).click()
  await pageLoaded.getByRole('link', { name: '2030.02.01 お知らせ Webデザインニュースサイト「ウェブマガジン」に取材いただきました' }).click()
  await pageLoaded.getByRole('link', { name: 'PON DESIGN' }).click()
  await pageLoaded
    .locator('div')
    .filter({ hasText: /^MORE$/ })
    .first()
    .click()
  await pageLoaded.getByRole('link', { name: 'PON DESIGN' }).click()
  await pageLoaded.locator('section').filter({ hasText: 'WORKS制作実績様々なジャンルのWebサイト制作が可能です。ご購入やお申込み数の増加などを実現します！MORE' }).getByRole('link').click()
  await pageLoaded.getByRole('link', { name: 'PON DESIGN' }).click()
  await pageLoaded
    .locator('div')
    .filter({ hasText: /^MORE$/ })
    .nth(2)
    .click()
  await pageLoaded.getByRole('link', { name: 'PON DESIGN' }).click()
  await pageLoaded.locator('section').filter({ hasText: 'RECRUIT採用情報私たちと一緒に働きませんか？MORE' }).getByRole('link').click()
  await pageLoaded.getByRole('link', { name: 'PON DESIGN' }).click()
  await pageLoaded.locator('section').filter({ hasText: 'CONTACTお問い合わせWebサイトの制作のご依頼やお見積りなど、お気軽にご相談ください。MORE' }).getByRole('link').click()
  await pageLoaded.getByRole('link', { name: 'PON DESIGN' }).click()
  await context.close()
})
