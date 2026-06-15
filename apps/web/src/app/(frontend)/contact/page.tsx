import type { Metadata } from "next";
import View from "@/views/contact";

export const metadata: Metadata = {
  title: "Contact Us | Get DSC Support | SignSecure",
  description:
    "Contact SignSecure for DSC support, pricing queries, or partnership inquiries. Free online WhatsApp support. Mumbai-based authorized multi-CA reseller.",
};

export default function Page() {
  return <View />;
}
