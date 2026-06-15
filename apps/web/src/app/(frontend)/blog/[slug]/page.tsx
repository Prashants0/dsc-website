import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import config from "@payload-config";
import { RichText } from "@payloadcms/richtext-lexical/react";
import {
  SiteHeader,
  SiteFooter,
  WhatsAppButton,
} from "@/components/marketing";
import { ArrowLeft, Calendar, ChevronRight } from "lucide-react";

export const dynamic = "force-dynamic";

function formatDate(value?: string | null): string {
  if (!value) return "";
  try {
    return new Date(value).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

async function getPost(slug: string): Promise<any | null> {
  try {
    const payload = await getPayload({ config });
    const res = await payload.find({
      collection: "posts",
      where: {
        and: [{ slug: { equals: slug } }, { status: { equals: "published" } }],
      },
      depth: 2,
      limit: 1,
    });
    return res.docs?.[0] ?? null;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt || undefined,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const cover =
    post.coverImage && typeof post.coverImage === "object"
      ? post.coverImage.url
      : null;
  const authorName =
    post.author && typeof post.author === "object"
      ? post.author.name || post.author.email
      : null;

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* Breadcrumb */}
        <nav className="bg-muted/30 border-b border-border" aria-label="Breadcrumb">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3">
            <ol className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li>
                <Link href="/blog" className="hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li className="text-foreground font-medium truncate max-w-[200px]" aria-current="page">
                {post.title}
              </li>
            </ol>
          </div>
        </nav>

        <article className="py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-brand-cobalt transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all posts
            </Link>

            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-5 leading-tight text-balance">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
              {post.publishedAt && (
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.publishedAt)}
                </span>
              )}
              {authorName && <span>By {authorName}</span>}
            </div>

            {cover && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={cover}
                alt={post.coverImage?.alt || post.title}
                className="w-full rounded-2xl border border-border mb-10"
              />
            )}

            {post.content ? (
              <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-2xl [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-display [&_h3]:font-bold [&_h3]:text-xl [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-5 [&_p]:text-muted-foreground [&_a]:text-brand-cobalt [&_a]:underline [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-5 [&_li]:mb-2 [&_li]:text-muted-foreground">
                <RichText data={post.content} />
              </div>
            ) : (
              <p className="text-muted-foreground">{post.excerpt}</p>
            )}
          </div>
        </article>
      </main>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
