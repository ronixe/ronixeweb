export type Locale = "en" | "fr";

export const LOCALES: readonly Locale[] = ["en", "fr"];

/** The locale served at the site root. French lives under /fr. */
export const DEFAULT_LOCALE: Locale = "en";

/**
 * Interface strings. Page copy is not here: each French page is written as
 * French rather than translated from the English, because the search terms
 * differ in more than wording. This dictionary only covers the chrome that
 * repeats on every page.
 */
export const UI = {
  en: {
    htmlLang: "en",
    ogLocale: "en_US",
    services: "Services",
    contact: "Contact",
    emailUs: "Email us",
    bookCall: "Book a call",
    home: "Home",
    footerNav: "Footer",
    primaryNav: "Primary",
    breadcrumb: "Breadcrumb",
    rightsReserved: "All rights reserved.",
    relatedServices: "Related services",
    commonQuestions: "Common questions",
    switchTo: "Français",
    switchLabel: "Voir cette page en français",
  },
  fr: {
    htmlLang: "fr",
    ogLocale: "fr_FR",
    services: "Services",
    contact: "Contact",
    emailUs: "Écrivez-nous",
    bookCall: "Prendre rendez-vous",
    home: "Accueil",
    footerNav: "Pied de page",
    primaryNav: "Principale",
    breadcrumb: "Fil d'Ariane",
    rightsReserved: "Tous droits réservés.",
    relatedServices: "Services associés",
    commonQuestions: "Questions fréquentes",
    switchTo: "English",
    switchLabel: "View this page in English",
  },
} as const;

export function ui(locale: Locale) {
  return UI[locale];
}
