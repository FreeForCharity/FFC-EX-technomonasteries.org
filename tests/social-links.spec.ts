import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Social Links Tests
 *
 * These tests verify that the X/Twitter social media link is present
 * and functional in the footer.
 *
 * Note: Test expectations use values from test.config.ts for easy customization
 */

test.describe('Footer Social Links', () => {
  test('should display X (Twitter) social media link', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Verify X (Twitter) link is present
    const twitterLink = page.locator(`footer a[href*="${testConfig.socialLinks.twitter.url}"]`)
    await expect(twitterLink).toBeVisible()
    await expect(twitterLink).toHaveAttribute(
      'aria-label',
      testConfig.socialLinks.twitter.ariaLabel
    )

    // Verify link opens in new tab
    await expect(twitterLink).toHaveAttribute('target', '_blank')

    // Verify link has security attributes
    await expect(twitterLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  test('should have exactly 1 social media icon', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Count all social media links in the footer
    // Should have exactly 1 social icon: X (Twitter)
    const socialMediaLinks = page.locator(
      `footer a[aria-label="${testConfig.socialLinks.twitter.ariaLabel}"]`
    )
    await expect(socialMediaLinks).toHaveCount(1)
  })
})
