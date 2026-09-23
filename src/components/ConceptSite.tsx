import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";
import {
  burgers,
  Concept,
  instagramUrl,
  mapsUrl,
  sides,
  venueAddress,
  venueName
} from "@/data/restaurant";

type Props = {
  concept: Concept;
  alternate: Concept;
};

export const navItems = [
  { href: "#menu", label: "Menu" },
  { href: "#why-proper", label: "Why Proper" },
  { href: "#visit", label: "Visit" }
];

export function ConceptSite({ concept, alternate }: Props) {
  return (
    <main className={`site theme-${concept.id}`}>
      <div className="announcement">
        <p>Now serving at Rollz Sage Hill</p>
        <a href={mapsUrl} target="_blank" rel="noreferrer">
          Get directions <span aria-hidden="true">↗</span>
        </a>
      </div>

      <header className="site-header">
        <Link href={concept.route} className="wordmark" aria-label="Proper Burger home">
          <span>PROPER</span>
          <span>BURGER</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#menu" className="header-cta">
          View menu
        </a>

        <MobileNav items={navItems} directionsUrl={mapsUrl} />
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Proper Burger · Sage Hill</p>
          <h1>{concept.headline}</h1>
          <p className="hero-intro">{concept.intro}</p>
          <div className="button-row">
            <a href="#menu" className="button button-primary">
              Explore the menu
            </a>
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="button button-secondary">
              Get directions
            </a>
          </div>
          <p className="hero-location">Inside {venueName}</p>
        </div>

        <div className="hero-visual">
          <Image
            src={concept.heroImage}
            alt={concept.heroAlt}
            fill
            priority
            loading="eager"
            sizes="(max-width: 900px) 100vw, 56vw"
          />
          <div className="hero-stamp" aria-hidden="true">
            <span>SMASHED</span>
            <strong>FRESH</strong>
            <span>TO ORDER</span>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Proper Burger highlights">
        <span>Fresh beef</span>
        <span>Crisp smashed edges</span>
        <span>Cheese in every layer</span>
        <span>Calgary · Sage Hill</span>
      </section>

      <section className="menu-section">
        <div className="section-heading" id="menu">
          <div>
            <p className="eyebrow">The burgers</p>
            <h2>{concept.menuHeading}</h2>
          </div>
          <p>{concept.menuIntro}</p>
        </div>

        <div className="burger-grid">
          {burgers.map((item, index) => (
            <article className="menu-card" key={item.name}>
              <div className="menu-card-image">
                <Image
                  src={concept.id === "premium" && item.premiumImage ? item.premiumImage : item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 760px) 100vw, 33vw"
                />
                <span className="item-number">0{index + 1}</span>
              </div>
              <div className="menu-card-copy">
                <p className="menu-tag">{item.tag}</p>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="menu-note">
          <strong>Current prices and availability</strong>
          <p>Ask in store or check Instagram for the latest menu before ordering.</p>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            Check Instagram <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="sides-section" aria-labelledby="sides-title">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">Finish the order</p>
            <h2 id="sides-title">Sides worth making room for.</h2>
          </div>
        </div>

        <div className="sides-grid">
          {sides.map((item) => (
            <article className="side-card" key={item.name}>
              <div className="side-card-image">
                <Image
                  src={concept.id === "premium" && item.premiumImage ? item.premiumImage : item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 760px) 100vw, 33vw"
                />
              </div>
              <div>
                <p className="menu-tag">{item.tag}</p>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="quality-section">
        <div className="quality-kicker"><span>01</span><p>Smashed on the grill</p></div>
        <div className="quality-copy" id="why-proper">
          <p className="eyebrow">Why Proper</p>
          <h2>{concept.qualityHeading}</h2>
          <p>{concept.qualityCopy}</p>
        </div>
        <div className="quality-steps">
          <div><span>02</span><p>Layered with melted cheese</p></div>
          <div><span>03</span><p>Served hot and ready</p></div>
        </div>
      </section>

      <section className="visit-section">
        <div className="visit-image">
          <Image src="/images/proper-storefront.jpg" alt="Proper Burger storefront beside Rollz Ice Cream and Desserts in Sage Hill." fill sizes="(max-width: 900px) 100vw, 52vw" />
        </div>
        <div className="visit-copy" id="visit">
          <p className="eyebrow">Visit Proper Burger</p>
          <h2>Your next burger is in Sage Hill.</h2>
          <p>Find Proper Burger inside {venueName}. Come for the smashburger, stay for the fries, and leave room for dessert.</p>
          <address><span>Address</span><strong>{venueAddress}</strong></address>
          <div className="button-row">
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="button button-primary">Open in Maps</a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="button button-secondary">Instagram</a>
          </div>
        </div>
      </section>

      <section className="closing-cta">
        <p className="eyebrow">Come hungry</p>
        <h2>Make it a Proper one.</h2>
        <a href={mapsUrl} target="_blank" rel="noreferrer" className="button button-primary">Get directions</a>
      </section>

      <footer className="site-footer">
        <Link href={concept.route} className="wordmark" aria-label="Proper Burger home"><span>PROPER</span><span>BURGER</span></Link>
        <p>Smashburgers and crispy sides at Rollz Sage Hill.</p>
        <div><a href="#menu">Menu</a><a href="#visit">Visit</a><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a></div>
      </footer>

      <Link href={alternate.route} className="concept-switcher" aria-label={`Switch to ${alternate.optionLabel} website option`}>
        <span>Website option</span><strong>{concept.alternateLabel}</strong>
      </Link>

      <nav className="mobile-action-bar" aria-label="Quick actions">
        <a href="#menu">View menu</a>
        <a href={mapsUrl} target="_blank" rel="noreferrer">Directions</a>
      </nav>
    </main>
  );
}
