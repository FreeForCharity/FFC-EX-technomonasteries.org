import { test, expect } from '@playwright/test'

/**
 * Property Pages Tests
 *
 * These tests verify that the Active Projects hub and individual
 * property profile pages render correctly with expected content.
 */

test.describe('Active Projects Hub', () => {
  test('should render the Active Projects page with both property cards', async ({ page }) => {
    await page.goto('/project')

    // Verify page title
    await expect(page.locator('h1')).toContainText('Active Projects')
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

  test('should have working navigation to property pages', async ({ page }) => {
    await page.goto('/project')

    // Click through to Sigel PA
    await page.locator('a.gildedButton', { hasText: 'Learn More' }).first().click()
    await expect(page).toHaveURL(/\/project\/sigel-pa/)

    // Navigate back
    await page.locator('a.gildedButton', { hasText: 'Back to Projects' }).click()
    await expect(page).toHaveURL(/\/project$/)
  })

  test('should display the roadmap section', async ({ page }) => {
    await page.goto('/project')

    await expect(page.getByText('Roadmap')).toBeVisible()
    await expect(page.getByText('Foundation')).toBeVisible()
    await expect(page.getByText('Evaluation')).toBeVisible()
  })

  test('should display Get Involved section with links', async ({ page }) => {
    await page.goto('/project')

    await expect(page.getByText('Get Involved')).toBeVisible()
    await expect(page.locator('a.gildedButton', { hasText: 'Join the Discussion' })).toBeVisible()
    await expect(page.locator('a.gildedButton', { hasText: 'Read the Wiki' })).toBeVisible()
  })
})

test.describe('Sigel PA Property Page', () => {
  test('should render with correct content', async ({ page }) => {
    await page.goto('/project/sigel-pa')

    // Verify page heading
    await expect(page.locator('h1')).toContainText('Sigel, Pennsylvania')
    await expect(page.locator('h2.pageTitle')).toContainText('Eco-Village')

    // Verify key facts table
    await expect(page.getByText('Eldred Township, Jefferson County, PA')).toBeVisible()
    await expect(page.getByText('Starlink (50-200 Mbps)')).toBeVisible()
    await expect(page.getByText('$150,000-$300,000')).toBeVisible()
  })

  test('should have key content sections', async ({ page }) => {
    await page.goto('/project/sigel-pa')

    await expect(page.getByText('Key Facts')).toBeVisible()
    await expect(page.getByText('The 20-Year Lease Model')).toBeVisible()
    await expect(page.getByText('Phased Build-Out')).toBeVisible()
    await expect(page.getByText('Honest Challenges')).toBeVisible()
    await expect(page.getByText('Get Involved')).toBeVisible()
  })

  test('should have working Back to Projects link', async ({ page }) => {
    await page.goto('/project/sigel-pa')

    await page.locator('a.gildedButton', { hasText: 'Back to Projects' }).click()
    await expect(page).toHaveURL(/\/project$/)
  })
})

test.describe('Nederland CO Property Page', () => {
  test('should render with correct content', async ({ page }) => {
    await page.goto('/project/nederland-co')

    // Verify page heading
    await expect(page.locator('h1')).toContainText('Nederland, Colorado')
    await expect(page.locator('h2.pageTitle')).toContainText('Co-Housing')

    // Verify key facts table
    await expect(page.getByText('8,236 ft')).toBeVisible()
    await expect(page.getByText('Quantum Fiber up to 8 Gbps')).toBeVisible()
    await expect(page.getByText('Boulder County Zone 1 (HIGH risk)')).toBeVisible()
  })

  test('should have key content sections', async ({ page }) => {
    await page.goto('/project/nederland-co')

    await expect(page.getByText('Key Facts')).toBeVisible()
    await expect(page.getByText('Why Nederland')).toBeVisible()
    await expect(page.getByText('Honest Challenges')).toBeVisible()
    await expect(page.getByText('Design Concept')).toBeVisible()
    await expect(page.getByText('Get Involved')).toBeVisible()
  })

  test('should have working Back to Projects link', async ({ page }) => {
    await page.goto('/project/nederland-co')

    await page.locator('a.gildedButton', { hasText: 'Back to Projects' }).click()
    await expect(page).toHaveURL(/\/project$/)
  })
})
