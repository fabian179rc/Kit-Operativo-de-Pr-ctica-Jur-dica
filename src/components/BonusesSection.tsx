import React from "react";
import { motion } from "framer-motion";
const bonuses = [
  {
    num: 1,
    title:
      "Determinación y Reclamo de Cuota Alimentaria — Guía Práctica con Planilla de Cálculo de Gastos",
    desc: "Metodología clara para cuantificar el caudal económico del alimentante y las necesidades reales del alimentado. Incluye modelos de incidentes de aumento, reducción y coparticipación de cuota, con una planilla de gastos lista para presentar ante el juzgado.",
    image: "b1.webp",
  },
  {
    num: 2,
    title:
      "Gestión Operativa de Accidentes de Tránsito — Del Siniestro a la Resolución en Mediación",
    desc: "Guía estratégica para el abordaje integral de siniestros viales: atención al cliente, recolección de prueba y reclamo extrajudicial ante aseguradoras. Incluye modelos de liquidación de daños materiales, incapacidad física y daño moral.",
    image: "b2.webp",
  },
  {
    num: 3,
    title:
      "Contratos de Locación de Inmuebles — Modelos y Cláusulas para el Nuevo Régimen de Libertad Contractual",
    desc: "Modelos actualizados al DNU 70/23 con libertad de moneda, nuevos plazos legales y fórmulas de actualización (ICL, IPC, Casa Propia). Cláusulas de rescisión, fianza y mantenimiento blindadas para locadores y locatarios.",
    image: "b3.webp",
  },
  {
    num: 4,
    title:
      "Estrategias Procesales ante Falsas Denuncias — Guía de Defensa y Protocolo de Actuación",
    desc: "Protocolo técnico frente a denuncias sin sustento fáctico, especialmente en contextos de violencia de género o conflictos de familia. Incluye medidas cautelares, cese de hostigamiento y levantamiento de restricciones de contacto.",
    image: "b4.webp",
  },
  {
    num: 5,
    title:
      "Kit de Gestión Profesional del Abogado — Entrevistas, Captación y Convenios de Honorarios",
    desc: "Estructuras de entrevistas iniciales para calificar clientes, hojas de ruta para el seguimiento de expedientes y modelos de Convenios de Cuota Litis y Pactos de Honorarios blindados.",
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
