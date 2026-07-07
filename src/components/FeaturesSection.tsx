import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
const features = [
  "Relevamiento previo estructurado para no saltarte nada crítico",
  "Redacción técnica profesional con frases modelo listas para adaptar",
  "Integración exacta entre Matriz de Riesgos y cuerpo del programa",
  "Procedimientos de Trabajo Seguro (PTS) ejecutables en campo",
  "Gestión de contratistas y terceros dentro del programa",
  "Documentación completa, firmada y defendible ante ART, SRT y juicios",
];

export function FeaturesSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#2f3a2c]">
            ¿QUÉ VAS A LOGRAR CON ESTE SISTEMA?
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
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1 text-[#d4a017]" />
              <p className="text-slate-600 leading-relaxed">
                <span className="font-bold text-[#2f3a2c]">{feature}</span>
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
