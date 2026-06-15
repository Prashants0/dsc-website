import type { Metadata } from "next";
import View from "@/views/pricing";

export const metadata: Metadata = {
  title:
    "DSC Pricing | Compare Digital Signature Prices Across CAs | SignSecure",
  description:
    "Compare Digital Signature Certificate prices across eMudhra, Capricorn, SignX & more. Transparent pricing for Class 3 DSC, DGFT DSC, Combo certificates. Starting at Rs. 899.",
};

export default function Page() {
  return <View />;
}
