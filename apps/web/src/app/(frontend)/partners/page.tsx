import type { Metadata } from "next";
import View from "@/views/partners";

export const metadata: Metadata = {
  title:
    "Our Certifying Authorities | eMudhra, Capricorn, Pantasign, SignX | SignSecure",
  description:
    "SignSecure is an authorized reseller of India's top Certifying Authorities including eMudhra, Capricorn, Pantasign, and SignX. CCA-approved Digital Signatures.",
};

export default function Page() {
  return <View />;
}
