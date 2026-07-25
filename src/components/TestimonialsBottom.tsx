import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle } from 'lucide-react';
const testimonials = [
{
  initial: 'M',
  color: 'bg-pink-100 text-pink-700',
  name: 'Mariano G.',
  location: 'Consultor HyS — Buenos Aires',
  text: 'Mandaba presupuestos en Word y casi nunca me respondían. Usé la plantilla de propuesta del Bono 1 y cerré dos clientes nuevos en la misma semana.'
},
{
  initial: 'L',
  color: 'bg-blue-100 text-blue-700',
  name: 'Laura F.',
  location: 'Licenciada en HyS — Córdoba',
  text: 'Tenía clientes que me llamaban a cualquier hora por cualquier cosa. Con el kit de onboarding establecí reglas claras desde el día uno. Cambió todo.'
},
{
  initial: 'P',
  color: 'bg-emerald-100 text-emerald-700',
  name: 'Pablo S.',
  location: 'Técnico en HyS — Rosario',
  text: 'Gracias al módulo de honorarios pude aumentar mis tarifas un cuarenta por ciento en la renovación anual. Solo uno de doce clientes no renovó.'
},
{
  initial: 'S',
  color: 'bg-amber-100 text-amber-700',
  name: 'Silvana R.',
  location: 'Consultora HyS — Mendoza',
  text: 'El CRM del Bono 2 me ordenó la vida. Ahora sé exactamente qué facturé, qué cobré y qué cliente me da más rentabilidad en menos tiempo.'
}];

export function TestimonialsBottom() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 flex flex-col items-center">
          <MessageCircle className="w-10 h-10 text-[#D4A017] mb-3" />
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#F3EFE3]">
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
            className="bg-[#1E2E22] rounded-2xl p-5 shadow-sm border border-white/10 flex flex-col h-full">

              <div className="flex text-[#D4A017] mb-3">
                {[...Array(5)].map((_, i) =>
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
              )}
              </div>

              <p className="text-[#D9D4C5] text-[15px] leading-relaxed mb-4 italic flex-grow">
                "{t.text}"
              </p>

              <div className="flex items-center border-t border-white/10 pt-3 mt-auto">
                <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm ${t.color} mr-3 flex-shrink-0`}>

                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-[#F3EFE3] text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-[#A9B39E]">
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
