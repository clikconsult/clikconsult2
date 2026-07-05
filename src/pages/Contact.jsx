import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, CalendarDays } from 'lucide-react';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';
import CalendlyEmbed from '../components/CalendlyEmbed';

const services = [
  'Web Development',
  'Mobile App Development',
  'Desktop Application',
  'Web Automation',
  'Digital Marketing / SEO',
  'Google Ads / PPC',
  'Social Media Marketing',
  'Other / Not sure yet',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('form'); // 'form' | 'calendar'

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
      } else {
        setError('Something went wrong. Please try again or email us directly.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-32">
      <SEO
        title="Contact Clikconsult | Get a Free Consultation"
        description="Get in touch with Clikconsult. We reply within 24 hours. Book a free consultation for web design, mobile apps, digital marketing, or automation services in Nigeria."
        path="/contact"
      />
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pb-16 text-center">
        <Reveal>
          <p className="section-label mb-4">Get in touch</p>
          <h1 className="section-heading mb-6">
            Let's talk about<br />
            <span className="text-gradient">your project</span>
          </h1>
          <p className="text-white/40 text-lg max-w-xl mx-auto leading-relaxed">
            Tell us what you're working on. We'll come back within 24 hours with an honest assessment and next steps.
          </p>
        </Reveal>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-28 grid lg:grid-cols-3 gap-10">
        {/* Contact info */}
        <div className="space-y-6">
          <Reveal>
            <div className="card-glass p-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Mail size={18} className="text-primary" />
              </div>
              <p className="text-white font-medium text-sm mb-1">Email us</p>
              <a href="mailto:contact@clikconsult.com.ng" className="text-white/40 text-sm hover:text-primary transition-colors">
                contact@clikconsult.com.ng
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card-glass p-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Phone size={18} className="text-primary" />
              </div>
              <p className="text-white font-medium text-sm mb-1">Call or WhatsApp</p>
              <a href="tel:+2340000000000" className="text-white/40 text-sm hover:text-primary transition-colors">
                +234 903 854 4515
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="card-glass p-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <MapPin size={18} className="text-primary" />
              </div>
              <p className="text-white font-medium text-sm mb-1">Location</p>
              <p className="text-white/40 text-sm">Uyo, Nigeria<br />Remote-first — we work globally</p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="card-glass p-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Clock size={18} className="text-primary" />
              </div>
              <p className="text-white font-medium text-sm mb-1">Response time</p>
              <p className="text-white/40 text-sm">We reply to all enquiries within 24 hours on business days.</p>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="card-glass p-6 bg-gradient-to-br from-primary/10 to-blue-500/10 border-primary/20">
              <p className="text-white font-medium text-sm mb-2">Free consultation</p>
              <p className="text-white/40 text-xs leading-relaxed">
                Not sure where to start? Book a free 30-minute discovery call and we'll help you figure out exactly what you need.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Form */}
        <div className="lg:col-span-2">
          <Reveal delay={0.1}>
            <div className="card-glass p-8 md:p-10">
              {/* Tab switcher */}
              <div className="flex gap-2 mb-8 p-1 bg-white/5 rounded-xl border border-white/10 w-fit">
                <button
                  type="button"
                  onClick={() => setActiveTab('form')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === 'form' ? 'bg-primary text-dark' : 'text-white/50 hover:text-white'
                  }`}
                >
                  <MessageSquare size={15} />
                  Send a message
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('calendar')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === 'calendar' ? 'bg-primary text-dark' : 'text-white/50 hover:text-white'
                  }`}
                >
                  <CalendarDays size={15} />
                  Book a call
                </button>
              </div>

              {activeTab === 'calendar' ? (
                <CalendlyEmbed />
              ) : sent ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={32} className="text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-white text-2xl mb-3">Message received!</h3>
                  <p className="text-white/40 max-w-sm mx-auto">
                    Thank you for reaching out. We'll review your details and come back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/50 text-xs mb-2 tracking-wide">Full name *</label>
                      <input
                        name="name"
                        required
                        value={form.name}
                        onChange={handle}
                        placeholder="Your full name"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white/50 text-xs mb-2 tracking-wide">Email address *</label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handle}
                        placeholder="your@email.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/50 text-xs mb-2 tracking-wide">Phone / WhatsApp</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handle}
                        placeholder="+234 800 000 000"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white/50 text-xs mb-2 tracking-wide">Service of interest *</label>
                      <select
                        name="service"
                        required
                        value={form.service}
                        onChange={handle}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                      >
                        <option value="" className="bg-dark">Select a service...</option>
                        {services.map(s => (
                          <option key={s} value={s} className="bg-dark">{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/50 text-xs mb-2 tracking-wide">Approximate budget</label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handle}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                    >
                      <option value="" className="bg-dark">Select a range...</option>
                      {['Under ₦200,000', '₦200,000 – ₦500,000', '₦500,000 – ₦1,000,000', '₦1,000,000 – ₦5,000,000', '₦5,000,000+', 'Not sure yet'].map(b => (
                        <option key={b} value={b} className="bg-dark">{b}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/50 text-xs mb-2 tracking-wide">Tell us about your project *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handle}
                      placeholder="What are you trying to build or achieve? The more detail, the better."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm text-center">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send message <Send size={16} />
                      </span>
                    )}
                  </button>

                  <p className="text-white/20 text-xs text-center">
                    By submitting this form you agree to our privacy policy. We never share your information.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}