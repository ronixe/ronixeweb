import Image from "next/image";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { metadataForRoute } from "@/lib/routes";
import { Backdrop } from "@/components/backdrop";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SocialLinks } from "@/components/social-links";

export const metadata: Metadata = metadataForRoute("/");

/* Inline icons keep the page dependency-free and fully static. */
function WebIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="3"
        y="4"
        width="18"
        height="16"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path d="M3 9h18" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="6.4" cy="6.5" r="0.85" fill="currentColor" />
      <circle cx="9.1" cy="6.5" r="0.85" fill="currentColor" />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="6"
        y="2.5"
        width="12"
        height="19"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M10.5 18.5h3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CommerceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 7h14l-1.2 12.2a1.6 1.6 0 0 1-1.6 1.3H7.8a1.6 1.6 0 0 1-1.6-1.3L5 7Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9 9V6.2a3 3 0 0 1 6 0V9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="page">
      {/* Ambient background layers */}
      <Backdrop />

      {/* The home page keeps its in-page anchor to the service cards below. */}
      <SiteHeader servicesHref="#services" />

      {/* Hero */}
      <section className="hero" id="top">
        <div className="badge">
          <span className="badge-line" aria-hidden="true" />
          <span className="badge-pill">
            <span className="badge-chip" aria-hidden="true">
              <Image
                src="/brand/mark-white.svg"
                alt={`${SITE.name} logo`}
                width={16}
                height={16}
              />
            </span>
            From conception to launch
          </span>
          <span className="badge-line right" aria-hidden="true" />
        </div>

        {/* Each line is its own mask so the headline can rise into view. */}
        <h1 className="title">
          <span className="title-line">
            <span className="title-line-in">We build applications</span>
          </span>
          <span className="title-line">
            <span className="title-line-in">from conception to launch.</span>
          </span>
        </h1>

        <p className="sub">
          Ronixe is a software development company. We guide you from the
          initial idea through design and development as your single,
          dependable technical partner.
        </p>

        <div className="cta">
          <a href={SITE.whatsapp} className="btn btn--orange">
            Book a call
          </a>
          <a href={`mailto:${SITE.email}`} className="btn btn--glass">
            Email us
          </a>
        </div>

        <SocialLinks label={`${SITE.name} on social media`} />

        {/* Feature cards — 1-2-1 grid matching the reference */}
        <div className="cards" id="services">
          <article className="card">
            <div className="card-head">
              <span className="card-icon">
                <WebIcon />
              </span>
              <h2 className="card-title">Web</h2>
            </div>
            <p className="card-desc">
              Custom websites and web platforms built for your business needs
            </p>
          </article>

          <article className="card card--wide card--highlight">
            <div className="card-head">
              <span className="card-icon">
                <MobileIcon />
              </span>
              <h2 className="card-title">Mobile</h2>
            </div>
            <p className="card-desc">
              Applications for iOS and Android built for a smooth user
              experience
            </p>
          </article>

          <article className="card">
            <div className="card-head">
              <span className="card-icon">
                <CommerceIcon />
              </span>
              <h2 className="card-title">E-Commerce</h2>
            </div>
            <p className="card-desc">
              Online stores with dashboards, product management and payments
            </p>
          </article>
        </div>
      </section>

      {/* Slim footer. Trust signals (NAP) plus the only crawl path to the
          inner pages, which keeps the SEO surface off the home page itself. */}
      <SiteFooter altPath="/fr" />
    </main>
  );
}
