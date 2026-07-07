import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle } from 'lucide-react';
const testimonials = [
{
  initial: 'M',
  color: 'bg-pink-100 text-pink-700',
  name: 'Martín G.',
  location: 'Técnico en HyS — Buenos Aires',
  text: 'Antes tardaba tres días en armar un programa de obra. Ahora cargo los datos, adapto las medidas preventivas del catálogo y en una tarde tengo todo listo para presentar.'
},
{
  initial: 'C',
  color: 'bg-blue-100 text-blue-700',
  name: 'Carolina F.',
  location: 'Licenciada en HyS — Córdoba',
  text: 'La ART me rechazó dos veces el programa antes de tener este sistema. Desde que uso la Checklist Pre-Entrega, nunca más tuve un rechazo.'
},
{
  initial: 'R',
  color: 'bg-emerald-100 text-emerald-700',
  name: 'Roberto S.',
  location: 'Consultor HyS — Rosario',
  text: 'Los PTS críticos del Bono 3 solos ya valieron la compra. Tenía miedo de armar el de espacios confinados. Ahora lo entrego con confianza.'
},
{
  initial: 'A',
  color: 'bg-amber-100 text-amber-700',
  name: 'Andrea P.',
  location: 'Responsable HyS — Mendoza',
  text: 'Cuando hubo un accidente leve en obra, el inspector revisó mi programa. Estaba todo: riesgos, medidas, firmas, PTS. No tuve ningún problema.'
}];

export function TestimonialsBottom() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 flex flex-col items-center">
          <MessageCircle className="w-10 h-10 text-[#d4a017] mb-3" />
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#2f3a2c]">
            Lo que otros profesionales de HyS están diciendo
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) =>
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
            className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex flex-col h-full">

              <div className="flex text-[#d4a017] mb-3">
                {[...Array(5)].map((_, i) =>
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
              )}
              </div>

              <p className="text-slate-700 text-[15px] leading-relaxed mb-4 italic flex-grow">
                "{t.text}"
              </p>

              <div className="flex items-center border-t border-slate-100 pt-3 mt-auto">
                <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm ${t.color} mr-3 flex-shrink-0`}>

                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-[#2f3a2c] text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
