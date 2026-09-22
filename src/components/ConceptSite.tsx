import Image from "next/image";
import Link from "next/link";
import { Concept, instagramUrl, mapsUrl, menu, promo, venueAddress, venueName } from "@/data/restaurant";

type Props = {
  concept: Concept;
  alternate: Concept;
};

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#experience", label: "Experience" },
  { href: "#story", label: "Story" },
  { href: "#visit", label: "Visit" }
];

export function ConceptSite({ concept, alternate }: Props) {
  const burgers = menu.filter((item) => item.category === "Burgers");
  const chicken = menu.find((item) => item.category === "Chicken");
  const sidesAndDrinks = menu.filter((item) => item.category === "Sides" || item.category === "Drinks");

  return (
    <main className={`site theme-${concept.id}`}>
      <header className="site-header">
        <Link href={concept.route} className="brand" aria-label={`${concept.name} ${concept.label}`}>
          <span className="brand-mark">PB</span>
          <span>
            <strong>{concept.name}</strong>
            <small>{concept.label}</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <Link href={alternate.route} className="ghost-link">
            {concept.switchLabel}
          </Link>
          <a href="#visit" className="order-link">
            Order
          </a>
        </div>
        <details className="mobile-nav">
          <summary>Menu</summary>
          <div>
            {navItems.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
            <Link href={alternate.route}>{concept.switchLabel}</Link>
          </div>
        </details>
      </header>

      <section className="hero" id="home">
        <Image
          src={concept.image}
          alt={concept.imageAlt}
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">{concept.eyebrow}</p>
          <h1>{concept.headline}</h1>
          <p>{concept.intro}</p>
          <div className="hero-actions">
            <a href="#menu" className="primary-button">
              View Menu
            </a>
            <a href="#visit" className="secondary-button">
              Visit / Order
            </a>
          </div>
          <p className="hero-note">{concept.heroNote}</p>
        </div>
      </section>

      <section className="quick-panel" aria-label="Concept summary">
        <div>
          <span>Location</span>
          <strong>{venueAddress}</strong>
        </div>
        <div>
          <span>Venue</span>
          <strong>{venueName}</strong>
        </div>
        <div>
          <span>Ordering</span>
          <strong>Visit us in store</strong>
        </div>
      </section>

      <section className="promo-banner" aria-label="Featured burger promotion">
        <div className="promo-copy">
          <p className="eyebrow">{promo.label}</p>
          <h2>{promo.title}</h2>
          <p>{promo.detail}</p>
          <div className="promo-actions">
            <a href="#menu" className="primary-button">
              View Deal
            </a>
            <a href="#menu" className="secondary-button surface-button">
              Build A Meal
            </a>
          </div>
        </div>
        <div className="promo-price">
          <span>{promo.priceLine}</span>
        </div>
        <div className="promo-image">
          <Image src={promo.image} alt={promo.imageAlt} fill sizes="(max-width: 900px) 100vw, 34vw" />
        </div>
      </section>

      <section className="section intro-section" aria-label="Website overview">
        <div className="intro-copy">
          <p className="eyebrow">Burgers Meet Dessert</p>
          <h2>A proper smashburger stop inside Rollz.</h2>
          <p>
            One stop for smashed beef, crispy chicken, loaded fries, cold drinks, and the Rollz desserts Calgary already knows.
          </p>
        </div>
        <div className="intro-grid">
          {concept.highlights.map((highlight) => (
            <article key={highlight}>
              <span>{highlight}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section menu-section" id="menu">
        <div className="section-heading">
          <p className="eyebrow">The Lineup</p>
          <h2>Pick your smash.</h2>
          <p>{concept.menuIntro}</p>
        </div>
        <div className="burger-lineup" aria-label="Smashburgers">
          {burgers.map((item, index) => (
            <article className={`burger-card burger-card-${index + 1}`} key={item.name}>
              <div className="burger-visual">
                <Image src={item.image!} alt={item.imageAlt ?? item.name} fill sizes="(max-width: 900px) 92vw, 32vw" />
                <span className="burger-count">{index + 1}</span>
              </div>
              <div className="burger-copy">
                <div>
                  <p className="menu-kicker">{item.tags?.[0]}</p>
                  <h3>{item.name}</h3>
                </div>
                <strong className="burger-price">{item.price}</strong>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="menu-supporting">
          {chicken && (
            <article className="chicken-feature">
              <div className="chicken-image">
                <Image src={chicken.image!} alt={chicken.imageAlt ?? chicken.name} fill sizes="(max-width: 900px) 100vw, 52vw" />
              </div>
              <div className="chicken-copy">
                <p className="eyebrow">Crispy Side Of The Menu</p>
                <h3>{chicken.name}</h3>
                <p>{chicken.description}</p>
                <a href={instagramUrl} target="_blank" rel="noreferrer" className="text-link">
                  See today&apos;s menu on Instagram
                </a>
              </div>
            </article>
          )}

          <section className="menu-list" aria-label="Sides and drinks">
            <div className="menu-list-heading">
              <p className="eyebrow">Finish The Order</p>
              <h3>Sides &amp; sips</h3>
            </div>
            {sidesAndDrinks.map((item) => (
              <article className="menu-list-row" key={item.name}>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </div>
                {item.price && <strong>{item.price}</strong>}
              </article>
            ))}
          </section>
        </div>
      </section>

      <section className="feature-band" id="experience">
        <div className="feature-image">
          <Image
            src={concept.image}
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        <div className="feature-copy">
          <p className="eyebrow">Experience</p>
          <h2>{concept.id === "classic" ? "Easy, warm, unmistakably burger-first." : "Smashed hard. Stacked properly."}</h2>
          <p>
            {concept.id === "classic"
              ? "A familiar burger-counter experience built for easy choices: pick your smash, add fries and a cold drink, then finish with a Rollz dessert."
              : "Fresh Alberta beef hits the grill, gets pressed for crisp edges, and is stacked with melted cheese and pickles on a soft toasted bun."}
          </p>
          <div className="feature-points">
            {concept.toneNotes.map((note) => (
              <span key={note}>{note}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="social-proof" aria-label="Instagram menu proof points">
        <div>
          <span>The Beef</span>
          <strong>Fresh, never-frozen locally sourced Alberta beef, smashed fresh to order.</strong>
        </div>
        <div>
          <span>Combo Hook</span>
          <strong>Make any burger a meal for $3.99 with fries and a can pop.</strong>
        </div>
        <div>
          <span>Find Us</span>
          <strong>Proper Burger is served inside Rollz Ice Cream &amp; Desserts in Sage Hill.</strong>
        </div>
      </section>

      <section className="section story-section" id="story">
        <div className="story-copy">
          <p className="eyebrow">Our Story</p>
          <h2>{concept.storyTitle}</h2>
          {concept.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="tone-list" aria-label="Brand tone">
          {concept.toneNotes.map((note) => (
            <span key={note}>{note}</span>
          ))}
        </div>
      </section>

      <section className="section contact-section" id="visit">
        <div className="section-heading">
          <p className="eyebrow">Visit / Order</p>
          <h2>Find us at Sage Hill.</h2>
          <p>{concept.locationNote}</p>
        </div>
        <div className="contact-grid">
          {concept.visitCards.map((card) => (
            <article key={card.label}>
              <span>{card.label}</span>
              <strong>{card.value}</strong>
              <p>{card.note}</p>
            </article>
          ))}
        </div>
        <div className="cta-strip">
          <div>
            <span>Proper Burger</span>
            <strong>Ready when you are.</strong>
          </div>
          <p>Visit Rollz Sage Hill for the burger menu, or follow Instagram for the latest updates.</p>
          <div className="cta-actions">
            <a href={mapsUrl} target="_blank" rel="noreferrer">Get Directions</a>
            <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <strong>{concept.name}</strong>
          <span>{concept.label}</span>
        </div>
        <p>Smashburgers, crispy sides, and Rollz desserts at Sage Hill.</p>
      </footer>
    </main>
  );
}
