import type { Metadata } from "next";
import Link from "next/link";
import { getPayload } from "payload";
import config from "@payload-config";
import {
  SiteHeader,
  SiteFooter,
  WhatsAppButton,
} from "@/components/marketing";
import { ArrowRight, Calendar, Newspaper } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog — DSC Guides, News & Updates",
  description:
    "Guides, news and updates on Digital Signature Certificates — GST, MCA, DGFT, e-Tendering, EPFO and more, from the SignSecure team.",
};

function formatDate(value?: string | null): string {
  if (!value) return "";
  try {
    return new Date(value).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

async function getPosts(): Promise<any[]> {
  try {
    const payload = await getPayload({ config });
    const res = await payload.find({
      collection: "posts",
      where: { status: { equals: "published" } },
      sort: "-publishedAt",
      depth: 1,
      limit: 50,
    });
    return res.docs ?? [];
  } catch {
    // DB not reachable (e.g. at build time) — render the empty state.
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
          <div className="absolute inset-0 grain-overlay" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] mb-6">
              <Newspaper className="w-3.5 h-3.5 text-brand-cobalt-bright" />
              <span className="text-xs font-semibold text-white/80 tracking-wide uppercase">
                SignSecure Blog
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 text-balance leading-tight">
              DSC Guides, News &amp;{" "}
              <span className="text-gradient-cobalt">Updates</span>
            </h1>
            <p className="text-lg text-white/55 leading-relaxed max-w-2xl mx-auto">
              Practical guides and the latest updates on Digital Signature
              Certificates across every Indian government portal.
            </p>
          </div>
        </section>

        {/* Posts */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {posts.length === 0 ? (
              <div className="max-w-xl mx-auto text-center rounded-2xl border border-border bg-card p-10">
                <Newspaper className="w-10 h-10 text-brand-cobalt/40 mx-auto mb-4" />
                <h2 className="font-display font-bold text-xl text-foreground mb-2">
                  No posts published yet
                </h2>
                <p className="text-sm text-muted-foreground">
                  Articles created in the{" "}
                  <Link href="/admin" className="text-brand-cobalt font-medium hover:underline">
                    CMS admin
                  </Link>{" "}
                  and marked “Published” will appear here.
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => {
                  const cover =
                    post.coverImage && typeof post.coverImage === "object"
                      ? post.coverImage.url
                      : null;
                  return (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="group rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover-lift hover:border-brand-cobalt/25 flex flex-col"
                    >
                      <div className="aspect-[16/9] bg-muted overflow-hidden">
                        {cover ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={cover}
                            alt={post.coverImage?.alt || post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-cobalt/[0.08] to-brand-saffron/[0.05]">
                            <Newspaper className="w-10 h-10 text-brand-cobalt/30" />
                          </div>
                        )}
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        {post.publishedAt && (
                          <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground mb-2">
                            <Calendar className="w-3 h-3" />
                            {formatDate(post.publishedAt)}
                          </div>
                        )}
                        <h2 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-brand-cobalt transition-colors">
                          {post.title}
                        </h2>
                        {post.excerpt && (
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                        )}
                        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cobalt">
                          Read article
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
