import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'
import { posts } from './src/data/blogPosts.js'
import { marketingChannels } from './src/data/marketingChannels.js'

const staticRoutes = [
  '/',
  '/about',
  '/portfolio',
  '/blog',
  '/contact',
  '/careers',
  '/privacy',
  '/terms',
  '/locations/uyo',
  '/locations/akwa-ibom',
  '/locations/lagos',
  '/locations/abuja',
  '/locations/port-harcourt',
  '/global',
  '/services/web-development',
  '/services/mobile-apps',
  '/services/desktop-apps',
  '/services/web-automations',
  '/services/digital-marketing',
]

const blogRoutes = posts.map((post) => `/blog/${post.slug}`)
const marketingChannelRoutes = marketingChannels.map((channel) => `/services/digital-marketing/${channel.slug}`)
const allRoutes = [...staticRoutes, ...blogRoutes, ...marketingChannelRoutes]

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://clikconsult.com.ng',
      dynamicRoutes: allRoutes,
    }),
  ],
  ssgOptions: {
    includedRoutes: () => allRoutes,
  },
})
