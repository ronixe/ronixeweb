import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { metadataForRoute } from "@/lib/routes";
import { PageShell, DocCta, RelatedLinks } from "@/components/page-shell";
import { Faq, ServiceJsonLd } from "@/components/faq";

const PATH = "/fr/services/developpement-integration-api";

export const metadata: Metadata = metadataForRoute(PATH);

export default function DeveloppementIntegrationApi() {
  return (
    <PageShell
      path={PATH}
      locale="fr"
      title="Développement et intégration d'API"
      lede="Ronixe connecte votre produit aux outils et services dont il a besoin pour fonctionner : moyens de paiement, réseaux mobile money, logiciels que vous utilisez déjà en interne, et partenaires avec qui échanger des données."
      crumbs={[
        { label: "Accueil", href: "/fr" },
        { label: "Services", href: "/fr/services" },
      ]}
    >
      <ServiceJsonLd
        name="Développement et intégration d'API"
        description="Connexion de sites internet, boutiques e-commerce et applications mobiles aux moyens de paiement, au mobile money et aux services tiers, ainsi que la construction d'API pour votre propre produit."
        path={PATH}
      />

      <section>
        <h2>Ce que signifie vraiment une intégration</h2>
        <p>
          La plupart des produits ne fonctionnent pas isolément. Un site doit
          encaisser un paiement, une application doit envoyer un SMS, un
          outil interne doit dialoguer avec le logiciel de comptabilité que
          vous payez déjà. L&apos;intégration, c&apos;est le travail qui
          connecte correctement votre produit à ces systèmes, y compris les
          cas d&apos;échec auxquels personne ne pense avant qu&apos;ils ne se
          produisent.
        </p>
        <p>
          Le mobile money est l&apos;intégration que nous réalisons le plus
          souvent ici. La détention de cartes bancaires en Afrique centrale et
          de l&apos;Ouest est faible, alors que les comptes MTN Mobile Money
          et Orange Money sont presque universels. Connecter une boutique ou
          une application directement à ces réseaux est généralement le
          travail d&apos;intégration à plus fort impact pour une entreprise de
          cette région.
        </p>
      </section>

      <section>
        <h2>Construire une API pour votre propre produit</h2>
        <p>
          Si vous exploitez une application web et une application mobile sur
          les mêmes données, ou si vous devez donner à un partenaire un accès
          contrôlé à une partie de votre système, le produit a besoin de sa
          propre API : une interface documentée et stable que d&apos;autres
          logiciels peuvent appeler, distincte de l&apos;interface que
          l&apos;on parcourt en cliquant. C&apos;est un travail différent de
          la construction du produit lui-même, et nous le cadrons séparément.
        </p>
      </section>

      <section>
        <h2>La fiabilité, c&apos;est ce qu&apos;on sous-estime</h2>
        <p>
          Encaisser un paiement ou envoyer une requête une fois est simple.
          Savoir avec certitude que cela a réussi ne l&apos;est pas. Les
          confirmations arrivent en retard, arrivent deux fois, ou
          n&apos;arrivent jamais alors que l&apos;action a bien eu lieu.
          C&apos;est le comportement normal des systèmes de paiement et de
          messagerie réels, pas un cas particulier.
        </p>
        <p>
          Une intégration correcte traite le webhook ou le rappel du
          fournisseur comme la source de vérité, gère une notification
          répétée sans la traiter deux fois, et se réconcilie avec les
          registres du fournisseur plutôt que de faire confiance à ce que le
          navigateur a rapporté. Nous mettons aussi en place une surveillance
          pour que les échecs remontent jusqu&apos;à nous avant que vos
          clients n&apos;aient à les signaler.
        </p>
      </section>

      <Faq
        locale="fr"
        items={[
          {
            question: "Pouvez-vous intégrer MTN MoMo et Orange Money ?",
            answer:
              "Oui, c'est l'une des intégrations que nous réalisons le plus souvent. Au Cameroun, la plupart des marchands ont besoin des deux réseaux, car les clients sont répartis entre les deux et ne changeront pas pour finaliser un achat. Nous prenons en charge l'accompagnement sur le compte marchand, le développement en environnement de test, le flux de paiement en production, et la logique de rapprochement qui garde commandes et paiements synchronisés.",
          },
          {
            question: "Combien coûte une intégration ?",
            answer:
              "Cela dépend du fournisseur et du nombre de cas d'échec à gérer correctement. Un seul moyen de paiement représente généralement un travail plus contenu et bien défini. Nous cadrons et chiffrons un montant fixe avant de commencer.",
          },
          {
            question: "Combien de temps prend une intégration ?",
            answer:
              "Une intégration de paiement standard demande généralement une à deux semaines de développement. Le délai global dépend souvent de la rapidité avec laquelle le compte marchand est validé par le fournisseur, ce qui échappe à notre contrôle et peut prendre plus de temps que le développement lui-même.",
          },
          {
            question: "Et si le service à connecter n'a pas d'API publique ?",
            answer:
              "Nous vous dirons franchement si une intégration fiable est possible. Certains services exposent des données d'une manière qui n'a pas été prévue pour cela, et ces intégrations sont fragiles par nature. Nous préférons le dire dès le départ plutôt que de construire quelque chose qui casse au prochain changement de l'autre système.",
          },
          {
            question: "À qui appartient l'intégration une fois construite ?",
            answer:
              "À vous. Les identifiants sont enregistrés au nom de votre entreprise et le code vous appartient. Si vous travaillez plus tard avec un autre développeur, rien n'a besoin de nous être redemandé.",
          },
        ]}
      />

      <DocCta
        locale="fr"
        heading="Faire fonctionner une intégration"
        body="Dites-nous à quels systèmes votre produit doit se connecter. Nous vous dirons ce que l'intégration implique et ce qu'elle coûte avant que vous vous engagiez."
        email={SITE.email}
        whatsapp={SITE.whatsapp}
      />

      <RelatedLinks
        locale="fr"
        items={[
          {
            href: "/fr/services/automatisation-ia",
            label: "Automatisation IA",
            note: "Des agents et automatisations qui dépendent des mêmes connexions.",
          },
          {
            href: "/fr/services/application-mobile",
            label: "Application mobile",
            note: "Des applications qui encaissent par mobile money sans en sortir.",
          },
          {
            href: "/fr/services/maintenance-assistance",
            label: "Maintenance et assistance",
            note: "Garder une intégration fonctionnelle quand les fournisseurs font évoluer leur API.",
          },
        ]}
      />
    </PageShell>
  );
}
