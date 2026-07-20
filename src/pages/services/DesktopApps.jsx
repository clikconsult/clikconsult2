import { Monitor, HardDrive, Lock, Cpu, RefreshCw, LayoutDashboard } from 'lucide-react';
import ServicePage from '../../components/ServicePage';

const data = {
  seo: {
    title: 'Desktop Application Development In Nigeria',
    description: 'Clikconsult builds custom desktop software for Windows, Mac, and Linux, including POS systems, dashboards, and offline business tools.',
    path: '/services/desktop-apps',
  },
  hero: {
    label: 'Desktop Application Development',
    heading: 'Powerful desktop software for Windows, Mac, and Linux.',
    subheading: 'Custom desktop apps that run offline, integrate with your systems, and handle the heavy workloads web apps simply can\'t.',
  },
  overview: {
    heading: 'Built for work that demands more than a browser',
    body: 'Some tools need to live on the desktop — for performance, offline access, system integration, or security. We build those tools with Electron, Python, and native frameworks depending on your requirements.',
    bullets: [
      'Inventory & POS systems',
      'Data management tools',
      'Enterprise workflow software',
      'Reporting dashboards',
      'File processing utilities',
      'Hardware integration apps',
      'Offline-first applications',
      'Cross-platform (Win/Mac/Linux)',
    ],
  },
  features: [
    { icon: HardDrive, title: 'Offline by design', desc: 'Full functionality without an internet connection. Local databases, syncing when connectivity returns.' },
    { icon: Cpu, title: 'System-level power', desc: 'Access the file system, hardware devices, serial ports, and OS APIs that browsers can\'t reach.' },
    { icon: Lock, title: 'Data stays local', desc: 'For sensitive industries — finance, healthcare, legal — data never has to leave the machine.' },
    { icon: Monitor, title: 'Native look and feel', desc: 'Interfaces that respect platform conventions so users feel at home from day one.' },
    { icon: LayoutDashboard, title: 'Rich data interfaces', desc: 'Complex tables, charts, and dashboards that perform smoothly even with large datasets.' },
    { icon: RefreshCw, title: 'Auto-update infrastructure', desc: 'Background updates delivered silently so your team is always on the latest version.' },
  ],
  process: [
    { title: 'Requirements & architecture', desc: 'We map every workflow the app needs to support and design the data model before building anything.' },
    { title: 'UI/UX design', desc: 'Wireframes and prototypes reviewed with your team — critical before desktop development begins.' },
    { title: 'Development & integration', desc: 'Sprint-based builds with installers provided for real-environment testing throughout.' },
    { title: 'Performance & stress testing', desc: 'Large dataset tests, memory profiling, and multi-user scenarios validated before release.' },
    { title: 'Packaging & deployment', desc: 'Signed installers for Windows (.exe/.msi), Mac (.dmg), and Linux (.AppImage/.deb) with auto-update channels.' },
  ],
  faqs: [
    { q: 'What technology do you use for desktop apps?', a: 'Electron (JavaScript/React) for most cross-platform projects, Python + Tkinter/PyQt for data-heavy tools, and .NET/Swift for apps requiring deep OS integration.' },
    { q: 'Can the desktop app sync with a web or mobile version?', a: 'Yes. We design cloud-sync architectures that keep desktop, web, and mobile in sync — with conflict resolution and offline queue handling.' },
    { q: 'How do you handle licensing and access control?', a: 'We implement licence key systems, user authentication, and role-based access control — so you control who uses what, and for how long.' },
    { q: 'Can you replace an existing desktop tool we\'ve outgrown?', a: 'Absolutely. Data migration, workflow parity, and user training are all part of our transition process.' },
  ],
  related: [
    { label: 'Web Development', path: '/services/web-development' },
    { label: 'Web Automations', path: '/services/web-automations' },
    { label: 'Mobile App Development', path: '/services/mobile-apps' },
  ],
  illustration: 'desktop',
};

export default function DesktopApps() {
  return <ServicePage {...data} />;
}
