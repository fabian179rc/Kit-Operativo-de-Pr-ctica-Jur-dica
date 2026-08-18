import React from 'react';
import { motion } from 'framer-motion';
const pains = [
{
  emoji: '🗂️',
  title: 'Modelos dispersos',
  desc: 'Escritos sueltos y desactualizados. Cada caso nuevo, rehacés todo desde cero sin saber si el modelo sigue siendo válido para el juzgado que te tocó.'
},
{
  emoji: '⏱️',
  title: 'Trámites que llevan horas',
  desc: 'La carga en el Portal del Abogado, la búsqueda del domicilio real de la prepaga y el sorteo te comen tiempo que podrías dedicar a gestionar otros casos.'
},
{
  emoji: '📌',
  title: 'Cautelares rechazadas',
  desc: 'No tenés claro cómo redactar el "peligro en la demora" de forma irrefutable, cuándo pedir contracautela juratoria o cuándo avanzar inaudita parte.'
},
{
  emoji: '🎯',
  title: 'Plazos perentorios',
  desc: 'Una notificación, una cautelar resuelta o un incumplimiento activan plazos críticos. Sin sistema claro, una demora puede costarte el caso y los honorarios.'
}];

export function ProblemSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-6">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-[#EDF2F6] uppercase">
            ¿Te falta estructura para gestionar casos de salud sin trabarte?
          </h2>
          <p className="text-sm md:text-base text-[#93A7B8] leading-relaxed max-w-2xl mx-auto">
            Sabés que los amparos de salud son urgentes. Sabés que hay
            clientes que dependen de vos. Pero cada caso nuevo te encuentra
            buscando un modelo que no encontrás, con miedo a cometer un error
            en el PJN o sin saber exactamente qué pedir en la cautelar.
          </p>
        </div>

        <div className="bg-[#16293B] border border-[#E0932E]/20 text-[#EDF2F6] rounded-2xl p-3 md:p-4 shadow-sm text-center mb-5 max-w-2xl mx-auto">
          <p className="md:text-lg font-medium text-[#DCE6ED] text-[15px]">
            ⚡ Ese no es un problema de capacidad. Es un problema de sistema.
          </p>
        </div>

        <p className="text-center text-sm md:text-base text-[#93A7B8] leading-relaxed max-w-2xl mx-auto mb-5">
          Seas abogado/a independiente, parte de un estudio jurídico o estés
          por tomar tu primer caso de salud, probablemente ya viviste esto:
        </p>

        <div className="grid sm:grid-cols-2 gap-3">
          {pains.map((item, i) =>
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
            className="bg-[#16293B] p-3 md:p-4 rounded-2xl shadow-sm border border-white/10">

              <div className="flex items-center gap-2 mb-1 md:mb-1.5">
                <span className="text-xl md:text-3xl flex-shrink-0">
                  {item.emoji}
                </span>
                <h3 className="text-base md:text-lg font-bold text-[#EDF2F6]">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm md:text-base text-[#93A7B8] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
