import Image from "next/image";
import Link from "next/link";
import { Concept, confirmationRequired, menu } from "@/data/restaurant";

type Props = {
  concept: Concept;
  alternate: Concept;
};

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "Story" },
  { href: "#contact", label: "Locations" }
];

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
          <a href="#contact" className="order-link">
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
            <a href="#contact" className="secondary-button">
              Ordering Info
            </a>
          </div>
        </div>
      </section>

      <section className="quick-panel" aria-label="Concept summary">
        <div>
          <span>Ordering URL</span>
          <strong>{concept.orderCta}</strong>
        </div>
        <div>
          <span>Active Route</span>
          <strong>{concept.route}</strong>
        </div>
        <div>
          <span>Brand Direction</span>
          <strong>{concept.label}</strong>
        </div>
      </section>

      <section className="section menu-section" id="menu">
        <div className="section-heading">
          <p className="eyebrow">Menu</p>
          <h2>Customer-ready structure, confirmation-safe details.</h2>
          <p>{concept.menuIntro}</p>
        </div>
        <div className="menu-grid">
          {menu.map((item) => (
            <article className="menu-card" key={item.name}>
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              <div className="menu-meta">
                <span>{item.price}</span>
                <small>{item.tags?.join(" / ")}</small>
              </div>
            </article>
          ))}
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

      <section className="section contact-section" id="contact">
        <div className="section-heading">
          <p className="eyebrow">Locations / Contact</p>
          <h2>Ready for real-world details.</h2>
          <p>{concept.locationNote}</p>
        </div>
        <div className="contact-grid">
          <article>
            <span>Address</span>
            <strong>{confirmationRequired}</strong>
          </article>
          <article>
            <span>Hours</span>
            <strong>{confirmationRequired}</strong>
          </article>
          <article>
            <span>Phone / WhatsApp</span>
            <strong>{confirmationRequired}</strong>
          </article>
          <article>
            <span>Online Ordering</span>
            <strong>{confirmationRequired}</strong>
          </article>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <strong>{concept.name}</strong>
          <span>{concept.label}</span>
        </div>
        <p>All operational facts marked as {confirmationRequired} before launch.</p>
      </footer>
    </main>
  );
}
