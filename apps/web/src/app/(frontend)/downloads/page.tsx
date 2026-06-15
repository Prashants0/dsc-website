import type { Metadata } from "next";
import View from "@/views/downloads";

export const metadata: Metadata = {
  title: "Downloads | DSC Drivers, Tools & Guides | SignSecure",
  description:
    "Download USB token drivers, DSC utility tools, and setup guides. Drivers for ePass 2003, Proxkey, MToken, TrustKey & SafeNet 5100 tokens.",
};

export default function Page() {
  return <View />;
}
