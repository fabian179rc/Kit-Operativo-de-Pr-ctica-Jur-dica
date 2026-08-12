import React from "react";
import { motion } from "framer-motion";
const bonuses = [
  {
    num: 1,
    title: "Checklist 360° del Caso de Accidente de Tránsito",
    desc: "Llegás a la primera entrevista sabiendo qué documentación pedir y qué señales de alerta detectar.",
    image: "b1.webp",
  },
  {
    num: 2,
    title: "Guía Express de Primera Entrevista con el Cliente",
    desc: "Conducís la primera reunión con las preguntas clave para evaluar el caso sin improvisar.",
    image: "b2.webp",
  },
  {
    num: 3,
    title: "Mapa Visual del Proceso de Daños y Perjuicios 2026",
    desc: "Todo el proceso en una sola hoja visual, de la entrevista inicial a la sentencia.",
    image: "b3.webp",
  },
  {
    num: 4,
    title: "Mini Guía de Errores Fatales en Reclamos de Accidentes",
    desc: "Los errores más costosos de los abogados, con la recomendación para evitar cada uno.",
    image: "b4.webp",
  },
  {
    num: 5,
    title: "Guía Rápida de Rubros Indemnizatorios 2026",
    desc: "Todos los rubros reclamables explicados en una guía de consulta rápida.",
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

        <div className="grid sm:grid-cols-2 gap-5">
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
              className="bg-[#16293B] border border-white/10 rounded-2xl p-3 shadow-sm"
            >
              <div className="relative rounded-xl overflow-hidden mb-3 h-56 bg-[#091420] flex items-center justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}${b.image}`}
                  alt={`Bono ${b.num}: ${b.title}`}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
                <span className="absolute top-2.5 left-2.5 bg-rose-500 text-white font-bold text-[11px] tracking-wide uppercase px-2.5 py-1 rounded-md shadow-sm">
                  Bono {b.num}
                </span>
                <span className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 bg-emerald-600 text-white font-bold text-[11px] tracking-wide uppercase px-2.5 py-1 rounded-md shadow-sm">
                  🎁 Gratis
                </span>
              </div>
              <div className="px-2 pb-2">
                <p className="text-[#93A7B8] text-sm leading-snug">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
