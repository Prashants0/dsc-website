"use client";

import {
  SiteHeader,
  SiteFooter,
  WhatsAppButton,
} from "@/components/marketing";
import {
  Shield,
  Award,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Globe,
  Lock,
  BadgeCheck,
  FileCheck,
  Users,
  Handshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AUTHORITIES = [
  {
    name: "eMudhra",
    logo: "/assets/partner-emudhra.png",
    tagline: "India's Largest Certifying Authority",
    description:
      "eMudhra Limited is a global trust services provider and one of India's largest Certifying Authorities. Licensed by CCA since 2008, they have issued over 100 million+ certificates across 70+ countries. eMudhra is listed on BSE & NSE and holds ISO 27001, WebTrust, and CMMI Level 5 certifications.",
    stats: [
      { label: "Certificates Issued", value: "100M+" },
      { label: "Licensed Since", value: "2008" },
      { label: "Countries Served", value: "70+" },
    ],
    certifications: ["ISO 27001", "ISO 27018", "WebTrust Accredited", "CMMI Level 5", "HIPAA Compliant", "GDPR Compliant"],
    products: ["Class 3 Individual DSC", "Class 3 Organization DSC", "Class 3 Combo (Sign + Encrypt)", "DGFT DSC", "Foreign National DSC", "Document Signer Certificates", "SSL Certificates", "Bulk DSC"],
    website: "https://emudhradigital.com",
    color: "brand-cobalt",
  },
  {
    name: "Capricorn",
    logo: "/assets/partner-capricorn.png",
    tagline: "Trusted CA for Enterprise Solutions",
    description:
      "Capricorn Identity Services Pvt Ltd is a government-licensed Certifying Authority under CCA, India. Known for competitive pricing and fast processing, Capricorn serves thousands of businesses across India with reliable digital signature solutions for all government portals.",
    stats: [
      { label: "Active Users", value: "50K+" },
      { label: "Uptime", value: "99.9%" },
      { label: "Support", value: "Online" },
    ],
    certifications: ["CCA Licensed", "ISO 27001", "Government Approved"],
    products: ["Class 3 Individual DSC", "Class 3 Organization DSC", "Class 3 Combo (Sign + Encrypt)", "Class 3 Encryption Only", "DGFT DSC"],
    website: "#",
    color: "brand-saffron",
  },
  {
    name: "Pantasign",
    logo: "/assets/partner-pantasign.png",
    tagline: "Flexible & Customizable DSC Solutions",
    description:
      "Pantasign is a well-established Certifying Authority in India, known for flexible and customizable digital signature solutions. Ideal for businesses needing scalable DSC solutions with quick turnaround and excellent customer support.",
    stats: [
      { label: "Business Clients", value: "25K+" },
      { label: "Avg. Issuance", value: "45 min" },
      { label: "Satisfaction", value: "98%" },
    ],
    certifications: ["CCA Licensed", "ISO 27001", "Government Approved"],
    products: ["Class 3 Individual DSC", "Class 3 Organization DSC", "Encryption Certificates", "Combo DSC"],
    website: "#",
    color: "brand-saffron",
  },
  {
    name: "SignX",
    logo: "/assets/partner-signx.png",
    tagline: "Fast & Reliable Digital Trust",
    description:
      "SignX is a CCA-licensed Certifying Authority offering fast, reliable Digital Signature Certificates for individuals and organizations across India. With quick paperless eKYC issuance and competitive pricing, SignX is a dependable choice for DSCs accepted on every government portal.",
    stats: [
      { label: "Processing Time", value: "< 1 hr" },
      { label: "Government Portals", value: "50+" },
      { label: "Pan India", value: "Yes" },
    ],
    certifications: ["CCA Licensed", "Government Approved", "Paperless eKYC"],
    products: ["Class 3 Individual DSC", "Class 3 Organization DSC", "Combo Certificates", "DGFT DSC", "Document Signer Certificate"],
    website: "#",
    color: "brand-saffron",
  },
];

export default function PartnersPage() {
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-saffron/[0.12] border border-brand-saffron/20 mb-6">
                <Handshake className="w-3.5 h-3.5 text-brand-saffron" />
                <span className="text-xs font-semibold text-brand-saffron tracking-wide uppercase">
                  Authorized Multi-CA Reseller
                </span>
              </div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 text-balance leading-tight">
                Backed by India's{" "}
                <span className="text-gradient-saffron">Top Certifying Authorities</span>
              </h1>
              <p className="text-lg text-white/55 leading-relaxed mb-8 max-w-2xl mx-auto">
                We are an authorized Registration Authority and reseller for
                multiple government-licensed Certifying Authorities. This means
                you get the widest choice, best prices, and fastest processing.
              </p>

              {/* CA Logo Strip */}
              <div className="flex items-center justify-center gap-5 sm:gap-8 flex-wrap mt-10">
                {AUTHORITIES.map((ca) => (
                  <div
                    key={ca.name}
                    className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.10] transition-colors"
                  >
                    <img
                      src={ca.logo}
                      alt={ca.name}
                      className="h-6 w-auto brightness-0 invert opacity-70"
                    />
                    <span className="text-sm font-semibold text-white/75 hidden sm:inline">
                      {ca.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Multiple CAs */}
        <section className="py-16 bg-muted/30 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: "More Choice", desc: "Pick the best CA for your specific needs and budget. Not locked to one provider." },
                { icon: Award, title: "Best Prices", desc: "We negotiate bulk rates with multiple CAs and pass the savings directly to you." },
                { icon: Globe, title: "Zero Downtime", desc: "If one CA has technical issues, we seamlessly switch to another for uninterrupted service." },
                { icon: Lock, title: "Expert Guidance", desc: "Our team knows every CA's strengths. We recommend the best fit for your use case." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 p-5 rounded-xl bg-card border border-border hover-lift">
                  <div className="w-10 h-10 rounded-lg bg-brand-cobalt/[0.06] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-brand-cobalt" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-foreground mb-1">{title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Authority Detail Cards */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Our Certifying Authority Partners
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Each of our CA partners is licensed by the Controller of
                Certifying Authorities (CCA), Ministry of Electronics &
                Information Technology, Government of India.
              </p>
            </div>

            <div className="space-y-10">
              {AUTHORITIES.map((ca) => (
                <div
                  key={ca.name}
                  id={ca.name.toLowerCase()}
                  className="rounded-2xl border border-border bg-card overflow-hidden hover:border-brand-cobalt/20 transition-all duration-300"
                >
                  <div className={`h-1 bg-${ca.color}`} />

                  <div className="p-6 sm:p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Main Info */}
                      <div className="lg:col-span-2">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="h-14 px-4 rounded-xl bg-white border border-border flex items-center justify-center shrink-0">
                            <img src={ca.logo} alt={ca.name} className="h-8 w-auto max-w-[130px] object-contain" />
                          </div>
                          <div>
                            <h3 className="font-display font-bold text-xl text-foreground">{ca.name}</h3>
                            <p className="text-sm text-brand-cobalt font-medium">{ca.tagline}</p>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">{ca.description}</p>

                        <div className="flex flex-wrap gap-4 mb-6">
                          {ca.stats.map((stat) => (
                            <div key={stat.label} className="px-4 py-2.5 rounded-lg bg-muted/50 border border-border/50">
                              <div className="font-display font-bold text-lg text-foreground">{stat.value}</div>
                              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {ca.certifications.map((cert) => (
                            <span key={cert} className="inline-flex items-center gap-1 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-brand-emerald/[0.06] text-brand-emerald border border-brand-emerald/15">
                              <CheckCircle2 className="w-2.5 h-2.5" />
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Products Available */}
                      <div className="border-t lg:border-t-0 lg:border-l border-border pt-6 lg:pt-0 lg:pl-8">
                        <h4 className="font-display font-bold text-xs text-muted-foreground uppercase tracking-wider mb-4">Available Products</h4>
                        <ul className="space-y-2.5">
                          {ca.products.map((product) => (
                            <li key={product} className="flex items-center gap-2 text-sm text-foreground/80">
                              <FileCheck className="w-3.5 h-3.5 text-brand-cobalt shrink-0" />
                              {product}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-6 space-y-2">
                          <Link href="/products">
                            <Button className="w-full rounded-xl bg-brand-cobalt text-white font-semibold hover:bg-brand-cobalt-bright h-9 text-xs shimmer">
                              <span className="flex items-center gap-1.5">
                                Buy from {ca.name}
                                <ArrowRight className="w-3.5 h-3.5" />
                              </span>
                            </Button>
                          </Link>
                          {ca.website !== "#" && (
                            <a href={ca.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 text-[10px] text-muted-foreground hover:text-foreground transition-colors py-1">
                              Visit {ca.name} Official Site
                              <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Partner CTA */}
        <section id="partner-program" className="py-20 sm:py-28 bg-brand-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
          <div className="absolute inset-0 grain-overlay" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-saffron/[0.12] border border-brand-saffron/20 mb-6">
              <Users className="w-3.5 h-3.5 text-brand-saffron" />
              <span className="text-xs font-semibold text-brand-saffron tracking-wide uppercase">Partner Program</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">Become a DSC Reseller Partner</h2>
            <p className="text-base text-white/45 leading-relaxed mb-8 max-w-xl mx-auto">
              Join our partner program and earn by reselling Digital Signature Certificates. Get access to wholesale rates, a partner dashboard, and dedicated support.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/become-partner">
                <Button size="lg" className="rounded-xl bg-brand-saffron text-brand-navy-deep font-bold hover:bg-brand-saffron-bright h-12 px-8 shimmer">
                  Join Partner Program
                </Button>
              </a>
              <a href="tel:+919324462329">
                <Button size="lg" variant="outline" className="rounded-xl bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white dark:bg-transparent dark:border-white/20 dark:hover:bg-white/10 h-12 px-8">
                  Call Us to Learn More
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
