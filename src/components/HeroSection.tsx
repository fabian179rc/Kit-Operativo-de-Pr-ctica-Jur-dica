import React from "react";
import { motion } from "framer-motion";
import { scrollToOffer } from "../utils/scrollToOffer";
export function HeroSection() {
  return (
    <section className="relative md:min-h-[100svh] flex flex-col justify-start md:justify-center overflow-hidden bg-transparent py-6">
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none"
      >
        <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] rounded-full bg-[#d4a017]/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-3xl text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="inline-flex items-center gap-2 px-6 py-2.5 mb-5 rounded-full border border-white/40 bg-[#4A553F] text-white font-semibold tracking-[0.18em] uppercase text-[8px]"
        >
          ✨ SISTEMA COMPLETO PARA PROFESIONALES DE HIGIENE Y SEGURIDAD
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="font-heading md:text-6xl font-extrabold text-[#2f3a2c] mb-4 text-[26px]"
        >
          52 semanas de capacitaciones listas para implementar..{" "}
          <span className="text-[#B85C43]">Todo resuelto.</span>
        </motion.h1>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mx-auto mb-6 w-full max-w-[300px] sm:max-w-sm md:max-w-md"
        >
          <img
            src={`${import.meta.env.BASE_URL}sistemamaestro-mockup.webp`}
            alt="Sistema Maestro de Capacitaciones HyS"
            width={672}
            height={672}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-auto aspect-square object-contain rounded-2xl"
          />
        </motion.div>

        <motion.p
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="md:text-xl text-slate-600 mb-6 max-w-2xl mx-auto text-[12px] mt-8"
        >
          Presentaciones, evaluaciones, registros, certificados y cronogramas
          listos para usar desde el primer día. Sin preparar desde cero. Sin
          improvisar.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          className="flex flex-col items-center mt-14"
        >
          <motion.a
            href="#comprar"
            onClick={scrollToOffer}
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="flex items-center justify-center gap-3 w-full sm:w-auto bg-[#B85C43] hover:bg-[#A34F38] text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-[#B85C43]/30 transition-colors mb-14 text-[16px]"
          >
            🚀 SÍ, QUIERO MI SISTEMA MAESTRO
          </motion.a>

          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-600">
            <span>
              <span aria-hidden="true">⭐⭐⭐⭐⭐</span> 4.9/5 — Reseñas
              verificadas
            </span>
            <span
              aria-hidden="true"
              className="hidden sm:inline text-slate-300"
            >
              |
            </span>
            <span>
              <span aria-hidden="true">🛡️</span> Garantía de 7 Días — Riesgo
              Cero
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
