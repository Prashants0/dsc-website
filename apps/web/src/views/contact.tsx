"use client";

import { SiteHeader, SiteFooter, WhatsAppButton } from "@/components/marketing";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
          <div className="absolute inset-0 grain-overlay" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] mb-6">
                <MessageCircle className="w-3.5 h-3.5 text-brand-cobalt-bright" />
                <span className="text-xs font-semibold text-white/80 tracking-wide uppercase">Get in Touch</span>
              </div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4 text-balance leading-tight">
                We're Here to <span className="text-gradient-cobalt">Help</span>
              </h1>
              <p className="text-base text-white/55 leading-relaxed max-w-xl mx-auto">
                Have questions about DSCs, USB tokens, or need help choosing the right certificate? Our experts are available online for free support.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-5 gap-10">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="font-display font-bold text-2xl text-foreground mb-2">Contact Information</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">Reach out to us through any of these channels. We typically respond within 5 minutes on WhatsApp.</p>
                </div>

                <div className="space-y-4">
                  <a href="https://wa.me/917990740623" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-[#25D366]/[0.04] border border-[#25D366]/15 hover:bg-[#25D366]/[0.08] transition-colors group">
                    <div className="w-11 h-11 rounded-xl bg-[#25D366]/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    </div>
                    <div>
                      <p className="text-[11px] text-[#25D366]/60 uppercase tracking-wider font-medium">WhatsApp (Fastest)</p>
                      <p className="text-sm font-semibold text-foreground">+91 79907 40623</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground/30 ml-auto group-hover:text-[#25D366] transition-colors" />
                  </a>

                  <a href="tel:+919324462329" className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-brand-cobalt/20 transition-colors group">
                    <div className="w-11 h-11 rounded-xl bg-brand-cobalt/[0.06] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-brand-cobalt" />
                    </div>
                    <div>
                      <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">Phone</p>
                      <p className="text-sm font-semibold text-foreground">+91 93244 62329</p>
                    </div>
                  </a>

                  <a href="mailto:dsc@signsecure.in" className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-brand-cobalt/20 transition-colors group">
                    <div className="w-11 h-11 rounded-xl bg-brand-cobalt/[0.06] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-brand-cobalt" />
                    </div>
                    <div>
                      <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">Email</p>
                      <p className="text-sm font-semibold text-foreground">dsc@signsecure.in</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl border border-border">
                    <div className="w-11 h-11 rounded-xl bg-brand-saffron/[0.06] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-brand-saffron" />
                    </div>
                    <div>
                      <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">Office</p>
                      <p className="text-sm font-semibold text-foreground">Mumbai, Maharashtra, India</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl border border-border">
                    <div className="w-11 h-11 rounded-xl bg-brand-emerald/[0.06] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-brand-emerald" />
                    </div>
                    <div>
                      <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">Working Hours</p>
                      <p className="text-sm font-semibold text-foreground">Free Online Support</p>
                      <p className="text-xs text-muted-foreground">Office: Mon-Sat 10AM-7PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                  <h3 className="font-display font-bold text-xl text-foreground mb-1">Send us a Message</h3>
                  <p className="text-sm text-muted-foreground mb-6">Fill out the form below and we'll get back to you within 1 hour.</p>

                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full h-10 px-4 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-brand-cobalt/50 focus:ring-2 focus:ring-brand-cobalt/10 outline-none transition-all"
                          placeholder="Rajesh Mehta"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1.5">Phone Number *</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full h-10 px-4 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-brand-cobalt/50 focus:ring-2 focus:ring-brand-cobalt/10 outline-none transition-all"
                          placeholder="+91 93244 62329"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">Email Address</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-10 px-4 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-brand-cobalt/50 focus:ring-2 focus:ring-brand-cobalt/10 outline-none transition-all"
                        placeholder="rajesh@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">Subject *</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full h-10 px-4 rounded-xl border border-border bg-background text-sm text-foreground focus:border-brand-cobalt/50 focus:ring-2 focus:ring-brand-cobalt/10 outline-none transition-all"
                      >
                        <option value="">Select a topic...</option>
                        <option value="buy-dsc">Buy DSC Certificate</option>
                        <option value="buy-token">Buy USB Token</option>
                        <option value="renewal">DSC Renewal</option>
                        <option value="support">Technical Support</option>
                        <option value="partner">Partnership Inquiry</option>
                        <option value="bulk">Bulk Order Quote</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">Message *</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-brand-cobalt/50 focus:ring-2 focus:ring-brand-cobalt/10 outline-none transition-all resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <Button type="submit" className="w-full sm:w-auto rounded-xl bg-brand-cobalt text-white font-semibold hover:bg-brand-cobalt-bright h-11 px-8 group shimmer">
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </Button>
                  </form>
                </div>
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
