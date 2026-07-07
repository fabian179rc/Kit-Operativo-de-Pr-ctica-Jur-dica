import React from 'react';
import { motion } from 'framer-motion';
const situations = [
{
  emoji: '😰',
  title: 'Tu gestión depende de tu memoria',
  desc: 'Sabés qué riesgo tiene cada puesto, qué EPP necesita cada tarea y qué capacitación venció. Pero todo está en tu cabeza, no en un sistema que cualquiera pueda auditar.'
},
{
  emoji: '😩',
  title: 'Tenés 100 archivos que no se hablan entre sí',
  desc: 'La matriz de riesgos dice una cosa. La lista de EPP dice otra. El registro de capacitaciones está en otro Excel. Nada está conectado y todo es inconsistente.'
},
{
  emoji: '⏱️',
  title: 'Perdés horas buscando datos que deberían estar en segundos',
  desc: 'Cuando un auditor pregunta qué EPP usa el operario de planta B o cuándo vence la capacitación de altura, tenés que buscar en cinco archivos distintos.'
},
{
  emoji: '📂',
  title: 'Riesgos no evaluados que nadie detectó',
  desc: 'Si no está en la matriz, no existe para la empresa. Hasta que ocurre el accidente y el fiscal pregunta por qué ese riesgo nunca fue identificado.'
},
{
  emoji: '📉',
  title: 'No podés demostrar tu gestión con datos',
  desc: 'Hacés trabajo real pero no tenés un tablero que muestre el estado de tu sistema. Ante la gerencia o una auditoría, no podés mostrar la radiografía completa de tu gestión.'
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
