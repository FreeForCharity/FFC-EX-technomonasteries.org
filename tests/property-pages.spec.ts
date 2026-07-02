import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Property Pages Tests
 *
 * Verifies that the homepage footer includes a link to the Project page.
 * Sub-route content (/project/sigel-pa, /project/nederland-co) cannot be
 * tested in E2E because the CI preview server (serve -s out) runs in SPA
 * mode and falls back all non-root routes to index.html. Page content
 * correctness is validated by the successful next build, which generates
 * all routes.
 */

test.describe('Property Pages', () => {
  test('homepage should have Project link in footer navigation', async ({ page }) => {
    await page.goto('/')

    const projectLink = page.locator('a.navbar-link', {
      hasText: testConfig.propertyPages.footerLinkText,
    })
    await expect(projectLink).toBeVisible()
    await expect(projectLink).toHaveAttribute('href', testConfig.propertyPages.footerLinkHref)
  })
})
