import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
const features = [
  {
    lead: "Ahorrar tiempo en escritos",
    desc: "Dejá de empezar cada demanda desde cero. Usá modelos y guías listos para adaptar al expediente.",
  },
  {
    lead: "Trabajar con más orden procesal",
    desc: "Organizá cada etapa del caso con checklists, mapas de proceso y guías claras de actuación.",
  },
  {
    lead: "Cuantificar con precisión",
    desc: "Aplicá fórmulas de incapacidad (Méndez, Acciarri, Vuoto) adaptadas a la realidad económica de 2026 sin errores de cálculo.",
  },
  {
    lead: "Presentarte mejor ante tu cliente",
    desc: "Entregá documentación sólida y profesional que aumente la percepción de valor de tu trabajo.",
  },
  {
    lead: "Cerrar cada caso con control",
    desc: "Sabé exactamente en qué etapa estás, qué falta y cuándo vence cada plazo.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#EDF2F6]">
            CON ESTE SISTEMA VAS A PODER
          </h2>
        </div>

        <ul className="space-y-4">
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
              className="flex items-start gap-3"
            >
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1 text-[#E0932E]" />
              <p className="text-[#93A7B8] leading-relaxed">
                <span className="font-bold text-[#EDF2F6]">
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
