"use client";

import { useEffect } from "react";

export function PremiumMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".theme-premium");
    if (!root) return;

    root.classList.add("motion-ready");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));

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

    const parallaxItems = Array.from(root.querySelectorAll<HTMLElement>("[data-parallax]"));
    let frame = 0;

    const updateMotion = () => {
      root.classList.toggle("is-scrolled", window.scrollY > 80);
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      root.style.setProperty("--scroll-progress", String(Math.min(1, Math.max(0, progress))));

      if (!reducedMotion) {
        const viewportCenter = window.innerHeight / 2;
        parallaxItems.forEach((item) => {
          const rect = item.getBoundingClientRect();
          if (rect.bottom < -120 || rect.top > window.innerHeight + 120) return;
          const itemCenter = rect.top + rect.height / 2;
          const offset = Math.max(-22, Math.min(22, (viewportCenter - itemCenter) * 0.045));
          item.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
        });
      }

      frame = 0;
    };

    const requestMotionUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateMotion);
    };

    updateMotion();
    window.addEventListener("scroll", requestMotionUpdate, { passive: true });
    window.addEventListener("resize", requestMotionUpdate, { passive: true });

    const magneticItems = reducedMotion
      ? []
      : Array.from(root.querySelectorAll<HTMLElement>("[data-magnetic]"));

    const magneticCleanup = magneticItems.map((item) => {
      const onMove = (event: PointerEvent) => {
        const rect = item.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 6;
        item.style.setProperty("--magnetic-x", `${x.toFixed(2)}px`);
        item.style.setProperty("--magnetic-y", `${y.toFixed(2)}px`);
      };
      const onLeave = () => {
        item.style.removeProperty("--magnetic-x");
        item.style.removeProperty("--magnetic-y");
      };
      item.addEventListener("pointermove", onMove);
      item.addEventListener("pointerleave", onLeave);
      return () => {
        item.removeEventListener("pointermove", onMove);
        item.removeEventListener("pointerleave", onLeave);
      };
    });

    return () => {
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestMotionUpdate);
      window.removeEventListener("resize", requestMotionUpdate);
      magneticCleanup.forEach((cleanup) => cleanup());
      root.classList.remove("motion-ready", "is-scrolled");
      root.style.removeProperty("--scroll-progress");
    };
  }, []);

  return null;
}
