import React from "react";
import { motion } from "framer-motion";
import { PackageOpen } from "lucide-react";

const modulos = [
  {
    emoji: "📋",
    title: "Mapa de Decisión de Vías Legales",
    desc: "Amparo vs. Sumarísimo vs. Acción Autosatisfactiva: elegí la vía correcta para cada caso.",
  },
  {
    emoji: "🔍",
    title: "Entrevista Blindada y Honorarios",
    desc: "7 preguntas filtro y matriz de viabilidad del caso desde la primera consulta.",
  },
  {
    emoji: "📍",
    title: "Localización del Demandado 2026",
    desc: "SSS, IGJ y domicilios digitales actualizados para no perder tiempo con la notificación.",
  },
  {
    emoji: "📧",
    title: "Carta Documento de Emplazamiento",
    desc: "Protocolo de silencio administrativo antes de iniciar la demanda.",
  },
  {
    emoji: "⚖️",
    title: "Ingeniería de la Demanda Pro",
    desc: "Estructura completa con fundamentos y jurisprudencia actualizada 2024–2026.",
  },
  {
    emoji: "🚨",
    title: "Medidas Cautelares Express",
    desc: "Inaudita parte, caución juratoria y el peligro en la demora bien fundamentado.",
  },
  {
    emoji: "🖥️",
    title: "Gestión Digital PJN/Lex100",
    desc: "Sorteo, carga, notificaciones y pronto despacho sin errores técnicos.",
  },
  {
    emoji: "💰",
    title: "Astreintes y Ejecución de Sentencia",
    desc: "Cómo forzar el cumplimiento y cobrar tus honorarios sin trabajar gratis.",
  },
];

export function ContentSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 mb-5 rounded-full border border-white/15 bg-[#1D3550] text-[#EDF2F6] font-semibold tracking-[0.18em] uppercase text-xs">
            <PackageOpen className="w-4 h-4 text-[#E0932E]" />
            Qué Incluye el MEGAPACK
          </span>
          <h2 className="font-heading font-bold text-[#EDF2F6] text-3xl md:text-5xl leading-tight mb-4">
            📦 Una Guía Completa, Organizada y{" "}
            <span className="italic text-[#6FA8C9]">100% Aplicable</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-2 mb-8">
          {modulos.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="flex items-start gap-2.5 bg-[#16293B] border border-white/10 rounded-xl px-3 py-2.5 shadow-sm"
            >
              <span className="text-xl flex-shrink-0" aria-hidden="true">
                {m.emoji}
              </span>
              <div>
                <span className="font-semibold text-[#EDF2F6] text-sm md:text-[15px] leading-tight block mb-0.5">
                  {m.title}
                </span>
                <span className="text-[#93A7B8] text-xs md:text-sm leading-snug">
                  {m.desc}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
