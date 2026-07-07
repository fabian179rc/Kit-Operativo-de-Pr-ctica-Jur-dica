import React from 'react';
import { motion } from 'framer-motion';
const situations = [
{
  emoji: '😰',
  title: 'Actuás bajo presión y sin método',
  desc: 'Cuando ocurre el accidente, tomás fotos al azar, anotás lo que podés y después no sabés cómo ordenar todo para el informe.'
},
{
  emoji: '😩',
  title: 'Tus investigaciones terminan en "error humano"',
  desc: 'No porque sea la causa real, sino porque no tenés las herramientas para ir más profundo. Y el riesgo sigue exactamente igual.'
},
{
  emoji: '⏱️',
  title: 'El informe te lleva días y nadie lo lee',
  desc: 'Escribís páginas y páginas que la gerencia archiva sin leer. Las recomendaciones quedan sin respuesta y el accidente se repite.'
},
{
  emoji: '📂',
  title: 'La escena se altera y perdés evidencia crítica',
  desc: 'No sabés qué preservar ni cómo documentar antes de que todo cambie. Después es imposible reconstruir lo que pasó.'
},
{
  emoji: '⚖️',
  title: 'Tu informe puede usarse en tu contra',
  desc: 'En un juicio laboral, el primer documento que revisa el perito es el informe de investigación. Si está mal redactado, te expone a vos y a la empresa.'
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
