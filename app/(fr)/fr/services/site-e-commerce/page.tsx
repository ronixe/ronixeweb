import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { metadataForRoute } from "@/lib/routes";
import { PageShell, DocCta, RelatedLinks } from "@/components/page-shell";
import { Faq, ServiceJsonLd } from "@/components/faq";

const PATH = "/fr/services/site-e-commerce";

export const metadata: Metadata = metadataForRoute(PATH);

export default function SiteECommerce() {
  return (
    <PageShell
      path={PATH}
      locale="fr"
      title="Création de site e-commerce"
      lede="Ronixe crée des boutiques en ligne pour les entreprises d'Afrique de l'Ouest : gestion des produits, tableau de bord des commandes utilisable par vos équipes, et paiement par mobile money autant que par carte."
      crumbs={[
        { label: "Accueil", href: "/fr" },
        { label: "Services", href: "/fr/services" },
      ]}
    >
      <ServiceJsonLd
        name="Création de site e-commerce"
        description="Boutiques en ligne avec gestion des produits, tableau de bord des commandes et intégration du paiement mobile money."
        path={PATH}
      />

      <section>
        <h2>Ce que comprend la boutique</h2>
        <ul>
          <li>
            <strong>Gestion des produits</strong> que vous administrez
            vous-même, avec variantes, stocks et prix, sans appeler un
            développeur pour changer un tarif.
          </li>
          <li>
            <strong>Tableau de bord des commandes</strong> pensé pour la
            personne qui prépare les colis, pas pour une capture
            d&apos;écran de démonstration.
          </li>
          <li>
            <strong>Paiement mobile money et carte</strong>, pour que chacun
            paie avec ce qu&apos;il possède.
          </li>
          <li>
            <strong>Gestion des livraisons</strong> adaptée à la façon dont les
            marchandises circulent réellement ici : zones, points de retrait et
            paiement à la livraison si vous le souhaitez.
          </li>
          <li>
            <strong>Un tunnel de commande qui résiste à une mauvaise
            connexion</strong> et ne perd pas le panier quand le réseau tombe.
          </li>
          <li>
            <strong>WhatsApp comme canal de vente</strong>, car une large part
            des commandes dans la région commence par un message plutôt que par
            un clic.
          </li>
        </ul>
      </section>

      <section>
        <h2>Le paiement à la livraison reste une vraie exigence</h2>
        <p>
          Beaucoup de clients ouest-africains ne paieront pas avant
          d&apos;avoir vu la marchandise, et une boutique qui impose le
          prépaiement perd ces ventes. Nous traitons le paiement à la livraison
          comme une option à part entière plutôt que comme un contournement
          maladroit, avec les états de commande et le rapprochement qui vont
          avec.
        </p>
        <p>
          Le bon équilibre combine généralement les trois : mobile money pour
          les clients qui vous font confiance, carte pour la diaspora et les
          entreprises, et paiement à la livraison pour les nouveaux clients
          locaux. Lequel mettre en avant doit être une décision, pas une
          conséquence de la plateforme choisie.
        </p>
      </section>

      <section>
        <h2>Plateforme existante ou développement sur mesure</h2>
        <p>
          Si une plateforme standard convient à votre activité, nous vous le
          dirons et la mettrons en place correctement plutôt que de vous
          facturer un développement dont vous n&apos;avez pas besoin. Les
          plateformes pèchent ici sur un point précis : la prise en charge du
          mobile money est souvent médiocre ou inexistante, et c&apos;est
          justement ce sur quoi vous ne pouvez pas transiger sur ce marché.
        </p>
        <p>
          Un développement sur mesure se justifie quand vos produits ont une
          structure inhabituelle, que la logistique est complexe, ou que le
          mobile money doit fonctionner exactement comme vous l&apos;entendez.
          Cette décision se prend au cadrage, avant la moindre ligne de code.
        </p>
      </section>

      <Faq
        locale="fr"
        items={[
          {
            question:
              "Quelle est la meilleure plateforme e-commerce pour une entreprise au Cameroun ?",
            answer:
              "Le critère décisif est la prise en charge du mobile money, pas la richesse fonctionnelle. La plupart des plateformes internationales gèrent très bien la carte bancaire et mal ou pas du tout le mobile money, ce qui est exactement l'inverse du besoin sur ce marché. Nous évaluons votre catalogue et vos moyens de paiement pour recommander une plateforme ou un développement sur mesure.",
          },
          {
            question: "Les clients peuvent-ils payer avec MTN MoMo ou Orange Money ?",
            answer:
              "Oui, et pour la plupart des boutiques ouest-africaines ces moyens devraient être le mode de paiement principal plutôt qu'une alternative. La détention de cartes est faible alors que les comptes mobile money sont presque universels.",
          },
          {
            question: "Puis-je proposer le paiement à la livraison ?",
            answer:
              "Oui. C'est une exigence normale ici et non un cas particulier. Nous construisons les états de commande et le rapprochement pour le gérer proprement, au lieu de le traiter comme une commande impayée que quelqu'un régularise à la main.",
          },
          {
            question: "Combien de temps faut-il pour créer une boutique en ligne ?",
            answer:
              "Une boutique sur une plateforme existante avec le mobile money intégré demande généralement quatre à six semaines. Un développement sur mesure dépend de la complexité de vos produits et de vos règles de livraison, et nous annonçons une date au cadrage.",
          },
          {
            question: "Puis-je mettre à jour les produits moi-même ?",
            answer:
              "Oui. Ajouter des produits, changer les prix et gérer les stocks sont des opérations que vous faites sans nous. La livraison s'accompagne d'une prise en main pour que vos équipes ne dépendent pas d'un développeur au quotidien.",
          },
        ]}
      />

      <DocCta
        locale="fr"
        heading="Préparer votre boutique en ligne"
        body="Dites-nous ce que vous vendez et comment vos clients paient. Nous recommanderons une plateforme ou un développement sur mesure, en vous disant franchement lequel vous coûte le moins cher."
        email={SITE.email}
        whatsapp={SITE.whatsapp}
      />

      <RelatedLinks
        locale="fr"
        items={[
          {
            href: "/fr/services/paiement-mobile-money",
            label: "Mobile money",
            note: "L'intégration de paiement dont dépend cette boutique.",
          },
          {
            href: "/fr/services/marketing-digital",
            label: "Marketing digital",
            note: "Une boutique sans visiteurs ne vend pas. Amener du trafic.",
          },
          {
            href: "/fr/services/identite-visuelle",
            label: "Identité visuelle",
            note: "L'image et les signaux de confiance qui font acheter.",
          },
        ]}
      />
    </PageShell>
  );
}
