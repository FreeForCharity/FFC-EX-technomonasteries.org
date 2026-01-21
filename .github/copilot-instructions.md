# TechnoMonasteries Web Application

TechnoMonasteries is a Next.js 16.0.7 single-page static website exploring the intersection of technology, spirituality, and community. Built with TypeScript, Tailwind CSS, and configured for static export to GitHub Pages.

**ALWAYS reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Environment Setup

- **Node.js Version**: Requires Node.js 20.x (validated with v20.19.5)
- **Package Manager**: Uses npm with package-lock.json

### Bootstrap and Build Process

**Build Process**

- `npm run build` -- Builds the static site successfully (~30 seconds)
- Google Fonts are NOT used in this project (imports have been removed)
- Build generates static pages including homepage, policy pages, and metadata files (sitemap.xml, robots.txt)
- NEVER CANCEL. Set timeout to 180+ seconds for safety.

### Core Commands and Timings

1. `npm install` -- takes ~17 seconds. NEVER CANCEL. Set timeout to 60+ seconds.
2. `npm run lint` -- takes ~2 seconds. Set timeout to 30+ seconds.
3. `npm run build` -- takes ~30 seconds. NEVER CANCEL. Set timeout to 180+ seconds.
4. `npm run dev` -- starts in ~1 second with turbopack. NEVER CANCEL. Set timeout to 30+ seconds.
5. `npm run preview` -- serves built static files. NEVER CANCEL. Set timeout to 30+ seconds.

### Development Workflow

```bash
# Install dependencies (17 seconds)
npm install

# Start development server (1 second startup)
npm run dev
# Visit http://localhost:3000

# Lint code (2 seconds)
npm run lint

# Build for production (30 seconds)
npm run build

# Preview built site
npm run preview
# Visit http://localhost:3000
```

## Validation Requirements

### Manual Testing Scenarios

**ALWAYS test application functionality after making changes:**

1. **Homepage Load Test**: Navigate to http://localhost:3000 and verify page loads completely
2. **Navigation Test**: Test mobile hamburger menu and desktop navigation
3. **Responsive Design Test**: Verify mobile and desktop layouts work correctly
4. **Static Content Test**: Verify all sections load properly
5. **Logo Rendering Test**: Verify logos display correctly in NavBar and hero section

### Automated Testing

**Playwright tests are available to validate critical functionality:**

```bash
# Build the site first
npm run build

# Install Playwright browsers (first time only)
npx playwright install chromium

# Run all tests
npm test

# Run tests in headed mode (to see browser)
npm run test:headed

# Run tests with UI
npm run test:ui
```

**Test Suites:**

- `tests/logo.spec.ts` - Verifies logo visibility in NavBar and hero section
- `tests/github-pages.spec.ts` - Validates image loading for GitHub Pages deployment

**Testing Image Rendering for GitHub Pages:**
To test the GitHub Pages deployment locally with basePath:

```bash
# Build with basePath for GitHub Pages
NEXT_PUBLIC_BASE_PATH=/technomonasteries.org npm run build

# Preview the site
npm run preview

# Run tests (in another terminal)
npm test
```

### Pre-Commit Validation

**ALWAYS run before committing changes:**

```bash
npm run lint  # Fix any errors
npm test     # Run automated tests (requires build first)
```

## Application Architecture

### Key Features

- **Mobile Navigation**: Slide-out panel with overlay in `NavBar.tsx`
- **Static Export**: Configured for GitHub Pages deployment via `next.config.ts`
- **SEO Optimized**: Comprehensive metadata in `layout.tsx`, sitemap, and robots.txt
- **GitHub Pages Image Support**: Assets use `assetPath()` helper to handle basePath for GitHub Pages deployment

### Project Structure

**IMPORTANT:** When updating this structure, ALWAYS show all items fully. When new pages or folders are added, explicitly list them here. Do NOT use placeholders.

```
src/
├── app/                                        # Next.js app directory
│   ├── page.tsx                               # Main homepage entry point
│   ├── layout.tsx                             # Root layout with metadata, providers
│   ├── globals.css                            # Global styles
│   ├── cookie-policy/                         # Cookie Policy page
│   ├── donation-policy/                       # Donation Policy page
│   ├── privacy-policy/                        # Privacy Policy page
│   ├── security-acknowledgements/             # Security Acknowledgements page
│   ├── terms-of-service/                      # Terms of Service page
│   ├── vulnerability-disclosure-policy/       # Vulnerability Disclosure Policy page
│   ├── sitemap.ts                             # Dynamic sitemap generation
│   └── robots.ts                              # Robots.txt configuration
├── components/                                # All UI components (kebab-case naming)
│   ├── header/                               # Site header/navigation
│   ├── footer/                               # Site footer
│   ├── cookie-consent/                        # Cookie consent banner
│   ├── google-tag-manager/                    # Analytics integration
│   └── ui/                                    # Reusable UI components
└── lib/                                       # Utility functions
    └── assetPath.ts                           # Helper for GitHub Pages basePath support
```

**Naming Conventions:**

**IMPORTANT: All folders MUST use kebab-case (lowercase with hyphens)**

- All component folders use kebab-case (e.g., `home-page`, `cookie-consent`)
- All app route folders use kebab-case (e.g., `cookie-policy`, `privacy-policy`)
- Consistent structure makes imports clearer and more maintainable

**Why kebab-case is Required:**

