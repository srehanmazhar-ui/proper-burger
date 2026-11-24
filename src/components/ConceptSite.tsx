import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";
import { PremiumMotion } from "@/components/PremiumMotion";
import { BrandMark } from "@/components/BrandMark";
import { orderUrl } from "@/data/site";
import {
  burgers,
  chickenAndMore,
  coffee,
  desserts,
  instagramUrl,
  mapsUrl,
  otherSides,
  sides,
  smashOptions,
  venueAddress,
  venueName,
  type Concept,
  type MenuItem,
  type MenuPrice
} from "@/data/restaurant";

type Props = {
  concept: Concept;
};

export const navItems = [
  { href: "#menu", label: "Menu" },
  { href: "#visit", label: "Visit" }
];

function MenuPrices({ price }: { price: MenuPrice }) {
  if (typeof price === "string") return <strong className="menu-price">{price}</strong>;

  return (
    <ul className="menu-prices">
      {price.map(({ label, amount }) => (
        <li key={label}>
          <span>{label}</span>{" "}<strong className="menu-price">{amount}</strong>
        </li>
      ))}
    </ul>
  );
}

function MenuRows({ items }: { items: MenuItem[] }) {
  return (
    <div className="menu-rows">
      {items.map((item) => (
        <div className="menu-row" key={item.name}>
          <div>
            <h3>{item.name}</h3>
            {item.description && <p>{item.description}</p>}
          </div>
          <MenuPrices price={item.price} />
        </div>
      ))}
    </div>
  );
}

function MenuGroup({ title, items }: { title: string; items: MenuItem[] }) {
  return (
    <section className="menu-group" data-reveal="panel">
      <h2>{title}</h2>
      <MenuRows items={items} />
    </section>
  );
}

export function ConceptSite({ concept }: Props) {
  const orderHref = orderUrl || "#menu";
  const orderLabel = orderUrl ? "Order online" : "View menu";
  const orderLinkProps = orderUrl
    ? { target: "_blank" as const, rel: "noreferrer" }
    : {};
  const proofPoints = [
    "Fresh beef",
    "Crisp smashed edges",
    "Cheese in every layer",
    "Calgary · Sage Hill"
  ];

  return (
    <main className={`site theme-${concept.id}`}>
      {concept.id === "premium" && <PremiumMotion />}
      {concept.id === "premium" && <div className="scroll-progress" aria-hidden="true" />}
      <div className="announcement">
        <p>Now serving at Rollz Sage Hill</p>
        <a href={mapsUrl} target="_blank" rel="noreferrer">
          Open map <span aria-hidden="true">↗</span>
        </a>
      </div>

      <header className="site-header">
        <Link href={concept.route} className="wordmark" aria-label="Proper Burger home">
          <BrandMark variant={concept.id} />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a href={orderHref} className="header-cta" data-magnetic {...orderLinkProps}>
          {orderLabel}
        </a>

        <MobileNav items={navItems} directionsUrl={mapsUrl} />
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Proper Burger · Sage Hill</p>
          {concept.id === "premium" ? (
            <h1 className="kinetic-headline" aria-label={concept.headline}>
              <span>Smashed.</span>
              <span>Stacked.</span>
              <span>Properly.</span>
            </h1>
          ) : (
            <h1>{concept.headline}</h1>
          )}
          <p className="hero-intro">{concept.intro}</p>
          <div className="button-row">
            <a href={orderHref} className="button button-primary" data-magnetic {...orderLinkProps}>
              {orderUrl ? "Order online" : "Explore the menu"}
            </a>
            {orderUrl ? (
              <a href="#menu" className="button button-secondary" data-magnetic>
                View menu
              </a>
            ) : (
              <a href={mapsUrl} target="_blank" rel="noreferrer" className="button button-secondary" data-magnetic>
                Open map
              </a>
            )}
          </div>
          <p className="hero-location">Inside {venueName}</p>
        </div>

        <div className="hero-visual" data-parallax>
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
        {concept.id === "premium" ? (
          <div className="proof-run">
            {[0, 1].map((group) => (
              <div className="proof-group" aria-hidden={group === 1} key={group}>
                {proofPoints.map((point) => <span key={point}>{point}</span>)}
              </div>
            ))}
          </div>
        ) : (
          proofPoints.map((point) => <span key={point}>{point}</span>)
        )}
      </section>

      <section className="menu-section">
        <div className="section-heading" id="menu" data-reveal="heading">
          <div>
            <p className="eyebrow">The burgers</p>
            <h2>{concept.menuHeading}</h2>
          </div>
          <p>{concept.menuIntro}</p>
        </div>

        <div className="burger-grid">
          {burgers.map((item, index) => (
            <article className={`menu-card reveal-delay-${index + 1}`} data-reveal="card" key={item.name}>
              <div className="menu-card-image">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 760px) 100vw, 33vw"
                />
                <span className="item-number">0{index + 1}</span>
              </div>
              <div className="menu-card-copy">
                {item.tag && <p className="menu-tag">{item.tag}</p>}
                <h3>{item.name}</h3>
                <MenuPrices price={item.price} />
                {item.description && <p>{item.description}</p>}
              </div>
            </article>
          ))}
        </div>

        <MenuGroup title="More smash options" items={smashOptions} />
        <MenuGroup title="Chicken & More" items={chickenAndMore} />
      </section>

      <section className="sides-section" aria-labelledby="sides-title">
        <div className="section-heading compact" data-reveal="heading">
          <div>
            <p className="eyebrow">Finish the order</p>
            <h2 id="sides-title">Fries & Sides</h2>
          </div>
        </div>

        <div className="sides-grid">
          {sides.map((item, index) => (
            <article className={`side-card reveal-delay-${index + 1}`} data-reveal="card" key={item.name}>
              <div className="side-card-image">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 760px) 100vw, 33vw"
                />
              </div>
              <div>
                {item.tag && <p className="menu-tag">{item.tag}</p>}
                <h3>{item.name}</h3>
                <MenuPrices price={item.price} />
                {item.description && <p>{item.description}</p>}
              </div>
            </article>
          ))}
        </div>
        <MenuRows items={otherSides} />
      </section>

      <section className="dessert-section" data-reveal="split">
        <div className="dessert-copy">
          <h2>Desserts</h2>
          <MenuRows items={desserts} />
        </div>
        <div className="dessert-image" data-parallax>
          <Image src="/images/kunafa-cup-black.png" alt="Chocolate strawberry kunafa cup from Rollz Ice Cream & Desserts." fill sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
      </section>

      <div className="sides-section">
        <MenuGroup title="Coffee" items={coffee} />
      </div>

      <section className="visit-section" data-reveal="split">
        <div className="visit-image" data-parallax>
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

      <section className="closing-cta" data-reveal="closing">
        <p className="eyebrow">Come hungry</p>
        <h2>Make it a Proper one.</h2>
      </section>

      <footer className="site-footer">
        <Link href={concept.route} className="wordmark" aria-label="Proper Burger home"><BrandMark variant={concept.id} /></Link>
        <p>Smashburgers and crispy sides at Rollz Sage Hill.</p>
        <div><a href="#menu">Menu</a><a href="#visit">Visit</a><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a></div>
      </footer>

      <nav className="mobile-action-bar" aria-label="Quick actions">
        <a href={orderHref} {...orderLinkProps}>{orderLabel}</a>
        <a href={mapsUrl} target="_blank" rel="noreferrer">Open map</a>
      </nav>
    </main>
  );
}
