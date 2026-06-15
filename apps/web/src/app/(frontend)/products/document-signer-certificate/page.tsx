import type { Metadata } from "next";
import View from "@/views/document-signer-certificate";

export const metadata: Metadata = {
  title:
    "Document Signer Certificate | Bulk & Automated DSC for Organizations | SignSecure",
  description:
    "Buy a Document Signer Certificate for bulk and automated document signing — invoices, payslips, agreements & e-invoicing. Organization-level certificate from ₹2,999. Works with ERP, HR & accounting software. Authorized reseller of eMudhra, Capricorn, Pantasign & SignX.",
  keywords:
    "document signer certificate, document signer dsc, bulk signing certificate, automated pdf signing, e-invoicing dsc, organization document signer, dsc for erp, server signing certificate",
};

export default function Page() {
  return <View />;
}
