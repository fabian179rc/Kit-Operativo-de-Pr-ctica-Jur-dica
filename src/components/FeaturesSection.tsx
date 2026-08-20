import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
const features = [
  {
    lead: "Reducir el tiempo de redacción",
    desc: "Adaptá modelos ya armados al expediente en minutos.",
  },
  {
    lead: "Trabajar con más orden procesal",
    desc: "Doctrina y jurisprudencia integradas en cada pieza.",
  },
  {
    lead: "Fundamentar con precisión",
    desc: "Autores y precedentes que dan solidez a tu planteo.",
  },
  {
    lead: "Elevar tu imagen profesional",
    desc: "Presentaciones prolijas que generan confianza y fidelización.",
  },
  {
    lead: "Cubrir varios fueros",
    desc: "Familia, Civil, Laboral y Comercial en un solo recurso.",
  },
  {
    lead: "Asegurar tus honorarios",
    desc: "Convenios de cuota litis y pactos blindados desde el inicio.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-2 sm:px-4 max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-[#EDF2F6] max-w-3xl mx-auto leading-snug">
            Lo que vas a lograr con este Kit Operativo
          </h2>
        </div>

        <ul className="space-y-2 md:space-y-3">
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
              className="flex items-start gap-1.5 md:gap-2"
            >
              <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0 mt-0.5 text-[#E0932E]" />
              <p className="text-xs md:text-sm text-[#93A7B8] leading-snug">
                <span className="text-[13px] md:text-sm font-bold text-[#EDF2F6]">
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
