// ============================================================
// LOCATION PAGES - Clikconsult
// Usage: Import the relevant export in your router
// Routes:
//   /locations/uyo           -> <UyoPage />
//   /locations/akwa-ibom     -> <AkwaIbomPage />
//   /locations/lagos         -> <LagosPage />
//   /locations/abuja         -> <AbujaPage />
//   /locations/port-harcourt -> <PortHarcourtPage />
// ============================================================

import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Mail, MapPin, Phone } from 'lucide-react';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';

const services = [
  { label: 'Web Design & Development', path: '/services/web-development' },
  { label: 'Mobile App Development', path: '/services/mobile-apps' },
  { label: 'Desktop Applications', path: '/services/desktop-apps' },
  { label: 'Web & Business Automation', path: '/services/web-automations' },
  { label: 'Digital Marketing & SEO', path: '/services/digital-marketing' },
];

const stats = [
  { number: '150+', label: 'Projects delivered' },
  { number: '98%', label: 'Client satisfaction' },
  { number: '6+', label: 'Years experience' },
  { number: '24h', label: 'Response time' },
];

function LocationPage({ seo, city, state, headline, subheading, intro, whyPoints, ctaText }) {
  return (
    <main className="pt-32 pb-28">
      <SEO title={seo.title} description={seo.description} path={seo.path} />

      <section className="max-w-5xl mx-auto px-6 pb-20">
        <Reveal>
          <div className="flex items-center gap-2 mb-5">
            <MapPin size={14} className="text-primary" />
            <p className="section-label">{state}, Nigeria</p>
          </div>
          <h1 className="section-heading mb-6 max-w-3xl">{headline}</h1>
          <p className="text-white/40 text-lg max-w-2xl leading-relaxed mb-10">{subheading}</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary px-7 py-3.5">
              Get a Free Consultation <ArrowRight size={15} />
            </Link>
            <Link to="/portfolio" className="btn-outline px-7 py-3.5">
              See Our Work
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="bg-dark-2 border-y border-white/5 py-14">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08} className="text-center">
              <p className="font-display text-4xl font-bold text-gradient mb-1">{stat.number}</p>
              <p className="text-white/40 text-sm">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <p className="section-label mb-4">Why Clikconsult in {city}</p>
          <h2 className="font-display text-3xl font-bold text-white mb-5 leading-tight">
            {intro.heading}
          </h2>
          <p className="text-white/40 leading-relaxed mb-6">{intro.body1}</p>
          <p className="text-white/40 leading-relaxed">{intro.body2}</p>
        </Reveal>
        <div className="space-y-3">
          {whyPoints.map((point, index) => (
            <Reveal key={point} delay={index * 0.06}>
              <div className="flex items-start gap-3 bg-white/3 border border-white/5 rounded-xl p-4">
                <CheckCircle size={15} className="text-primary shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">{point}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-dark-2 border-y border-white/5 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <p className="section-label mb-4">What we offer</p>
            <h2 className="section-heading mb-12">Services for {city} businesses</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <Reveal key={service.label} delay={index * 0.07}>
                <Link
                  to={service.path}
                  className="card-glass p-6 flex items-center justify-between group hover:border-primary/30 transition-all duration-300"
                >
                  <span className="text-white/70 text-sm font-medium group-hover:text-white transition-colors">
                    {service.label}
                  </span>
                  <ArrowRight size={14} className="text-primary shrink-0 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-3xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="section-heading mb-4">{ctaText}</h2>
          <p className="text-white/40 mb-8 text-lg">
            Tell us about your project and we'll come back within 24 hours with an honest assessment and clear next steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link to="/contact" className="btn-primary px-8 py-4">
              Start a project <ArrowRight size={15} />
            </Link>
            <Link to="/services/digital-marketing" className="btn-outline px-8 py-4">
              Explore services
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-white/30 text-sm">
            <a href="mailto:hello@clikconsult.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={14} /> hello@clikconsult.com
            </a>
            <a href="tel:+2349038544515" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={14} /> +234 903 854 4515
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

export function UyoPage() {
  return (
    <LocationPage
      seo={{
        title: 'Web Design & Digital Marketing Agency in Uyo',
        description: 'Clikconsult is a web design, mobile app, and digital marketing agency based in Uyo, Nigeria. We help Uyo businesses build a powerful online presence.',
        path: '/locations/uyo',
      }}
      city="Uyo"
      state="Akwa Ibom"
      headline={<>The digital agency<br /><span className="text-gradient">Uyo businesses trust.</span></>}
      subheading="We're based in Uyo and we know this market. From web design to digital marketing, we help Akwa Ibom businesses compete online - and win."
      intro={{
        heading: "Uyo's digital landscape is growing fast. We help you stay ahead.",
        body1: "More Uyo businesses are moving online - and the ones investing in quality web design and digital marketing now are pulling ahead of competitors who aren't. We've been part of that shift since 2018.",
        body2: "As a Uyo-based agency, we understand the local market, the local audience, and what it takes to stand out in Akwa Ibom. We're not a Lagos agency parachuting in - we're your neighbours.",
      }}
      whyPoints={[
        'Based in Uyo - we know the local business environment',
        'Fast turnaround times with in-person meetings available',
        'Affordable pricing structured for Nigerian SMEs',
        'Full-service: web, apps, automation, and marketing',
        'Proven results for Akwa Ibom businesses',
        'Support in English and local context always considered',
      ]}
      ctaText="Ready to grow your Uyo business online?"
    />
  );
}

export function AkwaIbomPage() {
  return (
    <LocationPage
      seo={{
        title: 'Web Design & Digital Marketing Agency in Akwa Ibom',
        description: 'Clikconsult provides web design, mobile app development, and digital marketing services for businesses across Akwa Ibom State, Nigeria.',
        path: '/locations/akwa-ibom',
      }}
      city="Akwa Ibom"
      state="Akwa Ibom"
      headline={<>Helping Akwa Ibom businesses<br /><span className="text-gradient">build online presence.</span></>}
      subheading="From Uyo to Eket to Ikot Ekpene - we serve businesses across Akwa Ibom State with web design, mobile apps, and digital marketing that drives real results."
      intro={{
        heading: 'Akwa Ibom businesses deserve world-class digital services.',
        body1: 'The economic potential of Akwa Ibom State is enormous - but too many local businesses are held back by poor websites, no digital marketing, and outdated technology. We exist to change that.',
        body2: "We work with businesses across the state - retail, hospitality, professional services, oil & gas support, and more - delivering digital solutions that compete with anything you'd find in Lagos or Abuja.",
      }}
      whyPoints={[
        'Serving businesses statewide - Uyo, Eket, Ikot Ekpene & more',
        'Deep understanding of the Akwa Ibom market and audience',
        'Websites and apps built to international standards',
        'Digital marketing that targets both local and national audiences',
        'In-person consultations available across the state',
        'Pricing that works for Akwa Ibom business budgets',
      ]}
      ctaText="Ready to take your Akwa Ibom business online?"
    />
  );
}

export function LagosPage() {
  return (
    <LocationPage
      seo={{
        title: 'Web Design & Digital Marketing Agency Serving Lagos',
        description: 'Clikconsult delivers professional web design, mobile apps, and digital marketing for Lagos businesses. Remote-first delivery with Lagos-specific market knowledge.',
        path: '/locations/lagos',
      }}
      city="Lagos"
      state="Lagos"
      headline={<>Premium digital services<br /><span className="text-gradient">for Lagos businesses.</span></>}
      subheading="Lagos is Nigeria's most competitive business environment. Your digital presence needs to match that level. We build websites, apps, and marketing systems that keep you ahead."
      intro={{
        heading: 'Lagos demands the best. We deliver it.',
        body1: 'In a city where competition is intense and attention spans are short, a mediocre website or inconsistent digital marketing is a direct cost to your business. We build digital products that perform - fast, conversion-optimised, and built to rank.',
        body2: "We work with Lagos businesses remotely with the same quality, responsiveness, and results you'd expect from a top Lagos agency - often at a fraction of the cost.",
      }}
      whyPoints={[
        'Remote-first delivery with zero compromise on quality',
        'Experience serving Lagos SMEs, startups, and enterprises',
        'Websites optimised for Lagos audience behaviour and mobile-first usage',
        'Digital marketing targeting Lagos demographics precisely',
        'Fast turnaround times - we work at Lagos pace',
        'Competitive pricing vs Lagos agency rates',
      ]}
      ctaText="Ready to stand out in Lagos's competitive market?"
    />
  );
}

export function AbujaPage() {
  return (
    <LocationPage
      seo={{
        title: 'Web Design & Digital Marketing Agency Serving Abuja',
        description: 'Clikconsult provides web design, mobile apps, automation, and digital marketing for businesses and government contractors in Abuja, FCT, Nigeria.',
        path: '/locations/abuja',
      }}
      city="Abuja"
      state="FCT"
      headline={<>Digital solutions built<br /><span className="text-gradient">for Abuja's market.</span></>}
      subheading="From corporate websites to government contractor platforms to professional services firms - we build digital products that meet Abuja's professional standards."
      intro={{
        heading: 'Abuja businesses have specific needs. We understand them.',
        body1: 'The Abuja market is unique - government, professional services, corporate headquarters, and a high-income consumer base that expects polish and professionalism in every digital touchpoint.',
        body2: "We design and build with that context in mind - clean, authoritative websites, enterprise-grade web applications, and digital marketing campaigns calibrated for Abuja's professional audience.",
      }}
      whyPoints={[
        'Experience with professional services, NGOs, and corporate clients',
        "Clean, authoritative design that meets Abuja's professional standards",
        'Government contractor portal and procurement platform experience',
        "Digital marketing targeting Abuja's high-income demographics",
        'Enterprise-grade security and compliance built in',
        'Remote delivery with Abuja-specific market understanding',
      ]}
      ctaText="Ready to elevate your Abuja business online?"
    />
  );
}

export function PortHarcourtPage() {
  return (
    <LocationPage
      seo={{
        title: 'Web Design & Digital Marketing Agency Serving Port Harcourt',
        description: 'Clikconsult delivers web design, mobile apps, and digital marketing for businesses in Port Harcourt and Rivers State, Nigeria.',
        path: '/locations/port-harcourt',
      }}
      city="Port Harcourt"
      state="Rivers"
      headline={<>Growing Port Harcourt businesses<br /><span className="text-gradient">with better digital.</span></>}
      subheading="Port Harcourt is Nigeria's energy capital - and its businesses deserve digital infrastructure that matches that energy. We build it."
      intro={{
        heading: "Port Harcourt's business scene is booming. Is your digital presence keeping up?",
        body1: "From oil & gas support services to retail, hospitality, real estate, and professional services - Port Harcourt businesses are growing fast. The ones investing in quality web design and digital marketing now are building a competitive moat their competitors can't easily close.",
        body2: "We serve Port Harcourt businesses remotely with the same quality and attention you'd get from a local agency - and results that speak for themselves.",
      }}
      whyPoints={[
        'Experience with oil & gas support, logistics, and Port Harcourt industries',
        "Websites built for Nigeria's mobile-first audience",
        'Digital marketing targeting Rivers State demographics',
        'E-commerce solutions for Port Harcourt retail businesses',
        'Fast, responsive service with 24-hour reply guarantee',
        'Pricing structured for Nigerian business realities',
      ]}
      ctaText="Ready to grow your Port Harcourt business online?"
    />
  );
}
