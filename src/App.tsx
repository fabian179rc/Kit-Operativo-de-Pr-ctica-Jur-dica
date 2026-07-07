import React, { useEffect, createElement } from "react";
import { MotionConfig } from "framer-motion";
import { Landing } from "./pages/Landing";
import { useScreenInit } from "./useScreenInit";
const META_PIXEL_ID = "1656160899010195";
const PAGE_TITLE =
  "Sistema Maestro de Matrices HyS — Riesgos, EPP, Capacitaciones y Documentación en un Solo Sistema";
const PAGE_DESC =
  "Riesgos, EPP, capacitaciones, documentos, inspecciones y acciones correctivas organizados en un sistema de matrices profesional y listo para usar.";
const HERO_IMAGE = `${import.meta.env.BASE_URL}sistemamaestro-mockup.webp`;

const SITE_URL = "https://placeholder.com";
function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}
function addLink(
  rel: string,
  href: string,
  attrs: Record<string, string> = {},
) {
  const selector = `link[rel="${rel}"][href="${href}"]`;
  if (document.head.querySelector(selector)) return;
  const el = document.createElement("link");
  el.rel = rel;
  el.href = href;
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  document.head.appendChild(el);
}
export function App() {
  useScreenInit();
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = "es-AR";
    document.title = PAGE_TITLE;
    addLink("preconnect", "/cdn.magicpatterns.com", {
      crossorigin: "",
    });
    addLink("preconnect", "https://fonts.googleapis.com");
    addLink("preconnect", "https://fonts.gstatic.com", {
      crossorigin: "",
    });
    addLink("preload", HERO_IMAGE, {
      as: "image",
      fetchpriority: "high",
    });
    addLink("canonical", SITE_URL);
    setMeta("name", "description", PAGE_DESC);
    setMeta(
      "name",
      "viewport",
      "width=device-width, initial-scale=1, viewport-fit=cover",
    );
    setMeta("name", "theme-color", "#F9F8F6");
    setMeta("name", "robots", "index, follow");
    setMeta("property", "og:type", "website");
    setMeta("property", "og:title", PAGE_TITLE);
    setMeta("property", "og:description", PAGE_DESC);
    setMeta("property", "og:locale", "es_AR");
    setMeta("property", "og:image", HERO_IMAGE);
    setMeta("property", "og:url", SITE_URL);
    setMeta("property", "og:site_name", "Sistema Maestro de Matrices HyS");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:image", HERO_IMAGE);
    setMeta("name", "twitter:title", PAGE_TITLE);
    setMeta("name", "twitter:description", PAGE_DESC);
    const ldId = "ld-product-schema";
    if (!document.getElementById(ldId)) {
      const ld = document.createElement("script");
      ld.id = ldId;
      ld.type = "application/ld+json";
      ld.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Sistema Maestro de Matrices HyS",
        description: PAGE_DESC,
        image: HERO_IMAGE,
        brand: {
          "@type": "Brand",
          name: "Sistema Maestro de Matrices HyS",
        },
        offers: {
          "@type": "Offer",
          price: "19990",
          priceCurrency: "ARS",
          availability: "https://schema.org/InStock",
          url: "https://placeholder.impultienda.ar/checkout",
        },
      });
      document.head.appendChild(ld);
    }
    const faqId = "ld-faq-schema";
    if (!document.getElementById(faqId)) {
      const faq = document.createElement("script");
      faq.id = faqId;
      faq.type = "application/ld+json";
      faq.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            q: "¿Es físico o digital?",
            a: "100% digital. Acceso inmediato para descargar, editar e imprimir desde cualquier dispositivo.",
          },
          {
            q: "¿Necesito saber Excel avanzado para usar las matrices?",
            a: "No. Las matrices del Bono 1 vienen listas con fórmulas y formatos condicionales. Solo tenés que cargar tus datos. El sistema explica paso a paso cómo usarlas sin conocimientos avanzados.",
          },
          {
            q: "¿Sirve para cualquier tipo de industria o actividad?",
            a: "Sí. Las matrices son adaptables a industria, construcción, logística, comercio, servicios y cualquier tipo de establecimiento. El criterio técnico es universal y los modelos son editables.",
          },
          {
            q: "¿Sirve para cualquier provincia o país?",
            a: "Sí. La metodología es aplicable en cualquier contexto. Los modelos siguen los lineamientos de la normativa argentina pero son adaptables a cualquier jurisdicción o sistema de gestión.",
          },
          {
            q: "¿Puedo usarlo con varios clientes distintos?",
            a: "Sí. Las matrices son reutilizables para cada cliente y establecimiento. Una sola compra te da el sistema completo para toda tu cartera.",
          },
          {
            q: "¿Ya tengo algunas matrices propias, me sirve igual?",
            a: "Sí. El sistema te enseña el criterio técnico detrás de cada matriz y cómo interconectarlas. Podés mejorar lo que ya tenés, detectar inconsistencias y completar las que te faltan.",
          },
        ].map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      });
      document.head.appendChild(faq);
    }
  }, []);
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined")
      return;
    // Solo se carga el Meta Pixel real (3505657626270665).
    if (!META_PIXEL_ID) return;
    const loadPixel = () => {
      const w = window as any;
      if (w.fbq) {
        w.fbq("track", "PageView");
        return;
      }
      const n: any = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      w.fbq = n;
      if (!w._fbq) w._fbq = n;
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://connect.facebook.net/en_US/fbevents.js";
      const target = document.head || document.body || document.documentElement;
      target.appendChild(script);
      w.fbq("init", META_PIXEL_ID);
      w.fbq("track", "PageView");
      const noscript = document.createElement("noscript");
      const img = document.createElement("img");
      img.height = 1;
      img.width = 1;
      img.style.display = "none";
      img.alt = "";
      img.src = `https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`;
      noscript.appendChild(img);
      target.appendChild(noscript);
    };
    const ric = (window as any).requestIdleCallback as
      | ((
          cb: () => void,
          opts?: {
            timeout: number;
          },
        ) => number)
      | undefined;
    if (ric) {
      ric(loadPixel, {
        timeout: 4000,
      });
    } else {
      const t = setTimeout(loadPixel, 2500);
      return () => clearTimeout(t);
    }
  }, []);
  return (
    <MotionConfig reducedMotion="user">
      <Landing />
    </MotionConfig>
  );
}
