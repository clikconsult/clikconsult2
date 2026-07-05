import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Globe, Smartphone, Monitor, Zap, TrendingUp, Star, Users, Award, Clock } from 'lucide-react';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';
import { posts, categoryColors } from '../data/blogPosts';

const services = [
  { icon: Globe, label: 'Web Development', desc: 'High-performance websites and web apps built to convert visitors into clients.', path: '/services/web-development', color: 'from-cyan-500/20 to-blue-500/20' },
  { icon: Smartphone, label: 'Mobile App Dev', desc: 'iOS and Android apps that users actually enjoy using.', path: '/services/mobile-apps', color: 'from-violet-500/20 to-purple-500/20' },
  { icon: Monitor, label: 'Desktop Apps', desc: 'Powerful offline-capable software for Windows, Mac, and Linux.', path: '/services/desktop-apps', color: 'from-emerald-500/20 to-teal-500/20' },
  { icon: Zap, label: 'Web Automations', desc: 'Eliminate repetitive tasks. Save hours every week with smart automation.', path: '/services/web-automations', color: 'from-amber-500/20 to-orange-500/20' },
  { icon: TrendingUp, label: 'Digital Marketing', desc: 'Data-driven campaigns that put your brand in front of the right audience.', path: '/services/digital-marketing', color: 'from-rose-500/20 to-pink-500/20' },
];

const stats = [
  { number: '150+', label: 'Projects Delivered' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '6+', label: 'Years Experience' },
  { number: '40+', label: 'Global Clients' },
];

const testimonials = [
  { name: 'Emeka O.', role: 'CEO, TradeVault', text: 'Clikconsult rebuilt our entire platform in 8 weeks. Traffic doubled and our bounce rate dropped by 60%.' },
  { name: 'Sarah M.', role: 'Founder, GlowBox', text: 'Their digital marketing team took us from 200 to 12,000 monthly visitors in four months. Remarkable.' },
  { name: 'James K.', role: 'CTO, FinPulse', text: 'The automation they set up saves our team 20+ hours every week. Best investment we made this year.' },
  { name: 'Amina B.', role: 'MD, NorthStar Logistics', text: 'Professional, fast, and genuinely invested in our success. Not just a vendor — a real tech partner.' },
];

const process = [
  { title: 'Discovery', desc: 'We listen, ask the right questions, and map out exactly what you need.' },
  { title: 'Strategy', desc: 'A clear plan — timeline, stack, budget — before a single line of code is written.' },
  { title: 'Build', desc: 'Design and development in tight sprints with weekly progress updates.' },
  { title: 'Launch', desc: 'Rigorous QA, seamless deployment, and a handoff that empowers your team.' },
  { title: 'Grow', desc: 'Ongoing support, optimisation, and marketing to keep the momentum going.' },
];

const clients = ['Safemart', 'Kojaprojects', 'Marvicanihealth', 'Mainstay security', 'Catchypet', 'Tradevault'];

function splitCounter(value) {
  const match = String(value).match(/^([^0-9.-]*)([0-9.]+)(.*)$/);
  if (!match) return { prefix: '', target: 0, suffix: value, decimals: 0 };

  const decimals = match[2].includes('.') ? match[2].split('.')[1].length : 0;
  return {
    prefix: match[1],
    target: Number(match[2]),
    suffix: match[3],
    decimals,
  };
}

