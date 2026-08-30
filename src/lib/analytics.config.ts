// Analytics & tracking IDs - the single place to change them.
//
// These are NOT secrets. They are public, client-side identifiers baked into
// the static export and visible in page source anyway. They live here so a
// forking charity - or an automated assistant - can point the site at its own
// accounts by editing this one file. Provisioned by FFC workflow 704.
export const analyticsConfig = {
  // Google Tag Manager container ID, e.g. 'GTM-ABC1234'.
  gtmId: 'GTM-KWCQ243S',

  // Google Analytics 4 measurement ID, e.g. 'G-ABC1234567'. The GA4 tag itself
  // fires inside the GTM container; this is kept for reference/components.
  gaMeasurementId: 'G-HB1E5BHD6P',

  // Meta (Facebook) Pixel ID.
  metaPixelId: 'XXXXXXXXXXXXXXX',

  // Microsoft Clarity project ID.
  clarityProjectId: 'XXXXXXXX',
} as const

// The placeholder values this fork actually ships in the config above:
// metaPixelId 'XXXXXXXXXXXXXXX' and clarityProjectId 'XXXXXXXX' (the
// 'G-XXXXXXXXXX' / 'XXXXXXXXXX' entries are the template's other stock
// placeholders, kept for parity). NOTE: this fork's cookie-consent
// component ships no direct tag loaders — all tags ride the GTM container
// — so isConfigured currently has no caller in src/; it is exercised by
// the unit suite and is the guard any future direct loader must use so
// that "leave a value as its placeholder to keep that integration
// effectively inert" holds; the anchored X-run regex below also catches
// any other all-X variant.
const PLACEHOLDER_IDS: readonly string[] = [
  'G-XXXXXXXXXX',
  'XXXXXXXXXXXXXXX',
  'XXXXXXXXXX',
  'XXXXXXXX',
]

/**
 * True when an analytics ID has been replaced with a real value. A falsy
 * or whitespace-only value, one of the shipped placeholders, or any
 * obviously-templated value (an optional uppercase/digit/dash prefix
 * ending in six or more X's, matched against the WHOLE string so a real
 * ID that merely contains consecutive X's is not rejected) counts as NOT
 * configured, so the integration it belongs to stays inert.
 */
export function isConfigured(id: string | undefined | null): boolean {
  if (!id) return false
  const trimmed = id.trim()
  if (!trimmed) return false
  if (PLACEHOLDER_IDS.includes(trimmed)) return false
  if (/^[A-Z0-9-]*X{6,}$/.test(trimmed)) return false
  return true
}
