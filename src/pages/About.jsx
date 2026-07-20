import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart } from 'lucide-react';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';
import Illustration from '../components/Illustrations';

const team = [
  { name: 'Akan Udoette', role: 'Founder & CEO', bio: 'Full-stack developer and strategist with 6+ years building digital products for businesses across Africa and beyond.' },
  { name: 'Temi Adeyemi', role: 'Lead Designer', bio: 'UI/UX specialist obsessed with interfaces that feel effortless. Previously at a top Lagos design studio.' },
  { name: 'Chidi Okafor', role: 'Head of Marketing', bio: 'Data-driven marketer who has run campaigns generating 7-figure revenue for e-commerce and SaaS clients.' },
  { name: 'Fatima Hassan', role: 'Mobile Dev Lead', bio: 'React Native and Flutter engineer. Has shipped 20+ apps to the App Store and Google Play.' },
];

const values = [
  { icon: Target, title: 'Precision over volume', desc: 'We take on fewer projects so we can go deeper on each one. You get our full attention, not a slice of it.' },
  { icon: Eye, title: 'Radical transparency', desc: 'You always know where things stand. No jargon, no spin — just honest updates and honest numbers.' },
  { icon: Heart, title: 'Long-term thinking', desc: 'We build things that last and relationships that last. Most of our clients have been with us for years.' },
];

export default function About() {
  return (
    <main className="pt-32">
      <SEO
        title="About Clikconsult"
        description="Learn about Clikconsult — a Nigerian digital agency founded in Lagos in 2018, helping businesses grow through web design, apps, automation, and digital marketing."
        path="/about"
      />
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pb-24 text-center">
        <Reveal>
          <p className="section-label mb-4">About Clikconsult</p>
          <h1 className="section-heading mb-6">
            A small team with<br />
            <span className="text-gradient">an outsized impact</span>
          </h1>
          <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
            We started Clikconsult because we kept seeing the same pattern: businesses with real potential, held back by mediocre digital presence. We fix that.
          </p>
        </Reveal>
      </section>

      {/* Story */}
      <section className="max-w-6xl mx-auto px-6 pb-28 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="aspect-[4/3] rounded-2xl bg-dark-3 border border-white/5 overflow-hidden relative flex items-center justify-center">
            <div className="absolute inset-0 bg-mesh" />
            <Illustration variant="network" className="absolute inset-0 w-full h-full opacity-60" />
            <div className="relative z-10 text-center px-8">
              <img
                src="/logo-icon.png"
                alt="Clikconsult"
                className="w-32 h-32 object-contain mx-auto mb-6 opacity-90"
              />
              <p className="font-display text-5xl font-bold text-gradient opacity-40">2018</p>
              <p className="text-white/30 text-sm mt-2">Founded in Lagos, Nigeria</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="section-label mb-4">Our story</p>
          <h2 className="font-display text-3xl font-bold text-white mb-6 leading-tight">
            Built from a belief that good technology should be accessible to every business
          </h2>
          <p className="text-white/40 leading-relaxed mb-4">
            Clikconsult was founded in Lagos in 2018 with a single goal: give growing businesses the same quality of digital work that enterprise companies take for granted. Back then, that meant doing web projects for local SMEs who'd been burned by cheap freelancers or overpriced agencies.
          </p>
          <p className="text-white/40 leading-relaxed mb-8">
            Today, we work with clients across Nigeria, the UK, the US, and Canada — delivering web platforms, mobile apps, automations, and marketing campaigns that move real business metrics.
          </p>
          <Link to="/contact" className="btn-primary">Work with us <ArrowRight size={15} /></Link>
        </Reveal>
      </section>

      {/* Values */}
      <section className="bg-dark-2 border-y border-white/5 py-28">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="section-label mb-4">What we stand for</p>
            <h2 className="section-heading mb-16">Our values</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="card-glass p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <v.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-3">{v.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="section-label mb-4">The people</p>
          <h2 className="section-heading mb-16">Meet the team</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.1}>
              <div className="card-glass p-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 border border-white/10 flex items-center justify-center mb-4">
                  <span className="font-display font-bold text-2xl text-primary">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-white mb-0.5">{member.name}</h3>
                <p className="text-primary text-xs mb-3">{member.role}</p>
                <p className="text-white/40 text-xs leading-relaxed">{member.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
