/**
 * Test Configuration for Template Customization
 *
 * This file contains all content-specific values used in E2E tests.
 * When customizing this template for a new organization, update these
 * values to match your content instead of modifying individual test files.
 *
 * This makes it easy to:
 * 1. Identify what needs to change when using the template
 * 2. Keep tests working with customized content
 * 3. Maintain a single source of truth for test expectations
 */

export const testConfig = {
  /**
   * Mission Video Configuration
   * Used in: tests/mission-video.spec.ts
   */
  missionVideo: {
    ariaLabel: 'TechnoMonasteries mission video',
    title: "Learn about TechnoMonasteries' mission",
  },

  /**
   * Application Form Configuration
   * Used in: tests/application-form.spec.ts
   */
  applicationForm: {
    buttonText: 'Apply to Become a Supported Charity',
    modalTitle: 'Charity Application Form',
    loadingText: 'Loading application form...',
    closeButtonAriaLabel: 'Close application form',
  },

  /**
   * Events Section Configuration
   * Used in: tests/events.spec.ts
   */
  events: {
    sectionId: 'events',
    heading: 'Upcoming Events',
    footerLinkText: 'Events',
    iframeTitle: 'Facebook Events',
    facebookLinkText: 'View all events on Facebook',
    facebookUrl: 'https://www.facebook.com/technomonasteries',
    descriptionText: 'community events',
  },

  /**
   * Social Media Links Configuration
   * Used in: tests/social-links.spec.ts
   */
  socialLinks: {
    twitter: {
      url: 'x.com/TechMonasteries',
      ariaLabel: 'X (Twitter)',
    },
  },

  /**
   * Copyright Configuration
   * Used in: tests/copyright.spec.ts
   */
  copyright: {
    text: 'All Rights Are Reserved by TechnoMonasteries',
    searchText: 'All Rights Are Reserved',
    linkUrl: 'https://technomonasteries.org',
    linkText: 'https://technomonasteries.org',
  },

  /**
   * Animated Numbers Configuration
   * Used in: tests/animated-numbers.spec.ts
   */
  animatedNumbers: {
    sectionHeading: 'Results - 2023',
    statistics: [
      { description: 'Organizational partners', value: '221' },
      { description: 'Total volunteers', value: '3' },
      {
        description: 'Organizations accessing technical assistance offerings',
        value: '221',
      },
      { description: 'Volunteer hours contributed to the organization', value: '25' },
    ],
  },

  /**
   * Google Tag Manager Configuration
   * Used in: tests/google-tag-manager.spec.ts
   */
  googleTagManager: {
    id: 'GTM-TQ5H8HPR',
  },

  /**
   * Logo Configuration
   * Used in: tests/logo.spec.ts
   */
  logo: {
    showcaseAlt: 'Logo',
    logoPath: '/img/logo.png',
  },

  /**
   * Cookie Consent Configuration
   * Used in: tests/cookie-consent.spec.ts
   */
  cookieConsent: {
    bannerHeading: 'We Value Your Privacy',
    modalHeading: 'Cookie Preferences',
    buttons: {
      acceptAll: 'Accept All',
      declineAll: 'Decline All',
      customize: 'Customize',
      savePreferences: 'Save Preferences',
      cancel: 'Cancel',
    },
  },
}
