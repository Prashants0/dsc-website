import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ExternalLink,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Shield,
} from "lucide-react";

/* ─── CA partner logos ─── */
const CA_PARTNERS = [
  { name: "eMudhra", src: "/assets/partner-emudhra.png" },
  { name: "Capricorn", src: "/assets/partner-capricorn.png" },
  { name: "Pantasign", src: "/assets/partner-pantasign-white.svg" },
  { name: "SignX", src: "/assets/partner-signx.svg" },
] as const;

/* ─── USB token brands ─── */
const TOKEN_BRANDS = [
  { name: "ePass 2003", src: "/assets/token-epass-logo.png" },
  { name: "Proxkey", src: "/assets/token-proxkey-logo.svg" },
  { name: "MToken", src: "/assets/token-mtoken.svg" },
  { name: "TrustKey", src: "/assets/token-trustkey.svg" },
] as const;

/* ─── Government portals ─── */
const GOV_PORTALS = [
  "GST",
  "MCA",
  "Income Tax",
  "GEM",
  "ICEGATE",
  "DGFT",
  "EPFO",
  "IREPS",
] as const;

/* ─── Footer link columns ─── */
const FOOTER_LINKS = {
  "Buy DSC": [
    { label: "Class 3 DSC", href: "/products/class-3-individual-dsc" },
    { label: "DGFT DSC", href: "/products/dgft-dsc" },
    { label: "Foreign National DSC", href: "/products/foreign-national-dsc" },
    { label: "Document Signer Certificate", href: "/products/document-signer-certificate" },
    { label: "ePass 2003 Token", href: "/products/epass-2003-usb-token" },
    { label: "All USB Tokens", href: "/products#usb-tokens" },
    { label: "All Products", href: "/products" },
    { label: "View Pricing", href: "/pricing" },
  ],
  "Our CAs": [
    { label: "eMudhra", href: "/partners#emudhra" },
    { label: "Capricorn", href: "/partners#capricorn" },
    { label: "Pantasign", href: "/partners#pantasign" },
    { label: "SignX", href: "/partners#signx" },
    { label: "All CAs", href: "/partners" },
    { label: "Become Our Partner", href: "/become-partner" },
  ],
  "Quick Links": [
    { label: "How It Works", href: "/#how-it-works" },
    { label: "FAQs", href: "/#faq" },
    { label: "Downloads", href: "/downloads" },
    { label: "Blog", href: "/blog" },
    { label: "Track Order", href: "/dashboard" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ],
  Legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Refund Policy", href: "#" },
    { label: "Grievance Policy", href: "#" },
    { label: "Disclaimer", href: "#" },
  ],
} as const;

/* ─── Social links ─── */
const SOCIALS = [
  { label: "Twitter", href: "#", icon: Twitter },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "YouTube", href: "#", icon: Youtube },
] as const;

