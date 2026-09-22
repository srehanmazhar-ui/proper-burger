import Image from "next/image";
import Link from "next/link";
import { Concept, menu, promo, publicPending, venueAddress, venueName } from "@/data/restaurant";

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

const menuGroups = ["Burgers", "Sides", "Drinks"] as const;

export function ConceptSite({ concept, alternate }: Props) {
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
          <strong>{publicPending}</strong>
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
          <p className="eyebrow">Real Menu Context</p>
          <h2>Built from the Rollz burger launch, ready for client polish.</h2>
          <p>
            The burger concept sits inside the existing Rollz Ice Cream & Desserts location in Sage Hill, pairing smashburgers,
            fries, chicken items, and dessert traffic in one casual food stop.
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
          <p className="eyebrow">Menu</p>
          <h2>Real menu, ready to sell.</h2>
          <p>{concept.menuIntro}</p>
        </div>
        <div className="menu-groups">
          {menuGroups.map((group) => (
            <section className="menu-group" key={group} aria-label={group}>
              <div className="menu-group-heading">
                <h3>{group}</h3>
                <span>{group === "Burgers" ? "Featured prices" : "Confirm final price"}</span>
              </div>
              <div className="menu-grid">
                {menu
                  .filter((item) => item.category === group)
                  .map((item) => (
                    <article className="menu-card" key={item.name}>
                      {item.image ? (
                        <div className="menu-card-image">
                          <Image src={item.image} alt={item.imageAlt ?? item.name} fill sizes="(max-width: 900px) 100vw, 50vw" />
                        </div>
                      ) : (
                        <div className="menu-card-image menu-card-image-empty">
                          <span>Photo coming soon</span>
                        </div>
                      )}
                      <div className="menu-card-copy">
                        <div>
                          <h4>{item.name}</h4>
                          <p>{item.description}</p>
                        </div>
                        <a href="#visit" className="menu-order-link">
                          Add To Order
                        </a>
                      </div>
                      <div className="menu-meta">
                        <span>{item.price}</span>
                        <small>{item.tags?.join(" / ")}</small>
                      </div>
                    </article>
                  ))}
              </div>
            </section>
          ))}
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
          <h2>{concept.id === "classic" ? "Easy, warm, unmistakably burger-first." : "Refined, darker, and built around the storefront."}</h2>
          <p>
            {concept.id === "classic"
              ? "This version feels like a familiar burger counter: generous spacing, bold calls to action, and a menu that works well for families, walk-ins, and delivery traffic."
              : "This version slows the pace slightly and makes the brand feel more elevated, with strong contrast, restrained cards, and a premium storefront mood."}
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
          <span>From Rollz Instagram</span>
          <strong>Fresh, never-frozen locally sourced Alberta beef, smashed fresh to order.</strong>
        </div>
        <div>
          <span>Combo Hook</span>
          <strong>Make any burger a meal for $3.99 with fries and a can pop.</strong>
        </div>
        <div>
          <span>Food Coverage</span>
          <strong>Burgers, tenders, loaded fries, and Double Smash Fix were highlighted by Calgary food content.</strong>
        </div>
      </section>

      <section className="section story-section" id="story">
        <div className="story-copy">
          <p className="eyebrow">Story / About</p>
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
          <h2>Ready for launch details.</h2>
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
            <span>Primary CTA</span>
          <strong>Order Online</strong>
          </div>
          <p>Button destination will connect to the approved ordering link, WhatsApp, or delivery platform.</p>
          <a href="#menu">Browse Menu</a>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <strong>{concept.name}</strong>
          <span>{concept.label}</span>
        </div>
        <p>Menu prices, locations, hours, and ordering links are ready to be added after approval.</p>
      </footer>
    </main>
  );
}
