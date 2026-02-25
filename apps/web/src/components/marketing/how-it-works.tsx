import {
  MousePointerClick,
  ScanFace,
  Download,
  ArrowRight,
} from "lucide-react";

const STEPS = [
  {
    num: "01",
    icon: MousePointerClick,
    title: "Select & Pay",
    description:
      "Choose your DSC type and CA, complete secure payment, and start your application in under 2 minutes.",
    accent: "from-brand-cobalt/20 to-brand-cobalt/5",
    iconColor: "text-brand-cobalt",
    borderHover: "hover:border-brand-cobalt/30",
    shadowHover: "hover:shadow-brand-cobalt/5",
  },
  {
    num: "02",
    icon: ScanFace,
    title: "Verify Identity",
    description:
      "Complete paperless Aadhaar eKYC and video verification from anywhere. No physical documents needed.",
    accent: "from-brand-saffron/20 to-brand-saffron/5",
    iconColor: "text-brand-saffron",
    borderHover: "hover:border-brand-saffron/30",
    shadowHover: "hover:shadow-brand-saffron/5",
  },
  {
    num: "03",
    icon: Download,
    title: "Download DSC",
    description:
      "Receive your government-approved Digital Signature Certificate instantly on your USB token. Ready to use on all portals.",
    accent: "from-brand-emerald/20 to-brand-emerald/5",
    iconColor: "text-brand-emerald",
    borderHover: "hover:border-brand-emerald/30",
    shadowHover: "hover:shadow-brand-emerald/5",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 relative">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cobalt/[0.06] border border-brand-cobalt/12 mb-5">
            <span className="text-xs font-semibold text-brand-cobalt tracking-wide uppercase">
              Simple 3-Step Process
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] text-foreground mb-4 text-balance leading-tight">
            Get Your DSC in 3 Easy Steps
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed max-w-lg mx-auto">
            No paperwork, no office visits. Our 100% online process gets your
            Digital Signature Certificate issued in under 30 minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {STEPS.map((step, index) => (
            <div key={step.num} className="relative group">
              {/* Connector line */}
              {index < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[calc(100%_-_8px)] w-[calc(100%_-_56px)] z-10">
                  <div className="border-t-2 border-dashed border-border/60 relative">
                    <ArrowRight className="absolute -right-2 -top-[11px] w-5 h-5 text-muted-foreground/20" />
                  </div>
                </div>
              )}

              <div
                className={`relative bg-card border border-border rounded-2xl p-6 sm:p-8 ${step.borderHover} transition-all duration-300 hover:shadow-xl ${step.shadowHover} h-full hover-lift`}
              >
                {/* Step number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display font-extrabold text-5xl text-muted-foreground/[0.08] select-none">
                    {step.num}
                  </span>
                  <div
                    className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${step.accent} flex items-center justify-center border border-white/5`}
                  >
                    <step.icon
                      className={`w-6 h-6 ${step.iconColor}`}
                      strokeWidth={1.6}
                    />
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-foreground mb-2.5">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-cobalt hover:text-brand-cobalt-bright transition-colors group"
          >
            Start your application now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
