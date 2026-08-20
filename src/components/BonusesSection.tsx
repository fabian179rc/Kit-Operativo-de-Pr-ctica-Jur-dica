import React from "react";
import { motion } from "framer-motion";
const bonuses = [
  {
    num: 1,
    title: "Cuota Alimentaria: Guía y Planilla de Gastos",
    desc: "Metodología para cuantificar la cuota, con modelos de incidentes de aumento, reducción y coparticipación.",
    image: "b1.webp",
  },
  {
    num: 2,
    title: "Accidentes de Tránsito: Del Siniestro a la Mediación",
    desc: "Guía para atención al cliente, prueba y reclamo ante aseguradoras, con modelos de liquidación de daños.",
    image: "b2.webp",
  },
  {
    num: 3,
    title: "Locación de Inmuebles: Nuevo Régimen Contractual",
    desc: "Modelos actualizados al DNU 70/23, con cláusulas de rescisión, fianza y mantenimiento blindadas.",
    image: "b3.webp",
  },
  {
    num: 4,
    title: "Defensa ante Falsas Denuncias",
    desc: "Protocolo técnico para denuncias sin sustento, con cautelares y cese de hostigamiento.",
    image: "b4.webp",
  },
  {
    num: 5,
    title: "Gestión Profesional del Abogado",
    desc: "Entrevistas, captación de clientes y modelos de Convenios de Cuota Litis blindados.",
    image: "b5.webp",
  },
];

export function BonusesSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-[#EDF2F6] text-3xl md:text-5xl leading-tight mb-4">
            5 Recursos Complementarios{" "}
            <span className="italic text-[#6FA8C9]">de Aplicación Inmediata</span>
          </h2>
          <p className="text-sm md:text-base text-[#93A7B8] leading-relaxed max-w-2xl mx-auto">
            Cada bono fue diseñado para cubrir un área crítica de la práctica
            diaria que los modelos procesales por sí solos no resuelven.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-5">
          {bonuses.map((b, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: i * 0.08,
              }}
              className="bg-[#16293B] border border-white/10 rounded-2xl p-2 sm:p-3 shadow-sm w-[calc(50%-0.3125rem)] sm:w-[calc(50%-0.625rem)]"
            >
              <div className="relative rounded-xl overflow-hidden mb-2 sm:mb-3 h-40 sm:h-64 bg-[#091420] flex items-center justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}${b.image}`}
                  alt={`Bono ${b.num}: ${b.title}`}
                  width={800}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
                <span className="absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 bg-rose-500 text-white font-bold text-[8px] sm:text-[11px] tracking-wide uppercase px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded sm:rounded-md shadow-sm">
                  Bono {b.num}
                </span>
                <span className="absolute top-1.5 right-1.5 sm:top-2.5 sm:right-2.5 inline-flex items-center gap-0.5 bg-emerald-600 text-white font-bold text-[8px] sm:text-[11px] tracking-wide uppercase px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded sm:rounded-md shadow-sm">
                  🎁 Gratis
                </span>
              </div>
              <div className="px-1 pb-1 sm:px-2 sm:pb-2">
                <h3 className="text-[#EDF2F6] font-heading font-bold text-xs sm:text-base leading-snug mb-1">
                  {b.title}
                </h3>
                <p className="text-[#93A7B8] text-[11px] sm:text-sm leading-snug">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
