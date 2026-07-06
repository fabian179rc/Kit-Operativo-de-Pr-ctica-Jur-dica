import React, { useEffect, createElement } from "react";
import { MotionConfig } from "framer-motion";
import { Landing } from "./pages/Landing";
import { useScreenInit } from "./useScreenInit";
const META_PIXEL_ID = "1656160899010195";
const PAGE_TITLE =
  "Sistema Maestro de Capacitaciones HyS — 52 Semanas de Capacitaciones Listas para Implementar";
const PAGE_DESC =
  "Presentaciones, evaluaciones, registros, certificados y cronogramas listos para usar desde el primer día. Sin preparar desde cero. Sin improvisar.";
const HERO_IMAGE = `${import.meta.env.BASE_URL}sistemamaestro-mockup.webp`;

const SITE_URL = "https://sistemamaestrohys.tupuntodigital.shop";
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
    setMeta("property", "og:site_name", "Sistema Maestro de Capacitaciones HyS");
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
        name: "Sistema Maestro de Capacitaciones HyS",
        description: PAGE_DESC,
        image: HERO_IMAGE,
        brand: {
          "@type": "Brand",
          name: "Sistema Maestro de Capacitaciones HyS",
        },
        offers: {
          "@type": "Offer",
          price: "19990",
          priceCurrency: "ARS",
          availability: "https://schema.org/InStock",
          url: "https://sistema-maestro-de-capacitaciones.impultienda.ar/checkout",
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
            q: "¿Es en papel o digital?",
            a: "Es un producto 100% digital. Recibís todos los módulos de forma inmediata en tu correo electrónico, con el manual principal, los 5 bonos y todo el material listo para usar e imprimir en casa o en cualquier centro de copiado las veces que necesites.",
          },
          {
            q: "¿Necesito experiencia previa para usarlo?",
            a: "No. El sistema incluye el Capítulo 1 dedicado exclusivamente a explicarte cómo usar todo sin improvisar. En menos de una hora ya vas a saber exactamente qué usar, cuándo y cómo adaptarlo a cada cliente.",
          },
          {
            q: "¿Sirve para profesionales de cualquier provincia de Argentina?",
            a: "Sí. Todo el contenido está basado en la normativa nacional vigente (Ley 19.587, Decreto 351 y resoluciones SRT) aplicable en todo el territorio argentino.",
          },
          {
            q: "¿Qué pasa si ya tengo algunas capacitaciones armadas?",
            a: "El sistema se complementa con lo que ya tenés. No reemplaza tu trabajo: lo organiza, lo completa y lo eleva de nivel. Podés incorporar tus materiales al sistema y tener todo en un solo lugar.",
          },
          {
            q: "¿Cuándo recibo el material?",
            a: "De forma inmediata. Apenas confirmada la compra, recibís el acceso completo en tu correo electrónico. En menos de 5 minutos ya podés estar revisando el sistema.",
          },
          {
            q: "¿Sirve si recién me recibí o si tengo pocos clientes?",
            a: "Es el momento ideal para empezar con el pie derecho. Este sistema te da desde el primer día la estructura, el material y el respaldo legal que le lleva años construir a otros profesionales.",
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
