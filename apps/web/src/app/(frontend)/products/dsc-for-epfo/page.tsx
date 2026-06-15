import type { Metadata } from "next";
import { UseCaseDscPage } from "@/components/marketing/use-case-dsc-page";
import { USE_CASE_DSC } from "@/lib/use-case-dsc-data";

const DATA = USE_CASE_DSC["dsc-for-epfo"];

export const metadata: Metadata = {
  title: DATA.seoTitle,
  description: DATA.seoDescription,
  keywords: DATA.keywords,
};

export default function Page() {
  return <UseCaseDscPage data={DATA} />;
}
