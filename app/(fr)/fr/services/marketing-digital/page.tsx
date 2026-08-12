import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { metadataForRoute } from "@/lib/routes";
import { PageShell, DocCta, RelatedLinks } from "@/components/page-shell";
import { Faq, ServiceJsonLd } from "@/components/faq";

const PATH = "/fr/services/marketing-digital";

export const metadata: Metadata = metadataForRoute(PATH);

export default function MarketingDigital() {
  return (
    <PageShell
      path={PATH}
      locale="fr"
      title="Marketing digital et community management"
      lede="Ronixe pilote le référencement naturel, le community management et les campagnes publicitaires des entreprises d'Afrique de l'Ouest, avec un reporting fondé sur les demandes reçues plutôt que sur les impressions."
      crumbs={[
        { label: "Accueil", href: "/fr" },
        { label: "Services", href: "/fr/services" },
      ]}
    >
      <ServiceJsonLd
        name="Marketing digital"
        description="Référencement naturel, community management et publicité en ligne pour les entreprises d'Afrique de l'Ouest."
        path={PATH}
      />

      <section>
        <h2>Ce que nous pilotons</h2>
        <ul>
          <li>
            <strong>Référencement naturel.</strong> Être trouvé sur ce que vos
            clients tapent réellement, en français comme en anglais, qui sont
            deux ensembles de mots-clés distincts et non la traduction l&apos;un
            de l&apos;autre.
          </li>
          <li>
            <strong>Community management.</strong> L&apos;animation des
            comptes : publications, réponses, et gestion des messages privés où
            se concluent réellement les ventes dans la région.
          </li>
          <li>
            <strong>Campagnes publicitaires.</strong> Meta et Google, avec des
            budgets assez petits pour tester avant d&apos;être assez grands pour
            faire mal.
          </li>
          <li>
            <strong>Contenus.</strong> Textes et visuels qui répondent aux
            questions que vos clients se posent avant d&apos;acheter.
          </li>
          <li>
            <strong>Mesure.</strong> Un reporting rattaché aux demandes reçues,
            pas à la portée.
          </li>
        </ul>
      </section>

      <section>
        <h2>Bilingue par défaut</h2>
        <p>
          Le Nigeria et le Ghana cherchent en anglais. La Côte d&apos;Ivoire, le
          Gabon et les places commerciales de Douala et Yaoundé cherchent en
          français. Le Cameroun est partagé entre les deux. Une campagne rédigée
          dans une langue puis traduite automatiquement dans l&apos;autre
          fonctionne mal dans les deux, parce que les termes recherchés ne sont
          pas des traductions les uns des autres. Le community management en est
          l&apos;exemple le plus net : c&apos;est le terme francophone standard,
          et une stratégie uniquement anglophone n&apos;apparaît jamais dessus.
        </p>
      </section>

      <section>
        <h2>Ce que nous ne ferons pas</h2>
        <p>
          Nous n&apos;achetons pas d&apos;abonnés, et nous ne présenterons pas
          la croissance du nombre d&apos;abonnés comme un résultat. Nous ne
          promettons pas une position sur Google, parce que personne ne peut
          honnêtement la garantir. Nous ne lançons pas de campagnes vers un site
          incapable de convertir le trafic, et si c&apos;est votre situation,
          nous vous le dirons et corrigerons le site d&apos;abord.
        </p>
      </section>

      <Faq
        locale="fr"
        items={[
          {
            question: "En combien de temps le référencement donne-t-il des résultats ?",
            answer:
              "Trois à six mois avant un mouvement significatif, davantage sur les marchés concurrentiels. Quiconque promet des résultats en quelques semaines achète en réalité de la publicité et l'appelle du référencement, ou vise des termes que personne ne recherche. Les expressions locales et précises progressent plus vite que les termes nationaux génériques.",
          },
          {
            question: "Pouvez-vous garantir la première place sur Google ?",
            answer:
              "Non, et personne ne le peut. Le classement est décidé par Google face à des concurrents qui travaillent eux aussi le sujet. Ce sur quoi nous nous engageons, c'est le travail, le reporting, et une évaluation honnête des termes réellement atteignables pour vous.",
          },
          {
            question: "Travaillez-vous en anglais comme en français ?",
            answer:
              "Oui. Les deux langues sont traitées comme des stratégies distinctes, avec leur propre recherche de mots-clés, et non comme la traduction l'une de l'autre, car les termes recherchés diffèrent au-delà des mots.",
          },
          {
            question: "Quel budget mensuel prévoir ?",
            answer:
              "Cela dépend de si vous avez besoin de référencement, de community management, de publicité, ou des trois, et nous chiffrons selon le périmètre plutôt que de vendre des forfaits figés. Les budgets publicitaires sont distincts de nos honoraires et sont réglés directement aux plateformes par vos soins.",
          },
          {
            question: "Faut-il un nouveau site avant de faire du marketing ?",
            answer:
              "Parfois, et nous vous le dirons plutôt que d'encaisser un abonnement pour envoyer du trafic là où il ne se transformera pas. Un site lent, ou sans moyen évident de vous contacter, gâche tout ce qui est dépensé pour y amener des visiteurs.",
          },
        ]}
      />

      <DocCta
        locale="fr"
        heading="Discutons de votre besoin marketing"
        body="Dites-nous ce que vous vendez et à qui. Nous vous dirons quels canaux méritent votre budget et lesquels non."
        email={SITE.email}
        whatsapp={SITE.whatsapp}
      />

      <RelatedLinks
        locale="fr"
        items={[
          {
            href: "/fr/services/creation-site-internet",
            label: "Site internet",
            note: "Le site vers lequel les campagnes envoient du trafic.",
          },
          {
            href: "/fr/services/identite-visuelle",
            label: "Identité visuelle",
            note: "La marque que portent les campagnes.",
          },
          {
            href: "/fr/services/site-e-commerce",
            label: "E-commerce",
            note: "Là où le marketing se transforme directement en commandes.",
          },
        ]}
      />
    </PageShell>
  );
}
