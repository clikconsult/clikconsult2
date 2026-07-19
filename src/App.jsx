import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/blog/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const Careers = lazy(() => import('./pages/Careers'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Privacy = lazy(() => import('./pages/Legal').then((module) => ({ default: module.Privacy })));
const Terms = lazy(() => import('./pages/Legal').then((module) => ({ default: module.Terms })));
const UyoPage = lazy(() => import('./pages/Locations').then((module) => ({ default: module.UyoPage })));
const AkwaIbomPage = lazy(() => import('./pages/Locations').then((module) => ({ default: module.AkwaIbomPage })));
const LagosPage = lazy(() => import('./pages/Locations').then((module) => ({ default: module.LagosPage })));
const AbujaPage = lazy(() => import('./pages/Locations').then((module) => ({ default: module.AbujaPage })));
const PortHarcourtPage = lazy(() => import('./pages/Locations').then((module) => ({ default: module.PortHarcourtPage })));
const Global = lazy(() => import('./pages/Global'));
const WebDevelopment = lazy(() => import('./pages/services/WebDevelopment'));
const MobileApps = lazy(() => import('./pages/services/MobileApps'));
const DesktopApps = lazy(() => import('./pages/services/DesktopApps'));
const WebAutomations = lazy(() => import('./pages/services/WebAutomations'));
const DigitalMarketing = lazy(() => import('./pages/services/DigitalMarketing'));
const MarketingChannel = lazy(() => import('./pages/services/marketing/MarketingChannel'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />

          {/* Location pages */}
          <Route path="/locations/uyo" element={<UyoPage />} />
          <Route path="/locations/akwa-ibom" element={<AkwaIbomPage />} />
          <Route path="/locations/lagos" element={<LagosPage />} />
          <Route path="/locations/abuja" element={<AbujaPage />} />
          <Route path="/locations/port-harcourt" element={<PortHarcourtPage />} />
          <Route path="/global" element={<Global />} />
          
          {/* Dev service pages */}
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/mobile-apps" element={<MobileApps />} />
          <Route path="/services/desktop-apps" element={<DesktopApps />} />
          <Route path="/services/web-automations" element={<WebAutomations />} />

          {/* Digital marketing overview + 12 channel sub-pages */}
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/digital-marketing/:channel" element={<MarketingChannel />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
      <ChatBot />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
