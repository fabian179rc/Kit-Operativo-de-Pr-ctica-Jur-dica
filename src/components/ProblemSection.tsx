import React from 'react';
import { motion } from 'framer-motion';
const situations = [
{
  emoji: '😰',
  title: 'Tu plan de emergencias es un PDF que nadie leyó',
  desc: 'Existe en una carpeta, tiene fecha, tiene firma. Pero si hoy ocurre un incendio, nadie sabe qué hacer ni adónde ir.'
},
{
  emoji: '😩',
  title: 'Los roles de emergencia son nombres en un papel',
  desc: 'El coordinador no sabe que lo es. El brigadista no fue capacitado. El punto de reunión está bloqueado por pallets.'
},
{
  emoji: '⏱️',
  title: 'Hacés simulacros que no sirven para nada',
  desc: 'La gente sale, da una vuelta y vuelve. No hay evaluación, no hay registro, no hay aprendizaje. Y la ART igual te lo aprueba.'
},
{
  emoji: '📂',
  title: 'No tenés evidencia de que el sistema funciona',
  desc: 'Si ocurre una tragedia y el fiscal te pregunta qué hiciste para preparar a tu gente, ¿qué documentación vas a mostrar?'
},
{
  emoji: '⚖️',
  title: 'La responsabilidad penal es tuya si el plan falla',
  desc: 'En una emergencia real, el plan de papel no te protege. Solo te protege el sistema que implementaste, practicaste y documentaste.'
}];

export function ProblemSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-[#2f3a2c] uppercase">
            ¿Te reconocés en esto?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {situations.map((item, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: i * 0.1
            }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">

              <div className="text-3xl mb-3">{item.emoji}</div>
              <h3 className="text-lg font-bold text-[#2f3a2c] mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
