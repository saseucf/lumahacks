"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/** Decorative depth only: no React updates on scroll and no motion for reduced-motion users. */
export default function OceanScene() {
  const scene = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = scene.current;
    if (!element) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let dispose = () => {};

    function configure() {
      dispose();
      element!.style.removeProperty("--ocean-drift");
      element!.style.removeProperty("--ray-drift");
      if (media.matches) return;

      let frame = 0;
      let visible = true;
      const update = () => {
        frame = 0;
        if (!visible) return;
        const top = element!.getBoundingClientRect().top;
        const distance = Math.max(0, Math.min(-top, 900));
        const mobile = window.innerWidth < 721;
        element!.style.setProperty("--ocean-drift", `${distance * (mobile ? 0.06 : 0.16)}px`);
        element!.style.setProperty("--ray-drift", `${distance * 0.07}px`);
      };
      const schedule = () => { if (!frame && visible) frame = requestAnimationFrame(update); };
      const visibility = new IntersectionObserver(entries => {
        visible = entries[0].isIntersecting;
        if (visible) schedule();
      });
      visibility.observe(element!);
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule, { passive: true });

      const sections = [...document.querySelectorAll<HTMLElement>(".intro-band, .section-heading, .sponsor-section, .faq-section, .closing")];
      const reveals = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-reveal", "visible");
            reveals.unobserve(entry.target);
          }
        }
      }, { threshold: 0.08 });
      for (const section of sections) {
        if (section.getBoundingClientRect().top > window.innerHeight) {
          section.setAttribute("data-reveal", "pending");
          reveals.observe(section);
        }
      }
      schedule();
      dispose = () => {
        cancelAnimationFrame(frame);
        frame = 0;
        visibility.disconnect();
        reveals.disconnect();
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
        sections.forEach(section => section.removeAttribute("data-reveal"));
      };
    }

    configure();
    media.addEventListener("change", configure);
    return () => { dispose(); media.removeEventListener("change", configure); };
  }, []);

  return <div ref={scene} className="ocean-scene" aria-hidden="true">
    <div className="ocean-depth"><Image className="ocean-image" src="/art/bioluminescent-ocean.png" alt="" fill priority sizes="100vw" /></div>
    <div className="god-rays"><i /><i /><i /><i /></div>
    <div className="ocean-caustics" />
    <div className="ocean-plankton"><i /><i /><i /><i /><i /><i /><i /><i /></div>
    <div className="ocean-shade" />
    <div className="ocean-horizon" />
  </div>;
}
