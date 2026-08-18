import React, { useEffect, createElement } from "react";
import { MotionConfig } from "framer-motion";
import { Landing } from "./pages/Landing";
import { useScreenInit } from "./useScreenInit";
const META_PIXEL_ID = "1520308000113704";
const PAGE_TITLE =
  "MEGAPACK AMPAROS DE SALUD: PROTOCOLO PRO 2026";
const PAGE_DESC =
  "Guías paso a paso, modelos de escritos, checklists procesales, protocolos digitales para el PJN y herramientas de diagnóstico. Todo en PDF descargable, listo para usar desde el primer día.";
const HERO_IMAGE = `${import.meta.env.BASE_URL}mockup9.png`;

const SITE_URL = "https://practica-procesal.tupuntodigital.shop";
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
    setMeta("name", "theme-color", "#0E1E2E");
    setMeta("name", "robots", "index, follow");
    setMeta("property", "og:type", "website");
    setMeta("property", "og:title", PAGE_TITLE);
    setMeta("property", "og:description", PAGE_DESC);
    setMeta("property", "og:locale", "es_LA");
    setMeta("property", "og:image", HERO_IMAGE);
    setMeta("property", "og:url", SITE_URL);
    setMeta("property", "og:site_name", "MEGAPACK AMPAROS DE SALUD");
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
        name: "MEGAPACK AMPAROS DE SALUD: PROTOCOLO PRO 2026",
        description: PAGE_DESC,
        image: HERO_IMAGE,
        brand: {
          "@type": "Brand",
          name: "MEGAPACK AMPAROS DE SALUD",
        },
        offers: {
          "@type": "Offer",
          price: "24990",
          priceCurrency: "ARS",
          availability: "https://schema.org/InStock",
          url: "https://megapack-amparos-de-salud-protocolo-pro.impultienda.ar/checkout",
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
            q: "¿Sirve si ya trabajo hace años con casos de salud?",
            a: "Sí. El MEGAPACK funciona como sistema de consulta y actualización para ordenar tu práctica, reducir búsquedas y trabajar con normativa, modelos y protocolos reunidos en un solo lugar.",
          },
          {
            q: "¿Sirve para cualquier provincia de Argentina?",
            a: "El producto está basado en el sistema federal PJN y la normativa nacional. Los protocolos aplican a jurisdicción federal en todo el país. Para jurisdicciones provinciales, algunos pasos pueden variar según el juzgado interviniente.",
          },
          {
            q: "¿Necesito experiencia previa en amparos para usarlo?",
            a: "No. El material está diseñado para ser aplicable tanto por abogados que toman su primer caso de salud como por profesionales que quieren sistematizar y actualizar su práctica.",
          },
          {
            q: "¿Cuándo recibo el acceso?",
            a: "El acceso es inmediato. Apenas confirmada la compra, recibís el link de descarga. Podés tenerlo en tu pantalla en menos de 5 minutos.",
          },
          {
            q: "¿Reemplaza el asesoramiento de un abogado senior?",
            a: "No. El MEGAPACK es una herramienta de orientación práctica y organización profesional. No constituye asesoramiento jurídico particular ni reemplaza el criterio profesional responsable de cada caso concreto.",
          },
          {
            q: "¿Puedo pedir reembolso?",
            a: "Sí. Tenés 7 días para revisarlo. Si el contenido no se corresponde con lo ofrecido en esta página, podés solicitar la devolución según las condiciones de compra.",
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
