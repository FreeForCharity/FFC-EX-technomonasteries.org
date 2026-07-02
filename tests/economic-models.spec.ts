import { test, expect } from '@playwright/test'
import * as fs from 'fs'
import * as path from 'path'
import { testConfig } from './test.config'

/**
 * Economic Models Page Tests
 *
 * These tests verify that the economic models pages are correctly built and
 * that navigation links exist, consistent with the existing test infrastructure.
 *
 * Note: Tests use the homepage (/) for browser-based checks, consistent with
 * the serve -s preview setup. Static HTML file validation is done via direct
 * filesystem reads of the built output.
 */

const { economicModels } = testConfig

test.describe('Economic Models - Footer Navigation', () => {
  test('should have Economic Models link in footer', async ({ page }) => {
    await page.goto('/')

    const footerLink = page
      .locator('footer')
      .getByRole('link', { name: economicModels.footerLinkText })
    await expect(footerLink).toBeVisible()
    await expect(footerLink).toHaveAttribute('href', economicModels.footerLinkHref)
  })
})

test.describe('Economic Models - Static Build Validation', () => {
  const outDir = path.join(process.cwd(), 'out')

  test('main economic models page HTML is generated', () => {
    const filePath = path.join(outDir, 'economic-models.html')
    expect(fs.existsSync(filePath)).toBe(true)
    const content = fs.readFileSync(filePath, 'utf-8')
    expect(content).toContain(economicModels.pages.main.title)
    for (const link of economicModels.pages.main.subpageLinks) {
      expect(content).toContain(link)
    }
  })

  test('ecovillages sub-page HTML is generated with correct content', () => {
    const filePath = path.join(outDir, 'economic-models', 'ecovillages.html')
    expect(fs.existsSync(filePath)).toBe(true)
    const content = fs.readFileSync(filePath, 'utf-8')
    expect(content).toContain(economicModels.pages.ecovillages.title)
    for (const term of economicModels.pages.ecovillages.contentTerms) {
      expect(content).toContain(term)
    }
    expect(content).toContain(economicModels.pages.ecovillages.backLink)
  })

  test('co-housing sub-page HTML is generated with correct content', () => {
    const filePath = path.join(outDir, 'economic-models', 'co-housing.html')
    expect(fs.existsSync(filePath)).toBe(true)
    const content = fs.readFileSync(filePath, 'utf-8')
    expect(content).toContain(economicModels.pages.coHousing.title)
    for (const term of economicModels.pages.coHousing.contentTerms) {
      expect(content).toContain(term)
    }
    expect(content).toContain(economicModels.pages.coHousing.backLink)
  })

  test('corrodys sub-page HTML is generated with correct content', () => {
    const filePath = path.join(outDir, 'economic-models', 'corrodys.html')
    expect(fs.existsSync(filePath)).toBe(true)
    const content = fs.readFileSync(filePath, 'utf-8')
    expect(content).toContain(economicModels.pages.corrodys.title)
    for (const term of economicModels.pages.corrodys.contentTerms) {
      expect(content).toContain(term)
    }
    expect(content).toContain(economicModels.pages.corrodys.backLink)
  })

  test('economic models pages are included in the sitemap', () => {
    const sitemapPath = path.join(outDir, 'sitemap.xml')
    expect(fs.existsSync(sitemapPath)).toBe(true)
    const content = fs.readFileSync(sitemapPath, 'utf-8')
    for (const url of economicModels.sitemapUrls) {
      expect(content).toContain(url)
    }
  })
})
