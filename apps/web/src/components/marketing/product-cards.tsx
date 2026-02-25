import {
  User,
  Building2,
  ShieldCheck,
  Globe,
  Lock,
  ArrowRight,
  Star,
  BadgeCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const PRODUCTS = [
  {
    icon: User,
    title: "Class 3 DSC",
    subtitle: "Individual",
    price: 899,
    originalPrice: 1599,
    popular: false,
    cas: ["eMudhra", "Capricorn", "VSign", "Pantasign", "Safescrypt"],
    uses: [
      "GST Filing",
      "Income Tax e-Filing",
      "MCA / ROC Filing",
      "Director's KYC",
      "EPFO Claims",
      "Patent & Trademark",
    ],
    color: "cobalt" as const,
    href: "/products/class-3-individual-dsc",
  },
  {
    icon: Building2,
    title: "Class 3 DSC",
    subtitle: "Organization",
    price: 1099,
    originalPrice: 1999,
    popular: true,
    cas: ["eMudhra", "Capricorn", "VSign", "Pantasign", "Safescrypt"],
    uses: [
      "e-Tendering / GEM",
      "MCA / ROC Filing",
      "GST Filing",
      "ICEGATE / Customs",
      "e-Bidding / Auction",
      "Startup India",
    ],
    color: "cobalt" as const,
    href: "/products/class-3-organization-dsc",
  },
  {
    icon: Lock,
    title: "Class 3 Combo",
    subtitle: "Signature + Encryption",
    price: 1599,
    originalPrice: 2799,
    popular: false,
    cas: ["eMudhra", "Capricorn"],
    uses: [
      "e-Tendering (Mandatory)",
      "ICEGATE Submissions",
      "Encrypted Documents",
      "Government Portals",
      "All Class 3 Uses",
      "Maximum Security",
    ],
    color: "saffron" as const,
    href: "/products/class-3-combo-dsc",
  },
  {
    icon: Globe,
    title: "DGFT DSC",
    subtitle: "Import / Export",
    price: 2199,
    originalPrice: 3599,
    popular: false,
    cas: ["eMudhra", "Capricorn"],
    uses: [
      "DGFT Portal",
      "Import/Export License",
      "Foreign Trade Apps",
      "IEC Registration",
      "AD Code Registration",
      "Branch Addition",
    ],
    color: "saffron" as const,
    href: "/products/dgft-dsc",
  },
];

const colorMap = {
  cobalt: {
    bg: "bg-brand-cobalt/10",
    text: "text-brand-cobalt",
    borderActive: "border-brand-cobalt/40 shadow-lg shadow-brand-cobalt/5",
    btnClass: "bg-brand-cobalt text-white hover:bg-brand-cobalt-bright",
    check: "text-brand-cobalt",
    badgeBg: "bg-brand-cobalt",
  },
  saffron: {
    bg: "bg-brand-saffron/10",
    text: "text-brand-saffron",
    borderActive: "border-brand-saffron/40 shadow-lg shadow-brand-saffron/5",
    btnClass: "bg-brand-saffron text-brand-navy-deep hover:bg-brand-saffron-bright",
    check: "text-brand-saffron",
    badgeBg: "bg-brand-saffron",
  },
};

export function ProductCards() {
  return (
    <section id="products" className="py-20 sm:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cobalt/[0.06] border border-brand-cobalt/12 mb-5">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-cobalt" />
            <span className="text-xs font-semibold text-brand-cobalt tracking-wide uppercase">
              DSC Products
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4 text-balance">
            Choose the Right Digital Signature
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Government-approved certificates from licensed Certifying
            Authorities. All DSCs work on every Indian government portal.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRODUCTS.map((product) => {
            const colors = colorMap[product.color];
            return (
              <div
                key={product.title + product.subtitle}
                className={`relative bg-card border rounded-2xl overflow-hidden transition-all duration-300 hover-lift flex flex-col ${
                  product.popular
                    ? colors.borderActive
                    : "border-border hover:border-brand-cobalt/20"
                }`}
              >
                {/* Popular badge */}
                {product.popular && (
                  <div className={`${colors.badgeBg} text-white text-[10px] font-bold uppercase tracking-wider text-center py-1.5`}>
                    <span className="flex items-center justify-center gap-1">
                      <Star className="w-3 h-3 fill-white/30" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  {/* Icon + Title */}
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center shrink-0`}
                    >
                      <product.icon
                        className={`w-5 h-5 ${colors.text}`}
                        strokeWidth={1.8}
                      />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-foreground">
                        {product.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {product.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display font-bold text-2xl text-foreground">
                        &#8377;{product.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs text-muted-foreground line-through">
                        &#8377;{product.originalPrice.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-0.5">
                      Starting price &middot; 1 Year validity
                    </p>
                  </div>

                  {/* Available CAs */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.cas.map((ca) => (
                      <span
                        key={ca}
                        className="inline-flex items-center gap-1 text-[9px] font-medium px-1.5 py-0.5 rounded-md bg-brand-cobalt/[0.05] border border-brand-cobalt/[0.08] text-brand-cobalt"
                      >
                        <BadgeCheck className="w-2.5 h-2.5" />
                        {ca}
                      </span>
                    ))}
                  </div>

                  {/* Use cases */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {product.uses.map((use) => (
                      <li
                        key={use}
                        className="flex items-start gap-2 text-xs text-foreground/80"
                      >
                        <svg
                          className={`w-3.5 h-3.5 ${colors.check} shrink-0 mt-0.5`}
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M13.333 4L6 11.333 2.667 8"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {use}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a href={product.href}>
                    <Button
                      className={`w-full rounded-xl font-semibold text-xs group ${
                        product.popular
                          ? `${colors.btnClass} h-10 shimmer`
                          : "bg-primary text-primary-foreground hover:bg-primary/90 h-9"
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        Buy Now
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </Button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional note */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          All prices are inclusive of GST. USB Token available as add-on at
          &#8377;500. Free doorstep delivery across India.
        </p>
      </div>
    </section>
  );
}
