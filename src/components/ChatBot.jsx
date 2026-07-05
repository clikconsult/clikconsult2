import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  CalendarCheck,
  Code2,
  MessageCircle,
  Minimize2,
  Send,
  Sparkles,
  TrendingUp,
  Workflow,
  X,
} from 'lucide-react';

const WHATSAPP_NUMBER = '2349038544515';
const whatsappLink = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

const quickReplies = [
  { label: 'Build a website', value: 'I need a website or web app' },
  { label: 'Market my business', value: 'I need help with digital marketing' },
  { label: 'Automate work', value: 'I want to automate repetitive tasks' },
  { label: 'Get pricing', value: 'How much does a project cost?' },
];

const serviceCards = [
  {
    icon: Code2,
    title: 'Web and app development',
    text: 'Websites, dashboards, mobile apps, and desktop tools built around your workflow.',
    path: '/services/web-development',
  },
  {
    icon: TrendingUp,
    title: 'Digital marketing',
    text: 'SEO, paid ads, content, social, email, analytics, and conversion optimisation.',
    path: '/services/digital-marketing',
  },
  {
    icon: Workflow,
    title: 'Automation',
    text: 'Integrations and smart systems that reduce manual admin and speed up operations.',
    path: '/services/web-automations',
  },
];

const initialMessages = [
  {
    from: 'bot',
    text: 'Hi, I am ClikBot. Tell me what you want to build, grow, or automate and I will point you in the right direction.',
  },
];

// Ordered list of keyword rules. First match wins, so put more specific rules first.
const rules = [
  {
    keywords: ['price', 'cost', 'budget', 'quote', 'how much', 'expensive', 'cheap', 'rate'],
    text: 'Pricing depends on scope, timeline, and integrations. The fastest next step is a short discovery call so the team can give you a clear quote.',
    cta: { label: 'Request a quote', path: '/contact' },
  },
  {
    keywords: ['how long', 'timeline', 'turnaround', 'when can', 'deadline', 'duration'],
    text: 'Timelines vary by project size — a simple site can take 1-2 weeks, while a full app or platform can take 4-8+ weeks. Share your scope on a quick call and the team will give you a realistic timeline.',
    cta: { label: 'Book a consultation', path: '/contact' },
  },
  {
    keywords: ['market', 'seo', 'ads', 'ppc', 'google ads', 'social media', 'email marketing', 'grow my business', 'traffic', 'ranking'],
    text: 'Digital marketing sounds like the best starting point. Clikconsult can help with SEO, paid ads, social media, email, content, CRO, and analytics.',
    cta: { label: 'Explore marketing', path: '/services/digital-marketing' },
  },
  {
    keywords: ['automat', 'workflow', 'integration', 'repetitive', 'manual work', 'connect my tools', 'zapier'],
    text: 'Automation is a strong fit. The team can connect tools, remove repetitive tasks, and build custom workflows for your business.',
    cta: { label: 'View automations', path: '/services/web-automations' },
  },
  {
    keywords: ['mobile', 'android', 'ios', 'app for my', 'flutter', 'react native'],
    text: 'For a mobile product, start with the mobile apps service. A good brief should include users, core features, login/payment needs, and launch timeline.',
    cta: { label: 'View mobile apps', path: '/services/mobile-apps' },
  },
  {
    keywords: ['desktop', 'windows app', 'mac app', 'offline software'],
    text: 'For desktop software, Clikconsult builds tools for Windows and Mac tailored to internal workflows — inventory, POS, reporting, and more.',
    cta: { label: 'View desktop apps', path: '/services/desktop-apps' },
  },
  {
    keywords: ['website', 'web app', 'dashboard', 'portal', 'landing page', 'rebuild my site', 'redesign', 'ecommerce', 'online store'],
    text: 'A web build sounds right. Clikconsult can help with marketing sites, web apps, dashboards, portals, online stores, and performance-focused rebuilds.',
    cta: { label: 'View web development', path: '/services/web-development' },
  },
  {
    keywords: ['career', 'job', 'hire me', 'vacancy', 'internship', 'work with you'],
    text: 'For openings or collaboration, the careers page is the best place to start.',
    cta: { label: 'Open careers', path: '/careers' },
  },
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon'],
    text: "Hello! Tell me a bit about what you're trying to build, grow, or automate, and I'll point you to the right service.",
  },
];

function getBotReply(message) {
  const text = message.toLowerCase();

  for (const rule of rules) {
    if (rule.keywords.some((kw) => text.includes(kw))) {
      return { text: rule.text, cta: rule.cta };
    }
  }

  return {
    text: 'Got it. The team can help shape that into a clear plan. Share your goal, preferred timeline, and the main result you want, then book a free consultation — or message us directly on WhatsApp.',
    cta: { label: 'Contact the team', path: '/contact' },
  };
}

