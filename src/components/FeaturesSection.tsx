import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
const features = [
  {
    lead: "Reducir drásticamente el tiempo de redacción procesal",
    desc: "Dejá de construir cada escrito desde cero. Utilizá modelos estructurados y adaptá al expediente en minutos.",
  },
  {
    lead: "Trabajar con mayor orden y seguridad procesal",
    desc: "Organizá cada etapa del caso con fundamentos de doctrina y jurisprudencia integrados en cada pieza.",
  },
  {
    lead: "Fundamentar con precisión ante cualquier tribunal",
    desc: "Citá autores y precedentes actualizados que den solidez a tu planteo y faciliten la tarea del juzgador.",
  },
  {
    lead: "Elevar la percepción de profesionalismo ante el cliente",
    desc: "Presentaciones sólidas, bien estructuradas y técnicamente impecables generan confianza y fidelización.",
  },
  {
    lead: "Cubrir múltiples fueros con una sola herramienta",
    desc: "Familia, Civil, Laboral y Comercial en un solo recurso, organizado y listo para consulta inmediata.",
  },
  {
    lead: "Asegurar el cobro de tus honorarios desde el inicio",
    desc: "Convenios de cuota litis y pactos de honorarios blindados que protegen tu retribución profesional.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-2 sm:px-4 max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#EDF2F6] max-w-3xl mx-auto">
            <span className="whitespace-nowrap">LO QUE VAS A LOGRAR</span>
            <br />
            <span className="whitespace-nowrap">CON ESTE KIT OPERATIVO</span>
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
