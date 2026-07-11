import { test, expect } from '@playwright/test'

/**
 * Google Consent Mode v2 tests.
 *
 * Verifies that the site denies analytics/marketing storage by default (before
 * any user interaction) and only upgrades to "granted" after the visitor
 * accepts - the mechanism that keeps the GTM container compliant.
 */

// Reads the `consent` commands the gtag() shim pushed onto the dataLayer.
// gtag() pushes the `arguments` object, so entries arrive array-like.
function readConsentCommands() {
  const dl = (window.dataLayer as unknown as ArrayLike<unknown>[]) || []
  return Array.from(dl)
    .map((entry) => (entry && 'length' in entry ? Array.from(entry) : entry))
    .filter((row): row is unknown[] => Array.isArray(row) && row[0] === 'consent')
    .map((row) => ({ type: row[1], params: row[2] as Record<string, string> }))
}

test.describe('Google Consent Mode v2', () => {
  test('defines window.gtag and denies analytics by default on first load', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })

    const gtagType = await page.evaluate(() => typeof window.gtag)
    expect(gtagType).toBe('function')

    const commands = await page.evaluate(readConsentCommands)
    const def = commands.find((c) => c.type === 'default')
    expect(def).toBeTruthy()
    expect(def?.params.analytics_storage).toBe('denied')
    expect(def?.params.ad_storage).toBe('denied')
  })

  test('upgrades consent to granted after Accept All', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })
    await page.getByRole('button', { name: 'Accept All' }).click()
    await page.waitForTimeout(500)

    const commands = await page.evaluate(readConsentCommands)
    // default must be present and ordered before the update
    expect(commands[0]?.type).toBe('default')
    const update = commands.find((c) => c.type === 'update')
    expect(update).toBeTruthy()
    expect(update?.params.analytics_storage).toBe('granted')
    expect(update?.params.ad_storage).toBe('granted')
  })

  test('keeps consent denied after Decline All', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })
    await page.getByRole('button', { name: 'Decline All' }).click()
    await page.waitForTimeout(500)

    const commands = await page.evaluate(readConsentCommands)
    const update = commands.find((c) => c.type === 'update')
    expect(update).toBeTruthy()
    expect(update?.params.analytics_storage).toBe('denied')
    expect(update?.params.ad_storage).toBe('denied')
  })
})
