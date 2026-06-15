import { Shield, Award, Globe, Lock, Clock, Zap, BadgeCheck } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: Shield,
    title: "CCA Licensed",
    description:
      "Partner of government-licensed Certifying Authorities under Controller of Certifying Authorities, India.",
  },
  {
    icon: Award,
    title: "CCA Approved Process",
    description:
      "Every certificate is issued through CCA-licensed Certifying Authorities following Government of India security standards.",
  },
  {
    icon: Lock,
    title: "2048-bit Encryption",
    description:
      "Industry-standard RSA encryption ensuring your digital identity is tamper-proof and secure.",
  },
  {
    icon: Globe,
    title: "All Portals Supported",
    description:
      "Works seamlessly on GEM, MCA, GST, IREPS, ICEGATE, and every government e-filing platform.",
  },
  {
    icon: Clock,
    title: "30-Minute Delivery",
    description:
      "From application to download in under 30 minutes with our streamlined paperless process.",
  },
  {
    icon: Zap,
    title: "Unlimited Re-issuance",
    description:
      "Lost your token or need a fresh certificate? Free re-issuance within your validity period.",
  },
];

const CA_PARTNERS = [
  { name: "eMudhra", src: "/assets/partner-emudhra.png", tagline: "India's Largest CA" },
  { name: "Capricorn", src: "/assets/partner-capricorn.png", tagline: "Enterprise Trusted" },
  { name: "Pantasign", src: "/assets/partner-pantasign-white.svg", tagline: "Flexible Solutions" },
  { name: "SignX", src: "/assets/partner-signx.svg", tagline: "Fast & Reliable" },
];

const TOKEN_BRANDS = [
  { name: "ePass 2003", type: "Budget", src: "/assets/token-epass-logo.png" },
  { name: "Proxkey", type: "Mid-range", src: "/assets/token-proxkey-logo.svg" },
  { name: "MToken", type: "Budget", src: "/assets/token-mtoken.svg" },
  { name: "TrustKey", type: "Mid-range", src: "/assets/token-trustkey.svg" },
];

export function TrustSection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute inset-0 hero-gradient opacity-[0.02]" />
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cobalt/[0.06] border border-brand-cobalt/12 mb-5">
            <Shield className="w-3.5 h-3.5 text-brand-cobalt" />
            <span className="text-xs font-semibold text-brand-cobalt tracking-wide uppercase">
              Security & Trust
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4 text-balance">
            Security is at the Heart of Everything We Do
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Government-approved processes, enterprise-grade encryption, and
            partnerships with India's most trusted Certifying Authorities.
          </p>
        </div>

        {/* Trust grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TRUST_ITEMS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group p-6 rounded-2xl border border-border bg-card hover:border-brand-cobalt/25 transition-all duration-300 hover-lift"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-cobalt/[0.06] group-hover:bg-brand-cobalt/[0.12] flex items-center justify-center mb-4 transition-colors">
                <Icon
                  className="w-5 h-5 text-brand-cobalt"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-display font-bold text-base text-foreground mb-1.5">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* ── CA Partner Logos ─── */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-semibold mb-1">
              Authorized Partner of Licensed Certifying Authorities
            </p>
            <p className="text-[11px] text-muted-foreground/60">
              CCA Licensed &middot; Government of India Approved
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {CA_PARTNERS.map((ca) => (
              <a
                key={ca.name}
                href={`/partners#${ca.name.toLowerCase()}`}
                className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-border/60 bg-card hover:border-brand-cobalt/25 hover:shadow-lg hover:shadow-brand-cobalt/5 transition-all duration-300"
              >
                <div className="h-10 flex items-center justify-center">
                  <img
                    src={ca.src}
                    alt={ca.name}
                    className="h-8 w-auto object-contain opacity-50 group-hover:opacity-90 transition-opacity"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-foreground/70 group-hover:text-foreground transition-colors">
                    {ca.name}
                  </p>
                  <p className="text-[10px] text-muted-foreground/60">
                    {ca.tagline}
                  </p>
                </div>
                <BadgeCheck className="w-4 h-4 text-brand-emerald/40 group-hover:text-brand-emerald transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* ── USB Token Brands ─── */}
        <div className="mt-16">
          <div className="text-center mb-6">
            <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-semibold">
              Authorized USB Token Reseller
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {TOKEN_BRANDS.map((token) => (
              <div
                key={token.name}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border/50 bg-card hover:border-brand-cobalt/20 transition-all"
              >
                <img
                  src={token.src}
                  alt={token.name}
                  className="h-7 w-auto object-contain"
                  loading="lazy"
                />
                <span className="text-[9px] text-muted-foreground/50 font-medium uppercase">
                  {token.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
