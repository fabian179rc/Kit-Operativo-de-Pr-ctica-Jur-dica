import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
const faqs = [
{
  q: '¿Es físico o digital?',
  a: '100% digital. Acceso inmediato para descargar, editar e imprimir desde cualquier dispositivo.'
},
{
  q: '¿Necesito saber Excel avanzado para usar las matrices?',
  a: 'No. Las matrices del Bono 1 vienen listas con fórmulas y formatos condicionales. Solo tenés que cargar tus datos. El sistema explica paso a paso cómo usarlas sin conocimientos avanzados.'
},
{
  q: '¿Sirve para cualquier tipo de industria o actividad?',
  a: 'Sí. Las matrices son adaptables a industria, construcción, logística, comercio, servicios y cualquier tipo de establecimiento. El criterio técnico es universal y los modelos son editables.'
},
{
  q: '¿Sirve para cualquier provincia o país?',
  a: 'Sí. La metodología es aplicable en cualquier contexto. Los modelos siguen los lineamientos de la normativa argentina pero son adaptables a cualquier jurisdicción o sistema de gestión.'
},
{
  q: '¿Puedo usarlo con varios clientes distintos?',
  a: 'Sí. Las matrices son reutilizables para cada cliente y establecimiento. Una sola compra te da el sistema completo para toda tu cartera.'
},
{
  q: '¿Ya tengo algunas matrices propias, me sirve igual?',
  a: 'Sí. El sistema te enseña el criterio técnico detrás de cada matriz y cómo interconectarlas. Podés mejorar lo que ya tenés, detectar inconsistencias y completar las que te faltan.'
}];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <span className="inline-block px-6 py-2.5 mb-5 rounded-full border border-white/40 bg-[#566049] text-white font-semibold tracking-[0.18em] uppercase text-xs">
            Preguntas Frecuentes
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#2f3a2c] leading-tight">
            Respondemos a{" "}
            <em className="text-[#c06a52] font-bold italic">
              tus preguntas
            </em>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm shadow-black/5">

                <button
                  className="w-full px-6 md:px-8 py-5 md:py-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}>

                  <span className="font-heading font-bold text-[#2f3a2c] text-lg md:text-xl">
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-full bg-[#566049] text-white flex items-center justify-center transition-colors"
                    aria-hidden="true">

                    {isOpen ?
                    <Minus className="w-4 h-4" /> :

                    <Plus className="w-4 h-4" />
                    }
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen &&
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0
                    }}
                    animate={{
                      height: 'auto',
                      opacity: 1
                    }}
                    exit={{
                      height: 0,
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut'
                    }}
                    className="overflow-hidden">

                      <div className="px-6 md:px-8 pb-6 md:pb-7 -mt-1 text-slate-600 leading-relaxed text-[15px] md:text-base max-w-[58ch]">
                        {faq.a}
                      </div>
                    </motion.div>
                  }
                </AnimatePresence>
              </div>);

          })}
        </div>
      </div>
    </section>);

}
