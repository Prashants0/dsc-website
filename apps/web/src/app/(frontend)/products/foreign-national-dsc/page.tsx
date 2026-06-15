import type { Metadata } from "next";
import View from "@/views/foreign-national-dsc";

export const metadata: Metadata = {
  title:
    "Foreign National & NRI Digital Signature Certificate | DSC for Overseas Directors | SignSecure",
  description:
    "Get Digital Signature Certificate for Foreign Nationals & NRIs in India. Video-based KYC, no Aadhaar required. DSC for overseas directors, NRI company incorporation, MCA filing. Issued by eMudhra. Starting ₹8,999.",
  keywords:
    "digital signature for foreign nationals india, nri digital signature certificate, foreign director dsc india, dsc for non-resident indian, digital signature for foreign company director, overseas director dsc mca, foreign national dsc, nri dsc, video kyc dsc, dsc without aadhaar",
};

export default function Page() {
  return <View />;
}
