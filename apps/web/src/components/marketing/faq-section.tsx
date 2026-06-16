"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

const FAQS = [
  {
    q: "What is a Digital Signature Certificate (DSC)?",
    a: "A Digital Signature Certificate (DSC) is an electronic format of a physical certificate that serves as proof of identity for online transactions. It is issued by licensed Certifying Authorities under the IT Act, 2000 and is the electronic equivalent of a handwritten signature. DSCs are legally valid and recognized by all government bodies in India.",
  },
  {
    q: "Which type of DSC do I need?",
    a: "For most users, a Class 3 Signature DSC is sufficient. It covers GST filing, MCA/ROC filings, Income Tax, Director's KYC, and EPFO. If you participate in e-Tendering (GEM, IREPS), you'll need the Combo (Signature + Encryption). For import/export businesses, a DGFT DSC is required for DGFT portal access.",
  },
  {
    q: "How long does it take to get my DSC?",
    a: "With our paperless Aadhaar eKYC process, most DSCs are issued within a day of completing the verification. In some cases it may take a little longer if additional verification is needed. We also offer same-day USB token delivery across major cities.",
  },
  {
    q: "What documents are required to apply for DSC?",
    a: "For individuals: PAN Card, Aadhaar Card, and a recent photograph. For organizations: PAN Card of the signatory, Aadhaar Card, organization's GST Certificate, and authorization letter. The entire process is paperless — documents are uploaded digitally.",
  },
  {
    q: "Is DSC mandatory for GST filing?",
    a: "DSC is mandatory for companies and LLPs for GST filing. For proprietors and partnership firms, it is optional but highly recommended for added security. All GST returns, registration, and amendments can be signed using a Class 3 Digital Signature.",
  },
  {
    q: "Can I use one DSC on multiple portals?",
    a: "Yes. A single Class 3 DSC works across all Indian government portals including GST, MCA, Income Tax, GEM, IREPS, ICEGATE, EPFO, and more. You don't need separate certificates for different portals.",
  },
  {
    q: "What is the validity period of a DSC?",
    a: "DSCs are available in 1-year, 2-year, and 3-year validity periods. We recommend the 2-year option for the best value. You can renew your DSC before it expires to ensure uninterrupted access to government portals.",
  },
  {
    q: "Do I need a USB token?",
    a: "Yes, as per CCA guidelines, all new DSCs must be downloaded onto a FIPS-certified USB crypto token. If you already have a compatible token, you can use it. Otherwise, you can purchase a new token from us for Rs. 500 with doorstep delivery (charges apply). We sell ePass 2003, Proxkey and MToken tokens.",
  },
  {
    q: "What is your refund policy?",
    a: "We offer a full refund if your DSC application is rejected for any reason. If you cancel before eKYC verification, a full refund minus processing fees is provided. Once the DSC is issued and downloaded, refunds are not applicable as it is a digital product.",
  },
  {
    q: "Do you offer a partner/reseller program?",
    a: "Yes! Our partner program is ideal for CAs, tax professionals, and IT service providers. You earn competitive commissions on every DSC sold through your referral. Partners get a dedicated dashboard, priority support, and bulk pricing. Contact us to join.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cobalt/[0.06] border border-brand-cobalt/12 mb-5">
            <HelpCircle className="w-3.5 h-3.5 text-brand-cobalt" />
            <span className="text-xs font-semibold text-brand-cobalt tracking-wide uppercase">
              FAQs
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Everything you need to know about Digital Signature Certificates.
            Can't find what you're looking for? Chat with us.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-2">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-xl overflow-hidden bg-card transition-all duration-200 ${
                openIndex === index
                  ? "border-brand-cobalt/20 shadow-sm"
                  : "border-border"
              }`}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-start gap-3 p-5 text-left hover:bg-muted/30 transition-colors cursor-pointer"
                aria-expanded={openIndex === index}
              >
                <ChevronDown
                  className={`w-4 h-4 text-brand-cobalt shrink-0 mt-0.5 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
                <span className="text-sm font-semibold text-foreground pr-4">
                  {faq.q}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 pl-12 animate-fade-up">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Support CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground mb-3">
            Still have questions?
          </p>
          <a
            href="https://wa.me/917990740623"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-brand-cobalt/25 bg-brand-cobalt/[0.04] text-brand-cobalt font-semibold text-sm hover:bg-brand-cobalt/[0.08] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
