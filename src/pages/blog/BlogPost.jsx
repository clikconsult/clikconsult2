import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from '../../components/Reveal';
import SEO from '../../components/SEO';
import { posts, categoryColors } from '../../data/blogPosts';

function ContentBlock({ block }) {
  switch (block.type) {
    case 'intro':
      return (
        <p className="text-white/70 text-lg leading-relaxed border-l-2 border-primary/50 pl-6 mb-8">
          {block.text}
        </p>
      );
    case 'h2':
      return (
        <h2 className="font-display font-bold text-white text-2xl mt-12 mb-4">
          {block.text}
        </h2>
      );
    case 'p':
      return (
        <p className="text-white/55 leading-relaxed mb-5">
          {block.text}
        </p>
      );
    case 'list':
      return (
        <ul className="space-y-3 mb-8">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 items-start text-white/55 leading-relaxed">
              <span className="w-5 h-5 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = posts.find(p => p.slug === slug);
  const postIndex = posts.findIndex(p => p.slug === slug);
  const prevPost = postIndex > 0 ? posts[postIndex - 1] : null;
  const nextPost = postIndex < posts.length - 1 ? posts[postIndex + 1] : null;
  const related = posts.filter(p => p.slug !== slug && p.category === post?.category).slice(0, 2);

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 pt-32">
        <SEO
          title="Article Not Found"
          description="The Clikconsult article you are looking for could not be found."
          path={`/blog/${slug}`}
          noindex
        />
        <div className="text-center">
          <p className="font-display text-6xl font-bold text-gradient opacity-30 mb-4">404</p>
          <h1 className="font-display text-2xl font-bold text-white mb-4">Article not found</h1>
          <p className="text-white/40 mb-8">This article doesn't exist or has been removed.</p>
          <Link to="/blog" className="btn-primary">Back to Insights</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-32">
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
      />
      {/* Back button */}
      <div className="max-w-3xl mx-auto px-6 mb-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors"
        >
          <ArrowLeft size={15} /> Back to Insights
        </button>
      </div>

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-6 mb-12"
      >
        <span className={`inline-block text-xs font-medium border rounded-full px-3 py-1 mb-5 ${categoryColors[post.category] || 'text-primary border-primary/30 bg-primary/5'}`}>
          {post.category}
        </span>

        <h1 className="font-display font-bold text-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-5 text-white/30 text-sm pb-8 border-b border-white/5">
          <span className="flex items-center gap-1.5"><Calendar size={13} /> {post.date}</span>
          <span className="flex items-center gap-1.5"><Clock size={13} /> {post.readTime} read</span>
          <span className="text-white/15">·</span>
          <span className="text-white/30">By Clikconsult Team</span>
        </div>
      </motion.section>

      {/* Hero banner */}
      <div className="max-w-3xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`aspect-[16/7] rounded-2xl bg-gradient-to-br ${post.color} border border-white/5 flex items-center justify-center overflow-hidden relative`}
        >
          <div className="absolute inset-0 bg-mesh" />
          <span className="font-display text-[120px] font-bold text-white/5 select-none">
            {post.category.charAt(0)}
          </span>
          <div className="absolute bottom-6 left-8">
            <span className={`text-xs font-medium border rounded-full px-3 py-1 ${categoryColors[post.category] || 'text-primary border-primary/30 bg-primary/5'}`}>
              {post.category}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 pb-16">
        {post.content.map((block, i) => (
          <Reveal key={i} delay={i * 0.03}>
            <ContentBlock block={block} />
          </Reveal>
        ))}
      </article>

      {/* CTA box */}
      <Reveal>
        <div className="max-w-3xl mx-auto px-6 pb-16">
          <div className="card-glass p-8 bg-gradient-to-br from-primary/10 to-blue-500/5 border-primary/20 text-center">
            <p className="section-label mb-3">Work with us</p>
            <h3 className="font-display font-bold text-white text-2xl mb-3">Need help with your digital presence?</h3>
            <p className="text-white/40 text-sm mb-6 max-w-md mx-auto">
              From web development to digital marketing — we help businesses build and grow online. Book a free discovery call.
            </p>
            <Link to="/contact" className="btn-primary px-7 py-3">
              Book a free consultation <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </Reveal>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="max-w-3xl mx-auto px-6 pb-16">
          <Reveal>
            <p className="section-label mb-6">More from {post.category}</p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.1}>
                <Link to={`/blog/${r.slug}`} className="block group">
                  <div className={`card-glass p-6 bg-gradient-to-br ${r.color} group-hover:border-primary/30 transition-all`}>
                    <span className={`inline-block text-xs font-medium border rounded-full px-2.5 py-0.5 mb-3 ${categoryColors[r.category] || 'text-primary border-primary/30 bg-primary/5'}`}>
                      {r.category}
                    </span>
                    <h4 className="font-display font-bold text-white text-base leading-snug mb-3 group-hover:text-primary/90 transition-colors">
                      {r.title}
                    </h4>
                    <div className="flex items-center gap-3 text-white/25 text-xs">
                      <span>{r.date}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1"><Clock size={11} /> {r.readTime}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Prev / Next navigation */}
      <section className="bg-dark-2 border-t border-white/5 py-10">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row gap-4 justify-between">
          {prevPost ? (
            <Link to={`/blog/${prevPost.slug}`} className="flex items-start gap-3 group flex-1">
              <ArrowLeft size={16} className="text-white/30 group-hover:text-primary transition-colors mt-1 shrink-0" />
              <div>
                <p className="text-white/25 text-xs mb-1">Previous</p>
                <p className="text-white/60 text-sm group-hover:text-white transition-colors leading-snug">{prevPost.title}</p>
              </div>
            </Link>
          ) : <div className="flex-1" />}

          {nextPost && (
            <Link to={`/blog/${nextPost.slug}`} className="flex items-start gap-3 group flex-1 sm:text-right sm:flex-row-reverse">
              <ArrowRight size={16} className="text-white/30 group-hover:text-primary transition-colors mt-1 shrink-0" />
              <div>
                <p className="text-white/25 text-xs mb-1">Next</p>
                <p className="text-white/60 text-sm group-hover:text-white transition-colors leading-snug">{nextPost.title}</p>
              </div>
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
