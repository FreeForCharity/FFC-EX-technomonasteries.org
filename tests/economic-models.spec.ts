import { test, expect } from '@playwright/test'
import * as fs from 'fs'
import * as path from 'path'

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

test.describe('Economic Models - Footer Navigation', () => {
  test('should have Economic Models link in footer', async ({ page }) => {
    await page.goto('/')

    const footerLink = page.locator('footer').getByRole('link', { name: 'Economic Models' })
    await expect(footerLink).toBeVisible()
    await expect(footerLink).toHaveAttribute('href', '/economic-models')
  })
})

test.describe('Economic Models - Static Build Validation', () => {
  const outDir = path.join(process.cwd(), 'out')

  test('main economic models page HTML is generated', () => {
    const filePath = path.join(outDir, 'economic-models.html')
    expect(fs.existsSync(filePath)).toBe(true)
    const content = fs.readFileSync(filePath, 'utf-8')
    expect(content).toContain('Economic Models | Techno-Monasteries')
    expect(content).toContain('/economic-models/ecovillages')
    expect(content).toContain('/economic-models/co-housing')
    expect(content).toContain('/economic-models/corrodys')
  })

  test('ecovillages sub-page HTML is generated with correct content', () => {
    const filePath = path.join(outDir, 'economic-models', 'ecovillages.html')
    expect(fs.existsSync(filePath)).toBe(true)
    const content = fs.readFileSync(filePath, 'utf-8')
    expect(content).toContain('Ecovillages | Economic Models | Techno-Monasteries')
    expect(content).toContain('Findhorn')
    expect(content).toContain('Auroville')
    expect(content).toContain('Global Ecovillage Network')
    expect(content).toContain('/economic-models')
  })

  test('co-housing sub-page HTML is generated with correct content', () => {
    const filePath = path.join(outDir, 'economic-models', 'co-housing.html')
    expect(fs.existsSync(filePath)).toBe(true)
    const content = fs.readFileSync(filePath, 'utf-8')
    expect(content).toContain('Co-housing | Economic Models | Techno-Monasteries')
    expect(content).toContain('Sættedammen')
    expect(content).toContain('Denmark')
    expect(content).toContain('/economic-models')
  })

  test('corrodys sub-page HTML is generated with correct content', () => {
    const filePath = path.join(outDir, 'economic-models', 'corrodys.html')
    expect(fs.existsSync(filePath)).toBe(true)
    const content = fs.readFileSync(filePath, 'utf-8')
    expect(content).toContain('Corrodys | Economic Models | Techno-Monasteries')
    expect(content).toContain('medieval')
    expect(content).toContain('monastery')
    expect(content).toContain('/economic-models')
  })

  test('economic models pages are included in the sitemap', () => {
    const sitemapPath = path.join(outDir, 'sitemap.xml')
    expect(fs.existsSync(sitemapPath)).toBe(true)
    const content = fs.readFileSync(sitemapPath, 'utf-8')
    expect(content).toContain('/economic-models')
    expect(content).toContain('/economic-models/ecovillages')
    expect(content).toContain('/economic-models/co-housing')
    expect(content).toContain('/economic-models/corrodys')
  })
})
