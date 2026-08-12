import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { metadataForRoute } from "@/lib/routes";
import { PageShell, DocCta, RelatedLinks } from "@/components/page-shell";
import { Faq, ServiceJsonLd } from "@/components/faq";

const PATH = "/fr/services/identite-visuelle";

export const metadata: Metadata = metadataForRoute(PATH);

export default function IdentiteVisuelle() {
  return (
    <PageShell
      path={PATH}
      locale="fr"
      title="Identité visuelle et création de logo"
      lede="Ronixe conçoit des identités visuelles : le logo, la typographie, les couleurs et les règles qui les tiennent ensemble, pour qu'une jeune entreprise inspire la confiance nécessaire pour qu'on achète chez elle."
      crumbs={[
        { label: "Accueil", href: "/fr" },
        { label: "Services", href: "/fr/services" },
      ]}
    >
      <ServiceJsonLd
        name="Identité visuelle et création de logo"
        description="Création de logo, identité visuelle et charte graphique pour les entreprises d'Afrique de l'Ouest."
        path={PATH}
      />

      <section>
        <h2>Un logo n&apos;est pas une identité</h2>
        <p>
          Un logo est un élément parmi d&apos;autres. Une identité est le
          système qui rend chaque support reconnaissable : quelles polices vous
          utilisez et dans quelles graisses, quelle est votre couleur de marque
          en impression comme à l&apos;écran, comment le logo se comporte
          lorsqu&apos;il doit tenir dans un cercle, et ce qui se passe quand il
          se pose sur une photo.
        </p>
        <p>
          Sans ce système, tout dérive. La facture ne ressemble plus au site, la
          publication Facebook utilise un autre orange, et la marque cesse
          d&apos;être lue comme une seule entreprise. C&apos;est exactement ce
          qu&apos;une charte graphique empêche.
        </p>
      </section>

      <section>
        <h2>Ce que vous recevez</h2>
        <ul>
          <li>
            <strong>Le logo</strong> en format vectoriel, dans toutes ses
            variantes de couleur, avec des règles claires de taille minimale et
            de zone de protection.
          </li>
          <li>
            <strong>Un système de couleurs</strong> défini pour l&apos;écran et
            pour l&apos;impression, avec les contrastes vérifiés pour que le
            texte posé sur votre couleur de marque reste lisible.
          </li>
          <li>
            <strong>La typographie</strong>, choisie autant pour sa
            disponibilité que pour son allure. Une police que personne dans
            votre équipe ne peut acquérir est un problème, pas un choix de
            design.
          </li>
          <li>
            <strong>Une charte graphique</strong> assez courte pour être lue.
          </li>
          <li>
            <strong>Les supports appliqués</strong> : photos de profil,
            papier à en-tête, facture, signature électronique, et tout ce que
            vous utilisez chaque semaine.
          </li>
          <li>
            <strong>Les fichiers sources</strong>, remis et vous appartenant.
          </li>
        </ul>
      </section>

      <section>
        <h2>Conçue pour les supports où elle apparaîtra vraiment</h2>
        <p>
          Ici, une marque doit survivre à une enseigne imprimée, à une photo de
          profil WhatsApp de 96 pixels et à une facture photocopiée. Les logos
          qui ne fonctionnent qu&apos;en grand sur fond blanc échouent aux
          trois. Nous testons dans les petites tailles et en une seule couleur
          avant de considérer quoi que ce soit comme terminé.
        </p>
      </section>

      <Faq
        locale="fr"
        items={[
          {
            question: "Combien coûte la création d'un logo ?",
            answer:
              "Moins qu'une identité complète, et nous chiffrons les deux pour que vous puissiez choisir. Un logo seul n'a d'intérêt que si vous disposez déjà du reste du système. Si vous partez de zéro, un logo sans charte graphique revient généralement plus cher à terme, car tout ce qui suit se fait à l'estime.",
          },
          {
            question: "Combien de temps prend la création d'une identité ?",
            answer:
              "Un logo et l'identité de base demandent généralement deux à trois semaines, allers-retours compris. Un système complet avec supports appliqués et charte rédigée prend plus longtemps, et nous fixons le périmètre ainsi que le nombre d'allers-retours avant de commencer.",
          },
          {
            question: "Suis-je propriétaire du design ?",
            answer:
              "Oui. La pleine propriété des fichiers finaux et des sources vous est transférée à la livraison. Nous ne concédons pas sous licence notre propre travail à nos clients.",
          },
          {
            question: "Pouvez-vous refondre l'identité d'une entreprise existante ?",
            answer:
              "Oui. Une refonte demande plus de précautions qu'une création, car il existe déjà une reconnaissance à préserver. Nous auditons ce qui mérite d'être conservé avant de proposer ce qui change, plutôt que de repartir d'une page blanche par défaut.",
          },
          {
            question: "Déposez-vous les marques ?",
            answer:
              "Non, cela relève du juridique et non du design. Nous signalons si un nom ou un logo paraît risquer un conflit avec un signe existant, mais le dépôt doit passer par un avocat ou un conseil en propriété intellectuelle de votre pays.",
          },
        ]}
      />

      <DocCta
        locale="fr"
        heading="Lancer un projet d'identité"
        body="Parlez-nous de l'entreprise et des supports où la marque devra apparaître. Nous cadrerons ce dont vous avez besoin et laisserons de côté le reste."
        email={SITE.email}
        whatsapp={SITE.whatsapp}
      />

      <RelatedLinks
        locale="fr"
        items={[
          {
            href: "/fr/services/creation-site-internet",
            label: "Site internet",
            note: "Le site sur lequel l'identité vient vivre.",
          },
          {
            href: "/fr/services/marketing-digital",
            label: "Marketing digital",
            note: "Mettre la marque terminée devant les bonnes personnes.",
          },
          {
            href: "/fr/services/site-e-commerce",
            label: "E-commerce",
            note: "Là où l'identité devient confiance, et la confiance des ventes.",
          },
        ]}
      />
    </PageShell>
  );
}
