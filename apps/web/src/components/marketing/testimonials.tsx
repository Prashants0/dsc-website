import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Rajesh Mehta",
    role: "CA, Mehta & Associates",
    location: "Mumbai",
    text: "Fastest DSC process I've ever used. Got my Class 3 certificate within a day. The paperless eKYC was seamless. Already recommended to 15+ clients.",
    rating: 5,
    initials: "RM",
  },
  {
    name: "Priya Sharma",
    role: "Director, TechBridge Pvt Ltd",
    location: "Delhi",
    text: "We needed DSCs for 12 directors urgently for MCA filing. SignSecure handled the bulk order professionally, same-day delivery for all. Outstanding support.",
    rating: 5,
    initials: "PS",
  },
  {
    name: "Amit Kulkarni",
    role: "Proprietor, AK Exports",
    location: "Pune",
    text: "DGFT DSC was issued perfectly for our import-export business. The team guided us through the entire ICEGATE registration. Very knowledgeable support.",
    rating: 5,
    initials: "AK",
  },
  {
    name: "Sujatha Nair",
    role: "Company Secretary",
    location: "Bengaluru",
    text: "The renewal process was incredibly smooth. Auto-renewal reminder saved us from missing our filing deadline. The pricing is unbeatable in the market.",
    rating: 5,
    initials: "SN",
  },
  {
    name: "Mohammed Irfan",
    role: "Tender Manager, BuildWell Infra",
    location: "Hyderabad",
    text: "We use the Combo DSC for e-tendering daily. Never faced a single compatibility issue on GEM or IREPS. The USB token delivery was free and fast.",
    rating: 5,
    initials: "MI",
  },
  {
    name: "Kavita Desai",
    role: "Tax Consultant",
    location: "Ahmedabad",
    text: "As a tax professional, I need DSCs for multiple clients every month. The partner program gives excellent margins and the dashboard is easy to track orders.",
    rating: 5,
    initials: "KD",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-saffron/[0.08] border border-brand-saffron/15 mb-5">
            <Star className="w-3.5 h-3.5 text-brand-saffron fill-brand-saffron" />
            <span className="text-xs font-semibold text-brand-saffron tracking-wide uppercase">
              Customer Reviews
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4 text-balance">
            Trusted by Businesses Across India
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Join thousands of CAs, companies, and professionals who trust
            SignSecure for their digital signature needs.
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card border border-border rounded-2xl p-6 hover:border-brand-cobalt/20 transition-all duration-300 flex flex-col hover-lift"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-brand-cobalt/10 mb-3" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 text-brand-saffron fill-brand-saffron"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-foreground/80 leading-relaxed mb-5 flex-1">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-cobalt/20 to-brand-cobalt/5 flex items-center justify-center border border-brand-cobalt/15">
                  <span className="text-xs font-bold text-brand-cobalt">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    {testimonial.role} &middot; {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
