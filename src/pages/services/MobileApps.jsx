import { Smartphone, Wifi, Star, Zap, Shield, RefreshCw } from 'lucide-react';
import ServicePage from '../../components/ServicePage';

const data = {
  seo: {
    title: 'Mobile App Development in Nigeria',
    description: 'Clikconsult builds cross-platform iOS and Android mobile apps using React Native and Flutter for businesses in Nigeria. From MVP to app store launch.',
    path: '/services/mobile-apps',
  },
  hero: {
    label: 'Mobile App Development',
    heading: 'iOS and Android apps users actually come back to.',
    subheading: 'Cross-platform and native mobile apps — designed for delight, built for performance, and deployed to both stores.',
  },
  overview: {
    heading: 'From idea to app store in weeks, not months',
    body: 'We use React Native and Flutter for most projects — one codebase, two platforms, no compromise on quality. For apps that need native-only performance, we do that too.',
    bullets: [
      'React Native & Flutter apps',
      'Native iOS (Swift)',
      'Native Android (Kotlin)',
      'App Store & Play Store setup',
      'Push notifications',
      'Offline-first architecture',
      'Payment integrations',
      'Analytics & crash reporting',
    ],
  },
  features: [
    { icon: Smartphone, title: 'Both platforms, one team', desc: 'iOS and Android delivered together — consistent experience, shared timeline, lower cost.' },
    { icon: Zap, title: 'Smooth performance', desc: '60fps animations, optimised lists, and snappy navigation. We benchmark against the best apps in your category.' },
    { icon: Wifi, title: 'Works offline', desc: 'Local-first data architecture so your app stays useful even without a connection.' },
    { icon: Shield, title: 'Secure data handling', desc: 'Biometric auth, encrypted storage, and secure API communication as standard.' },
    { icon: Star, title: 'App store optimisation', desc: 'We prepare your listing, screenshots, and metadata to maximise visibility and downloads.' },
    { icon: RefreshCw, title: 'OTA updates', desc: 'Push bug fixes and minor updates instantly without waiting for app store review cycles.' },
  ],
  process: [
    { title: 'Wireframing & UX design', desc: 'Interactive prototypes reviewed before a line of code is written — ensures the flow is right first.' },
    { title: 'API & backend planning', desc: 'We design the data layer, authentication, and any backend services the app depends on.' },
    { title: 'Development', desc: 'Sprint-based delivery with builds available for testing on your device every two weeks.' },
    { title: 'QA on real devices', desc: 'Tested on a range of physical iOS and Android devices, not just simulators.' },
    { title: 'Store submission & launch', desc: 'We handle the full submission process including all metadata, screenshots, and review communication.' },
  ],
  faqs: [
    { q: 'React Native or Flutter — which is better?', a: 'Both are excellent. React Native is a better fit if your team already uses JavaScript. Flutter gives slightly more consistent UI across platforms. We\'ll recommend based on your specific project.' },
    { q: 'How long does it take to get an app live?', a: 'An MVP with core features is typically 8–14 weeks. Full-featured apps are 16–24 weeks. We\'ll scope yours precisely after our discovery call.' },
    { q: 'What if my app needs a backend?', a: 'We build and manage backends too — Node.js/Express APIs, databases, admin panels, and cloud infrastructure. Full-stack mobile delivery.' },
    { q: 'Do you maintain apps after launch?', a: 'Yes. We offer monthly maintenance retainers covering OS updates, dependency upgrades, bug fixes, and minor feature additions.' },
  ],
  related: [
    { label: 'Web Development', path: '/services/web-development' },
    { label: 'Desktop Applications', path: '/services/desktop-apps' },
    { label: 'Web Automations', path: '/services/web-automations' },
  ],
};

export default function MobileApps() {
  return <ServicePage {...data} />;
}
