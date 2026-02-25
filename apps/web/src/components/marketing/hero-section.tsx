import { useState, useMemo } from "react";
import {
  Shield,
  ShieldCheck,
  Clock,
  Headphones,
  Lock,
  ArrowRight,
  CheckCircle2,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ------------------------------------------------------------------ */
/*  Static data                                                       */
/* ------------------------------------------------------------------ */

const CLASS_OPTIONS = [
  { value: "class3", label: "Class 3" },
  { value: "dgft", label: "DGFT" },
] as const;

const USER_OPTIONS = [
  { value: "individual", label: "Individual" },
  { value: "organization", label: "Organization" },
] as const;

const CERT_OPTIONS = [
  { value: "signature", label: "Signature" },
  { value: "encryption", label: "Encryption" },
  { value: "both", label: "Both" },
] as const;

const VALIDITY_OPTIONS = [
  { value: "1", label: "1 Year" },
  { value: "2", label: "2 Years" },
  { value: "3", label: "3 Years" },
] as const;

const PRICES: Record<string, number> = {
  "class3-individual-signature-1": 899,
  "class3-individual-signature-2": 1399,
  "class3-individual-signature-3": 1799,
  "class3-individual-encryption-1": 899,
  "class3-individual-encryption-2": 1399,
  "class3-individual-encryption-3": 1799,
  "class3-individual-both-1": 1599,
  "class3-individual-both-2": 2199,
  "class3-individual-both-3": 2799,
  "class3-organization-signature-1": 1099,
  "class3-organization-signature-2": 1599,
  "class3-organization-signature-3": 1999,
  "class3-organization-encryption-1": 1099,
  "class3-organization-encryption-2": 1599,
  "class3-organization-encryption-3": 1999,
  "class3-organization-both-1": 1899,
  "class3-organization-both-2": 2499,
  "class3-organization-both-3": 3099,
  "dgft-individual-signature-1": 2199,
  "dgft-individual-signature-2": 2799,
  "dgft-individual-signature-3": 3399,
  "dgft-organization-signature-1": 2499,
  "dgft-organization-signature-2": 2999,
  "dgft-organization-signature-3": 3599,
};

const TRUST_BADGES = [
  { icon: ShieldCheck, text: "CCA Licensed" },
  { icon: Clock, text: "DSC in 30 Min" },
  { icon: Headphones, text: "24/7 Support" },
  { icon: Lock, text: "2048-bit RSA" },
];

const CA_PARTNERS = [
  { name: "eMudhra", src: "/assets/partner-emudhra.png" },
  { name: "Capricorn", src: "/assets/partner-capricorn.png" },
  { name: "VSign", src: "/assets/partner-vsign-favicon.png" },
  { name: "Pantasign", src: "/assets/partner-pantasign-white.svg" },
  { name: "Safescrypt", src: "/assets/partner-safescrypt.svg" },
];

/* ------------------------------------------------------------------ */
/*  Pill selector                                                     */
/* ------------------------------------------------------------------ */

function SelectGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="block text-[11px] font-semibold text-white/50 mb-1.5 uppercase tracking-wider">
        {label}
      </label>
      <div className="flex gap-1.5">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`flex-1 px-3 py-2 text-sm font-semibold rounded-xl border transition-all duration-200 cursor-pointer ${
              value === opt.value
                ? "bg-brand-cobalt text-white border-brand-cobalt shadow-md shadow-brand-cobalt/20"
                : "bg-white/[0.04] text-white/60 border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.14] hover:text-white/80"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  HeroSection                                                       */
/* ------------------------------------------------------------------ */

export function HeroSection() {
  const [classType, setClassType] = useState("class3");
  const [userType, setUserType] = useState("individual");
  const [certType, setCertType] = useState("signature");
  const [validity, setValidity] = useState("1");

  const price = useMemo(() => {
    const key = `${classType}-${userType}-${certType}-${validity}`;
    return PRICES[key] || 899;
  }, [classType, userType, certType, validity]);

  const originalPrice = Math.round(price * 1.8);
  const discountPct = Math.round(
    ((originalPrice - price) / originalPrice) * 100,
  );

  return (
    <section className="relative overflow-hidden">
      {/* ── Background layers ─────────────────────────────────── */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.035]" />
      <div className="absolute inset-0 grain-overlay" />

      {/* Floating gradient orbs */}
      <div className="absolute top-16 -left-40 w-[480px] h-[480px] rounded-full bg-brand-cobalt/[0.07] blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 right-[-10%] w-[400px] h-[400px] rounded-full bg-brand-saffron/[0.05] blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-cobalt-glow/[0.03] blur-[160px] pointer-events-none" />

      {/* ── Content ───────────────────────────────────────────── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* ═══════════════ LEFT — Copy ═══════════════ */}
          <div className="max-w-xl">
            {/* Badge pill */}
            <div className="animate-fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-cobalt/[0.08] border border-brand-cobalt/20 mb-8">
              <Shield className="w-4 h-4 text-brand-cobalt-bright" />
              <span className="text-xs font-semibold text-brand-cobalt-bright tracking-wide">
                Govt. Licensed Multi-CA Partner &middot; ISO Certified
              </span>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-cobalt-bright opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-cobalt-bright" />
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold text-5xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-white mb-6 animate-fade-up delay-100">
              India&apos;s Most Trusted
              <br />
              <span className="text-gradient-cobalt">Digital Signature</span>
              <br />
              Certificate Partner
            </h1>

            {/* Subtitle */}
            <p className="text-lg leading-relaxed text-white/55 mb-8 animate-fade-up delay-200 max-w-lg">
              100% paperless. Government-approved Class&nbsp;3, DGFT &amp; Combo
              DSCs from eMudhra, Capricorn, VSign, Pantasign &amp; Safescrypt.
              Issued in <strong className="text-white/80">30&nbsp;minutes</strong>.
            </p>

            {/* Trust badges row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8 animate-fade-up delay-300">
              {TRUST_BADGES.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]"
                >
                  <Icon className="w-4 h-4 text-brand-cobalt-bright shrink-0" />
                  <span className="text-[11px] font-medium text-white/65 leading-tight">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 mb-8 animate-fade-up delay-400">
              {/* Stacked avatars */}
              <div className="flex -space-x-2.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-brand-navy-deep bg-gradient-to-br from-brand-cobalt/30 to-brand-cobalt/5 flex items-center justify-center ring-1 ring-white/[0.06]"
                  >
                    <span className="text-[11px] font-bold text-brand-cobalt-bright/80">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>
                ))}
              </div>

              <div>
                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-brand-saffron text-brand-saffron"
                    />
                  ))}
                  <span className="ml-1 text-xs font-semibold text-brand-saffron">
                    4.9
                  </span>
                </div>
                <p className="text-xs text-white/45">
                  Trusted by{" "}
                  <strong className="text-white/75">10,000+</strong> businesses
                </p>
              </div>
            </div>

            {/* CA Partner logos */}
            <div className="animate-fade-up delay-500">
              <p className="text-[10px] uppercase tracking-widest text-white/30 font-semibold mb-3">
                Authorised Partner of
              </p>
              <div className="flex items-center gap-5 flex-wrap">
                {CA_PARTNERS.map((partner) => (
                  <img
                    key={partner.name}
                    src={partner.src}
                    alt={partner.name}
                    className="h-6 sm:h-7 w-auto object-contain opacity-40 grayscale brightness-200 hover:opacity-70 hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ═══════════════ RIGHT — Pricing Calculator ═══════════════ */}
          <div className="animate-fade-up delay-200 lg:pt-4">
            <div className="bg-white/[0.06] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 sm:p-8 glow-cobalt">
              {/* Card header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display font-bold text-lg text-white">
                  Buy DSC Certificate
                </h2>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-cobalt/[0.12] border border-brand-cobalt/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cobalt-bright animate-pulse" />
                  <span className="text-[10px] font-bold text-brand-cobalt-bright uppercase tracking-wider">
                    Live Pricing
                  </span>
                </div>
              </div>

              {/* Select groups */}
              <div className="space-y-4">
                <SelectGroup
                  label="Class Type"
                  options={CLASS_OPTIONS}
                  value={classType}
                  onChange={setClassType}
                />
                <SelectGroup
                  label="User Type"
                  options={USER_OPTIONS}
                  value={userType}
                  onChange={setUserType}
                />
                <SelectGroup
                  label="Certificate Type"
                  options={CERT_OPTIONS}
                  value={certType}
                  onChange={setCertType}
                />
                <SelectGroup
                  label="Validity"
                  options={VALIDITY_OPTIONS}
                  value={validity}
                  onChange={setValidity}
                />
              </div>

              {/* ── Price display ──────────────────────── */}
              <div className="mt-6 pt-6 border-t border-white/[0.08]">
                <div className="flex items-end justify-between mb-5">
                  <div>
                    <p className="text-[11px] text-white/40 font-medium uppercase tracking-wider mb-1">
                      Total Price
                    </p>
                    <div className="flex items-baseline gap-2.5">
                      <span className="font-display font-extrabold text-4xl text-white tabular-nums">
                        &#8377;{price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-sm text-white/30 line-through tabular-nums">
                        &#8377;{originalPrice.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-brand-emerald/[0.12] border border-brand-emerald/25">
                    <span className="text-xs font-bold text-brand-emerald">
                      {discountPct}% OFF
                    </span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="space-y-2.5">
                  <Button
                    className="w-full h-12 rounded-xl bg-brand-saffron hover:bg-brand-saffron-bright text-brand-navy-deep font-bold text-sm transition-all shimmer group cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      Buy Now &mdash; Get DSC in 30 Min
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full h-10 rounded-xl text-white/50 hover:text-white/80 hover:bg-white/[0.04] text-xs cursor-pointer"
                  >
                    Or pay just &#8377;499 advance &mdash; rest after approval
                  </Button>
                </div>

                {/* Bottom trust strip */}
                <div className="flex items-center justify-center gap-4 mt-5 pt-4 border-t border-white/[0.06]">
                  {["Instant Delivery", "100% Paperless", "Free Re-issue"].map(
                    (text) => (
                      <span
                        key={text}
                        className="flex items-center gap-1 text-[10px] text-white/35 font-medium"
                      >
                        <CheckCircle2 className="w-3 h-3 text-brand-cobalt/50" />
                        {text}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
