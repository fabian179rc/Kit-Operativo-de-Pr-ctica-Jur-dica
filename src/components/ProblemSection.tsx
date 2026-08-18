import React from 'react';
import { motion } from 'framer-motion';
const pains = [
{
  emoji: '🗂️',
  title: 'Modelos dispersos',
  desc: 'Escritos sueltos y desactualizados. Rehacés cada caso desde cero.'
},
{
  emoji: '⏱️',
  title: 'Trámites que llevan horas',
  desc: 'Portal del Abogado, domicilios y sorteos te quitan horas.'
},
{
  emoji: '📌',
  title: 'Cautelares rechazadas',
  desc: 'No sabés cómo fundamentar el peligro en la demora ni cuándo pedir cautelar.'
},
{
  emoji: '🎯',
  title: 'Plazos perentorios',
  desc: 'Los incumplimientos activan plazos críticos y pueden costarte el caso.'
}];

export function ProblemSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-6">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-[#EDF2F6] uppercase">
            ¿Te cuesta gestionar casos de salud?
          </h2>
          <p className="text-sm md:text-base text-[#93A7B8] leading-relaxed max-w-2xl mx-auto">
            Cada caso exige rapidez y precisión. Sin un sistema, perdés tiempo
            buscando modelos y temés equivocarte en el PJN o en la cautelar.
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

        <div className="grid sm:grid-cols-2 gap-2">
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
            className="bg-[#16293B] p-2.5 md:p-4 rounded-2xl shadow-sm border border-white/10">

              <div className="flex items-center gap-1.5 md:gap-2 mb-0.5 md:mb-1.5">
                <span className="text-lg md:text-3xl flex-shrink-0">
                  {item.emoji}
                </span>
                <h3 className="text-[15px] md:text-lg font-bold text-[#EDF2F6]">
                  {item.title}
                </h3>
              </div>
              <p className="text-[13px] md:text-base text-[#93A7B8] leading-snug">
                {item.desc}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
