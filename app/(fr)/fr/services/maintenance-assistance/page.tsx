import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { metadataForRoute } from "@/lib/routes";
import { PageShell, DocCta, RelatedLinks } from "@/components/page-shell";
import { Faq, ServiceJsonLd } from "@/components/faq";

const PATH = "/fr/services/maintenance-assistance";

export const metadata: Metadata = metadataForRoute(PATH);

export default function MaintenanceAssistance() {
  return (
    <PageShell
      path={PATH}
      locale="fr"
      title="Maintenance et assistance"
      lede="Ronixe fait vivre ce que nous construisons, et parfois ce que nous n'avons pas construit, après la mise en ligne : corrections, mises à jour et les petits changements dont un site ou une application a besoin en continu."
      crumbs={[
        { label: "Accueil", href: "/fr" },
        { label: "Services", href: "/fr/services" },
      ]}
    >
      <ServiceJsonLd
        name="Maintenance et assistance"
        description="Mises à jour, corrections et améliorations continues pour les sites internet, boutiques e-commerce et applications mobiles après leur mise en ligne."
        path={PATH}
      />

      <section>
        <h2>Ce que couvre l&apos;assistance continue</h2>
        <ul>
          <li>
            <strong>Corrections de bugs</strong>, quand quelque chose qui
            fonctionnait cesse de fonctionner.
          </li>
          <li>
            <strong>Mises à jour de sécurité</strong>, appliquées avant
            qu&apos;elles ne deviennent un problème plutôt qu&apos;après.
          </li>
          <li>
            <strong>Petits changements</strong> : nouveau contenu, nouvelle
            page, parcours ajusté, sans avoir besoin d&apos;un nouveau projet
            à chaque fois.
          </li>
          <li>
            <strong>Surveillance de la disponibilité</strong>, pour savoir
            qu&apos;un site ou une application est en panne avant que vos
            clients ne vous le signalent.
          </li>
          <li>
            <strong>Renouvellement de l&apos;hébergement, du nom de domaine
            et du certificat</strong>, géré pour que rien n&apos;expire en
            silence.
          </li>
        </ul>
      </section>

      <section>
        <h2>Un logiciel se dégrade même sans y toucher</h2>
        <p>
          Un site ou une application qu&apos;on ne touche jamais ne reste pas
          immobile. Les navigateurs évoluent, les systèmes d&apos;exploitation
          évoluent, et les bibliothèques sur lesquelles un produit est
          construit reçoivent des correctifs de sécurité qu&apos;il faut
          appliquer. Les boutiques d&apos;applications imposent régulièrement
          de nouvelles exigences et retirent les applications qui ne s&apos;y
          conforment pas. Rien de tout cela n&apos;est visible avant qu&apos;un
          problème n&apos;apparaisse, généralement au pire moment pour le
          découvrir.
        </p>
        <p>
          Nous préférons garder un produit entretenu plutôt que de le livrer
          et le regarder se dégrader. Si vous avez fait construire par
          quelqu&apos;un d&apos;autre et que rien n&apos;a été touché depuis,
          nous vous dirons honnêtement si cela vaut la peine d&apos;être
          maintenu, ou si une refonte vous coûtera moins cher sur deux ans que
          des rustines successives.
        </p>
      </section>

      <section>
        <h2>Comment l&apos;assistance est cadrée</h2>
        <p>
          Certains clients préfèrent un forfait mensuel avec un délai de
          réponse convenu. D&apos;autres préfèrent nous appeler quand un
          besoin se présente et payer ce travail au moment où il a lieu. Nous
          recommandons l&apos;une ou l&apos;autre formule selon la fréquence
          réelle d&apos;évolution de votre produit, plutôt que de vous vendre
          un forfait dont vous n&apos;avez pas besoin.
        </p>
      </section>

      <Faq
        locale="fr"
        items={[
          {
            question: "Comment la maintenance est-elle facturée ?",
            answer:
              "Soit sous forme de forfait mensuel couvrant un périmètre de mises à jour convenu et un délai de réponse fixé, soit à la demande, facturé au moment où le travail a lieu. Nous recommandons un forfait pour les produits qui évoluent souvent ou pour qui une panne coûte cher, et le paiement à la demande pour le reste.",
          },
          {
            question: "Quel est le délai de réponse en cas de panne ?",
            answer:
              "Cela dépend de la formule. Les clients sous forfait bénéficient d'un délai convenu, généralement le jour ouvré même pour tout ce qui est sérieux. Les demandes ponctuelles sont traitées dans l'ordre d'arrivée, et nous vous dirons honnêtement si quelque chose d'urgent doit passer devant.",
          },
          {
            question: "Pouvez-vous reprendre la maintenance d'un site construit par quelqu'un d'autre ?",
            answer:
              "Souvent oui. Nous examinons d'abord l'existant et vous disons franchement s'il vaut la peine d'être maintenu. Certains projets coûtent moins cher à refaire qu'à réparer indéfiniment, et nous préférons le dire tôt plutôt que de vous facturer le maintien de quelque chose qui devrait être remplacé.",
          },
          {
            question: "Que se passe-t-il si j'arrête le forfait ?",
            answer:
              "Rien n'est retenu. Le code, le nom de domaine et les accès d'hébergement vous appartiennent, que vous gardiez ou non un contrat de maintenance avec nous, et vous pouvez confier le produit à un autre développeur à tout moment.",
          },
          {
            question: "La surveillance est-elle incluse ?",
            answer:
              "Une surveillance de base de la disponibilité fait partie de tout forfait de maintenance, pour que nous soyons informés d'une panne dès son début plutôt qu'au moment où un client se plaint. Une surveillance plus poussée peut être ajoutée pour les produits où cela en vaut le coût.",
          },
        ]}
      />

      <DocCta
        locale="fr"
        heading="Mettre en place une assistance continue"
        body="Dites-nous ce que vous avez et à quelle fréquence cela évolue. Nous recommanderons un forfait ou une formule à la demande, en vous disant franchement laquelle vous coûte le moins cher."
        email={SITE.email}
        whatsapp={SITE.whatsapp}
      />

      <RelatedLinks
        locale="fr"
        items={[
          {
            href: "/fr/services/creation-site-internet",
            label: "Site internet",
            note: "Nouveaux projets, et les refontes vers lesquelles la maintenance mène parfois.",
          },
          {
            href: "/fr/services/automatisation-ia",
            label: "Automatisation IA",
            note: "Des agents et automatisations qui ont aussi besoin d'être surveillés.",
          },
          {
            href: "/fr/services/application-mobile",
            label: "Application mobile",
            note: "Une application a besoin de mises à jour annuelles pour survivre à deux systèmes d'exploitation.",
          },
        ]}
      />
    </PageShell>
  );
}
