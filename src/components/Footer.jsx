import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Rss, Globe, AtSign, Check } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <footer className="bg-dark-2 border-t border-white/5">
      {/* CTA Band */}
      <div className="bg-mesh border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <p className="section-label mb-4">Ready to start?</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Don't just build a product.<br />
            <span className="text-gradient">Build a digital advantage.</span>
          </h2>
          <p className="text-white/50 max-w-md mx-auto mb-8 text-lg">
            Tell us what you need — we'll respond within 24 hours with a clear plan and honest pricing.
          </p>
          <Link to="/contact" className="btn-primary px-8 py-4 text-base">Book a Free Consultation</Link>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center mb-5">
            <img
              src="/logo-full.png"
              alt="Clikconsult"
              className="h-12 w-auto object-contain"
            />
          </Link>
          <p className="text-white/40 text-sm leading-relaxed mb-6">
            Full-service IT and digital marketing firm helping businesses build, grow, and automate online.
          </p>
          <div className="flex gap-3">
            {[{ Icon: Send, label: 'X / Twitter' }, { Icon: Rss, label: 'LinkedIn' }, { Icon: AtSign, label: 'Instagram' }, { Icon: Globe, label: 'GitHub' }].map(({ Icon }, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary transition-all">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <p className="text-white text-sm font-semibold mb-5">Services</p>
          <ul className="space-y-3">
            {[
              ['Web Development', '/services/web-development'],
              ['Mobile App Dev', '/services/mobile-apps'],
              ['Desktop Apps', '/services/desktop-apps'],
              ['Web Automations', '/services/web-automations'],
              ['Digital Marketing', '/services/digital-marketing'],
            ].map(([label, path]) => (
              <li key={path}><Link to={path} className="text-white/40 hover:text-primary text-sm transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <p className="text-white text-sm font-semibold mb-5">Company</p>
          <ul className="space-y-3">
            {[
              ['About Us', '/about'],
              ['Portfolio', '/portfolio'],
              ['Insights', '/blog'],
              ['Careers', '/careers'],
              ['Contact', '/contact'],
            ].map(([label, path]) => (
              <li key={path}><Link to={path} className="text-white/40 hover:text-primary text-sm transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-white text-sm font-semibold mb-5">Get in Touch</p>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <Mail size={15} className="text-primary mt-0.5 shrink-0" />
              <a href="mailto:contact@clikconsult.com.ng" className="text-white/40 hover:text-white text-sm transition-colors">contact@clikconsult.com.ng</a>
            </li>
            <li className="flex gap-3 items-start">
              <Phone size={15} className="text-primary mt-0.5 shrink-0" />
              <a href="tel:+2349038544515" className="text-white/40 hover:text-white text-sm transition-colors">+234 903 854 4515</a>
            </li>
            <li className="flex gap-3 items-start">
              <MapPin size={15} className="text-primary mt-0.5 shrink-0" />
              <span className="text-white/40 text-sm">Uyo, Nigeria</span>
            </li>
          </ul>
          <div className="mt-6">
            <p className="text-white/40 text-xs mb-3">Newsletter</p>
            {status === 'success' ? (
              <p className="flex items-center gap-2 text-primary text-xs">
                <Check size={14} /> Subscribed! Thanks for joining.
              </p>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  disabled={status === 'loading'}
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary/50 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-primary text-dark rounded-full px-4 py-2 text-xs font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50"
                >
                  {status === 'loading' ? '...' : 'Go'}
                </button>
              </form>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-xs mt-2">Something went wrong. Please try again.</p>
            )}
          </div>
        </div>
      </div>

      {/* SEO Sitemap Band — Marketing Services + Locations */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-4">Digital Marketing Services</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                ['SEO', '/services/digital-marketing/seo'],
                ['PPC / Google Ads', '/services/digital-marketing/ppc'],
                ['Social Media', '/services/digital-marketing/social-media'],
                ['Email Marketing', '/services/digital-marketing/email-marketing'],
                ['Content Marketing', '/services/digital-marketing/content-marketing'],
                ['CRO', '/services/digital-marketing/cro'],
                ['E-commerce Marketing', '/services/digital-marketing/ecommerce-marketing'],
                ['Analytics & Reporting', '/services/digital-marketing/analytics'],
                ['Affiliate Marketing', '/services/digital-marketing/affiliate-marketing'],
                ['Influencer Marketing', '/services/digital-marketing/influencer-marketing'],
                ['Online Reputation Management', '/services/digital-marketing/orm'],
                ['Video Marketing', '/services/digital-marketing/video-marketing'],
              ].map(([label, path]) => (
                <Link key={path} to={path} className="text-white/35 hover:text-primary text-xs transition-colors">{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-4">Where We Work</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                ['Uyo', '/locations/uyo'],
                ['Akwa Ibom', '/locations/akwa-ibom'],
                ['Lagos', '/locations/lagos'],
                ['Abuja', '/locations/abuja'],
                ['Port Harcourt', '/locations/port-harcourt'],
              ].map(([label, path]) => (
                <Link key={path} to={path} className="text-white/35 hover:text-primary text-xs transition-colors">{label}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-white/20 text-xs">© {year} Clikconsult. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="text-white/20 hover:text-white/50 text-xs transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="text-white/20 hover:text-white/50 text-xs transition-colors">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}