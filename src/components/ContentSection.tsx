import React from "react";
import { motion } from "framer-motion";
import { PackageOpen } from "lucide-react";

const modulos = [
  {
    emoji: "📋",
    title: "Guía Maestra del Proceso 2026",
    desc: "Entendés cada etapa desde la entrevista hasta la ejecución de sentencia.",
  },
  {
    emoji: "✍️",
    title: "Modelos de Escritos Blindados",
    desc: "Demandas, cartas documento, pliegos y alegatos listos para adaptar.",
  },
  {
    emoji: "🔢",
    title: "Módulo de Cuantificación 2026",
    desc: "Fórmulas de incapacidad y daño moral actualizadas a la realidad inflacionaria.",
  },
  {
    emoji: "📌",
    title: "Checklist de Control Procesal",
    desc: "No perdés plazos ni omitís prueba esencial en ninguna etapa.",
  },
  {
    emoji: "🤝",
    title: "Guía de Mediación Estratégica",
    desc: "Llegás preparado para negociar y sabés cuándo aceptar o rechazar.",
  },
  {
    emoji: "💰",
    title: "Protocolo de Cobro de Honorarios",
    desc: "Asegurás tu 20% desde el día uno con el Pacto de Cuota Litis correcto.",
  },
];

const changes = [
  {
    emoji: "🧭",
    title: "Más Claridad en Cada Caso",
    desc: "Sabés qué revisar y cómo avanzar en cada etapa, sin improvisar.",
  },
  {
    emoji: "⏱️",
    title: "Menos Tiempo Redactando Desde Cero",
    desc: "Modelos listos para adaptar, sin perder horas en cada expediente.",
  },
  {
    emoji: "📊",
    title: "Más Control Sobre Tus Casos Activos",
    desc: "Sabés en qué etapa está cada caso y qué requiere atención urgente.",
  },
  {
    emoji: "💰",
    title: "Más Seguridad Para Cobrar Tus Honorarios",
    desc: "Cada caso arranca con el Pacto de Cuota Litis firmado y listo para cobrar.",
  },
];

export function ContentSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 mb-5 rounded-full border border-white/15 bg-[#1D3550] text-[#EDF2F6] font-semibold tracking-[0.18em] uppercase text-xs">
            <PackageOpen className="w-4 h-4 text-[#E0932E]" />
            Qué Incluye el Mega Pack
          </span>
          <h2 className="font-heading font-bold text-[#EDF2F6] text-3xl md:text-5xl leading-tight mb-4">
            📦 Todo{" "}
            <span className="italic text-[#6FA8C9]">
              el Sistema en un Solo Producto
            </span>
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

        <div className="mb-8">
          <h3 className="font-heading font-bold text-[#EDF2F6] text-xl md:text-2xl mb-4 text-center">
            🔄 Lo Que Puede Cambiar Desde la Primera Semana
          </h3>
          <div className="grid sm:grid-cols-2 gap-2">
            {changes.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="flex items-start gap-2.5 bg-[#16293B] border border-white/10 rounded-xl px-3 py-2.5 shadow-sm"
              >
                <span className="text-xl flex-shrink-0" aria-hidden="true">
                  {t.emoji}
                </span>
                <div>
                  <span className="font-semibold text-[#EDF2F6] text-sm md:text-[15px] leading-tight block mb-0.5">
                    {t.title}
                  </span>
                  <span className="text-[#93A7B8] text-xs md:text-sm leading-snug">
                    {t.desc}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
