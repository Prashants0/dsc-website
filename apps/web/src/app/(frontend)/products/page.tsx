import type { Metadata } from "next";
import View from "@/views/products-index";

export const metadata: Metadata = {
  title:
    "Digital Signature Products | Class 3 DSC, DGFT, Combo, USB Tokens | SignSecure",
  description:
    "Explore our complete range of Digital Signature Certificates. Class 3 Individual & Organization DSC, DGFT DSC for Import/Export, Combo & Document Signer certificates, USB Tokens and more. Authorized reseller of eMudhra, Capricorn, Pantasign & SignX.",
};

export default function Page() {
  return <View />;
}
