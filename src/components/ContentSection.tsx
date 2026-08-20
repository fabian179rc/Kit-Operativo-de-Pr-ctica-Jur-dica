import React from "react";
import { motion } from "framer-motion";
import { PackageOpen } from "lucide-react";

const modulos = [
  {
    emoji: "👨‍👩‍👧",
    title: "Derecho de Familia",
    desc: "Divorcios, convenios reguladores, demandas de alimentos, incidentes de cuota, regímenes de comunicación, cuidado personal y medidas cautelares urgentes.",
  },
  {
    emoji: "⚖️",
    title: "Derecho Civil",
    desc: "Daños y perjuicios, usucapión, procesos de desalojo, escrituración, y contratos civiles ajustados a la normativa y jurisprudencia actual.",
  },
  {
    emoji: "🏭",
    title: "Derecho Laboral",
    desc: "Intercambio epistolar completo, demandas por despido, trabajo no registrado, accidentes de trabajo (ART) y actuaciones ante organismos administrativos.",
  },
  {
    emoji: "🏦",
    title: "Derecho Comercial",
    desc: "Ejecuciones de alquileres, cheques y pagarés, juicios ejecutivos y modelos para la ejecución de honorarios profesionales.",
  },
  {
    emoji: "📋",
    title: "Escritos de Mero Trámite",
    desc: "Cédulas, oficios, mandamientos, autorizaciones y toda la folletería procesal que consume el tiempo operativo diario del estudio.",
  },
  {
    emoji: "📚",
    title: "Doctrina y Jurisprudencia",
    desc: "Cada modelo integra citas de autores de referencia y precedentes jurisprudenciales para sustentar la pretensión con rigor técnico.",
  },
];

export function ContentSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 mb-5 rounded-full border border-white/15 bg-[#1D3550] text-[#EDF2F6] font-semibold tracking-[0.18em] uppercase text-xs">
            <PackageOpen className="w-4 h-4 text-[#E0932E]" />
            Qué Incluye el Kit Operativo
          </span>
          <h2 className="font-heading font-bold text-[#EDF2F6] text-3xl md:text-5xl leading-tight mb-4">
            📦 Organizado por Fueros y{" "}
            <span className="italic text-[#6FA8C9]">100% Aplicable</span>
          </h2>
          <p className="text-sm md:text-base text-[#93A7B8] leading-relaxed max-w-2xl mx-auto">
            Un compendio integral organizado por fueros, con cada pieza
            procesal estructurada bajo estándares de técnica legislativa
            vigente y fundamentos jurídicos incorporados.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-2 mb-8">
          {modulos.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="flex items-start gap-2 bg-[#16293B] border border-white/10 rounded-xl px-2.5 py-2 shadow-sm"
            >
              <span className="text-lg flex-shrink-0" aria-hidden="true">
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