function Message({ message }) {
  const isBot = message.from === 'bot';

  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}>
      <div className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
        isBot
          ? 'bg-white/7 border border-white/10 text-white/70 rounded-tl-md'
          : 'bg-primary text-dark font-medium rounded-tr-md'
      }`}>
        <p>{message.text}</p>
        {message.cta && (
          <Link
            to={message.cta.path}
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-white transition-colors"
          >
            {message.cta.label}
            <ArrowRight size={12} />
          </Link>
        )}
      </div>
    </div>
  );
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(initialMessages);
  const [typing, setTyping] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    if (open && !minimized) endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open, minimized, typing]);

  const sendMessage = (value = input) => {
    const clean = value.trim();
    if (!clean || typing) return;

    setInput('');
    setMessages((current) => [...current, { from: 'user', text: clean }]);
    setTyping(true);

    // Scale the "typing" delay slightly with reply length so it feels a bit more natural
    const reply = getBotReply(clean);
    const delay = Math.min(400 + reply.text.length * 4, 1400);

    window.setTimeout(() => {
      setMessages((current) => [...current, { from: 'bot', ...reply }]);
      setTyping(false);
    }, delay);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[60] sm:bottom-5 sm:right-5">
      <AnimatePresence>
        {open && !minimized && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="mb-3 w-[calc(100vw-2rem)] max-w-[340px] overflow-hidden rounded-2xl border border-white/10 bg-dark-2/95 shadow-2xl shadow-black/50 backdrop-blur-xl"
          >
            <div className="border-b border-white/10 bg-mesh px-3.5 py-3">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-dark shadow-[0_0_28px_rgba(11,206,175,0.25)]">
                    <Bot size={18} />
                  </div>
                  <div>
                    <p className="font-display text-base font-bold text-white">ClikBot</p>
                    <p className="flex items-center gap-1.5 text-xs text-white/40">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Online assistant
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <a
                    href={whatsappLink("Hi, I'd like to talk about a project.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-7 w-7 items-center justify-center rounded-full text-white/45 transition-colors hover:bg-white/10 hover:text-primary"
                    aria-label="Continue on WhatsApp"
                    title="Continue on WhatsApp"
                  >
                    <MessageCircle size={14} />
                  </a>
                  <button
                    type="button"
                    onClick={() => setMinimized(true)}
                    className="flex h-7 w-7 items-center justify-center rounded-full text-white/45 transition-colors hover:bg-white/10 hover:text-white"
                    aria-label="Minimize chat"
                  >
                    <Minimize2 size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="flex h-7 w-7 items-center justify-center rounded-full text-white/45 transition-colors hover:bg-white/10 hover:text-white"
                    aria-label="Close chat"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>
            </div>

            <div className="max-h-[360px] overflow-y-auto px-3.5 py-3.5">
              {messages.length <= 1 && (
                <div className="mb-3 grid grid-cols-1 gap-2">
                  {serviceCards.map(({ icon: Icon, title, text, path }) => (
                    <Link
                      key={title}
                      to={path}
                      className="group flex gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-2.5 transition-all hover:border-primary/40 hover:bg-primary/5"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-primary">
                        <Icon size={15} />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold text-white group-hover:text-primary">{title}</span>
                        <span className="mt-0.5 block text-[11px] leading-relaxed text-white/35">{text}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              )}

              <div className="space-y-3">
                {messages.map((message, index) => (
                  <Message key={`${message.from}-${index}`} message={message} />
                ))}
                {typing && (
                  <div className="flex justify-start">
                    <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-md border border-white/10 bg-white/7 px-4 py-3">
                      {[0, 1, 2].map((dot) => (
                        <motion.span
                          key={dot}
                          className="h-1.5 w-1.5 rounded-full bg-primary"
                          animate={{ opacity: [0.25, 1, 0.25], y: [0, -3, 0] }}
                          transition={{ duration: 0.75, repeat: Infinity, delay: dot * 0.12 }}
                        />
                      ))}
                    </div>
                  </div>
                )}
                <div ref={endRef} />
              </div>
            </div>

            <div className="border-t border-white/10 px-3.5 py-3.5">
              {messages.length <= 1 && (
                <div className="mb-2.5 flex flex-wrap gap-1.5">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply.label}
                      type="button"
                      onClick={() => sendMessage(reply.value)}
                      className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-white/55 transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      {reply.label}
                    </button>
                  ))}
                </div>
              )}

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  sendMessage();
                }}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1"
              >
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about services..."
                  className="min-w-0 flex-1 bg-transparent px-3 text-xs text-white outline-none placeholder:text-white/25"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || typing}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-dark transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Send message"
                >
                  <Send size={14} />
                </button>
              </form>

              <a
                href={whatsappLink("Hi, I'd like to talk about a project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 flex items-center justify-center gap-1.5 text-[11px] text-white/35 hover:text-primary transition-colors"
              >
                <MessageCircle size={12} />
                Prefer WhatsApp? Continue there instead
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => {
          setOpen(true);
          setMinimized(false);
        }}
        className="group flex items-center gap-2.5 rounded-full border border-primary/30 bg-dark-2/95 px-3 py-2.5 text-white shadow-2xl shadow-black/40 backdrop-blur-xl transition-all hover:border-primary hover:bg-dark"
        aria-label="Open chat assistant"
      >
        <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary text-dark">
          {open && minimized ? <MessageCircle size={18} /> : <Sparkles size={18} />}
          <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-dark-2 bg-primary" />
        </span>
        <span className="hidden pr-1 text-left sm:block">
          <span className="block text-xs font-semibold">Chat with us</span>
          <span className="flex items-center gap-1 text-xs text-white/35">
            <BriefcaseBusiness size={12} />
            Find the right service
          </span>
        </span>
        <CalendarCheck size={16} className="hidden text-primary transition-transform group-hover:translate-x-0.5 sm:block" />
      </button>
    </div>
  );
}