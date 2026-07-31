import { lazy } from 'react'
import Layout from './App.jsx'
import { posts } from './data/blogPosts.js'
import { marketingChannels } from './data/marketingChannels.js'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/blog/BlogPost'))
const Contact = lazy(() => import('./pages/Contact'))
const Careers = lazy(() => import('./pages/Careers'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Privacy = lazy(() => import('./pages/Legal').then((module) => ({ default: module.Privacy })))
const Terms = lazy(() => import('./pages/Legal').then((module) => ({ default: module.Terms })))
const UyoPage = lazy(() => import('./pages/Locations').then((module) => ({ default: module.UyoPage })))
const AkwaIbomPage = lazy(() => import('./pages/Locations').then((module) => ({ default: module.AkwaIbomPage })))
const LagosPage = lazy(() => import('./pages/Locations').then((module) => ({ default: module.LagosPage })))
const AbujaPage = lazy(() => import('./pages/Locations').then((module) => ({ default: module.AbujaPage })))
const PortHarcourtPage = lazy(() => import('./pages/Locations').then((module) => ({ default: module.PortHarcourtPage })))
const Global = lazy(() => import('./pages/Global'))
const WebDevelopment = lazy(() => import('./pages/services/WebDevelopment'))
const MobileApps = lazy(() => import('./pages/services/MobileApps'))
const DesktopApps = lazy(() => import('./pages/services/DesktopApps'))
const WebAutomations = lazy(() => import('./pages/services/WebAutomations'))
const DigitalMarketing = lazy(() => import('./pages/services/DigitalMarketing'))
const MarketingChannel = lazy(() => import('./pages/services/marketing/MarketingChannel'))

const blogStaticPaths = posts.map((post) => `blog/${post.slug}`)
const marketingChannelStaticPaths = marketingChannels.map((channel) => `services/digital-marketing/${channel.slug}`)

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'portfolio', Component: Portfolio },
      { path: 'blog', Component: Blog },
      {
        path: 'blog/:slug',
        Component: BlogPost,
        getStaticPaths: () => blogStaticPaths,
      },
      { path: 'contact', Component: Contact },
      { path: 'careers', Component: Careers },
      { path: 'privacy', Component: Privacy },
      { path: 'terms', Component: Terms },
      { path: 'locations/uyo', Component: UyoPage },
      { path: 'locations/akwa-ibom', Component: AkwaIbomPage },
      { path: 'locations/lagos', Component: LagosPage },
      { path: 'locations/abuja', Component: AbujaPage },
      { path: 'locations/port-harcourt', Component: PortHarcourtPage },
      { path: 'global', Component: Global },
      { path: 'services/web-development', Component: WebDevelopment },
      { path: 'services/mobile-apps', Component: MobileApps },
      { path: 'services/desktop-apps', Component: DesktopApps },
      { path: 'services/web-automations', Component: WebAutomations },
      { path: 'services/digital-marketing', Component: DigitalMarketing },
      {
        path: 'services/digital-marketing/:channel',
        Component: MarketingChannel,
        getStaticPaths: () => marketingChannelStaticPaths,
      },
      { path: '*', Component: NotFound },
    ],
  },
]

export default routes
