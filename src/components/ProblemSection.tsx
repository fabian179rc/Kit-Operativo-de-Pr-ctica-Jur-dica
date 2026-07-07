import React from 'react';
import { motion } from 'framer-motion';
const situations = [
{
  emoji: '😰',
  title: 'Empezás cada programa desde cero',
  desc: 'Buscás el archivo de otra obra, copiás, pegás y rezás para que nadie note que no tiene nada que ver con este cliente.'
},
{
  emoji: '😩',
  title: 'El programa no refleja la obra real',
  desc: 'La Matriz de Riesgos dice una cosa. El cuerpo del programa dice otra. Si hay un accidente, esa incoherencia es tu problema.'
},
{
  emoji: '⏱️',
  title: 'Perdés días en redactar lo que debería llevarte horas',
  desc: 'Tenés tres obras nuevas entrando y no podés dedicarle tres días a cada programa. Pero tampoco podés entregar algo mediocre.'
},
{
  emoji: '📂',
  title: 'Te piden el programa y no sabés si está completo',
  desc: 'Faltan firmas, falta un PTS, faltan los anexos. La ART lo rechaza y volvés a empezar.'
},
{
  emoji: '⚖️',
  title: 'Firmás documentos que no podrías defender ante un perito',
  desc: 'El día que tengas que explicar ante un juicio qué decía tu programa de seguridad, ¿vas a poder hacerlo con confianza?'
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
