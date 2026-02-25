import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20buy%20a%20Digital%20Signature%20Certificate"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] text-white pl-4 pr-5 py-3.5 rounded-full shadow-xl shadow-[#25D366]/20 hover:shadow-2xl hover:shadow-[#25D366]/30 hover:scale-105 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
      <span className="text-sm font-semibold hidden sm:inline">
        Chat with us
      </span>
    </a>
  );
}
