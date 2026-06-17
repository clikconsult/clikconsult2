import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import BlogPost from './pages/blog/BlogPost';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import NotFound from './pages/NotFound';
import { Privacy, Terms } from './pages/Legal';
import { AbujaPage, AkwaIbomPage, LagosPage, PortHarcourtPage, UyoPage } from './pages/Locations';
import Global from './pages/Global';
import WebDevelopment from './pages/services/WebDevelopment';
import MobileApps from './pages/services/MobileApps';
import DesktopApps from './pages/services/DesktopApps';
import WebAutomations from './pages/services/WebAutomations';
import DigitalMarketing from './pages/services/DigitalMarketing';
import MarketingChannel from './pages/services/marketing/MarketingChannel';

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