export function SiteFooter() {
  return (
    <footer>
      {/* ── 1. CA Partners strip ── */}
      <div className="bg-brand-navy-light border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <span className="text-[11px] font-medium uppercase tracking-wider text-white/40 whitespace-nowrap">
              Authorized Reseller of
            </span>
            <div className="flex items-center gap-6 sm:gap-8 flex-wrap justify-center">
              {CA_PARTNERS.map((partner) => (
                <img
                  key={partner.name}
                  src={partner.src}
                  alt={partner.name}
                  className="h-5 sm:h-6 w-auto brightness-0 invert opacity-50 hover:opacity-80 transition-opacity"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. Main footer ── */}
      <div className="bg-brand-navy-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">
            {/* Brand column — spans 2 cols */}
            <div className="col-span-2">
              <a href="/" className="flex items-center gap-2.5 mb-5">
                <img
                  src="/assets/logo-icon.svg"
                  alt="SignSecure"
                  className="h-8 w-auto brightness-0 invert"
                />
                <div className="flex flex-col -space-y-0.5">
                  <span className="font-display font-bold text-base text-white">
                    Sign
                    <span className="text-brand-cobalt-bright">Secure</span>
                  </span>
                  <span className="text-[9px] text-white/40 tracking-widest uppercase">
                    Digital Signatures
                  </span>
                </div>
              </a>

              <p className="text-sm text-white/45 leading-relaxed mb-6 max-w-xs">
                India's trusted authorized multi-CA reseller for
                government-approved Digital Signature Certificates. Licensed
                under CCA, Govt. of India.
              </p>

              {/* Contact info */}
              <div className="space-y-2.5 mb-6">
                <a
                  href="tel:+919324462329"
                  className="flex items-center gap-2.5 text-sm text-white/60 hover:text-brand-cobalt-bright transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  +91 93244 62329
                </a>
                <a
                  href="https://wa.me/917990740623"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-white/60 hover:text-brand-cobalt-bright transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                  +91 79907 40623 (WhatsApp)
                </a>
                <a
                  href="mailto:dsc@signsecure.in"
                  className="flex items-center gap-2.5 text-sm text-white/60 hover:text-brand-cobalt-bright transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  dsc@signsecure.in
                </a>
                <div className="flex items-start gap-2.5 text-sm text-white/60">
                  <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span>Mumbai, Maharashtra, India</span>
                </div>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-3">
                {SOCIALS.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.05] text-white/40 hover:bg-brand-cobalt/20 hover:text-brand-cobalt-bright transition-all"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-display font-semibold text-[13px] text-white mb-4 tracking-wide">
                  {title}
                </h4>
                <ul className="space-y-2">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="text-[12.5px] text-white/45 hover:text-brand-cobalt-bright transition-colors leading-relaxed"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 3. USB Token Brands strip ── */}
      <div className="bg-brand-navy-deep border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 justify-center">
            <span className="text-[10px] font-medium uppercase tracking-wider text-white/30 whitespace-nowrap">
              Authorized Token Reseller:
            </span>
            <div className="flex items-center gap-5 sm:gap-6 flex-wrap justify-center">
              {TOKEN_BRANDS.map((brand) => (
                <img
                  key={brand.name}
                  src={brand.src}
                  alt={brand.name}
                  className="h-5 sm:h-6 w-auto brightness-0 invert opacity-50 hover:opacity-80 transition-opacity"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── 4. Bottom bar ── */}
      <div className="bg-brand-navy-deep border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30 text-center md:text-left">
              &copy; {new Date().getFullYear()} SignSecure. All rights reserved.
              A Licensed CA Partner under CCA, Government of India.
            </p>

            <div className="flex items-center gap-4 flex-wrap justify-center">
              <a
                href="https://cca.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[11px] text-white/30 hover:text-white/50 transition-colors"
              >
                <Shield className="w-3 h-3" />
                CCA India
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
              <span className="text-white/10">|</span>
              <span className="text-[11px] text-white/30">
                GSTIN: 27XXXXX1234X1ZX
              </span>
              <span className="text-white/10">|</span>
              <span className="text-[11px] text-white/35 flex items-center gap-1.5">
                Made in
                <span className="inline-flex items-center gap-0.5">
                  <span
                    className="inline-block w-4 h-3 rounded-[2px] overflow-hidden relative"
                    aria-label="India flag"
                  >
                    <span className="absolute inset-x-0 top-0 h-1 bg-[#FF9933]" />
                    <span className="absolute inset-x-0 top-1 h-1 bg-white" />
                    <span className="absolute inset-x-0 top-2 h-1 bg-[#138808]" />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="w-[3px] h-[3px] rounded-full border border-[#000080]" />
                    </span>
                  </span>
                  <span className="font-medium text-white/45">India</span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 5. Government portals strip ── */}
      <div className="bg-brand-navy-deep border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5">
          <p className="text-center text-[10px] text-white/25 tracking-wide">
            <span className="mr-1.5">Accepted on:</span>
            {GOV_PORTALS.map((portal, i) => (
              <span key={portal}>
                <span className="font-medium">{portal}</span>
                {i < GOV_PORTALS.length - 1 && (
                  <span className="mx-1.5 text-white/15">|</span>
                )}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
