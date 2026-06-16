"use client";

import {
  SiteHeader,
  SiteFooter,
  WhatsAppButton,
} from "@/components/marketing";
import {
  Shield,
  Award,
  Users,
  Target,
  Heart,
  Zap,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  BadgeCheck,
  Building2,
  Handshake,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MILESTONES = [
  { year: "2020", title: "Founded", description: "SignSecure started as a single-CA reseller with a vision to simplify digital signatures for Indian businesses." },
  { year: "2021", title: "Multi-CA Partnerships", description: "Expanded to partner with 3 major Certifying Authorities, offering customers more choice and competitive pricing." },
  { year: "2022", title: "Pan-India Reach", description: "Established doorstep delivery network across all states. Launched free online WhatsApp support and added USB token sales." },
  { year: "2023", title: "Multi-CA Partners", description: "Became one of the few resellers authorized by multiple CAs including eMudhra, Capricorn, Pantasign & SignX." },
  { year: "2024", title: "Token Brand Expansion", description: "Added ePass 2003, Proxkey, MToken, TrustKey & SafeNet 5100 to our USB token portfolio. Launched partner dashboard." },
  { year: "2025", title: "Growing Strong", description: "Serving thousands of businesses and individuals across India with the fastest DSC delivery and widest CA selection in the market." },
];

const VALUES = [
  { icon: Shield, title: "Trust & Security", description: "Every certificate we issue is backed by government-licensed CAs. Your digital identity is safe with us." },
  { icon: Heart, title: "Customer First", description: "We exist to make DSC procurement painless. Free online support, transparent pricing, and genuine care." },
  { icon: Zap, title: "Speed & Efficiency", description: "30-minute average delivery time. Because your business can't wait for paperwork and bureaucracy." },
  { icon: Target, title: "Transparency", description: "No hidden fees, no surprise charges. What you see on our website is exactly what you pay." },
  { icon: Handshake, title: "Partnership Approach", description: "We don't just sell certificates. We help you understand which DSC is right for your specific needs." },
  { icon: TrendingUp, title: "Continuous Innovation", description: "Constantly improving our platform, processes, and partnerships to serve you better every day." },
];

const TEAM_STATS = [
  { value: "4", label: "CA Partners" },
  { value: "5+", label: "Token Brands" },
  { value: "1000+", label: "Happy Customers" },
  { value: "30 min", label: "Avg. Delivery" },
  { value: "Free", label: "Support" },
  { value: "98%", label: "Satisfaction" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
          <div className="absolute inset-0 grain-overlay" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] mb-6">
                <Building2 className="w-3.5 h-3.5 text-brand-cobalt-bright" />
                <span className="text-xs font-semibold text-white/80 tracking-wide uppercase">About SignSecure</span>
              </div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 text-balance leading-tight">
                Making Digital Signatures{" "}
                <span className="text-gradient-cobalt">Simple for India</span>
              </h1>
              <p className="text-lg text-white/55 leading-relaxed max-w-2xl mx-auto">
                India's trusted multi-CA Digital Signature reseller, partnering
                with 4 government-licensed Certifying Authorities and selling
                all major USB token brands.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="py-10 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {TEAM_STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display font-bold text-2xl text-brand-cobalt mb-0.5">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cobalt/[0.06] border border-brand-cobalt/12 mb-5">
                  <span className="text-xs font-semibold text-brand-cobalt tracking-wide uppercase">Our Story</span>
                </div>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-6">Born From a Simple Frustration</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Getting a Digital Signature Certificate in India used to be a painful process &mdash; confusing pricing, slow delivery, limited choices, and poor support. We experienced this first-hand as business owners who needed DSCs for our own companies.</p>
                  <p>That's why we created <strong className="text-foreground">SignSecure</strong> &mdash; a platform that partners with <strong className="text-foreground">multiple</strong> government-licensed Certifying Authorities and sells <strong className="text-foreground">all major USB token brands</strong> to give you the widest choice, best prices, and fastest delivery.</p>
                  <p>As an authorized Registration Authority and reseller for eMudhra, Capricorn, Pantasign, and SignX, plus authorized reseller of ePass 2003, Proxkey, MToken, TrustKey, and SafeNet 5100 tokens, we can offer what no single CA or token vendor can.</p>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                <h3 className="font-display font-bold text-lg text-foreground mb-6">Our Journey</h3>
                <div className="space-y-6">
                  {MILESTONES.map((milestone, index) => (
                    <div key={milestone.year} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-brand-cobalt/[0.08] border-2 border-brand-cobalt/25 flex items-center justify-center shrink-0">
                          <span className="text-[10px] font-bold text-brand-cobalt">{milestone.year}</span>
                        </div>
                        {index < MILESTONES.length - 1 && <div className="w-px h-full bg-border mt-1" />}
                      </div>
                      <div className="pb-6">
                        <h4 className="font-display font-bold text-sm text-foreground mb-0.5">{milestone.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">What We Stand For</h2>
              <p className="text-muted-foreground text-base leading-relaxed">Our values guide every interaction, every certificate we issue, and every customer we serve.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {VALUES.map(({ icon: Icon, title, description }) => (
                <div key={title} className="group p-6 rounded-2xl border border-border bg-card hover:border-brand-cobalt/25 transition-all duration-300 hover-lift">
                  <div className="w-11 h-11 rounded-xl bg-brand-cobalt/[0.06] group-hover:bg-brand-cobalt/[0.12] flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-5 h-5 text-brand-cobalt" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground mb-1.5">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Multi-CA Reseller */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-saffron/[0.08] border border-brand-saffron/15 mb-5">
                  <span className="text-xs font-semibold text-brand-saffron tracking-wide uppercase">Our Advantage</span>
                </div>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-6">Why a Multi-CA Reseller Is Better For You</h2>
                <div className="space-y-4">
                  {[
                    { title: "Best Price Guarantee", desc: "We compare rates across 4 CAs to always give you the most competitive price." },
                    { title: "Never Stuck with Downtime", desc: "If one CA's portal is down, we seamlessly process through another CA." },
                    { title: "Expert Recommendations", desc: "Different CAs have different strengths. We match you with the right one." },
                    { title: "All Token Brands in One Place", desc: "ePass, Proxkey, MToken, TrustKey, SafeNet — buy any token brand from us." },
                    { title: "Bulk & Enterprise Deals", desc: "Mix and match CAs and tokens for bulk orders to optimize cost and compatibility." },
                  ].map(({ title, desc }) => (
                    <div key={title} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-cobalt shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-display font-bold text-sm text-foreground mb-0.5">{title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:order-1">
                <div className="rounded-2xl border border-border bg-card overflow-hidden">
                  <div className="p-6 bg-brand-navy text-white">
                    <h3 className="font-display font-bold text-lg mb-1">Our CA Partners</h3>
                    <p className="text-sm text-white/45">Licensed by CCA, Government of India</p>
                  </div>
                  <div className="p-6 space-y-4">
                    {[
                      { name: "eMudhra", desc: "India's largest CA. 100M+ certs issued.", logo: "/assets/partner-emudhra.png" },
                      { name: "Capricorn", desc: "Competitive pricing. Enterprise trusted.", logo: "/assets/partner-capricorn.png" },
                      { name: "Pantasign", desc: "Flexible, customizable DSC options.", logo: "/assets/partner-pantasign-white.svg" },
                      { name: "SignX", desc: "Simple, reliable signing solutions.", logo: "/assets/partner-signx.png" },
                    ].map((partner) => (
                      <div key={partner.name} className="flex items-center gap-4 p-3 rounded-xl border border-border hover:border-brand-cobalt/20 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                          <img src={partner.logo} alt={partner.name} className="h-5 w-auto" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-display font-bold text-sm text-foreground">{partner.name}</h4>
                          <p className="text-xs text-muted-foreground truncate">{partner.desc}</p>
                        </div>
                        <BadgeCheck className="w-4 h-4 text-brand-emerald shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 sm:py-28 bg-brand-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
          <div className="absolute inset-0 grain-overlay" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">Ready to Get Your Digital Signature?</h2>
                <p className="text-base text-white/45 leading-relaxed mb-8">Whether you need a single DSC or hundreds, plus USB tokens, we're here to help with the best prices and fastest delivery in India.</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/products">
                    <Button size="lg" className="rounded-xl bg-brand-cobalt text-white font-semibold hover:bg-brand-cobalt-bright h-12 px-8 group shimmer">
                      <span className="flex items-center gap-2">Browse Products<ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></span>
                    </Button>
                  </Link>
                  <Link href="/pricing">
                    <Button size="lg" variant="outline" className="rounded-xl bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white dark:bg-transparent dark:border-white/20 dark:hover:bg-white/10 h-12 px-8">View Pricing</Button>
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Phone, label: "Call Us", value: "+91 93244 62329", href: "tel:+919324462329" },
                  { icon: Mail, label: "Email Us", value: "dsc@signsecure.in", href: "mailto:dsc@signsecure.in" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                    <Icon className="w-5 h-5 text-brand-cobalt-bright shrink-0" />
                    <div>
                      <div className="text-xs text-white/35 mb-0.5">{label}</div>
                      <a href={href} className="text-sm font-semibold text-white hover:text-brand-cobalt-bright transition-colors">{value}</a>
                    </div>
                  </div>
                ))}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                  <MapPin className="w-5 h-5 text-brand-cobalt-bright shrink-0" />
                  <div>
                    <div className="text-xs text-white/35 mb-0.5">Our Office</div>
                    <span className="text-sm font-semibold text-white">Mumbai, Maharashtra, India</span>
                  </div>
                </div>
                <a href="https://wa.me/917990740623" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20">
                  <svg className="w-5 h-5 text-[#25D366] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <div>
                    <div className="text-xs text-[#25D366]/60 mb-0.5">WhatsApp (Fastest)</div>
                    <span className="text-sm font-semibold text-[#25D366]">+91 79907 40623</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
