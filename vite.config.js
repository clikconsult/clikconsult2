import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

const routes = [
  '/about',
  '/portfolio',
  '/blog',
  '/blog/why-your-website-speed-is-costing-you-money',
  '/blog/react-native-vs-flutter-2025',
  '/blog/automating-your-sales-pipeline',
  '/blog/seo-for-nigerian-businesses-2025',
  '/blog/google-ads-nigeria-beginners-guide',
  '/blog/when-to-build-a-mobile-app',
  '/blog/best-web-design-companies-uyo-2025',
  '/blog/how-much-does-a-website-cost-in-nigeria',
  '/blog/top-digital-marketing-agencies-akwa-ibom',
  '/blog/why-every-uyo-business-needs-a-website-2025',
  '/blog/what-is-web-automation-nigeria',
  '/blog/react-native-vs-flutter-nigerian-startups-2025',
  '/blog/seo-for-nigerian-businesses-complete-guide',
  '/blog/how-to-choose-a-digital-marketing-agency-in-nigeria',
  '/blog/digital-marketing-pricing-nigeria-2026',
  '/blog/us-agency-vs-nigeria-development-team-cost-comparison-2026',
  '/blog/marketing-automation-nigerian-businesses-guide',
  '/contact',
  '/careers',
  '/privacy',
  '/terms',
  '/locations/uyo',
  '/locations/akwa-ibom',
  '/locations/lagos',
  '/locations/abuja',
  '/locations/port-harcourt',
  '/services/web-development',
  '/services/mobile-apps',
  '/services/desktop-apps',
  '/services/web-automations',
  '/services/digital-marketing',
  '/services/digital-marketing/seo',
  '/services/digital-marketing/ppc',
  '/services/digital-marketing/social-media',
  '/services/digital-marketing/content-marketing',
  '/services/digital-marketing/email-marketing',
  '/services/digital-marketing/influencer-marketing',
  '/services/digital-marketing/affiliate-marketing',
  '/services/digital-marketing/cro',
  '/services/digital-marketing/orm',
  '/services/digital-marketing/ecommerce-marketing',
  '/services/digital-marketing/video-marketing',
  '/services/digital-marketing/analytics',
]

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://clikconsult.com.ng',
      dynamicRoutes: routes,
    }),
  ],
})
