"use client";

import { useEffect } from "react";

export function PremiumMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".theme-premium");
    if (!root) return;

    root.classList.add("motion-ready");

    const revealItems = Array.from(
      root.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));

    const updateHeader = () => {
      root.classList.toggle("is-scrolled", window.scrollY > 80);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateHeader);
      root.classList.remove("motion-ready", "is-scrolled");
    };
  }, []);

  return null;
}
