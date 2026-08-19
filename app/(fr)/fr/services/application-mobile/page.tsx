import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { metadataForRoute } from "@/lib/routes";
import { PageShell, DocCta, RelatedLinks } from "@/components/page-shell";
import { Faq, ServiceJsonLd } from "@/components/faq";

const PATH = "/fr/services/application-mobile";

export const metadata: Metadata = metadataForRoute(PATH);

export default function ApplicationMobile() {
  return (
    <PageShell
      path={PATH}
      locale="fr"
      title="Développement d'application mobile"
      lede="Ronixe conçoit et développe des applications iOS et Android pour les entreprises du Cameroun et d'Afrique de l'Ouest qui ont besoin d'être dans la main de leurs clients plutôt que dans un onglet de navigateur."
      crumbs={[
        { label: "Accueil", href: "/fr" },
        { label: "Services", href: "/fr/services" },
      ]}
    >
      <ServiceJsonLd
        name="Développement d'application mobile"
        description="Développement d'applications iOS et Android pour les entreprises d'Afrique de l'Ouest."
        path={PATH}
      />

      <section>
        <h2>Avez-vous vraiment besoin d&apos;une application ?</h2>
        <p>
          Souvent la réponse est non, et nous vous le dirons. Une application
          coûte plus cher qu&apos;un site, doit être maintenue face à deux
          systèmes d&apos;exploitation qui évoluent chaque année, et demande au
          client d&apos;installer quelque chose avant de pouvoir
          l&apos;utiliser. Si votre produit se consulte une fois sans qu&apos;on
          y revienne, un site mobile rapide vous servira mieux.
        </p>
        <p>
          Une application se justifie quand vous avez besoin de ce que le
          navigateur ne sait pas faire : fonctionner hors connexion, envoyer des
          notifications, accéder à l&apos;appareil photo ou à la position, ou
          servir un client qui l&apos;ouvre plusieurs fois par semaine.
        </p>
      </section>

      <section>
        <h2>Pensée pour les conditions réelles</h2>
        <ul>
          <li>
            <strong>Tolérance au hors-ligne.</strong> La connexion se coupe. Une
            application qui tombe en même temps est une application que
            l&apos;on désinstalle. Les actions sont mises en file localement
            puis synchronisées au retour du réseau.
          </li>
          <li>
            <strong>Consommation de données maîtrisée.</strong> Les données
            coûtent cher ici. Nous gardons les échanges légers plutôt que de
            livrer une application qui épuise un forfait en une semaine.
          </li>
          <li>
            <strong>Appareils de milieu de gamme.</strong> La cible est le
            téléphone que vos clients possèdent réellement, pas le dernier
            modèle en vitrine.
          </li>
          <li>
            <strong>Mobile money intégré.</strong> Paiements MTN MoMo et Orange
            Money directement dans l&apos;application, sans renvoyer vers un
            navigateur.
          </li>
        </ul>
      </section>

      <section>
        <h2>Publication et suivi</h2>
        <p>
          Nous prenons en charge la soumission sur l&apos;App Store et Google
          Play, y compris le processus de validation, les fiches de présentation
          et les captures d&apos;écran qui décident de l&apos;installation. Les
          deux boutiques refusent des applications pour des raisons qui ne sont
          pas évidentes la première fois, et c&apos;est notre problème à
          résoudre, pas le vôtre.
        </p>
        <p>
          Après la mise en ligne, une application doit être maintenue. Les
          systèmes évoluent chaque année et les boutiques imposent de nouvelles
          exigences régulièrement. Une application laissée sans suivi pendant
          deux ans cesse généralement de fonctionner.
        </p>
      </section>

      <Faq
        locale="fr"
        items={[
          {
            question: "Combien coûte le développement d'une application mobile ?",
            answer:
              "Nettement plus qu'un site internet, et la fourchette est large car les applications varient davantage. Nous cadrons et annonçons un montant fixe avant de commencer. Si le budget dont vous disposez ne correspond pas à l'application décrite, nous vous le dirons dès le premier échange plutôt qu'après un acompte.",
          },
          {
            question: "Faut-il commencer par iOS ou par Android ?",
            answer:
              "Sur la plupart des marchés ouest-africains, Android d'abord, car c'est ce qu'utilise la grande majorité des clients. Nous développons généralement en multiplateforme pour livrer les deux ensemble, mais si le budget impose un choix, Android est presque toujours le bon ici.",
          },
          {
            question: "L'application peut-elle encaisser par mobile money ?",
            answer:
              "Oui. MTN Mobile Money et Orange Money peuvent être intégrés directement dans l'application pour que le client paie sans en sortir. C'est le même type de travail que celui que nous menons dans le cadre du développement d'API.",
          },
          {
            question: "L'application fonctionnera-t-elle sans internet ?",
            answer:
              "Elle le peut, et pour la plupart des usages ouest-africains elle le devrait. Nous intégrons la tolérance au hors-ligne dès la conception plutôt que de l'ajouter après coup, car la rajouter ensuite implique généralement de réécrire la façon dont l'application stocke ses données.",
          },
          {
            question: "À qui appartiennent l'application et les fiches boutique ?",
            answer:
              "À vous. Les comptes développeurs sont enregistrés au nom de votre entreprise et le code vous appartient. Si vous travaillez plus tard avec quelqu'un d'autre, rien n'a besoin de nous être redemandé.",
          },
        ]}
      />

      <DocCta
        locale="fr"
        heading="Discutons de votre projet d'application"
        body="Décrivez ce que l'application doit faire. Nous vous dirons si une application est vraiment nécessaire, et ce qu'elle demande si c'est le cas."
        email={SITE.email}
        whatsapp={SITE.whatsapp}
      />

      <RelatedLinks
        locale="fr"
        items={[
          {
            href: "/fr/services/developpement-integration-api",
            label: "Intégration API",
            note: "Paiements MTN MoMo et Orange Money, et le backend derrière l'application.",
          },
          {
            href: "/fr/services/creation-site-internet",
            label: "Site internet",
            note: "Souvent la réponse la moins chère au même besoin.",
          },
          {
            href: "/fr/services/conception-ui-ux",
            label: "Conception UI/UX",
            note: "Icônes, parcours d'écran et identité autour de l'application.",
          },
        ]}
      />
    </PageShell>
  );
}
