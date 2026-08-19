import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { metadataForRoute } from "@/lib/routes";
import { PageShell, DocCta, RelatedLinks } from "@/components/page-shell";
import { Faq, ServiceJsonLd } from "@/components/faq";

const PATH = "/fr/services/automatisation-ia";

export const metadata: Metadata = metadataForRoute(PATH);

export default function AutomatisationIa() {
  return (
    <PageShell
      path={PATH}
      locale="fr"
      title="Automatisation IA"
      lede="Ronixe conçoit des agents IA, de l'automatisation de processus et des fonctionnalités IA intégrées aux sites, applications et outils internes, pour que le logiciel prenne en charge la partie répétitive et que votre équipe se concentre sur le jugement."
      crumbs={[
        { label: "Accueil", href: "/fr" },
        { label: "Services", href: "/fr/services" },
      ]}
    >
      <ServiceJsonLd
        name="Automatisation IA"
        description="Agents IA, chatbots, automatisation de processus et fonctionnalités IA intégrées aux sites, applications et outils internes pour les entreprises d'Afrique de l'Ouest."
        path={PATH}
      />

      <section>
        <h2>Ce que nous construisons</h2>
        <ul>
          <li>
            <strong>Agents et chatbots IA.</strong> Sur WhatsApp, un site
            internet ou un outil interne, pour répondre aux questions qui
            reviennent souvent et passer la main à une personne pour celles
            qui en ont besoin.
          </li>
          <li>
            <strong>Automatisation de processus.</strong> Connecter les
            outils que vous utilisez déjà pour qu&apos;une tâche qui demande
            cinq étapes manuelles n&apos;en demande plus qu&apos;une, ou
            aucune.
          </li>
          <li>
            <strong>Fonctionnalités IA dans votre produit.</strong> Une
            recherche qui comprend l&apos;intention plutôt que le mot-clé
            exact, de la génération de contenu, des recommandations et des
            capacités similaires intégrées directement dans le site ou
            l&apos;application, pas ajoutées après coup.
          </li>
          <li>
            <strong>Outils internes.</strong> Tableaux de bord, rapports et
            petits utilitaires qui remplacent le travail manuel et répétitif
            qui existe déjà dans l&apos;entreprise.
          </li>
        </ul>
      </section>

      <section>
        <h2>Où l&apos;automatisation vaut le coût, et où elle ne le vaut pas</h2>
        <p>
          Tout ne doit pas être automatisé. Certaines tâches ont besoin du
          jugement d&apos;une personne, et un agent qui devine au lieu de
          demander cause plus de dégâts que le processus manuel qu&apos;il
          remplace. Nous vous le dirons franchement quand c&apos;est le cas,
          et nous recommandons généralement d&apos;automatiser correctement
          un seul processus bien défini avant de passer au suivant, plutôt
          que de tout automatiser d&apos;un coup.
        </p>
        <p>
          L&apos;automatisation vaut aussi ce que vaut le processus qu&apos;elle
          reproduit. Si le processus actuel est incohérent, l&apos;automatiser
          ne fait que rendre cette incohérence plus rapide. Parfois, la
          première étape utile est de corriger le processus, pas
          d&apos;écrire l&apos;automatisation.
        </p>
      </section>

      <section>
        <h2>Conçu pour continuer à fonctionner, pas seulement pour bien démontrer</h2>
        <p>
          Un agent qui ne connaît pas la réponse doit le dire, et passer la
          main à une personne, plutôt que d&apos;en inventer une qui semble
          plausible. Nous concevons pour ce cas d&apos;échec dès le départ,
          car c&apos;est le cas normal pour tout ce qui répond à de vraies
          questions de clients, pas un cas particulier.
        </p>
        <p>
          L&apos;usage de l&apos;IA a aussi un coût continu qui peut croître
          sans surveillance, et il touche des données clients qui doivent
          être traitées correctement. Nous concevons en tenant compte des
          deux : un usage surveillé et plafonné plutôt qu&apos;illimité, et
          des données clients conservées uniquement là où c&apos;est
          nécessaire.
        </p>
      </section>

      <Faq
        locale="fr"
        items={[
          {
            question: "Combien coûte l'automatisation IA ?",
            answer:
              "Cela dépend du nombre de systèmes que l'automatisation doit connecter et du niveau de jugement que la tâche exige. Nous cadrons le processus précis avant de chiffrer un montant fixe, plutôt que de vendre un forfait générique qui pourrait ne pas correspondre à ce que vous devez réellement automatiser.",
          },
          {
            question: "Ai-je besoin de mon propre modèle d'IA ?",
            answer:
              "Non. Nous nous appuyons sur des fournisseurs d'IA existants plutôt que d'entraîner des modèles depuis zéro, ce qui représente un coût inutile pour presque tous les cas que nous rencontrons. Le travail d'ingénierie consiste à connecter correctement le modèle à vos données et à vos systèmes, et à gérer les cas où il ne doit pas répondre.",
          },
          {
            question: "Un chatbot va-t-il simplement inventer des réponses ?",
            answer:
              "Pas s'il est bien construit. Nous limitons ce sur quoi l'agent peut répondre, et il passe la main à une personne plutôt que de deviner quand une question sort de ce cadre. Un agent qui invente des réponses fausses avec assurance est une erreur de conception, et nous la traitons comme telle, à corriger avant la mise en ligne, pas après.",
          },
          {
            question: "L'automatisation peut-elle s'ajouter à un système que j'ai déjà ?",
            answer:
              "Généralement oui. Si nous pouvons atteindre le système via une API ou une base de données, une automatisation peut être construite autour sans tout reconstruire. Les systèmes fermés sans point d'accès sont l'exception, et nous vous le dirons avant que vous ne dépensiez quoi que ce soit.",
          },
          {
            question: "Mes données sont-elles en sécurité ?",
            answer:
              "Nous concevons les automatisations pour n'utiliser que les données réellement nécessaires à la tâche, et nous vous disons clairement où vont les données, y compris vers quel fournisseur d'IA. Si un cas d'usage exige que les données clients ne quittent jamais vos systèmes, nous cadrons l'automatisation autour de cette contrainte plutôt que de la contourner par commodité.",
          },
        ]}
      />

      <DocCta
        locale="fr"
        heading="Lancer un projet d'automatisation"
        body="Dites-nous quelle tâche demande le plus d'effort manuel répété. Nous vous dirons honnêtement si l'automatiser en vaut la peine, et ce que cela demande."
        email={SITE.email}
        whatsapp={SITE.whatsapp}
      />

      <RelatedLinks
        locale="fr"
        items={[
          {
            href: "/fr/services/creation-site-internet",
            label: "Site internet",
            note: "Le produit dans lequel vit généralement un agent ou une automatisation.",
          },
          {
            href: "/fr/services/application-mobile",
            label: "Application mobile",
            note: "Fonctionnalités IA et automatisation intégrées à une application, pas seulement un site.",
          },
          {
            href: "/fr/services/developpement-integration-api",
            label: "Intégration API",
            note: "Les connexions dont dépend une automatisation pour atteindre vos autres systèmes.",
          },
        ]}
      />
    </PageShell>
  );
}
