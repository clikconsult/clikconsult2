import Layout from './App.jsx'
import { posts } from './data/blogPosts.js'
import { marketingChannels } from './data/marketingChannels.js'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import BlogPost from './pages/blog/BlogPost'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import NotFound from './pages/NotFound'
import { Privacy, Terms } from './pages/Legal'
import { UyoPage, AkwaIbomPage, LagosPage, AbujaPage, PortHarcourtPage } from './pages/Locations'
import Global from './pages/Global'
import WebDevelopment from './pages/services/WebDevelopment'
import MobileApps from './pages/services/MobileApps'
import DesktopApps from './pages/services/DesktopApps'
import WebAutomations from './pages/services/WebAutomations'
import DigitalMarketing from './pages/services/DigitalMarketing'
import MarketingChannel from './pages/services/marketing/MarketingChannel'

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
