import React, { useEffect, createElement } from "react";
import { MotionConfig } from "framer-motion";
import { Landing } from "./pages/Landing";
import { useScreenInit } from "./useScreenInit";
const META_PIXEL_ID = "1520308000113704";
const PAGE_TITLE =
  "Kit Operativo de Práctica Jurídica — Edición 2026";
const PAGE_DESC =
  "Más de 300 modelos de escritos, doctrina y jurisprudencia organizados por fueros: Familia, Civil, Laboral y Comercial. Tu base documental lista para trabajar desde el primer día, en PDF descargable.";
const HERO_IMAGE = `${import.meta.env.BASE_URL}mockup9.webp`;

const SITE_URL = "https://kitoperativodepracticajuridica.tupuntodigital.shop";
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
    document.documentElement.lang = "es";
    document.title = PAGE_TITLE;
    addLink("preconnect", "/cdn.magicpatterns.com", {
      crossorigin: "",
    });
    addLink("canonical", SITE_URL);
    setMeta("name", "description", PAGE_DESC);
    setMeta(
      "name",
      "viewport",
      "width=device-width, initial-scale=1, viewport-fit=cover",
    );
    setMeta("name", "theme-color", "#0E1E2E");
    setMeta("name", "robots", "index, follow");
    setMeta("property", "og:type", "website");
    setMeta("property", "og:title", PAGE_TITLE);
    setMeta("property", "og:description", PAGE_DESC);
    setMeta("property", "og:locale", "es_LA");
    setMeta("property", "og:image", HERO_IMAGE);
    setMeta("property", "og:url", SITE_URL);
    setMeta("property", "og:site_name", "Kit Operativo de Práctica Jurídica");
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
        name: "Kit Operativo de Práctica Jurídica — Edición 2026",
        description: PAGE_DESC,
        image: HERO_IMAGE,
        brand: {
          "@type": "Brand",
          name: "Kit Operativo de Práctica Jurídica",
        },
        offers: {
          "@type": "Offer",
          price: "21990",
          priceCurrency: "ARS",
          availability: "https://schema.org/InStock",
          url: "https://kit-operativo-de-practica-juridica.impultienda.ar/checkout",
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
            q: "¿Es un producto físico o digital?",
            a: "Es un producto 100% digital. Recibís acceso inmediato al material en formato PDF de alta resolución para descargarlo y utilizarlo desde tu computadora, tablet o dispositivo móvil.",
          },
          {
            q: "¿Es aplicable a todas las provincias de Argentina?",
            a: "Los modelos están elaborados conforme a la legislación de fondo nacional (Código Civil y Comercial, Código Procesal Civil y Comercial de la Nación y leyes especiales) y resultan adaptables a los reglamentos procesales de cada jurisdicción provincial. El profesional deberá adecuarlos al fuero y juzgado de actuación correspondiente.",
          },
          {
            q: "¿Puedo copiar y adaptar los modelos a mi procesador de texto?",
            a: "Sí. El formato PDF permite la selección y copiado de texto, lo que facilita la integración directa con Microsoft Word, Google Docs o cualquier procesador de textos habitual en el ejercicio profesional.",
          },
          {
            q: "¿Cuándo recibo el acceso al material?",
            a: "El acceso es inmediato. Una vez confirmado el pago, recibirás las instrucciones de descarga en tu correo electrónico registrado.",
          },
          {
            q: "¿Reemplaza el asesoramiento de un abogado senior o de un estudio jurídico?",
            a: "No. El Kit Operativo es una herramienta de orientación, organización y redacción técnica para profesionales del Derecho. No constituye asesoramiento legal ni patrocinio jurídico. El profesional habilitado es el único responsable de la estrategia y presentación de cada caso concreto.",
          },
          {
            q: "¿Necesito experiencia previa para utilizarlo?",
            a: "No. El material está estructurado para ser útil tanto para abogados nóveles como para profesionales con experiencia que buscan optimizar su flujo de trabajo. Cada módulo cuenta con indicaciones claras de aplicación.",
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
    loadPixel();
  }, []);
  return (
    <MotionConfig reducedMotion="user">
      <Landing />
    </MotionConfig>
  );
}
