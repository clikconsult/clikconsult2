import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Web Dev', 'Mobile App', 'Automation', 'Marketing'];

const projects = [
  {
    title: 'TradeVault Platform',
    category: 'Web Dev',
    desc: 'Full-stack trading dashboard with real-time data, portfolio tracking, and advanced charting.',
    result: '+200% traffic after launch',
    stack: ['React', 'Node.js', 'MongoDB'],
    color: 'from-cyan-500/20 to-blue-500/10',
  },
  {
    title: 'GlowBox E-commerce',
    category: 'Web Dev',
    desc: 'Premium beauty e-commerce store with inventory management, Paystack integration, and loyalty programme.',
    result: '₦12M revenue in first 3 months',
    stack: ['Next.js', 'Stripe', 'Sanity'],
    color: 'from-pink-500/20 to-rose-500/10',
  },
  {
    title: 'FinPulse Mobile App',
    category: 'Mobile App',
    desc: 'Cross-platform fintech app for personal budgeting, bill splitting, and savings goals.',
    result: '4.8★ on App Store & Play Store',
    stack: ['React Native', 'Firebase', 'Plaid'],
    color: 'from-violet-500/20 to-purple-500/10',
  },
  {
    title: 'NorthStar Logistics App',
    category: 'Mobile App',
    desc: 'Driver tracking, delivery scheduling, and client notification app for a Lagos logistics firm.',
    result: '60% reduction in missed deliveries',
    stack: ['Flutter', 'Google Maps', 'Node.js'],
    color: 'from-emerald-500/20 to-teal-500/10',
  },
  {
    title: 'Invoice Automation Pipeline',
    category: 'Automation',
    desc: 'Automated invoice generation, email delivery, and payment reconciliation for an accounting firm.',
    result: '28 hours saved per week',
    stack: ['Python', 'Make', 'QuickBooks API'],
    color: 'from-amber-500/20 to-orange-500/10',
  },
  {
    title: 'Lead Scraping & CRM Sync',
    category: 'Automation',
    desc: 'Web scraper collecting qualified B2B leads from multiple directories and pushing to HubSpot CRM.',
    result: '1,200 new leads per month',
    stack: ['Puppeteer', 'Node.js', 'HubSpot API'],
    color: 'from-blue-500/20 to-indigo-500/10',
  },
  {
    title: 'Sterling Homes SEO Campaign',
    category: 'Marketing',
    desc: 'Full SEO overhaul including technical fixes, content strategy, and link building for a real estate brand.',
    result: '+320% organic traffic in 6 months',
    stack: ['SEO', 'Content', 'Link Building'],
    color: 'from-green-500/20 to-emerald-500/10',
  },
  {
    title: 'EduReach Google Ads',
    category: 'Marketing',
    desc: 'Google Ads campaign for an online learning platform targeting Nigerian and diaspora students.',
    result: '4.8× ROAS, -42% cost per lead',
    stack: ['Google Ads', 'GA4', 'CRO'],
    color: 'from-yellow-500/20 to-amber-500/10',
  },
  {
    title: 'Apex Retail POS System',
    category: 'Web Dev',
    desc: 'Custom point-of-sale and inventory management web app for a multi-branch retail chain.',
    result: '3 branches, 50+ daily transactions',
    stack: ['React', 'Express', 'PostgreSQL'],
    color: 'from-red-500/20 to-rose-500/10',
  },
];

export default function Portfolio() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <main className="pt-32">
      <SEO
        title="Portfolio | Web, Mobile & Marketing Projects"
        description="See Clikconsult's portfolio of web development, mobile app, automation, and digital marketing projects — with real results for Nigerian and global businesses."
        path="/portfolio"
      />
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pb-16 text-center">
        <Reveal>
          <p className="section-label mb-4">Our work</p>
          <h1 className="section-heading mb-6">
            Projects we're<br />
            <span className="text-gradient">proud to share</span>
          </h1>
          <p className="text-white/40 text-lg max-w-xl mx-auto leading-relaxed">
            A selection of work across web development, mobile apps, automation, and digital marketing.
          </p>
        </Reveal>
      </section>

      {/* Filter */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <Reveal>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? 'bg-primary text-dark'
                    : 'border border-white/10 text-white/50 hover:border-primary/40 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <div className={`card-glass p-7 h-full flex flex-col bg-gradient-to-br ${p.color} group cursor-pointer`}>
                  {/* Category tag */}
                  <span className="inline-block text-xs font-medium text-primary border border-primary/30 rounded-full px-3 py-1 mb-5 self-start">
                    {p.category}
                  </span>

                  <h3 className="font-display font-bold text-white text-xl mb-3">{p.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-5 flex-1">{p.desc}</p>

                  {/* Result */}
                  <div className="bg-white/5 rounded-xl px-4 py-3 mb-5">
                    <p className="text-xs text-white/30 mb-0.5">Result</p>
                    <p className="text-primary text-sm font-semibold">{p.result}</p>
                  </div>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.stack.map(t => (
                      <span key={t} className="text-xs text-white/30 border border-white/10 rounded-full px-3 py-1">{t}</span>
                    ))}
                  </div>

                  <Link to="/contact" className="flex items-center gap-1.5 text-primary text-xs font-medium group-hover:gap-3 transition-all">
                    Start a similar project <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
}