1. **SEO Best Practice**: Search engines prefer kebab-case URLs as they clearly separate words and improve readability
2. **URL Readability**: Kebab-case URLs are more readable to both users and search engines
3. **Industry Standard**: Kebab-case is the web standard for URLs and file paths
4. **Accessibility**: Screen readers handle hyphenated text better than camelCase or PascalCase

**Never use PascalCase or camelCase for folder names** - it negatively impacts SEO and URL readability.

### Configuration Files

- `next.config.ts` - Static export configuration
- `tsconfig.json` - TypeScript configuration with path aliases
- `eslint.config.mjs` - ESLint with Next.js rules
- `postcss.config.mjs` - Tailwind CSS PostCSS configuration
- `.github/workflows/ci.yml` - CI workflow for testing
- `.github/workflows/deploy.yml` - GitHub Pages deployment
- `.github/workflows/codeql.yml` - Security scanning
- `.github/workflows/lighthouse.yml` - Performance monitoring

## Common Tasks

### Content Updates

- **Homepage content**: Edit `src/app/page.tsx`
- **Navigation links**: Update `src/components/header/index.tsx`

### SEO and Metadata

- **Site metadata**: Edit `metadata` object in `src/app/layout.tsx`
- **Sitemap**: Update `src/app/sitemap.ts` for new routes
- **Robots.txt**: Modify `src/app/robots.ts`

### Styling and UI

- **Global styles**: Edit `src/app/globals.css`
- **Component styles**: Use Tailwind classes directly in components

### Adding Images and Assets

When adding images or other static assets that need to work on both custom domain and GitHub Pages:

**ALWAYS use the `assetPath()` helper for images:**

```typescript
import { assetPath } from "../lib/assetPath";

// In your component:
<img src={assetPath("/my-image.png")} alt="Description" />
```

**Why this is needed:**

- Custom domain: images at `/my-image.png`
- GitHub Pages: images at `/technomonasteries.org/my-image.png`
- The helper automatically handles both scenarios based on the `NEXT_PUBLIC_BASE_PATH` environment variable

### Deployment Process

The site auto-deploys to GitHub Pages via `.github/workflows/deploy.yml` when pushed to main branch:

1. Node.js 20 setup
2. `npm ci` for clean install
3. `NEXT_PUBLIC_BASE_PATH=/technomonasteries.org` is set for GitHub Pages deployment
4. `next build` builds the site with proper basePath
5. Playwright tests run to validate the build
6. Static files deployed from `./out` directory

## GitHub Community Health Files

This repository includes a comprehensive set of GitHub-recognized community health files that automatically appear in GitHub's navigation interface.

### Core Documentation (Automatic GitHub Navigation)

**Files in repository root:**

- `README.md` - Main documentation (always visible in navigation)
- `LICENSE` - Apache 2.0 license (appears in License tab)
- `CODE_OF_CONDUCT.md` - Contributor Covenant 2.1 (appears in Code of conduct tab)
- `CONTRIBUTING.md` - Contribution guidelines (appears in Contributing tab and sidebar)
- `SECURITY.md` - Security policies (appears in Security tab)
- `SUPPORT.md` - Support resources and help (appears in sidebar)
- `CITATION.cff` - Academic citation info (enables "Cite this repository" button)
- `CHANGELOG.md` - Release notes and version history

**Files in .github directory:**

- `.github/FUNDING.yml` - Funding sources (enables "Sponsor" button)
- `.github/CODEOWNERS` - Code ownership (auto-assigns PR reviewers)
- `.github/PULL_REQUEST_TEMPLATE.md` - PR template (auto-populates PR description)
- `.github/ISSUE_TEMPLATE/` - Issue templates:
  - `bug_report.md` - Bug reporting template
  - `feature_request.md` - Feature request template
  - `documentation.md` - Documentation issue template
  - `config.yml` - Issue template configuration with support links

### Verifying Community Health Files

To verify files are recognized by GitHub:

1. Visit: https://github.com/TechnoMonasteries/technomonasteries.org/community
2. Check navigation tabs on mobile (README, Code of conduct, Contributing, License, Security, More)
3. Look for "Sponsor" button in repository header
4. Look for "Cite this repository" button
5. Create a new issue to see issue templates
6. Create a new PR to see PR template

### Maintaining Community Health Files

When updating documentation:

- Keep files in their designated locations (root or .github/)
- Follow GitHub's naming conventions exactly
- Test that files appear in GitHub navigation after updates

## Quick Reference Commands

```bash
# Repository setup
node --version        # Verify Node.js 20.x
npm install          # 17 seconds

# Development
npm run dev          # http://localhost:3000 (1 second startup)
npm run lint         # 2 seconds

# Testing
npm run build        # Build first (required for tests)
npm test             # Run Playwright tests
npm run test:headed  # Run tests in headed mode
npm run test:ui      # Run tests with Playwright UI

# Production
npm run build        # 30 seconds
npm run preview      # http://localhost:3000

# Test GitHub Pages deployment locally
NEXT_PUBLIC_BASE_PATH=/technomonasteries.org npm run build
npm run preview      # Test with basePath

# File structure overview
ls -la src/app/      # Main application code
ls -la public/       # Static assets (icons, images)
ls -la tests/        # Playwright test files
ls -la .github/      # GitHub workflows and configs
```

## Troubleshooting

### Build Failures

1. **TypeScript errors**: Run `npm run lint` to identify issues
2. **Network timeouts**: Increase timeout values as specified above

### Development Server Issues

1. **Port conflicts**: Stop existing servers or use different port
2. **Cache issues**: Delete `.next` directory and rebuild

Remember: **NEVER CANCEL** long-running commands. **ALWAYS** test manually after changes.
