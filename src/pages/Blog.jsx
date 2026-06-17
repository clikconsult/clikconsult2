import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';
import { posts, categoryColors } from '../data/blogPosts';

export default function Blog() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <main className="pt-32">
      <SEO
        title="Blog | Web Development & Digital Marketing Tips"
        description="Practical guides on web development, SEO, digital marketing, automation, and online business growth for Nigerian entrepreneurs."
        path="/blog"
      />
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pb-16 text-center">
        <Reveal>
          <p className="section-label mb-4">Insights</p>
          <h1 className="section-heading mb-6">
            Thinking out loud on<br />
            <span className="text-gradient">tech and growth</span>
          </h1>
          <p className="text-white/40 text-lg max-w-xl mx-auto leading-relaxed">
            Practical guides, honest takes, and real-world lessons from building digital products and running campaigns for over six years.
          </p>
        </Reveal>
      </section>

      {/* Featured post */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <Reveal>
          <div className={`card-glass p-10 bg-gradient-to-br ${featured.color} rounded-2xl`}>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className={`inline-block text-xs font-medium border rounded-full px-3 py-1 mb-4 ${categoryColors[featured.category] || 'text-primary border-primary/30 bg-primary/5'}`}>
                  {featured.category}
                </span>
                <h2 className="font-display font-bold text-white text-2xl md:text-3xl mb-4 leading-tight">
                  {featured.title}
                </h2>
                <p className="text-white/40 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-white/30 text-sm mb-8">
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><Clock size={13} /> {featured.readTime} read</span>
                </div>
                <Link to={`/blog/${featured.slug}`} className="btn-primary">
                  Read article <ArrowRight size={15} />
                </Link>
              </div>
              <div className="aspect-[4/3] rounded-xl bg-white/5 border border-white/5 flex items-center justify-center">
                <span className="text-white/10 font-display text-6xl font-bold">01</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Posts grid */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((post, i) => (
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
      </section>

      {/* Newsletter */}
      <section className="bg-dark-2 border-t border-white/5 py-24">
        <div className="max-w-xl mx-auto px-6 text-center">
          <Reveal>
            <p className="section-label mb-4">Stay sharp</p>
            <h2 className="font-display text-3xl font-bold text-white mb-4">Get new articles in your inbox</h2>
            <p className="text-white/40 mb-8 text-sm">No spam. Just one useful piece of content per week on building and growing digital businesses.</p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button className="btn-primary px-6 py-3 text-sm whitespace-nowrap">Subscribe</button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
