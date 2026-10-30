import AxeBuilder from '@axe-core/playwright'
import { expect, test, type Page } from '@playwright/test'
import { ROUTES } from './routes'

const TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice']

// Reveal content stays transparent until it scrolls into view, which would skew the audit.
async function scrollThrough(page: Page) {
  await page.evaluate(async () => {
    for (let y = 0; y < document.documentElement.scrollHeight; y += 500) {
      window.scrollTo(0, y)
      await new Promise((resolve) => setTimeout(resolve, 40))
    }
    window.scrollTo(0, 0)
  })
}

for (const colorScheme of ['light', 'dark'] as const) {
  for (const width of [1440, 390]) {
    test.describe(`axe ${colorScheme} ${width}px`, () => {
      test.use({ colorScheme, viewport: { width, height: 900 }, reducedMotion: 'reduce' })

      for (const route of [...ROUTES, '/page-that-does-not-exist']) {
        test(route, async ({ page }) => {
          await page.goto(route, { waitUntil: 'networkidle' })
          await scrollThrough(page)
          const { violations } = await new AxeBuilder({ page }).withTags(TAGS).analyze()
          expect(violations.map(({ id, nodes }) => `${id}: ${nodes[0]?.target}`)).toEqual([])
        })
      }
    })
  }
}

test.describe('keyboard', () => {
  test('skip link is first and moves focus to the main content', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })
    await page.keyboard.press('Tab')
    const skip = page.getByRole('link', { name: 'Skip to content' })
    await expect(skip).toBeFocused()
    await page.keyboard.press('Enter')
    await expect(page.locator('main')).toBeFocused()
  })

  test('focus indicators are visible on light and dark surfaces', async ({ page }) => {
    await page.goto('/contact', { waitUntil: 'networkidle' })
    const outlineOf = (selector: string) =>
      page
        .locator(selector)
        .first()
        .evaluate(async (el: HTMLElement) => {
          el.focus()
          return getComputedStyle(el).outlineColor
        })
    await page.keyboard.press('Tab')
    expect(await outlineOf('header a[href="/contact"]')).not.toBe(await outlineOf('form input'))
  })

  test('mobile menu contains focus and closes with Escape', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 800 })
    await page.goto('/', { waitUntil: 'networkidle' })
    const toggle = page.getByRole('button', { name: 'Open menu' })
    await toggle.click()
    await expect(page.locator('main')).toHaveJSProperty('inert', true)
    await expect(page.locator('footer')).toHaveJSProperty('inert', true)
    await page.keyboard.press('Escape')
    await expect(page.getByRole('button', { name: 'Open menu' })).toBeFocused()
    await expect(page.locator('main')).toHaveJSProperty('inert', false)
  })
})

test.describe('carousel', () => {
  test('autoplay can be paused', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })
    const pause = page.getByRole('button', { name: 'Pause testimonials' })
    await pause.scrollIntoViewIfNeeded()
    await pause.click()
    await page.mouse.move(0, 0)
    await page.locator('h1').evaluate(() => (document.activeElement as HTMLElement | null)?.blur())
    const track = page.locator('[aria-roledescription=carousel] [style*="--index"]')
    const before = await track.getAttribute('style')
    await page.waitForTimeout(5500)
    expect(await track.getAttribute('style')).toBe(before)
    await expect(page.getByRole('button', { name: 'Play testimonials' })).toBeVisible()
  })

  test.describe('with reduced motion', () => {
    test.use({ reducedMotion: 'reduce' })

    test('does not autoplay, so offers no pause button', async ({ page }) => {
      await page.goto('/', { waitUntil: 'networkidle' })
      await expect(page.getByRole('button', { name: /testimonials$/ })).toHaveCount(0)
    })
  })
})

test.describe('contact form', () => {
  test('reports errors accessibly and focuses the first one', async ({ page }) => {
    await page.goto('/contact', { waitUntil: 'networkidle' })
    await page.getByRole('button', { name: 'Submit Enquiry' }).click()
    const name = page.getByLabel('Full Name')
    await expect(name).toBeFocused()
    await expect(name).toHaveAttribute('aria-invalid', 'true')
    await expect(name).toHaveAccessibleDescription('Please enter your name.')
  })
})

test.describe('content is never trapped behind animation', () => {
  test.use({ javaScriptEnabled: false })

  test('headings are visible without JavaScript', async ({ page }) => {
    await page.goto('/about')
    const opacity = await page
      .locator('section h2')
      .first()
      .evaluate((el) => getComputedStyle(el.parentElement!).opacity)
    expect(opacity).toBe('1')
  })
})

test('page has no horizontal scroll at 320px (WCAG reflow)', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 640 })
  for (const route of ROUTES) {
    await page.goto(route, { waitUntil: 'networkidle' })
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
    expect(overflow, route).toBeLessThanOrEqual(0)
  }
})
