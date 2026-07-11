import type { Metadata } from 'next'
import './globals.css'
import Header from './../components/header'
import Footer from './../components/footer'
import CookieConsent from './../components/cookie-consent'
import GoogleTagManager, { GoogleTagManagerNoScript } from './../components/google-tag-manager'
import { metamorphous, novaFlat } from '@/lib/fonts'
import { Modern_Antiqua } from 'next/font/google'
import { siteUrl } from '@/lib/site.config'

// Get basePath for GitHub Pages deployment
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const globalAssetVars = {
  '--body-tile-url': `url('${basePath}/img/bodyTile.jpg')`,
  '--booklet-tile-url': `url('${basePath}/img/bookletTile.jpg')`,
  '--gold-button-url': `url('${basePath}/img/goldBtn.png')`,
} as React.CSSProperties

const modernAntiqua = Modern_Antiqua({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-modern-antiqua',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Techno-Monasteries | A Sanctuary for Open-Source',
    template: '%s | Techno-Monasteries',
  },
  description:
    'Techno-Monasteries are modern sanctuaries for open-source developers, researchers, and creators. Dedicated spaces where builders can focus on deep work, collaborate in person, and contribute to the digital commons.',
  keywords: [
    'open source',
    'monasteries',
    'work retreat',
    'collaboration',
    'deep work',
    'developer retreat',
    'public goods',
    'open innovation',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/`,
    siteName: 'Techno-Monasteries',
    title: 'Techno-Monasteries | A Sanctuary for Open-Source',
    description:
      'Modern sanctuaries for open-source developers, researchers, and creators to focus on deep work and collaboration.',
    images: [
      {
        url: `${basePath}/img/logo.png`,
        width: 800,
        height: 600,
        alt: 'Techno-Monasteries',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@TechMonasteries',
    title: 'Techno-Monasteries | A Sanctuary for Open-Source',
    description:
      'Modern sanctuaries for open-source developers, researchers, and creators to focus on deep work and collaboration.',
    images: [`${basePath}/img/logo.png`],
  },
  icons: {
    icon: [{ url: `${basePath}/img/favicon.png`, type: 'image/png', sizes: '32x32' }],
    apple: [{ url: `${basePath}/img/favicon.png`, sizes: '180x180', type: 'image/png' }],
  },
  manifest: `${basePath}/site.webmanifest`,
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://discord.gg" />
        <link rel="preconnect" href="https://x.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://discord.gg" />
        <link rel="dns-prefetch" href="https://x.com" />

        {/* Preload critical LCP image */}
        <link rel="preload" as="image" href={`${basePath}/img/showcase.png`} fetchPriority="high" />

        {/* Google Consent Mode v2 defaults - runs before GTM so tags honor
            consent. Everything non-essential defaults to "denied"; the cookie
            banner upgrades these via gtag('consent','update', ...). */}
        <script
          id="gtm-consent-default"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
              window.gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'granted',security_storage:'granted',wait_for_update:500});
            `,
          }}
        />
        <GoogleTagManager />

        {/* Structured data for search engines / rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': `${siteUrl}/#organization`,
                  name: 'Techno-Monasteries',
                  url: siteUrl,
                  logo: `${siteUrl}/img/logo.png`,
                  description:
                    'Modern sanctuaries for open-source developers, researchers, and creators to focus on deep work and collaboration.',
                  sameAs: ['https://x.com/TechMonasteries'],
                },
                {
                  '@type': 'WebSite',
                  '@id': `${siteUrl}/#website`,
                  url: siteUrl,
                  name: 'Techno-Monasteries',
                  publisher: { '@id': `${siteUrl}/#organization` },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={[
          'antialiased',
          metamorphous.variable,
          novaFlat.variable,
          modernAntiqua.variable,
        ].join(' ')}
        style={globalAssetVars}
        suppressHydrationWarning={true}
      >
        <GoogleTagManagerNoScript />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <div className="booklet-page">
          <div className="booklet-frame">
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
            <CookieConsent />
          </div>
        </div>
      </body>
    </html>
  )
}
