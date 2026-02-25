import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, WhatsAppButton } from "@/components/marketing";
import { BookOpen, Clock, ArrowRight, Tag } from "lucide-react";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Blog | Digital Signature Guides & News | SignSecure" },
      { name: "description", content: "Learn about Digital Signature Certificates, USB tokens, e-filing tips, and more. Expert guides from India's trusted DSC reseller." },
    ],
  }),
});

const BLOG_POSTS = [
  {
    title: "Complete Guide: Which DSC Do You Need in 2025?",
    excerpt: "Confused between Class 3 Signature, Encryption, Combo, and DGFT? This comprehensive guide helps you choose the right Digital Signature Certificate for your exact requirements.",
    category: "Guide",
    readTime: "8 min read",
    date: "Jan 2025",
    featured: true,
  },
  {
    title: "How to Use Your DSC on GST Portal - Step by Step",
    excerpt: "A step-by-step walkthrough for registering and using your Digital Signature Certificate on the GST portal. Includes browser configuration tips.",
    category: "Tutorial",
    readTime: "5 min read",
    date: "Dec 2024",
    featured: false,
  },
  {
    title: "ePass 2003 vs Proxkey vs MToken: Which USB Token Should You Buy?",
    excerpt: "A detailed comparison of the most popular USB crypto tokens sold in India. We cover build quality, compatibility, pricing, and our recommendation.",
    category: "Comparison",
    readTime: "6 min read",
    date: "Nov 2024",
    featured: false,
  },
  {
    title: "DSC Mandatory for e-Tendering: What You Need to Know",
    excerpt: "Understanding the mandatory DSC requirements for participating in government e-tenders on GEM, IREPS, and state e-procurement portals.",
    category: "Compliance",
    readTime: "4 min read",
    date: "Oct 2024",
    featured: false,
  },
  {
    title: "eMudhra vs Capricorn vs VSign: Choosing the Right CA",
    excerpt: "A head-to-head comparison of India's top Certifying Authorities. Pricing, speed, support, and reliability - which CA is best for your needs?",
    category: "Comparison",
    readTime: "7 min read",
    date: "Sep 2024",
    featured: false,
  },
  {
    title: "How to Renew Your Digital Signature Certificate",
    excerpt: "Your DSC is about to expire? Here's how to renew it quickly and avoid disruption to your government portal access.",
    category: "Guide",
    readTime: "3 min read",
    date: "Aug 2024",
    featured: false,
  },
];

const CATEGORIES = ["All", "Guide", "Tutorial", "Comparison", "Compliance"];

function BlogPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
          <div className="absolute inset-0 grain-overlay" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] mb-6">
                <BookOpen className="w-3.5 h-3.5 text-brand-cobalt-bright" />
                <span className="text-xs font-semibold text-white/80 tracking-wide uppercase">Blog & Guides</span>
              </div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4 text-balance leading-tight">
                DSC Knowledge <span className="text-gradient-cobalt">Hub</span>
              </h1>
              <p className="text-base text-white/55 leading-relaxed max-w-xl mx-auto">
                Expert guides, comparisons, and tutorials to help you understand Digital Signature Certificates, USB tokens, and compliance requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Category filters */}
        <section className="py-8 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 overflow-x-auto">
              {CATEGORIES.map((cat, i) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                    i === 0
                      ? "bg-brand-cobalt text-white"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Featured post */}
            {BLOG_POSTS.filter((p) => p.featured).map((post) => (
              <div key={post.title} className="mb-12 rounded-2xl border border-border bg-card overflow-hidden hover:border-brand-cobalt/20 transition-all hover-lift group cursor-pointer">
                <div className="p-8 sm:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-cobalt bg-brand-cobalt/[0.06] px-2.5 py-1 rounded-full">{post.category}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3 group-hover:text-brand-cobalt transition-colors">{post.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-cobalt group-hover:text-brand-cobalt-bright transition-colors">
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            ))}

            {/* Post grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {BLOG_POSTS.filter((p) => !p.featured).map((post) => (
                <div key={post.title} className="rounded-2xl border border-border bg-card p-6 hover:border-brand-cobalt/20 transition-all hover-lift group cursor-pointer flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-brand-saffron bg-brand-saffron/[0.06] px-2 py-0.5 rounded-full">
                      <Tag className="w-2.5 h-2.5" />
                      {post.category}
                    </span>
                    <span className="text-[11px] text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground mb-2 group-hover:text-brand-cobalt transition-colors leading-snug">{post.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <span className="text-xs font-semibold text-brand-cobalt group-hover:text-brand-cobalt-bright transition-colors flex items-center gap-1">
                      Read
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
