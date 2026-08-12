import Link from "next/link";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { metadataForRoute, routesInGroup } from "@/lib/routes";
import { PageShell, DocCta } from "@/components/page-shell";

export const metadata: Metadata = metadataForRoute("/fr/services");

const SERVICE_PATHS = [
  "/fr/services/creation-site-internet",
  "/fr/services/application-mobile",
  "/fr/services/site-e-commerce",
  "/fr/services/paiement-mobile-money",
  "/fr/services/identite-visuelle",
  "/fr/services/marketing-digital",
];

export default function ServicesFr() {
  const services = routesInGroup("services", "fr").filter((r) =>
    SERVICE_PATHS.includes(r.path)
  );

  return (
    <PageShell
      path="/fr/services"
      locale="fr"
      title="Nos services"
      lede={`Ronixe développe des logiciels, conçoit des identités visuelles et pilote le marketing digital des entreprises d'Afrique de l'Ouest, depuis un seul studio à ${SITE.address.locality}, au Cameroun.`}
      crumbs={[{ label: "Accueil", href: "/fr" }]}
    >
      <section>
        <h2>Une seule équipe pour tout le projet</h2>
        <p>
          La plupart des projets échouent dans les transitions. Le graphiste
          livre un fichier que le développeur ne peut pas intégrer, le
          développeur livre un site que l&apos;agence de communication ne sait
          pas promouvoir, et le client se retrouve à faire l&apos;interprète
          entre trois prestataires qui ne se sont jamais parlé.
        </p>
        <p>
          Ronixe couvre l&apos;ensemble de la chaîne. La même équipe qui nomme
          le produit le construit et l&apos;amène sur le marché. C&apos;est tout
          l&apos;intérêt de travailler avec un studio généraliste plutôt
          qu&apos;avec des spécialistes séparés.
        </p>
      </section>

      <section>
        <h2>Ce que nous faisons</h2>
        <div className="related-grid">
          {services.map((service) => (
            <Link key={service.path} href={service.path} className="related-card">
              <span className="related-label">{service.label}</span>
              <span className="related-note">{service.summary}</span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2>Où nous intervenons</h2>
        <p>
          Ronixe est basée à {SITE.address.locality}, dans la région du{" "}
          Nord-Ouest du Cameroun, et travaille avec des clients au Cameroun, en
          Côte d&apos;Ivoire, au Gabon, au Nigeria et au Ghana. Les projets se
          déroulent en français ou en anglais selon le marché que vous visez.
        </p>
      </section>

      <DocCta
        locale="fr"
        heading="Parlez-nous de votre projet"
        body="Un premier échange suffit généralement à savoir si nous sommes le bon studio, combien cela coûte et en combien de temps."
        email={SITE.email}
        whatsapp={SITE.whatsapp}
      />
    </PageShell>
  );
}
