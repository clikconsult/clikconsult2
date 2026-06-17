import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, Briefcase } from 'lucide-react';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';

const openings = [
  {
    title: 'Frontend Developer (React)',
    type: 'Full-time',
    location: 'Remote / Lagos',
    dept: 'Engineering',
    desc: 'We\'re looking for a React developer with strong Tailwind and animation skills to join our product team.',
  },
  {
    title: 'Digital Marketing Strategist',
    type: 'Full-time',
    location: 'Remote',
    dept: 'Marketing',
    desc: 'Own strategy and execution for multiple client accounts across SEO, PPC, and social media.',
  },
  {
    title: 'Mobile App Developer (React Native)',
    type: 'Contract',
    location: 'Remote',
    dept: 'Engineering',
    desc: 'Experienced React Native engineer for a 6-month engagement on a fintech mobile application.',
  },
  {
    title: 'UI/UX Designer',
    type: 'Full-time',
    location: 'Lagos',
    dept: 'Design',
    desc: 'Design beautiful, functional interfaces for web and mobile products. Figma-first workflow.',
  },
];

const perks = [
  { emoji: '🌍', title: 'Remote-first', desc: 'Work from anywhere. We judge output, not hours at a desk.' },
  { emoji: '📈', title: 'Real ownership', desc: 'Small team means your work has direct, visible impact on clients and the business.' },
  { emoji: '🎓', title: 'Learning budget', desc: 'Annual budget for courses, tools, and conferences — we invest in your growth.' },
  { emoji: '⏰', title: 'Flexible hours', desc: 'Core hours exist, but we respect that your best work doesn\'t always happen 9-to-5.' },
  { emoji: '💸', title: 'Competitive pay', desc: 'Market-rate salaries and performance bonuses. We don\'t lowball good people.' },
  { emoji: '🤝', title: 'Genuine culture', desc: 'No politics, no micromanagement. We hire adults and treat them like adults.' },
];

export default function Careers() {
  return (
    <main className="pt-32">
      <SEO
        title="Careers at Clikconsult | Join Our Team in Nigeria"
        description="Join the Clikconsult team. We're hiring React developers, designers, mobile engineers, and digital marketers. Remote-first roles based in Nigeria."
        path="/careers"
      />
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pb-20 text-center">
        <Reveal>
          <p className="section-label mb-4">Careers</p>
          <h1 className="section-heading mb-6">
            Work on things that<br />
            <span className="text-gradient">actually matter</span>
          </h1>
          <p className="text-white/40 text-lg max-w-xl mx-auto leading-relaxed">
            We're a small, focused team building digital products for ambitious businesses. If that sounds like your kind of environment, read on.
          </p>
        </Reveal>
      </section>

      {/* Culture */}
      <section className="bg-dark-2 border-y border-white/5 py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="section-label mb-4">Life at Clikconsult</p>
            <h2 className="font-display text-3xl font-bold text-white mb-5 leading-tight">
              A place where great work gets noticed — and rewarded
            </h2>
            <p className="text-white/40 leading-relaxed mb-4">
              We're not a 200-person agency where your work disappears into a machine. Every person here does real work on real client projects, and the quality shows.
            </p>
            <p className="text-white/40 leading-relaxed">
              We're distributed across Nigeria, the UK, and Canada. We use async communication by default and only schedule meetings when they're genuinely necessary.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="card-glass p-5">
                  <p className="text-2xl mb-3">{p.emoji}</p>
                  <h4 className="font-semibold text-white text-sm mb-1">{p.title}</h4>
                  <p className="text-white/35 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-28 max-w-4xl mx-auto px-6">
        <Reveal>
          <p className="section-label mb-4">Open positions</p>
          <h2 className="section-heading mb-16">Current openings</h2>
        </Reveal>
        <div className="space-y-4">
          {openings.map((job, i) => (
            <Reveal key={job.title} delay={i * 0.08}>
              <div className="card-glass p-7 flex flex-col md:flex-row md:items-center gap-5 group hover:border-primary/30 transition-all">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="text-xs font-medium text-primary border border-primary/30 bg-primary/5 rounded-full px-3 py-0.5">{job.dept}</span>
                  </div>
                  <h3 className="font-display font-bold text-white text-xl mb-2">{job.title}</h3>
                  <p className="text-white/40 text-sm mb-4">{job.desc}</p>
                  <div className="flex flex-wrap gap-4 text-white/30 text-xs">
                    <span className="flex items-center gap-1.5"><Briefcase size={12} /> {job.type}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={12} /> {job.location}</span>
                    <span className="flex items-center gap-1.5"><Clock size={12} /> Open now</span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="btn-outline shrink-0 group-hover:border-primary group-hover:text-primary"
                >
                  Apply now <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-8 card-glass p-7 bg-gradient-to-br from-primary/10 to-blue-500/5 border-primary/20 text-center">
            <h3 className="font-display font-bold text-white mb-2">Don't see your role?</h3>
            <p className="text-white/40 text-sm mb-5">We always want to hear from talented people. Send us your CV and tell us what you'd bring to the team.</p>
            <Link to="/contact" className="btn-primary text-sm px-6 py-2.5">Send an open application <ArrowRight size={14} /></Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
