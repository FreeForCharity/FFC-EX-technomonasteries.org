import { test, expect } from '@playwright/test'

/**
 * Property Pages Tests
 *
 * These tests verify that the Active Projects hub and individual
 * property profile pages render correctly with expected content.
 *
 * Note: Uses .html extensions in URLs because the CI preview server
 * (serve -s out) runs in SPA mode, which falls back to index.html
 * for clean URLs. The .html extension ensures the correct static
 * file is served.
 */

test.describe('Active Projects Hub', () => {
  test('should render the Active Projects page with both property cards', async ({ page }) => {
    await page.goto('/project.html')

    // Verify page title — use first() since header also has an h1
    const showcaseH1 = page.locator('.showcase-overlay h1')
    await expect(showcaseH1).toContainText('Active Projects')
    await expect(page.locator('h2.pageTitle')).toContainText("Where We're Building")

    // Verify both property cards are present
    await expect(page.getByText('Sigel, Pennsylvania')).toBeVisible()
    await expect(page.getByText('Nederland, Colorado')).toBeVisible()

    // Verify key data points in cards
    await expect(page.getByText('DuBois (~25 min)')).toBeVisible()
    await expect(page.getByText('Boulder (~30 min)')).toBeVisible()

    // Verify Learn More links exist
    const learnMoreLinks = page.locator('a.gildedButton', { hasText: 'Learn More' })
    await expect(learnMoreLinks).toHaveCount(2)
  })

  test('should display the roadmap section', async ({ page }) => {
    await page.goto('/project.html')

    await expect(page.getByText('Roadmap')).toBeVisible()
    await expect(page.getByText('Foundation')).toBeVisible()
    await expect(page.getByText('Evaluation')).toBeVisible()
  })

  test('should display Get Involved section with links', async ({ page }) => {
    await page.goto('/project.html')

    await expect(page.getByText('Get Involved')).toBeVisible()
    await expect(page.locator('a.gildedButton', { hasText: 'Join the Discussion' })).toBeVisible()
    await expect(page.locator('a.gildedButton', { hasText: 'Read the Wiki' })).toBeVisible()
  })
})

test.describe('Sigel PA Property Page', () => {
  test('should render with correct content', async ({ page }) => {
    await page.goto('/project/sigel-pa.html')

    // Verify page heading
    const showcaseH1 = page.locator('.showcase-overlay h1')
    await expect(showcaseH1).toContainText('Sigel, Pennsylvania')
    await expect(page.locator('h2.pageTitle')).toContainText('Eco-Village')

    // Verify key facts table
    await expect(page.getByText('Eldred Township, Jefferson County, PA')).toBeVisible()
    await expect(page.getByText('Starlink (50-200 Mbps)')).toBeVisible()
    await expect(page.getByText('$150,000-$300,000')).toBeVisible()
  })

  test('should have key content sections', async ({ page }) => {
    await page.goto('/project/sigel-pa.html')

    await expect(page.getByText('Key Facts')).toBeVisible()
    await expect(page.getByText('The 20-Year Lease Model')).toBeVisible()
    await expect(page.getByText('Phased Build-Out')).toBeVisible()
    await expect(page.getByText('Honest Challenges')).toBeVisible()
    await expect(page.getByText('Get Involved')).toBeVisible()
  })
})

test.describe('Nederland CO Property Page', () => {
  test('should render with correct content', async ({ page }) => {
    await page.goto('/project/nederland-co.html')

    // Verify page heading
    const showcaseH1 = page.locator('.showcase-overlay h1')
    await expect(showcaseH1).toContainText('Nederland, Colorado')
    await expect(page.locator('h2.pageTitle')).toContainText('Co-Housing')

    // Verify key facts table
    await expect(page.getByText('8,236 ft')).toBeVisible()
    await expect(page.getByText('Quantum Fiber up to 8 Gbps')).toBeVisible()
    await expect(page.getByText('Boulder County Zone 1 (HIGH risk)')).toBeVisible()
  })

  test('should have key content sections', async ({ page }) => {
    await page.goto('/project/nederland-co.html')

    await expect(page.getByText('Key Facts')).toBeVisible()
    await expect(page.getByText('Why Nederland')).toBeVisible()
    await expect(page.getByText('Honest Challenges')).toBeVisible()
    await expect(page.getByText('Design Concept')).toBeVisible()
    await expect(page.getByText('Get Involved')).toBeVisible()
  })
})
