import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
const features = [
  {
    lead: "Evaluar casos con criterio",
    desc: "Matriz de viabilidad para validar el caso antes de comprometerte.",
  },
  {
    lead: "Armar la demanda sin bloquearte",
    desc: "Fundamentos y modelos listos para adaptar.",
  },
  {
    lead: "Pedir cautelares sólidas",
    desc: "Protocolos para redactar cautelares y pedir caución juratoria.",
  },
  {
    lead: "Gestionar el PJN sin errores técnicos",
    desc: "Carga, sorteo y alertas en el PJN sin errores.",
  },
  {
    lead: "Cobrar honorarios con método",
    desc: "Convenios, honorarios y astreintes para no trabajar gratis.",
  },
  {
    lead: "Presentarte con autoridad",
    desc: "Documentación actualizada para generar confianza profesional.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-2 sm:px-4 max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#EDF2F6] max-w-3xl mx-auto">
            <span className="whitespace-nowrap">TRABAJÁ CON MÉTODO</span>
            <br />
            <span className="whitespace-nowrap">Y CONFIANZA</span>
          </h2>
        </div>

        <ul className="space-y-3 md:space-y-4">
          {features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{
                opacity: 0,
                y: 8,
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
              className="flex items-start gap-2 md:gap-3"
            >
              <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-1 text-[#E0932E]" />
              <p className="text-sm md:text-base text-[#93A7B8] leading-snug md:leading-relaxed">
                <span className="text-[15px] md:text-base font-bold text-[#EDF2F6]">
                  {feature.lead}
                </span>{" "}
                — {feature.desc}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
