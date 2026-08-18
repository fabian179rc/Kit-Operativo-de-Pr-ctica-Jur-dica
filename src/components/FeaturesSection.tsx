import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
const features = [
  {
    lead: "Evaluar casos con criterio",
    desc: "Matriz de viabilidad para saber si el caso tiene base antes de comprometer tu tiempo y reputación.",
  },
  {
    lead: "Armar la demanda sin bloquearte",
    desc: "Estructura completa, fundamentos y modelos listos para adaptar sin empezar desde cero cada vez.",
  },
  {
    lead: "Pedir cautelares sólidas",
    desc: "Protocolos para redactar el peligro en la demora de forma irrefutable y pedir caución juratoria sin depender de nadie.",
  },
  {
    lead: "Gestionar el PJN sin errores técnicos",
    desc: "Paso a paso actualizado para cargar la demanda, hacer el sorteo y configurar alertas sin que el sistema te rebote el archivo.",
  },
  {
    lead: "Cobrar honorarios con método",
    desc: "Convenio desde la primera consulta, liquidación de honorarios y astreintes para que nunca trabajes gratis.",
  },
  {
    lead: "Presentarte con autoridad",
    desc: "Documentación sólida, actualizada y bien estructurada que genera confianza profesional desde la primera reunión.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#EDF2F6]">
            CON ESTE SISTEMA VAS A TRABAJAR CON MÉTODO Y CONFIANZA
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
