import Image from "next/image";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { metadataForRoute } from "@/lib/routes";
import { PageShell, DocCta } from "@/components/page-shell";

export const metadata: Metadata = metadataForRoute("/fr/a-propos");

export default function AProposPage() {
  return (
    <PageShell
      path="/fr/a-propos"
      locale="fr"
      title="À propos"
      lede="Ronixe est une entreprise de développement logiciel. Nous créons des applications de l'idée jusqu'au lancement, en vous accompagnant depuis la première idée jusqu'à la conception et au développement, comme votre partenaire technique unique et fiable."
      crumbs={[{ label: "Accueil", href: "/fr" }]}
    >
      <section>
        <h2>Comment nous travaillons</h2>
        <p>
          La plupart des projets échouent dans les transitions. Le graphiste
          livre un fichier que le développeur ne peut pas intégrer, le
          développeur livre un produit que l&apos;agence de communication ne
          sait pas promouvoir, et le client se retrouve à faire
          l&apos;interprète entre des prestataires qui ne se sont jamais
          parlé.
        </p>
        <p>
          Ronixe couvre l&apos;ensemble de la chaîne : la même équipe qui
          conçoit un produit le construit et continue de le faire vivre après
          la mise en ligne. C&apos;est tout l&apos;intérêt de travailler avec
          un seul partenaire technique fiable plutôt qu&apos;avec des
          spécialistes séparés.
        </p>
      </section>

      <section>
        <h2>Direction</h2>
        <p>
          Derrière tout système logiciel fiable, il y a une équipe qui
          comprend à la fois le code et la stratégie d&apos;entreprise.
        </p>
        <div className="leadership-grid">
          <article className="leadership-card">
            <div className="leadership-avatar">
              <Image
                src="/brand/Foweh_Princewill_Petinjoh-Founder_of_Ronixe.jpeg"
                alt={`${SITE.founder}, fondateur de ${SITE.name}`}
                width={152}
                height={152}
              />
            </div>
            <div className="leadership-info">
              <div className="leadership-heading">
                <h3 className="leadership-name">{SITE.founder}</h3>
                <p className="leadership-role">
                  Fondateur &amp; architecte logiciel principal
                </p>
              </div>
              <p>
                Fort de plusieurs années d&apos;expérience à accompagner des
                produits numériques du concept jusqu&apos;à une plateforme
                prête pour la production, Princewill a fondé {SITE.name} sur
                un principe simple : construire des logiciels qui résolvent de
                vrais problèmes, sans complexité inutile ni empilement
                technique superflu.
              </p>
              <blockquote>
                « Trop de jeunes entreprises perdent du temps et du budget à
                sur-concevoir leurs premiers produits. Chez {SITE.name}, notre
                priorité est de livrer des applications propres et évolutives
                qui apportent de la valeur dès le premier jour. »
              </blockquote>
              <p>
                Que vous lanciez une application web, construisiez une
                application mobile native ou fassiez évoluer une plateforme
                e-commerce, Princewill et l&apos;équipe d&apos;ingénierie de{" "}
                {SITE.name} apportent une clarté technique à chaque projet.
              </p>
            </div>
          </article>
        </div>
      </section>

      <DocCta
        locale="fr"
        heading="Parlez-nous de votre projet"
        body="Dites-nous ce que vous construisez. Un premier échange suffit généralement à savoir si nous sommes le bon studio pour votre projet."
        email={SITE.email}
        whatsapp={SITE.whatsapp}
      />
    </PageShell>
  );
}
