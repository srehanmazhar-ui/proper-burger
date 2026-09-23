"use client";

import type { MouseEvent } from "react";

type NavItem = {
  href: string;
  label: string;
};

type Props = {
  items: NavItem[];
  directionsUrl: string;
};

function closeMenu(event: MouseEvent<HTMLAnchorElement>) {
  event.currentTarget.closest("details")?.removeAttribute("open");
}

export function MobileNav({ items, directionsUrl }: Props) {
  return (
    <details className="mobile-nav">
      <summary aria-label="Open navigation">
        <span />
        <span />
      </summary>
      <nav aria-label="Mobile navigation">
        {items.map((item) => (
          <a href={item.href} key={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a href={directionsUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
          Get directions
        </a>
      </nav>
    </details>
  );
}
