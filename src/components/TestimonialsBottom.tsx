import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle } from 'lucide-react';
const testimonials = [
{
  initial: 'M',
  color: 'bg-pink-100 text-pink-700',
  name: 'María L.',
  location: 'Abogada Independiente — Buenos Aires',
  text: "Antes cada primer amparo me llevaba un día entero buscando modelos y el domicilio de la prepaga. Ahora tengo el protocolo en el PDF y lo resuelvo en dos horas."
},
{
  initial: 'F',
  color: 'bg-blue-100 text-blue-700',
  name: 'Federico G.',
  location: 'Abogado Litigante — Córdoba',
  text: 'El módulo de medidas cautelares me dio el criterio exacto para redactar el peligro en la demora sin que el juez me lo rechace. Claro, actualizado y aplicable.'
},
{
  initial: 'V',
  color: 'bg-emerald-100 text-emerald-700',
  name: 'Valentina R.',
  location: 'Abogada Generalista — Rosario',
  text: 'Lo usé para mi primer caso real de discapacidad. La guía del PJN me ahorró horas de prueba y error. El checklist documental es oro puro para la primera consulta.'
}];

export function TestimonialsBottom() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 flex flex-col items-center">
          <MessageCircle className="w-10 h-10 text-[#E0932E] mb-3" />
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#EDF2F6]">
            Lo Que Dicen Quienes Ya Trabajan con el Sistema
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
            className="bg-[#16293B] rounded-2xl p-5 shadow-sm border border-white/10 flex flex-col h-full">

              <div className="flex text-[#E0932E] mb-3">
                {[...Array(5)].map((_, i) =>
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
              )}
              </div>

              <p className="text-[#DCE6ED] text-[15px] leading-relaxed mb-4 italic flex-grow">
                "{t.text}"
              </p>

              <div className="flex items-center border-t border-white/10 pt-3 mt-auto">
                <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm ${t.color} mr-3 flex-shrink-0`}>

                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-[#EDF2F6] text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-[#93A7B8]">
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
