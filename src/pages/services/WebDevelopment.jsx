import { Layers, Gauge, ShieldCheck, RefreshCw, Code2, Search } from 'lucide-react';
import ServicePage from '../../components/ServicePage';

const data = {
  seo: {
    title: 'Web Design and Web Development in Nigeria',
    description: 'Clikconsult builds fast, SEO-ready websites, e-commerce stores, landing pages, and custom web apps for Nigerian businesses.',
    path: '/services/web-development',
  },
  hero: {
    label: 'Web Development',
    heading: 'Websites and web apps built to perform — not just to exist.',
    subheading: 'From landing pages to full SaaS platforms, we build fast, scalable, and conversion-optimised web products using modern technology.',
  },
  overview: {
    heading: 'Custom web solutions that fit your exact requirements',
    body: 'We don\'t use page builders or generic templates. Every project is built from the ground up — designed specifically for your brand, your audience, and your business goals.',
    bullets: [
      'Marketing & corporate websites',
      'E-commerce stores',
      'SaaS web applications',
      'Client portals & dashboards',
      'Landing pages & funnels',
      'CMS-powered blogs',
      'API integrations',
      'Webflow / WordPress builds',
    ],
  },
  features: [
    { icon: Gauge, title: 'Blazing fast', desc: 'Performance-first builds with Core Web Vitals scores that search engines reward and users appreciate.' },
    { icon: Search, title: 'SEO-ready from day one', desc: 'Clean architecture, structured data, and semantic HTML — the foundation every good site needs.' },
    { icon: ShieldCheck, title: 'Secure by default', desc: 'HTTPS, secure auth, sanitised inputs, and regular dependency audits built into every project.' },
    { icon: Layers, title: 'Scalable architecture', desc: 'We build with growth in mind — so adding features six months from now doesn\'t mean a rewrite.' },
    { icon: RefreshCw, title: 'Easy to manage', desc: 'Handoffs include documentation, CMS training, and a smooth transition to your team.' },
    { icon: Code2, title: 'Modern tech stack', desc: 'React, Next.js, Node.js, Tailwind, Prisma — tools chosen for longevity, not trend-chasing.' },
  ],
  process: [
    { title: 'Discovery & scoping', desc: 'We map your goals, audience, and technical requirements before any design begins.' },
    { title: 'Design & prototyping', desc: 'High-fidelity mockups reviewed and approved before development starts. No surprises.' },
    { title: 'Development in sprints', desc: 'Iterative builds with weekly demos so you stay close to progress throughout.' },
    { title: 'QA & performance testing', desc: 'Cross-browser, cross-device, and Lighthouse audits before anything goes live.' },
    { title: 'Launch & handover', desc: 'Deployment, DNS setup, training, and 30 days of post-launch support included.' },
  ],
  faqs: [
    { q: 'How long does a typical website project take?', a: 'A standard marketing website takes 3–6 weeks. Complex web apps or e-commerce platforms are typically 8–16 weeks depending on scope.' },
    { q: 'Do you work with existing codebases?', a: 'Yes. We frequently audit, refactor, and extend existing projects. We\'ll do a code review first and give you an honest assessment.' },
    { q: 'Will I be able to update the site myself?', a: 'Absolutely. We integrate a CMS (Sanity, Contentful, or WordPress) for content-heavy sites so you can manage your content without touching code.' },
    { q: 'What does hosting look like after launch?', a: 'We recommend and configure Vercel, Netlify, or a managed VPS depending on your needs. We handle the initial setup and can manage ongoing hosting for a monthly retainer.' },
  ],
  related: [
    { label: 'Mobile App Development', path: '/services/mobile-apps' },
    { label: 'Web Automations', path: '/services/web-automations' },
    { label: 'Digital Marketing', path: '/services/digital-marketing' },
  ],
  illustration: 'webdev',
};

export default function WebDevelopment() {
  return <ServicePage {...data} />;
}
