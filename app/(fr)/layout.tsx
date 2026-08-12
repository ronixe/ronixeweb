import type { Metadata } from "next";
import { RootHtml, baseMetadata, viewport } from "@/components/root-html";

export const metadata: Metadata = baseMetadata("fr");
export { viewport };

export default function FrenchRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootHtml locale="fr">{children}</RootHtml>;
}
