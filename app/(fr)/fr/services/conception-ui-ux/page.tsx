import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { metadataForRoute } from "@/lib/routes";
import { PageShell, DocCta, RelatedLinks } from "@/components/page-shell";
import { Faq, ServiceJsonLd } from "@/components/faq";

const PATH = "/fr/services/conception-ui-ux";

export const metadata: Metadata = metadataForRoute(PATH);

export default function ConceptionUiUx() {
  return (
    <PageShell
      path={PATH}
      locale="fr"
      title="Conception UI/UX"
      lede="Ronixe conçoit la couche d'interface des produits web et mobiles : les écrans, les parcours et les interactions que l'utilisateur touche réellement, pensés pour les appareils et les connexions que nos clients ont vraiment."
      crumbs={[
        { label: "Accueil", href: "/fr" },
        { label: "Services", href: "/fr/services" },
      ]}
    >
      <ServiceJsonLd
        name="Conception UI/UX"
        description="Design d'interface clair et ergonomique pour les produits web et mobiles au Cameroun et en Afrique."
        path={PATH}
      />

      <section>
        <h2>Une conception qu&apos;un développeur peut réellement construire</h2>
        <p>
          Une maquette n&apos;est pas un produit. Elle en devient un quand
          quelqu&apos;un la construit, et beaucoup de travail de conception
          échoue précisément à cette étape : un écran qui a l&apos;air juste
          dans un logiciel de design mais qui n&apos;a pas de réponse pour une
          connexion lente, un état vide, ou un nom plus long que le texte de
          remplissage.
        </p>
        <p>
          Chez Ronixe, la même équipe conçoit l&apos;interface et la
          construit, donc un écran n&apos;est considéré comme terminé que
          lorsqu&apos;il fonctionne comme un vrai produit sur un vrai
          appareil, pas seulement comme une image statique.
        </p>
      </section>

      <section>
        <h2>Ce que vous recevez</h2>
        <ul>
          <li>
            <strong>Wireframes et parcours utilisateur</strong>, pour que la
            structure du produit soit validée avant tout travail visuel.
          </li>
          <li>
            <strong>Un système de design</strong> : les composants, les
            espacements et les règles typographiques utilisés de façon
            cohérente sur tous les écrans, plutôt qu&apos;un ensemble de pages
            isolées qui divergent avec le temps.
          </li>
          <li>
            <strong>Des prototypes cliquables</strong>, pour tester un
            parcours avec de vrais utilisateurs avant la moindre ligne de
            code.
          </li>
          <li>
            <strong>Des zones tactiles accessibles</strong> et un texte
            lisible en plein soleil sur un écran d&apos;entrée de gamme.
          </li>
          <li>
            <strong>Des fichiers et spécifications de transmission</strong>,
            si vous avez déjà un développeur et n&apos;avez besoin que du
            design.
          </li>
        </ul>
      </section>

      <section>
        <h2>Conçu pour les conditions réelles</h2>
        <p>
          Un formulaire de douze champs coûte plus cher sur un clavier de
          téléphone avec une connexion instable que sur un ordinateur avec
          clavier et fibre. Nous concevons des formulaires courts, des états
          d&apos;erreur qui pardonnent, et des écrans qui restent utilisables
          quand une requête réseau prend trois secondes au lieu de trente
          millisecondes, parce que c&apos;est le cas normal pour la plupart
          des clients de nos clients, pas l&apos;exception.
        </p>
      </section>

      <Faq
        locale="fr"
        items={[
          {
            question: "Combien coûte la conception UI/UX ?",
            answer:
              "Cela dépend du nombre d'écrans et du fait que vous ayez besoin d'un système de design complet ou de quelques pages ponctuelles. Nous cadrons et chiffrons un montant fixe avant de commencer, en séparant le devis de la conception de celui du développement.",
          },
          {
            question: "Combien de temps prend un projet de conception ?",
            answer:
              "Un produit ciblé avec une dizaine d'écrans demande généralement deux à trois semaines, des wireframes jusqu'à un prototype testé. Un système de design complet pour un produit plus large prend plus longtemps, et nous validons le périmètre avant de commencer.",
          },
          {
            question: "Concevez-vous uniquement les produits que vous construisez aussi ?",
            answer:
              "Non. Nous concevons aussi des produits qu'un autre développeur construira, avec des fichiers et des spécifications propres à la transmission. Nous recommandons de tester la transmission sur un petit écran en premier, car c'est souvent là que la conception et la construction commencent à diverger.",
          },
          {
            question: "Pouvez-vous refondre un site ou une application existante ?",
            answer:
              "Oui. Nous auditons ce qui fonctionne avant de proposer des changements, plutôt que de tout remplacer par défaut. Parfois, le problème est un seul écran confus, pas l'ensemble du produit.",
          },
          {
            question: "Testez-vous les designs avec de vrais utilisateurs ?",
            answer:
              "Pour les produits où cela compte, oui, généralement un petit tour de tests sur un prototype cliquable avant le développement. Pour des sites plus simples, le coût d'un test formel n'en vaut souvent pas la peine, et nous vous le dirons si c'est le cas.",
          },
        ]}
      />

      <DocCta
        locale="fr"
        heading="Lancer un projet de conception"
        body="Dites-nous ce que le produit doit faire et qui va l'utiliser. Nous cadrerons le travail de conception et vous dirons honnêtement si vous avez besoin de moins que vous ne le pensez."
        email={SITE.email}
        whatsapp={SITE.whatsapp}
      />

      <RelatedLinks
        locale="fr"
        items={[
          {
            href: "/fr/services/creation-site-internet",
            label: "Site internet",
            note: "Là où le design est construit, par la même équipe qui l'a dessiné.",
          },
          {
            href: "/fr/services/application-mobile",
            label: "Application mobile",
            note: "Conception d'interface pour iOS et Android, pas un site réduit.",
          },
          {
            href: "/fr/services/developpement-integration-api",
            label: "Intégration API",
            note: "Connecter l'interface terminée aux données derrière elle.",
          },
        ]}
      />
    </PageShell>
  );
}
