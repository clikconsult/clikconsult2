import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, BarChart2, PieChart } from 'lucide-react';
import Reveal from '../../components/Reveal';
import SEO from '../../components/SEO';
import { marketingChannels } from '../../data/marketingChannels';
import Illustration from '../../components/Illustrations';

const results = [
  { metric: '+320%', label: 'Organic traffic growth', period: '6 months — SaaS client' },
  { metric: '4.8×', label: 'ROAS on Google Ads', period: 'E-commerce — 90 days' },
  { metric: '-42%', label: 'Cost per lead reduction', period: 'B2B client — 3 months' },
  { metric: '+180%', label: 'Email revenue uplift', period: 'Automation sequence' },
];

export default function DigitalMarketing() {
  return (
    <main className="pt-32">
      <SEO
        title="Digital Marketing Agency in Nigeria"
        description="Clikconsult provides SEO, PPC, social media, content marketing, email marketing, CRO, analytics, and full-funnel digital marketing services in Nigeria."
        path="/services/digital-marketing"
      />
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <p className="section-label mb-4">Digital Marketing</p>
          <h1 className="section-heading mb-6 max-w-3xl">
            Data-driven marketing that<br />
            <span className="text-gradient">delivers measurable ROI.</span>
          </h1>
          <p className="text-white/40 text-lg max-w-2xl leading-relaxed mb-10">
            Not vanity metrics. Not "brand awareness." Real results — traffic, leads, revenue — tracked transparently and optimised relentlessly.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary px-7 py-3.5">Get a Free Marketing Audit <ArrowRight size={15} /></Link>
            <Link to="/portfolio" className="btn-outline px-7 py-3.5">See Our Results</Link>
          </div>
        </Reveal>
        <Reveal delay={0.15}><div className="aspect-square max-w-md mx-auto rounded-2xl bg-dark-3 border border-white/5 relative overflow-hidden"><div className="absolute inset-0 bg-mesh" /><Illustration variant="marketing" className="relative z-10 w-full h-full" /></div></Reveal>
      </section>

      {/* Results bar */}
      <section className="bg-dark-2 border-y border-white/5 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {results.map((r, i) => (
            <Reveal key={r.label} delay={i * 0.1} className="text-center">
              <p className="font-display text-4xl font-bold text-gradient mb-1">{r.metric}</p>
              <p className="text-white text-sm font-medium mb-1">{r.label}</p>
              <p className="text-white/30 text-xs">{r.period}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Funnel */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="section-label mb-4">Our approach</p>
          <h2 className="section-heading mb-4">Full-funnel marketing</h2>
          <p className="text-white/40 mb-16 max-w-xl">We don't run tactics in isolation. Every channel connects to a strategy that moves people from strangers to loyal customers.</p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { stage: 'Awareness', tools: 'SEO · Content · Social · Video', color: 'from-blue-500/20 to-cyan-500/10' },
            { stage: 'Consideration', tools: 'PPC · Email · Retargeting', color: 'from-primary/20 to-teal-500/10' },
            { stage: 'Conversion', tools: 'CRO · Landing pages · Offers', color: 'from-violet-500/20 to-purple-500/10' },
            { stage: 'Retention', tools: 'Email · Loyalty · Reputation', color: 'from-amber-500/20 to-orange-500/10' },
          ].map((s, i) => (
            <Reveal key={s.stage} delay={i * 0.1}>
              <div className={`card-glass p-6 bg-gradient-to-br ${s.color} text-center`}>
                <div className="w-8 h-8 rounded-full border border-primary/40 flex items-center justify-center text-primary text-sm font-bold mx-auto mb-3">
                  {i + 1}
                </div>
                <h3 className="font-display font-bold text-white mb-2">{s.stage}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{s.tools}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* All channels grid - each links to its own page */}
      <section className="bg-dark-2 border-y border-white/5 py-28">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="section-label mb-4">All services</p>
            <h2 className="section-heading mb-4">Every channel. One team.</h2>
            <p className="text-white/40 mb-16 max-w-md">Click any service to explore what's included, how we approach it, and the results we've delivered.</p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {marketingChannels.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.05}>
                <Link
                  to={`/services/digital-marketing/${c.slug}`}
                  className={`card-glass p-7 flex flex-col bg-gradient-to-br ${c.color} group hover:border-primary/30 transition-all duration-300 h-full`}
                >
                  <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                    <c.icon size={20} className={c.accentColor} />
                  </div>
                  <h3 className="font-display font-bold text-white mb-2">{c.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-4 flex-1">{c.desc}</p>
                  <span className="text-primary text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore service <ArrowRight size={11} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-28 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <p className="section-label mb-4">Why it's different</p>
          <h2 className="font-display text-4xl font-bold text-white mb-6 leading-tight">
            We only report metrics<br />
            <span className="text-gradient">that move your business</span>
          </h2>
          <p className="text-white/40 leading-relaxed mb-6">
            Too many agencies hide behind impressions and follower counts. We agree on business goals upfront — leads, revenue, cost per acquisition — then report against those and nothing else.
          </p>
          <p className="text-white/40 leading-relaxed mb-8">
            Every client gets a monthly report with plain-language summaries, performance against targets, and a clear priority list for the next 30 days.
          </p>
          <Link to="/contact" className="btn-primary">Get a free audit <ArrowRight size={15} /></Link>
        </Reveal>
        <div className="space-y-4">
          {[
            { icon: TrendingUp, title: 'Goal-first strategy', desc: 'We start with your business objectives and work backwards to the tactics.' },
            { icon: BarChart2, title: 'Transparent reporting', desc: 'Monthly reports you can actually read — no dashboard hiding poor performance.' },
            { icon: PieChart, title: 'Cross-channel visibility', desc: 'We manage all channels in coordination, so nothing runs in a silo.' },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="card-glass p-6 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28 bg-dark-2 border-t border-white/5 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="section-heading mb-4">Start with a free audit</h2>
            <p className="text-white/40 mb-8 text-lg">We'll review your current digital presence and send you a prioritised action plan — no strings attached.</p>
            <Link to="/contact" className="btn-primary px-8 py-4 text-base">Get Your Free Marketing Audit <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
