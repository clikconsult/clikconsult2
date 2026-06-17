import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, DollarSign, MessageCircle, Shield, Globe2, Star } from 'lucide-react';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';

const services = [
  { label: 'Web Development', desc: 'React, Next.js, full-stack web apps', path: '/services/web-development' },
  { label: 'Mobile App Development', desc: 'iOS, Android, React Native, Flutter', path: '/services/mobile-apps' },
  { label: 'Desktop Applications', desc: 'Windows, Mac, Linux software', path: '/services/desktop-apps' },
  { label: 'Web & Business Automation', desc: 'Workflow automation, integrations', path: '/services/web-automations' },
  { label: 'Digital Marketing', desc: 'SEO, PPC, content, social', path: '/services/digital-marketing' },
];

const pricing = [
  { tier: 'Landing Page / Small Site', range: '$800 – $2,500', desc: '5–8 pages, custom design, mobile-first, basic SEO' },
  { tier: 'Full Business Website', range: '$2,500 – $6,000', desc: 'Custom design, CMS, integrations, full SEO setup' },
  { tier: 'E-commerce / Web App', range: '$5,000 – $15,000', desc: 'Custom functionality, payments, admin dashboards' },
  { tier: 'Mobile App (iOS + Android)', range: '$6,000 – $20,000', desc: 'Cross-platform, backend, app store launch' },
  { tier: 'Monthly Digital Marketing', range: '$600 – $3,000/mo', desc: 'SEO, PPC, social, content — scoped to your goals' },
];

const reasons = [
  { icon: DollarSign, title: 'Senior-level work, honest pricing', desc: 'You get the same calibre of engineering and design as a US agency, typically at 40-60% lower cost — without sacrificing quality or communication.' },
  { icon: Clock, title: 'Real-time overlap with US hours', desc: 'Nigeria runs GMT+1, which overlaps with US Eastern mornings and West Coast afternoons. You get live calls and same-day responses, not 12-hour delays.' },
  { icon: MessageCircle, title: 'Fluent English, clear communication', desc: 'No language barrier, no miscommunication over scope. Weekly updates, clear documentation, and direct access to the people doing the work.' },
  { icon: Shield, title: 'Modern stack, no shortcuts', desc: 'React, Next.js, Node.js, Tailwind — the same technology stack used by well-funded US startups. No outdated templates or recycled themes.' },
];

export default function Global() {
  return (
    <main className="pt-32">
      <SEO
        title="Web & App Development for US & Canada Businesses"
        description="Clikconsult is a Nigeria-based digital agency delivering web development, mobile apps, and digital marketing for US and Canadian businesses — senior-level work at honest pricing."
        path="/global"
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-50" />
        <div className="relative max-w-5xl mx-auto px-6 pb-24">
          <Reveal>
            <div className="flex items-center gap-2 mb-6">
              <Globe2 size={14} className="text-primary" />
              <p className="section-label">Serving clients in the US &amp; Canada</p>
            </div>
            <h1 className="section-heading mb-6 max-w-3xl">
              World-class development.<br />
              <span className="text-gradient">A fraction of US agency rates.</span>
            </h1>
            <p className="text-white/40 text-lg max-w-2xl leading-relaxed mb-10">
              We're a Nigeria-based digital agency building websites, apps, and marketing systems for businesses across the US and Canada — fluent communication, real-time overlap, and senior-level execution, without the New York or Toronto price tag.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary px-7 py-3.5">
                Book a Free Call <ArrowRight size={15} />
              </Link>
              <Link to="/portfolio" className="btn-outline px-7 py-3.5">See Our Work</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-dark-2 border-y border-white/5 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="section-label mb-4">Why work with us</p>
            <h2 className="section-heading mb-14 max-w-2xl">
              Built for clients who want quality<br />without the overhead
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.08}>
                <div className="card-glass p-7 h-full">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <r.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-2">{r.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="section-label mb-4">What we do</p>
          <h2 className="section-heading mb-14 max-w-2xl">
            One team for your entire digital build
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07}>
              <Link
                to={s.path}
                className="card-glass p-7 block group h-full hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="font-display font-bold text-white text-lg mb-2">{s.label}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="text-primary text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={12} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-dark-2 border-y border-white/5 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <p className="section-label mb-4">Investment</p>
            <h2 className="section-heading mb-4 max-w-2xl">
              Transparent USD pricing
            </h2>
            <p className="text-white/40 max-w-xl mb-14 text-lg">
              Every project is scoped individually — these ranges give you a realistic starting point before we talk specifics.
            </p>
          </Reveal>
          <div className="space-y-3">
            {pricing.map((p, i) => (
              <Reveal key={p.tier} delay={i * 0.06}>
                <div className="card-glass p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="font-display font-bold text-white mb-1">{p.tier}</h3>
                    <p className="text-white/40 text-sm">{p.desc}</p>
                  </div>
                  <p className="text-primary font-bold text-lg whitespace-nowrap">{p.range}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <p className="text-white/25 text-xs mt-6">
              Ranges reflect typical project scope. Final pricing depends on requirements, integrations, and timeline. We'll always give you a fixed quote before work begins.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <Reveal>
          <p className="section-label mb-4">How it works</p>
          <h2 className="section-heading mb-14">From first call to launch</h2>
        </Reveal>
        <div className="space-y-5">
          {[
            { title: 'Free discovery call', desc: 'A 30-minute call (your timezone, your platform — Zoom, Meet, Teams) to understand your goals and scope the project.' },
            { title: 'Fixed-price proposal', desc: 'A clear, written proposal in USD with timeline, deliverables, and payment milestones. No surprises, no scope creep.' },
            { title: 'Build with weekly updates', desc: 'Sprint-based development with regular check-ins, live previews, and direct access to the team building your project.' },
            { title: 'Launch & support', desc: 'Deployment, handover documentation, and a support window included with every project.' },
          ].map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="card-glass p-7 flex flex-col md:flex-row gap-6 items-start">
                <div className="w-12 h-12 rounded-full border border-primary/40 flex items-center justify-center text-primary font-bold font-display shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg mb-2">{step.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-dark-2 border-y border-white/5 py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: '150+', label: 'Projects delivered' },
            { stat: '98%', label: 'Client satisfaction' },
            { stat: '6+', label: 'Years in business' },
            { stat: '24h', label: 'Response time' },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <p className="font-display text-3xl font-bold text-gradient mb-1">{s.stat}</p>
              <p className="text-white/40 text-sm">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 max-w-3xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="section-heading mb-4">Let's talk about your project</h2>
          <p className="text-white/40 mb-8 text-lg">
            Book a free 30-minute call. We'll discuss your goals, give you an honest assessment, and follow up with a fixed-price proposal within 48 hours.
          </p>
          <Link to="/contact" className="btn-primary px-8 py-4 text-base">
            Book Your Free Call <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}