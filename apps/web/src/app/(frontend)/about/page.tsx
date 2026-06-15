import type { Metadata } from "next";
import View from "@/views/about";

export const metadata: Metadata = {
  title:
    "About SignSecure | Authorized Multi-CA DSC Reseller | Digital Signature India",
  description:
    "SignSecure is India's trusted authorized reseller of Digital Signature Certificates. Multi-CA partner of eMudhra, Capricorn, Pantasign & SignX. Selling DSCs and USB tokens since 2020.",
};

export default function Page() {
  return <View />;
}
