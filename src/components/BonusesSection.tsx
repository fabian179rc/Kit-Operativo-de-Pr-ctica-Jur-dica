import React from "react";
import { motion } from "framer-motion";
const bonuses = [
  {
    num: 1,
    title: "Pack de Plantillas de Propuestas Comerciales HyS",
    desc: "Plantillas para presentar servicios, auditorías y capacitaciones HyS de forma clara y persuasiva, y dejar de competir solo por precio.",
    image: "b1.webp",
  },
  {
    num: 2,
    title: "Sistema de Seguimiento Comercial y Renovación de Clientes HyS",
    desc: "Un método simple para ordenar prospectos, propuestas, vencimientos y renovaciones, y no perder más oportunidades por falta de seguimiento.",
    image: "b5.webp",
  },
  {
    num: 3,
    title: "Guion de Primera Reunión y Manejo de Objeciones",
    desc: "Qué decir en la primera reunión para detectar riesgos y urgencias, y cómo responder las objeciones más comunes sin sonar agresivo.",
    image: "b2.webp",
  },
  {
    num: 4,
    title: "Kit de Onboarding Profesional para Nuevos Clientes HyS",
    desc: "Documentos listos para arrancar cada cliente con orden y autoridad desde el día uno: bienvenida, relevamiento, protocolo y cronograma inicial.",
    image: "b3.webp",
  },
  {
    num: 5,
    title: "Guía de Honorarios para Consultores HyS",
    desc: "Cómo calcular y justificar tus honorarios según riesgo, alcance y complejidad, y aumentar tarifas cada año sin perder autoridad.",
    image: "b4.webp",
  },
];

export function BonusesSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-[#F3EFE3] text-3xl md:text-5xl leading-tight">
            Y además, recibís{" "}
            <span className="italic text-[#A8BB98]">5 bonos gratis</span>
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
              className="bg-[#1E2E22] border border-white/10 rounded-2xl p-3 shadow-sm"
            >
              <div className="relative rounded-xl overflow-hidden mb-3 h-56 bg-[#12201A] flex items-center justify-center">
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
                <p className="text-[#A9B39E] text-sm leading-snug">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
