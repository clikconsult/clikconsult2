import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BarChart3,
  ChevronDown,
  Code2,
  FileText,
  Globe,
  Globe2,
  Laptop,
  Mail,
  Megaphone,
  Menu,
  MousePointerClick,
  Search,
  Share2,
  ShoppingCart,
  Smartphone,
  Workflow,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const devServices = [
  { label: 'Web Development', path: '/services/web-development', icon: Code2 },
  { label: 'Mobile Apps', path: '/services/mobile-apps', icon: Smartphone },
  { label: 'Desktop Apps', path: '/services/desktop-apps', icon: Laptop },
  { label: 'Web Automations', path: '/services/web-automations', icon: Workflow },
];

const mktServices = [
  { label: 'Marketing Overview', path: '/services/digital-marketing', icon: Megaphone },
  { label: 'SEO', path: '/services/digital-marketing/seo', icon: Search },
  { label: 'PPC / Google Ads', path: '/services/digital-marketing/ppc', icon: MousePointerClick },
  { label: 'Social Media', path: '/services/digital-marketing/social-media', icon: Share2 },
  { label: 'Email Marketing', path: '/services/digital-marketing/email-marketing', icon: Mail },
  { label: 'Content Marketing', path: '/services/digital-marketing/content-marketing', icon: FileText },
  { label: 'CRO', path: '/services/digital-marketing/cro', icon: Globe },
  { label: 'E-commerce Marketing', path: '/services/digital-marketing/ecommerce-marketing', icon: ShoppingCart },
  { label: 'Analytics & Reporting', path: '/services/digital-marketing/analytics', icon: BarChart3 },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdown(null);
    setMobileServicesOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;
  const isSectionActive = (path) => location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <header className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500`}>
      <nav className={`w-full max-w-6xl rounded-2xl transition-all duration-500 ${
        scrolled
          ? 'bg-dark/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/40'
          : 'bg-dark/60 backdrop-blur-lg border border-white/5'
      }`}>
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo-full.png"
              alt="Clikconsult"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link to="/" className={`px-4 py-2 rounded-full text-sm transition-colors ${isActive('/') ? 'text-primary' : 'text-white/70 hover:text-white'}`}>Home</Link>
            <Link to="/about" className={`px-4 py-2 rounded-full text-sm transition-colors ${isActive('/about') ? 'text-primary' : 'text-white/70 hover:text-white'}`}>About</Link>

            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => setDropdown('services')} onMouseLeave={() => setDropdown(null)}>
              <button className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm transition-colors ${location.pathname.startsWith('/services') ? 'text-primary' : 'text-white/70 hover:text-white'}`}>
                Services <ChevronDown size={14} className={`transition-transform ${dropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {dropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-dark-2/95 backdrop-blur-xl border border-white/10 rounded-xl p-3 shadow-2xl"
                    style={{ width: 'max-content', minWidth: '500px' }}
                  >
                    <div className="grid grid-cols-2 gap-3">
                      {/* Technology Column */}
                      <div>
                        <p className="text-[10px] text-muted uppercase tracking-widest mb-1.5 px-2">Technology</p>
                        <div className="flex flex-col gap-0.5">
                          {devServices.map(s => (
                            <Link key={s.path} to={s.path} className="group flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs text-white/70 hover:text-primary hover:bg-white/5 transition-all">
                              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/5 text-white/45 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                <s.icon size={13} />
                              </span>
                              {s.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                      {/* Marketing Column */}
                      <div>
                        <p className="text-[10px] text-muted uppercase tracking-widest mb-1.5 px-2">Marketing</p>
                        <div className="flex flex-col gap-0.5">
                          {mktServices.map(s => (
                            <Link key={s.path} to={s.path} className="group flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs text-white/70 hover:text-primary hover:bg-white/5 transition-all">
                              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/5 text-white/45 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                <s.icon size={13} />
                              </span>
                              {s.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/portfolio" className={`px-4 py-2 rounded-full text-sm transition-colors ${isActive('/portfolio') ? 'text-primary' : 'text-white/70 hover:text-white'}`}>Portfolio</Link>
            <Link to="/blog" className={`px-4 py-2 rounded-full text-sm transition-colors ${isSectionActive('/blog') ? 'text-primary' : 'text-white/70 hover:text-white'}`}>Insights</Link>
            <Link to="/global" className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm transition-colors ${isActive('/global') ? 'text-primary' : 'text-white/70 hover:text-white'}`}>
              <Globe2 size={14} /> US &amp; Canada
            </Link>
            <Link to="/contact" className={`px-4 py-2 rounded-full text-sm transition-colors ${isActive('/contact') ? 'text-primary' : 'text-white/70 hover:text-white'}`}>Contact</Link>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="btn-primary text-xs px-5 py-2.5">Get a Free Quote</Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="lg:hidden text-white/70 hover:text-white p-2">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-white/5"
            >
              <div className="max-h-[calc(100vh-7.5rem)] overflow-y-auto px-6 py-4 flex flex-col gap-1">
                <Link to="/" className="py-3 text-sm text-white/80 border-b border-white/5">Home</Link>
                <Link to="/about" className="py-3 text-sm text-white/80 border-b border-white/5">About</Link>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((current) => !current)}
                  className={`flex items-center justify-between py-3 text-left text-sm border-b border-white/5 transition-colors ${
                    location.pathname.startsWith('/services') ? 'text-primary' : 'text-white/80'
                  }`}
                  aria-expanded={mobileServicesOpen}
                >
                  Services
                  <ChevronDown size={15} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-1 py-3 border-b border-white/5">
                        <p className="py-2 text-xs text-muted uppercase tracking-widest">Development</p>
                        {devServices.map(s => (
                          <Link key={s.path} to={s.path} className="flex items-center gap-2 py-2 pl-3 text-sm text-white/70 hover:text-primary">
                            <s.icon size={14} />
                            {s.label}
                          </Link>
                        ))}
                        <p className="py-2 text-xs text-muted uppercase tracking-widest">Marketing</p>
                        {mktServices.map(s => (
                          <Link key={s.path} to={s.path} className="flex items-center gap-2 py-2 pl-3 text-sm text-white/70 hover:text-primary">
                            <s.icon size={14} />
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <Link to="/portfolio" className="py-3 text-sm text-white/80 border-t border-white/5">Portfolio</Link>
                <Link to="/blog" className={`py-3 text-sm border-b border-white/5 ${isSectionActive('/blog') ? 'text-primary' : 'text-white/80'}`}>Insights</Link>
                <Link to="/global" className={`flex items-center gap-2 py-3 text-sm border-b border-white/5 ${isActive('/global') ? 'text-primary' : 'text-white/80'}`}>
                  <Globe2 size={15} /> US &amp; Canada
                </Link>
                <Link to="/contact" className="py-3 text-sm text-white/80">Contact</Link>
                <Link to="/contact" className="btn-primary mt-3 justify-center">Get a Free Quote</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}