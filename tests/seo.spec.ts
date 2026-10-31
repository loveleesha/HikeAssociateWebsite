import { expect, test } from '@playwright/test'
import { ROUTES } from './routes'

const SITE = 'https://hikeassociate.com'

test('every page has unique, well-sized metadata', async ({ page }) => {
  const titles = new Set<string>()
  const descriptions = new Set<string>()

  for (const route of ROUTES) {
    await page.goto(route)
    const title = await page.title()
    const description = await page.locator('meta[name="description"]').getAttribute('content')
    titles.add(title)
    descriptions.add(description ?? '')

    expect(title.length, `${route} title`).toBeLessThanOrEqual(60)
    expect(description?.length, `${route} description`).toBeLessThanOrEqual(160)
    await expect(page.locator('h1'), route).toHaveCount(1)
  }

  expect(titles.size).toBe(ROUTES.length)
  expect(descriptions.size).toBe(ROUTES.length)
})

for (const route of ROUTES) {
  test(`${route} has canonical, social tags and structured data`, async ({ page }) => {
    await page.goto(route)
    const expectedUrl = route === '/' ? SITE : `${SITE}${route}`

    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', expectedUrl)
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute('content', expectedUrl)
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /opengraph-image/)
    await expect(page.locator('meta[property="og:image:alt"]')).toHaveCount(1)
    await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute('content', /opengraph-image/)

    const schemas = await page.locator('script[type="application/ld+json"]').allTextContents()
    const types = schemas.map((text) => JSON.parse(text)).flatMap((data) => data['@graph'] ?? [data])
    expect(types.map((item) => item['@type'])).toContain('ProfessionalService')
    if (route !== '/') expect(types.map((item) => item['@type'])).toContain('BreadcrumbList')
  })
}

test('unknown pages return 404 and are not indexed', async ({ page }) => {
  const response = await page.goto('/page-that-does-not-exist')
  expect(response?.status()).toBe(404)
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/)
})

test('robots.txt and the sitemap list every page', async ({ request }) => {
  const robots = await (await request.get('/robots.txt')).text()
  expect(robots).toContain(`Sitemap: ${SITE}/sitemap.xml`)

  const sitemap = await (await request.get('/sitemap.xml')).text()
  for (const route of ROUTES) {
    expect(sitemap).toContain(`<loc>${route === '/' ? `${SITE}/` : `${SITE}${route}`}</loc>`)
  }
})

test('social image and app icon are real images', async ({ request }) => {
  for (const path of ['/opengraph-image', '/apple-icon']) {
    const response = await request.get(path)
    expect(response.status(), path).toBe(200)
    expect(response.headers()['content-type'], path).toBe('image/png')
  }
})

for (const route of ['/', '/for-businesses']) {
  test(`${route} names TATA Capital as crawlable text`, async ({ page }) => {
    await page.goto(route)
    await expect(page.locator('#customers h2')).toHaveCount(1)
    await expect(page.locator('#customers li').filter({ hasText: 'TATA Capital' })).toHaveCount(1)
  })
}

for (const { width, scope } of [
  { width: 1121, scope: 'header > div' },
  { width: 1440, scope: 'header > div' },
  { width: 390, scope: '#mobile-nav' },
]) {
  test(`login buttons at ${width}px go to the portal and pass no link equity`, async ({ page }) => {
    await page.setViewportSize({ width, height: 800 })
    await page.goto('/')
    if (width === 390) await page.getByRole('button', { name: 'Open menu' }).click()

    const admin = page.locator(scope).getByRole('link', { name: 'Admin Login' })
    const user = page.locator(scope).getByRole('link', { name: 'User Login' })
    await expect(admin).toBeVisible()
    await expect(user).toBeVisible()
    await expect(admin).toHaveAttribute('href', 'https://hrms.hikeassociate.com/admin/login')
    await expect(user).toHaveAttribute('href', 'https://hrms.hikeassociate.com/login')
    await expect(admin).toHaveAttribute('rel', 'nofollow')
    await expect(user).toHaveAttribute('rel', 'nofollow')

    const overflow = await page.evaluate(() => {
      const bar = document.querySelector('header > div')!
      const end = bar.getBoundingClientRect().right - parseFloat(getComputedStyle(bar).paddingRight)
      return Math.max(...[...bar.children].map((el) => el.getBoundingClientRect().right)) - end
    })
    expect(overflow).toBeLessThanOrEqual(1)
  })
}
