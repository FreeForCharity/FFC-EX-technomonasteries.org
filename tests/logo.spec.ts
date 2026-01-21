import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Logo Visibility Tests
 *
 * These tests verify that the TechnoMonasteries logo is present and visible
 * in the showcase area on the homepage.
 *
 * Note: Test expectations use values from test.config.ts for easy customization
 */

test.describe('Logo Visibility', () => {
  test('should display logo in showcase area', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Find the logo in the showcase area
    const showcaseLogo = page.locator(`img[alt="${testConfig.logo.showcaseAlt}"]`)

    // Verify the logo exists
    await expect(showcaseLogo).toBeVisible()

    // Verify the logo has the correct alt text
    await expect(showcaseLogo).toHaveAttribute('alt', testConfig.logo.showcaseAlt)

    // Verify the logo src points to the correct path
    await expect(showcaseLogo).toHaveAttribute('src', testConfig.logo.logoPath)
  })
})