function AnimatedCounter({
  value,
  className = '',
  delay = 0,
  spinnerClassName = '',
  suffixClassName = 'text-primary',
  amount = 0.6,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });
  const { prefix, target, suffix, decimals } = splitCounter(value);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    let frameId;
    const duration = 1200;
    const startTime = performance.now() + delay * 1000;

    const tick = (now) => {
      const elapsed = Math.max(0, now - startTime);
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(target * eased);

      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [decimals, delay, isInView, target]);

  const displayValue = count.toLocaleString(undefined, {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={`inline-flex items-center gap-2 ${className}`}>
      <span>
        {prefix}
        {displayValue}
        {suffix && <span className={suffixClassName}>{suffix}</span>}
      </span>
      <motion.span
        aria-hidden="true"
        className={`counter-spinner ${spinnerClassName}`}
        animate={isInView ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
      />
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <SEO
        title="Clikconsult | Nigerian Web Design, Digital Marketing & IT Consulting Agency"
        description="Clikconsult helps Nigerian businesses build websites, apps, automations, and digital marketing systems that turn visitors into clients."
        path="/"
      />
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-dark">
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_55%,#0A0F1A)]" />
        <div className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '44px 44px' }} />
        <div className="absolute left-[-100px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/6 blur-[130px] pointer-events-none" />
        <div className="absolute right-[-60px] top-1/4 w-[360px] h-[360px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-36 pb-24 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left col */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="flex items-center gap-3 mb-9"
            >
              <span className="flex items-center gap-2 bg-primary/8 border border-primary/20 text-primary text-[11px] font-bold tracking-[0.18em] uppercase px-4 py-2 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shrink-0" />
                IT · Marketing · Automation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold text-white leading-[1.04] mb-7"
              style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.6rem)' }}
            >
              Build<br />
              a digital presence<br />
              <span className="text-gradient">that actually works.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="text-white/45 text-lg leading-relaxed mb-11 max-w-lg"
            >
              We build websites, apps, and automations — then market them — so you stop losing business to competitors with a better digital setup.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-14"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-primary text-dark font-bold px-7 py-4 rounded-full text-sm tracking-wide hover:bg-primary-dark transition-all duration-300 shadow-[0_0_36px_rgba(11,206,175,0.22)] hover:shadow-[0_0_52px_rgba(11,206,175,0.38)]"
              >
                Get a Free Consultation
                <span className="w-6 h-6 rounded-full bg-dark/12 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight size={12} />
                </span>
              </Link>

              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2.5 text-white/45 hover:text-white text-sm font-medium transition-all duration-300"
              >
                <span className="w-7 h-px bg-white/20 group-hover:w-10 group-hover:bg-primary transition-all duration-300" />
                See our work
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.52 }}
              className="flex flex-wrap gap-x-7 gap-y-3 pt-7 border-t border-white/5"
            >
              {[
                { stat: '150+', label: 'Projects shipped' },
                { stat: '98%', label: 'Client satisfaction' },
                { stat: '6 yrs', label: 'In business' },
                { stat: '40+', label: 'Global clients' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col">
                  <AnimatedCounter
                    value={item.stat}
                    className="font-display font-bold text-primary text-2xl leading-none mb-0.5"
                    delay={0.55 + i * 0.08}
                    spinnerClassName="counter-spinner-sm"
                    suffixClassName="text-primary"
                  />
                  <span className="text-white/25 text-xs">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right col — cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex flex-col gap-4"
          >
            <div className="card-glass rounded-2xl p-7 bg-gradient-to-br from-primary/10 to-blue-500/5 border-primary/20">
              <div className="flex items-center gap-3 mb-5">
                <img src="/logo-icon.png" alt="Clikconsult" className="w-10 h-10 object-contain" />
                <div>
                  <p className="text-white font-semibold text-sm">Clikconsult</p>
                  <p className="text-white/30 text-xs">Your digital growth partner</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Web & App Development', pct: 92 },
                  { label: 'Digital Marketing', pct: 87 },
                  { label: 'Automation & Integrations', pct: 79 },
                ].map(bar => (
                  <div key={bar.label}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-white/50">{bar.label}</span>
                      <span className="text-primary font-medium">{bar.pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${bar.pct}%` }}
                        transition={{ duration: 1.2, delay: 0.7 + 0.05 * bar.pct / 10, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-blue-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="card-glass rounded-2xl p-5 bg-gradient-to-br from-violet-500/10 to-purple-500/5">
                <AnimatedCounter
                  value="150+"
                  className="font-display font-bold text-white text-3xl mb-1"
                  delay={0.85}
                />
                <p className="text-white/35 text-xs leading-snug">Projects delivered across 3 continents</p>
              </div>
              <div className="card-glass rounded-2xl p-5 bg-gradient-to-br from-amber-500/10 to-orange-500/5">
                <AnimatedCounter
                  value="24h"
                  className="font-display font-bold text-white text-3xl mb-1"
                  delay={0.95}
                />
                <p className="text-white/35 text-xs leading-snug">Response time on every enquiry</p>
              </div>
            </div>

            <div className="card-glass rounded-2xl p-5 flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/30 to-blue-500/20 flex items-center justify-center shrink-0 text-white font-bold text-sm">E</div>
              <div>
                <div className="flex gap-0.5 mb-1.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} className="text-primary fill-primary" />)}
                </div>
                <p className="text-white/50 text-xs leading-relaxed">"Traffic doubled and our bounce rate dropped 60% after launch."</p>
                <p className="text-white/25 text-[10px] mt-1.5">Emeka O. — CEO, TradeVault</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client logos */}
      <section className="border-y border-white/5 py-10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-white/20 text-xs uppercase tracking-widest mb-8">Trusted by growing companies</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-14 overflow-hidden">
            {clients.map((c, i) => (
              <span
                key={c}
                className="text-white/15 font-display font-bold text-sm tracking-wider uppercase hover:text-white/30 transition-colors scroll-text"
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-28 max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="section-label mb-4">What we do</p>
          <h2 className="section-heading mb-4 max-w-2xl">
            Everything your business needs<br />
            <span className="text-gradient">to win online</span>
          </h2>
          <p className="text-white/40 max-w-xl mb-16 text-lg">
            Not a jack of all trades — a team of specialists working together on the full picture.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <Link to={s.path} className={`card-glass p-8 block group rounded-2xl bg-gradient-to-br ${s.color} border border-white/5 hover:border-primary/30 transition-all duration-300`}>
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                  <s.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">{s.label}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="text-primary text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={12} />
                </span>
              </Link>
            </Reveal>
          ))}
          <Reveal delay={0.4}>
            <Link to="/contact" className="card-glass p-8 block group rounded-2xl bg-gradient-to-br from-primary/10 to-blue-500/10 border border-primary/20 hover:border-primary/50 transition-all duration-300">
              <h3 className="font-display font-bold text-white text-lg mb-2">Not sure where to start?</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-4">Book a free 30-minute discovery call and we'll map out the right solution for your business.</p>
              <span className="text-primary text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Book a call <ArrowRight size={12} />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-dark-2 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="text-center">
              <AnimatedCounter
                value={s.number}
                className="justify-center font-display text-5xl font-bold text-gradient mb-2"
                delay={i * 0.08}
                spinnerClassName="counter-spinner-lg"
                amount={0.4}
              />
              <p className="text-white/40 text-sm">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-28 max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="section-label mb-4">How we work</p>
          <h2 className="section-heading mb-16">Our process, <span className="text-gradient">step by step</span></h2>
        </Reveal>
        <div className="grid md:grid-cols-5 gap-6">
          {process.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="relative">
                <div className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center text-primary text-sm font-bold mb-4">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display font-bold text-white mb-2">{p.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-10 right-0 h-px bg-gradient-to-r from-primary/20 to-transparent" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-dark-2 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="section-label mb-4">Client stories</p>
            <h2 className="section-heading mb-16">What clients share</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div className="card-glass p-6 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} size={12} className="text-primary fill-primary" />)}
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed flex-1 mb-5">"{t.text}"</p>
                  <div>
                    <p className="text-white font-medium text-sm">{t.name}</p>
                    <p className="text-white/30 text-xs">{t.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="pt-24 pb-16 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <p className="section-label mb-4">Why Clikconsult</p>
          <h2 className="section-heading mb-6">
            We don't just deliver work.<br />
            <span className="text-gradient">We deliver results.</span>
          </h2>
          <p className="text-white/40 mb-10 leading-relaxed">
            A lot of agencies take your brief and disappear for weeks. We stay close — weekly updates, clear communication, and no surprises at the invoice. Your success is how we measure ours.
          </p>
          <Link to="/about" className="btn-outline">Meet the team <ArrowRight size={15} /></Link>
        </Reveal>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Users, title: 'Dedicated Team', desc: 'A small, expert team that actually cares about your project' },
            { icon: Clock, title: 'On-Time Delivery', desc: 'We set realistic timelines and we hit them' },
            { icon: Award, title: 'Quality First', desc: 'Every deliverable goes through rigorous review before it leaves our hands' },
            { icon: TrendingUp, title: 'Measurable Impact', desc: 'We track the metrics that actually matter to your business' },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="card-glass p-6">
                <item.icon size={20} className="text-primary mb-3" />
                <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className="pt-16 pb-24 max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="section-label mb-4">Insights</p>
          <h2 className="section-heading mb-4">
            Stay ahead with<br />
            <span className="text-gradient">practical knowledge</span>
          </h2>
          <p className="text-white/40 max-w-xl mb-12 text-lg">
            Guides, tips, and insights on building digital products that actually convert.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.slice(0, 3).map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <Link to={`/blog/${post.slug}`} className="block group h-full">
                <div className={`card-glass p-7 h-full flex flex-col bg-gradient-to-br ${post.color} group-hover:border-primary/30 transition-all duration-300`}>
                  <span className={`inline-block text-xs font-medium border rounded-full px-3 py-1 mb-4 self-start ${categoryColors[post.category] || 'text-primary border-primary/30 bg-primary/5'}`}>
                    {post.category}
                  </span>
                  <h3 className="font-display font-bold text-white text-lg mb-3 leading-tight flex-1 group-hover:text-primary/90 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-5">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-white/25 text-xs mt-auto">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/blog" className="btn-outline">
            View all articles <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}
