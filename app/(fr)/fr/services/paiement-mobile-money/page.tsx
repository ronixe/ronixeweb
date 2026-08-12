import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { metadataForRoute } from "@/lib/routes";
import { PageShell, DocCta, RelatedLinks } from "@/components/page-shell";
import { Faq, ServiceJsonLd } from "@/components/faq";

const PATH = "/fr/services/paiement-mobile-money";

export const metadata: Metadata = metadataForRoute(PATH);

export default function PaiementMobileMoney() {
  return (
    <PageShell
      path={PATH}
      locale="fr"
      title="Intégration Mobile Money : MTN MoMo et Orange Money"
      lede="L'intégration mobile money relie directement votre site ou votre application à MTN Mobile Money et Orange Money, pour que vos clients paient depuis le compte où se trouve déjà leur argent plutôt qu'avec une carte bancaire qu'ils ne possèdent pas."
      crumbs={[
        { label: "Accueil", href: "/fr" },
        { label: "Services", href: "/fr/services" },
      ]}
    >
      <ServiceJsonLd
        name="Intégration Mobile Money"
        description="Intégration des API MTN Mobile Money et Orange Money sur les sites internet, boutiques en ligne et applications mobiles."
        path={PATH}
      />

      <section>
        <h2>Pourquoi le paiement par carte vous fait perdre des ventes</h2>
        <p>
          La détention de cartes bancaires reste faible dans une grande partie
          de l&apos;Afrique de l&apos;Ouest et centrale, alors que les comptes
          mobile money sont presque universels. Un tunnel de paiement qui
          n&apos;accepte que Visa et Mastercard demande à la majorité de vos
          clients quelque chose qu&apos;ils n&apos;ont pas, et ils abandonnent.
        </p>
        <p>
          Ajouter le mobile money est généralement le changement le plus
          rentable que vous puissiez apporter à une boutique en ligne dans cette
          région. Ce n&apos;est pas une option de confort : pour la plupart des
          commerçants camerounais et ivoiriens, c&apos;est la différence entre
          encaisser et ne pas encaisser.
        </p>
      </section>

      <section>
        <h2>Les réseaux que nous intégrons</h2>
        <div className="doc-table-wrap">
          <table>
            <thead>
              <tr>
                <th>Réseau</th>
                <th>Couverture</th>
                <th>Usage courant</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>MTN Mobile Money</td>
                <td>
                  Cameroun, Ghana, Côte d&apos;Ivoire, Bénin, Rwanda, Zambie,
                  Ouganda, Eswatini
                </td>
                <td>Encaissements, décaissements, facturation récurrente</td>
              </tr>
              <tr>
                <td>Orange Money</td>
                <td>
                  Cameroun, Côte d&apos;Ivoire, Mali, Sénégal, Guinée, RDC et
                  d&apos;autres
                </td>
                <td>Paiement web, encaissements marchands</td>
              </tr>
              <tr>
                <td>Agrégateurs</td>
                <td>Multi-réseaux, multi-pays</td>
                <td>
                  Une seule intégration pour plusieurs réseaux, utile si vous
                  vendez au-delà des frontières
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Au Cameroun, la plupart des commerçants ont besoin de MTN et
          d&apos;Orange : les clients sont répartis entre les deux réseaux et ne
          changeront pas d&apos;opérateur pour acheter chez vous.
        </p>
      </section>

      <section>
        <h2>Ce que comprend l&apos;intervention</h2>
        <ul>
          <li>
            <strong>Ouverture du compte marchand.</strong> Accompagnement dans
            les démarches auprès de l&apos;opérateur, qui constituent souvent
            l&apos;étape la plus lente et que vous menez en tant que titulaire
            du compte.
          </li>
          <li>
            <strong>Développement en environnement de test.</strong>{" "}
            L&apos;intégration est écrite et validée sur le sandbox de
            l&apos;opérateur avant tout mouvement d&apos;argent réel.
          </li>
          <li>
            <strong>Flux d&apos;encaissement.</strong> Le client valide le
            paiement sur son téléphone, et votre site attend correctement le
            résultat au lieu de présumer que tout s&apos;est bien passé.
          </li>
          <li>
            <strong>Webhooks et rapprochement.</strong> Les paiements qui
            arrivent en retard, en double ou jamais sont le cas normal et non le
            cas limite. C&apos;est là que la plupart des intégrations
            improvisées cassent.
          </li>
          <li>
            <strong>Gestion des échecs.</strong> Solde insuffisant, code erroné,
            expiration et refus réseau reçoivent chacun un message clair plutôt
            qu&apos;une erreur générique.
          </li>
          <li>
            <strong>Mise en production.</strong> Identifiants réels, test sur
            une vraie transaction, et supervision pour que vous soyez informé
            des échecs avant vos clients.
          </li>
        </ul>
      </section>

      <section>
        <h2>Le rapprochement est la partie que l&apos;on sous-estime</h2>
        <p>
          Encaisser un paiement est simple. Savoir avec certitude quels
          paiements ont abouti ne l&apos;est pas. Les confirmations mobile money
          peuvent arriver plusieurs minutes après que le client a fermé son
          navigateur, arriver plusieurs fois pour un seul paiement, ou ne jamais
          arriver alors que l&apos;argent a bel et bien été transféré.
        </p>
        <p>
          Une intégration correcte considère le webhook comme la source de
          vérité, traite les notifications répétées sans créditer deux fois la
          même commande, et se rapproche des relevés de l&apos;opérateur plutôt
          que de se fier à ce que le navigateur a affiché. Se tromper ici
          revient soit à expédier des marchandises non payées, soit à bloquer
          des commandes pourtant réglées.
        </p>
      </section>

      <Faq
        locale="fr"
        items={[
          {
            question: "Combien de temps prend une intégration mobile money ?",
            answer:
              "Le développement demande généralement une à deux semaines pour un flux d'encaissement standard. Le délai global dépend surtout de la rapidité de validation du compte marchand par l'opérateur, ce qui échappe à notre contrôle et prend parfois plus de temps que le développement lui-même.",
          },
          {
            question: "Puis-je accepter à la fois MTN MoMo et Orange Money ?",
            answer:
              "Oui, et au Cameroun c'est généralement indispensable. Vos clients sont répartis entre les deux réseaux et ne changeront pas d'opérateur pour finaliser un achat. Chaque réseau constitue une intégration distincte, même si la logique de commande et de rapprochement autour reste commune.",
          },
          {
            question:
              "Faut-il une entreprise enregistrée pour encaisser par mobile money ?",
            answer:
              "Pour un compte marchand, oui. Les opérateurs exigent les documents d'enregistrement de l'entreprise lors de l'ouverture. Nous pouvons développer et tester l'intégration complète en environnement de test pendant que votre dossier est en cours, afin que rien n'attende le code.",
          },
          {
            question:
              "Peut-on ajouter le mobile money à un site que j'ai déjà ?",
            answer:
              "En général oui. Si le site tourne sur une plateforme où nous pouvons déployer, le flux de paiement peut être ajouté sans tout refaire. S'il s'agit d'une plateforme fermée sans accès au serveur, nous vous le dirons avant que vous n'engagiez la moindre dépense.",
          },
          {
            question: "Que se passe-t-il si un paiement échoue en cours de route ?",
            answer:
              "La commande reste en attente plutôt que d'être confirmée ou annulée, et se résout à l'arrivée du webhook de l'opérateur ou lors d'un contrôle de rapprochement. Le client voit un statut exact plutôt qu'une fausse confirmation.",
          },
        ]}
      />

      <DocCta
        locale="fr"
        heading="Activer le mobile money sur votre site"
        body="Indiquez-nous les réseaux qu'utilisent vos clients et ce que vous vendez. Nous vous dirons ce que l'intégration implique et ce qu'elle coûte avant tout engagement."
        email={SITE.email}
        whatsapp={SITE.whatsapp}
      />

      <RelatedLinks
        locale="fr"
        items={[
          {
            href: "/fr/services/site-e-commerce",
            label: "E-commerce",
            note: "Une boutique complète avec le mobile money intégré dès le départ.",
          },
          {
            href: "/fr/services/creation-site-internet",
            label: "Site internet",
            note: "Sites et applications web sur mesure, conçus pour durer.",
          },
          {
            href: "/fr/services/application-mobile",
            label: "Application mobile",
            note: "Applications iOS et Android capables d'encaisser directement.",
          },
        ]}
      />
    </PageShell>
  );
}
