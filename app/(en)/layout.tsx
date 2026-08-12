import type { Metadata } from "next";
import { RootHtml, baseMetadata, viewport } from "@/components/root-html";

export const metadata: Metadata = baseMetadata("en");
export { viewport };

export default function EnglishRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootHtml locale="en">{children}</RootHtml>;
}
