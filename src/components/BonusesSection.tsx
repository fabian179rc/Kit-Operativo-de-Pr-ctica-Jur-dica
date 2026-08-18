import React from "react";
import { motion } from "framer-motion";
const bonuses = [
  {
    num: 1,
    title: "Radar de Viabilidad de la Acción",
    desc: "Detectá en 15 minutos si el caso tiene base, con matriz y preguntas filtro.",
    image: "b1.webp",
  },
  {
    num: 2,
    title: "Checklist Documental 24H para Acciones y Cautelares",
    desc: "Documentación necesaria y mensajes de WhatsApp listos para enviar.",
    image: "b2.webp",
  },
  {
    num: 3,
    title: "Guía Express de Primera Consulta y Honorarios",
    desc: "Organizá la primera reunión y hablá de honorarios con autoridad.",
    image: "b3.webp",
  },
  {
    num: 4,
    title: "Mapa de Urgencia y Cautelar en 30 Minutos",
    desc: "Clasificá la urgencia y armá el argumento central de la cautelar.",
    image: "b4.webp",
  },
  {
    num: 5,
    title: "Tracker PDF de Expediente y Control Anti-Errores",
    desc: "Controlá presentaciones, notificaciones, plazos y errores del expediente.",
    image: "b5.webp",
  },
];

export function BonusesSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-[#EDF2F6] text-3xl md:text-5xl leading-tight">
            5 Bonos Incluidos{" "}
            <span className="italic text-[#6FA8C9]">Sin Costo Adicional</span>
          </h2>
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
                  width={1024}
                  height={1024}
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
