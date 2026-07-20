import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Reveal from '../components/Reveal';
import SEO from './SEO';
import Illustration from './Illustrations';

export default function ServicePage({ hero, overview, features, process, faqs, related, seo, illustration = 'webdev' }) {
  return (
    <main className="pt-32">
      <SEO
        title={seo?.title || hero.label}
        description={seo?.description || hero.subheading}
        path={seo?.path || '/'}
      />
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <p className="section-label mb-4">{hero.label}</p>
          <h1 className="section-heading mb-6 max-w-3xl">{hero.heading}</h1>
          <p className="text-white/40 text-lg max-w-2xl leading-relaxed mb-10">{hero.subheading}</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary px-7 py-3.5">Get a Free Quote <ArrowRight size={15} /></Link>
            <Link to="/portfolio" className="btn-outline px-7 py-3.5">See Our Work</Link>
          </div>
        </Reveal>
        <Reveal delay={0.15}><div className="aspect-square max-w-md mx-auto rounded-2xl bg-dark-3 border border-white/5 relative overflow-hidden"><div className="absolute inset-0 bg-mesh" /><Illustration variant={illustration} className="relative z-10 w-full h-full" /></div></Reveal>
      </section>

      {/* Overview */}
      <section className="bg-dark-2 border-y border-white/5 py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="section-label mb-4">What's included</p>
            <h2 className="font-display text-3xl font-bold text-white mb-5 leading-tight">{overview.heading}</h2>
            <p className="text-white/40 leading-relaxed">{overview.body}</p>
          </Reveal>
          <div className="grid grid-cols-2 gap-3">
            {overview.bullets.map((b, i) => (
              <Reveal key={b} delay={i * 0.06}>
                <div className="flex items-start gap-3 bg-white/3 border border-white/5 rounded-xl p-4">
                  <CheckCircle size={15} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-white/60 text-sm">{b}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-28 max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="section-label mb-4">Why it matters</p>
          <h2 className="section-heading mb-16">Key benefits</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="card-glass p-8 h-full">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <f.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-display font-bold text-white mb-2">{f.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-dark-2 border-y border-white/5 py-28">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="section-label mb-4">Our approach</p>
            <h2 className="section-heading mb-16">How we deliver</h2>
          </Reveal>
          <div className="space-y-5">
            {process.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.07}>
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
        </div>
      </section>

      {/* FAQs */}
      {faqs && (
        <section className="py-28 max-w-3xl mx-auto px-6">
          <Reveal>
            <p className="section-label mb-4">Questions</p>
            <h2 className="section-heading mb-16">Common questions</h2>
          </Reveal>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.06}>
                <div className="card-glass p-6">
                  <h4 className="font-semibold text-white mb-3">{faq.q}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Related */}
      {related && (
        <section className="pb-20 max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="section-label mb-6">Explore more</p>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {related.map((r) => (
              <Link key={r.path} to={r.path} className="btn-outline text-sm px-5 py-2.5">
                {r.label} <ArrowRight size={13} />
              </Link>
            ))}
          </div>
        </section>
      )}

    </main>
  );
}
