import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Flame, ArrowRight } from "lucide-react";
import { getCheckoutUrl } from "../utils/checkoutUrl";
export function PricingSection() {
  const [timeLeft, setTimeLeft] = useState({
    h: 1,
    m: 32,
    s: 7,
  });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.s > 0)
          return {
            ...prev,
            s: prev.s - 1,
          };
        if (prev.m > 0)
          return {
            ...prev,
            m: prev.m - 1,
            s: 59,
          };
        if (prev.h > 0)
          return {
            ...prev,
            h: prev.h - 1,
            m: 59,
            s: 59,
          };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const timeBlocks = [
    {
      value: timeLeft.h,
      label: "Horas",
    },
    {
      value: timeLeft.m,
      label: "Minutos",
    },
    {
      value: timeLeft.s,
      label: "Segundos",
    },
  ];

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-gradient-to-b from-[#5C6851] via-[#6A765E] to-[#4A553F] pt-12 md:pt-14 pb-0"
    >
      <div className="container mx-auto px-4 max-w-2xl text-center relative z-10">
        <span className="inline-block px-6 py-2.5 mb-6 rounded-full border border-white/30 bg-white/10 text-white/90 font-semibold tracking-[0.18em] uppercase text-xs">
          🔥 Oferta de Lanzamiento
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
          Sistema Maestro de{" "}
          <em className="italic font-bold text-[#f0e6d2]">
            Emergencias HyS
          </em>
        </h2>

        <div className="relative inline-block mb-2 w-full max-w-md mx-auto">
          <img
            src={`${import.meta.env.BASE_URL}sistemamaestro-mockup.webp`}
            alt="Sistema Maestro de Emergencias HyS"
            width={672}
            height={672}
            loading="lazy"
            decoding="async"
            className="w-full h-auto rounded-2xl shadow-2xl shadow-black/20"
          />

          <div className="absolute -top-3 -right-2 md:top-2 md:right-2 w-24 h-24 md:w-28 md:h-28 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-[#c0392b] rotate-12"
              style={{
                clipPath:
                  "polygon(50% 0%, 61% 12%, 78% 6%, 79% 24%, 96% 30%, 86% 45%, 100% 58%, 83% 64%, 86% 82%, 68% 80%, 60% 97%, 47% 84%, 30% 92%, 28% 73%, 9% 72%, 19% 56%, 4% 45%, 21% 38%, 14% 20%, 33% 22%, 38% 4%)",
              }}
            />
            <div className="relative text-center text-white leading-none rotate-12">
              <div className="text-2xl md:text-3xl font-extrabold">73%</div>
              <div className="text-[9px] md:text-[10px] font-bold tracking-wide mt-0.5">
                DE DESCUENTO
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="comprar"
        className="container mx-auto px-4 max-w-md relative z-10 pb-16 -mt-4 scroll-mt-6"
      >
        <div className="bg-white rounded-3xl shadow-2xl shadow-black/10 p-7 md:p-8 text-center">
          <div className="text-slate-500 text-base md:text-lg mb-3">
            Precio Normal :{" "}
            <span className="line-through">$74.940 ARS</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#B85C43] text-white font-bold px-5 py-2.5 rounded-full text-sm mb-5">
            <Flame className="w-4 h-4" /> 73% OFF — OFERTA DE LANZAMIENTO
          </div>

          <p className="text-slate-500 text-base mb-1">Tu inversión hoy:</p>
          <div className="font-heading text-6xl md:text-7xl font-bold text-[#B85C43] leading-none mb-2">
            $19.990
          </div>
          <p className="text-slate-500 text-sm mb-5">
            Pagás una sola vez. Acceso para siempre.
          </p>
          <p className="text-[#B85C43] font-semibold text-base leading-snug mb-6">
            ⏳ El precio sube al terminar el lanzamiento.
          </p>

          <div className="flex justify-center gap-3 mb-7">
            {timeBlocks.map((block) => (
              <div
                key={block.label}
                className="bg-[#3b4439] text-white rounded-2xl px-4 py-4 min-w-[84px]"
              >
                <div className="font-heading text-4xl md:text-5xl font-bold leading-none">
                  {String(block.value).padStart(2, "0")}
                </div>
                <div className="text-[10px] tracking-[0.15em] uppercase mt-2 text-white/70">
                  {block.label}
                </div>
              </div>
            ))}
          </div>

          <motion.a
            href={getCheckoutUrl()}
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="flex items-center justify-center gap-3 w-full bg-[#B85C43] hover:bg-[#A34F38] text-white font-bold text-lg md:text-xl px-6 py-5 rounded-full shadow-lg shadow-[#B85C43]/30 transition-colors mb-6"
          >
            <span className="flex items-center gap-2 text-center">
              🚀 SÍ, QUIERO MI SISTEMA DE EMERGENCIAS
            </span>
            <ArrowRight className="w-6 h-6 flex-shrink-0" />
          </motion.a>

          <div className="flex flex-col items-center gap-2 text-sm text-slate-500 font-medium">
            <span>
              <span aria-hidden="true">⭐⭐⭐⭐⭐</span> 4.9/5 — Reseñas
              verificadas
            </span>
            <span>
              <span aria-hidden="true">🛡️</span> Garantía de 7 Días — Riesgo
              Cero
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
