import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
const faqs = [
{
  q: '¿Es físico o digital?',
  a: '100% digital. Acceso inmediato para descargar, editar e imprimir desde cualquier dispositivo.'
},
{
  q: '¿Sirve para cualquier tipo de accidente o industria?',
  a: 'Sí. El sistema incluye metodología aplicable a accidentes en industria, construcción, logística, servicios y comercio. Los formularios y modelos son adaptables a cualquier tipo de evento y contexto.'
},
{
  q: '¿Necesito experiencia previa en investigación de accidentes?',
  a: 'No. El sistema te guía paso a paso desde la respuesta inmediata hasta el cierre del informe. Funciona tanto si estás investigando tu primer accidente como si querés profesionalizar lo que ya hacés.'
},
{
  q: '¿Sirve para cualquier provincia o país?',
  a: 'Sí. La metodología es universal. Los modelos siguen los lineamientos de la normativa argentina pero son adaptables a cualquier jurisdicción o sistema de gestión.'
},
{
  q: '¿Puedo usarlo con distintos clientes o empresas?',
  a: 'Sí. Los formularios y plantillas son reutilizables para cada evento y cliente. Una sola compra te da herramientas para todas tus investigaciones.'
},
{
  q: '¿Ya investigué accidentes antes, me sirve igual?',
  a: 'Sí. El sistema no solo te da herramientas nuevas, sino que mejora lo que ya hacés: análisis más profundo, informes más sólidos y acciones correctivas que realmente cierran el riesgo.'
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
