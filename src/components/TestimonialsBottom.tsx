import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle } from 'lucide-react';
const testimonials = [
{
  initial: 'J',
  color: 'bg-pink-100 text-pink-700',
  name: 'Javier M.',
  location: 'Técnico en HyS — Buenos Aires',
  text: 'Antes llegaba a la escena del accidente y no sabía por dónde empezar. Con el protocolo de los primeros 60 minutos, ahora sé exactamente qué hacer y qué preservar.'
},
{
  initial: 'M',
  color: 'bg-blue-100 text-blue-700',
  name: 'Marcela F.',
  location: 'Licenciada en HyS — Córdoba',
  text: 'Mis informes siempre terminaban en "error humano". Con el Árbol de Causas del sistema llegué a fallas de proceso que nunca hubiera encontrado solo.'
},
{
  initial: 'G',
  color: 'bg-emerald-100 text-emerald-700',
  name: 'Guillermo S.',
  location: 'Consultor HyS — Rosario',
  text: 'El banco de frases técnicas me cambió la forma de redactar. Mis informes ahora son objetivos, claros y la gerencia los toma en serio por primera vez.'
},
{
  initial: 'N',
  color: 'bg-amber-100 text-amber-700',
  name: 'Natalia R.',
  location: 'Responsable HyS — Mendoza',
  text: 'Cuando vino el perito de la ART, tenía todo documentado: fotos, croquis, entrevistas, análisis de causas y acciones cerradas. Fue la investigación más sólida que hice en mi carrera.'
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
