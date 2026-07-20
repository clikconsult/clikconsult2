import { Zap, Clock, GitBranch, Database, BarChart3, RefreshCw } from 'lucide-react';
import ServicePage from '../../components/ServicePage';

const data = {
  seo: {
    title: 'Business & Web Automation Services in Nigeria',
    description: 'Clikconsult automates workflows, reporting, CRM pipelines, web scraping, and API integrations for growing Nigerian businesses.',
    path: '/services/web-automations',
  },
  hero: {
    label: 'Web Automations',
    heading: 'Stop doing the same thing twice. Automate it.',
    subheading: 'We identify the manual work draining your team\'s time, then build reliable automation pipelines that run around the clock — without you.',
  },
  overview: {
    heading: 'Every hour saved is an hour earned',
    body: 'From simple Zapier flows to complex custom-coded pipelines, we design automations that fit your existing tools and grow with your operation.',
    bullets: [
      'Workflow automation (Zapier / Make)',
      'Web scraping & data extraction',
      'Browser automation (Puppeteer)',
      'CRM & lead pipeline automation',
      'Automated reporting & alerts',
      'Invoice & document generation',
      'API integration pipelines',
      'Inventory sync automation',
    ],
  },
  features: [
    { icon: Clock, title: 'Hours back every week', desc: 'Clients typically recover 10–30 hours of staff time per week after their first automation project.' },
    { icon: Zap, title: 'Runs while you sleep', desc: 'Automations execute on schedule or on trigger — no human in the loop required.' },
    { icon: GitBranch, title: 'Handles complex logic', desc: 'Conditional branches, error handling, retry logic, and fallbacks built in from the start.' },
    { icon: Database, title: 'Connects your tools', desc: 'We bridge apps that don\'t natively talk to each other — CRMs, ERPs, spreadsheets, email, and more.' },
    { icon: BarChart3, title: 'Full audit trail', desc: 'Every automation run is logged. When something goes wrong (and eventually it will), you\'ll know exactly why.' },
    { icon: RefreshCw, title: 'Maintained over time', desc: 'Websites change, APIs update. We monitor and maintain your automations so they don\'t silently break.' },
  ],
  process: [
    { title: 'Workflow audit', desc: 'We interview your team to map every manual, repetitive process and rank by time cost and automation potential.' },
    { title: 'Solution design', desc: 'For each priority workflow, we design the automation logic — tools, triggers, conditions, error paths.' },
    { title: 'Build & test', desc: 'Automations are built incrementally, tested with real data, and stress-tested before going live.' },
    { title: 'Monitoring setup', desc: 'Alerts, dashboards, and failure notifications configured so you always know the system is healthy.' },
    { title: 'Handover & training', desc: 'Full documentation and a walkthrough so your team understands what\'s running and can spot issues.' },
  ],
  faqs: [
    { q: 'Do you need access to our systems?', a: 'Yes, but only what\'s necessary. We use OAuth, API keys, and least-privilege access principles. We\'ll document exactly what access we need and why.' },
    { q: 'What if a website I scrape changes its layout?', a: 'Scraping automations are fragile by nature — when a site changes, selectors break. Our maintenance retainer covers fixing these. We also build in alerts so you know when something breaks.' },
    { q: 'Can automations integrate with our existing software?', a: 'If it has an API or a web interface, we can almost certainly automate it. We work with CRMs (HubSpot, Salesforce, Zoho), accounting tools (QuickBooks, Xero), e-commerce platforms, ERPs, and more.' },
    { q: 'What\'s the difference between Zapier/Make and custom automation?', a: 'Zapier and Make are fast to deploy and great for straightforward flows. Custom code (Python, Node.js) is better for high-volume, complex logic, or when no integration exists. We recommend the right tool for each job.' },
  ],
  related: [
    { label: 'Web Development', path: '/services/web-development' },
    { label: 'Digital Marketing', path: '/services/digital-marketing' },
    { label: 'Desktop Applications', path: '/services/desktop-apps' },
  ],
  illustration: 'automation',
};

export default function WebAutomations() {
  return <ServicePage {...data} />;
}
