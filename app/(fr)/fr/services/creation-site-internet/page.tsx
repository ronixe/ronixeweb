import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { metadataForRoute } from "@/lib/routes";
import { PageShell, DocCta, RelatedLinks } from "@/components/page-shell";
import { Faq, ServiceJsonLd } from "@/components/faq";

const PATH = "/fr/services/creation-site-internet";

export const metadata: Metadata = metadataForRoute(PATH);

export default function CreationSiteInternet() {
  return (
    <PageShell
      path={PATH}
      locale="fr"
      title="Création de site internet au Cameroun"
      lede={`Ronixe est une agence web basée à ${SITE.address.locality}. Nous créons des sites internet et des applications web sur mesure pour les entreprises à Douala, Yaoundé et partout au Cameroun, du premier croquis jusqu'à la mise en ligne.`}
      crumbs={[
        { label: "Accueil", href: "/fr" },
        { label: "Services", href: "/fr/services" },
      ]}
    >
      <ServiceJsonLd
        name="Création de site internet"
        description="Création de sites internet et d'applications web sur mesure pour les entreprises du Cameroun et d'Afrique de l'Ouest."
        path={PATH}
      />

      <section>
        <h2>Ce que nous réalisons</h2>
        <ul>
          <li>
            <strong>Sites vitrines</strong> qui se chargent vite sur un
            téléphone avec une connexion faible, ce qui correspond à la majorité
            de vos visiteurs.
          </li>
          <li>
            <strong>Applications web</strong> avec comptes utilisateurs, tableaux
            de bord, droits d&apos;accès et rapports, pour faire tourner une
            activité et pas seulement la décrire.
          </li>
          <li>
            <strong>Systèmes de réservation et de devis</strong> qui déposent
            les demandes là où vous pouvez les traiter, plutôt que dans une
            boîte mail partagée.
          </li>
          <li>
            <strong>Outils internes</strong> qui remplacent le fichier Excel que
            trois personnes s&apos;envoient par mail.
          </li>
          <li>
            <strong>Refonte de site internet</strong> pour les sites créés une
            fois, jamais entretenus, et devenus plus lents que l&apos;activité
            ne le permet.
          </li>
        </ul>
      </section>

      <section>
        <h2>Conçu pour la connexion réelle de vos clients</h2>
        <p>
          Un site qui fonctionne bien sur la fibre du bureau peut être
          inutilisable sur un téléphone à Bamenda en milieu de journée. Nous
          partons de ce cas de figure plutôt que de le traiter en dernier : les
          pages sont générées côté serveur et s&apos;affichent avant que le
          JavaScript n&apos;arrive, les images sont dimensionnées pour
          l&apos;appareil qui les demande, et aucun script tiers lourd
          n&apos;est chargé pour une fonction que personne n&apos;utilise.
        </p>
        <p>
          C&apos;est aussi pour cette raison que nos sites se positionnent bien.
          Ce qui rend une page rapide sur une mauvaise connexion correspond en
          grande partie à ce que les moteurs de recherche mesurent.
        </p>
      </section>

      <section>
        <h2>Le déroulement d&apos;un projet</h2>
        <ul>
          <li>
            <strong>Cadrage.</strong> Un échange sur ce que le site doit
            accomplir, et une réponse honnête sur la question de savoir si vous
            avez réellement besoin de ce que vous imaginez. Certaines demandes
            s&apos;arrêtent là, et c&apos;est très bien ainsi.
          </li>
          <li>
            <strong>Conception.</strong> Les maquettes et la direction visuelle
            sont validées avant tout développement, pour que les changements
            arrivent quand ils coûtent encore peu.
          </li>
          <li>
            <strong>Développement.</strong> Le travail en cours est mis en ligne
            sur un lien que vous pouvez ouvrir, dès les premiers jours. Vous
            n&apos;attendez jamais une grande révélation finale.
          </li>
          <li>
            <strong>Mise en ligne.</strong> Nom de domaine, hébergement,
            soumission aux moteurs de recherche, et une prise en main pour que
            vous puissiez modifier vos contenus vous-même.
          </li>
          <li>
            <strong>Après.</strong> Corrections, évolutions et améliorations. Un
            site doit être entretenu, et nous préférons continuer à le faire
            plutôt que de vous livrer quelque chose qui se dégrade.
          </li>
        </ul>
      </section>

      <Faq
        locale="fr"
        items={[
          {
            question: "Combien coûte un site internet au Cameroun ?",
            answer:
              "Cela dépend de s'il s'agit d'un site vitrine ou d'une véritable application, et nous donnons un montant fixe avant de commencer plutôt qu'un tarif horaire qui dérive. Un site vitrine d'entreprise et une plateforme avec comptes utilisateurs et paiements ne relèvent pas du même budget. La réponse honnête à une question de prix posée sans cahier des charges, c'est que personne ne peut y répondre.",
          },
          {
            question: "Combien de temps faut-il pour créer un site internet ?",
            answer:
              "Un site vitrine demande généralement trois à cinq semaines entre la validation du cadrage et la mise en ligne. Les applications web avec comptes, tableaux de bord ou paiements prennent plus de temps, et nous annonçons une date au moment du cadrage et non après avoir commencé.",
          },
          {
            question: "Travaillez-vous avec des entreprises hors du Cameroun ?",
            answer:
              "Oui. Nous travaillons avec des clients en Côte d'Ivoire, au Gabon, au Nigeria et au Ghana, ainsi qu'à distance au-delà de la région. Les projets se déroulent en français ou en anglais selon le marché visé.",
          },
          {
            question: "À qui appartient le site une fois terminé ?",
            answer:
              "À vous. Le code, le nom de domaine et les accès d'hébergement vous appartiennent, et nous vous remettons les identifiants à la mise en ligne. Vous n'êtes jamais dépendant de nous pour faire évoluer votre site.",
          },
          {
            question: "Pouvez-vous reprendre un site créé par quelqu'un d'autre ?",
            answer:
              "Souvent oui. Nous examinons l'existant et vous disons franchement s'il vaut la peine d'être maintenu, ou si une refonte vous coûtera moins cher sur deux ans que des rustines successives.",
          },
        ]}
      />

      <DocCta
        locale="fr"
        heading="Lancer un projet web"
        body="Dites-nous ce que le site doit faire. Un premier échange suffit pour vous donner un périmètre, une fourchette de prix et une date réaliste."
        email={SITE.email}
        whatsapp={SITE.whatsapp}
      />

      <RelatedLinks
        locale="fr"
        items={[
          {
            href: "/fr/services/automatisation-ia",
            label: "Automatisation IA",
            note: "Chatbots, automatisation des processus et fonctionnalités IA intégrées au site.",
          },
          {
            href: "/fr/services/application-mobile",
            label: "Application mobile",
            note: "Applications iOS et Android pour vos clients et vos équipes.",
          },
          {
            href: "/fr/services/conception-ui-ux",
            label: "Conception UI/UX",
            note: "Le travail d'interface réalisé avant tout développement.",
          },
        ]}
      />
    </PageShell>
  );
}
