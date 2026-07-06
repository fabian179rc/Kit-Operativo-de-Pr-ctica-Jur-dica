import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
const faqs = [
{
  q: '¿Es en papel o digital?',
  a: 'Es un producto 100% digital. Recibís todos los módulos de forma inmediata en tu correo electrónico, con el manual principal, los 5 bonos y todo el material listo para usar e imprimir en casa o en cualquier centro de copiado las veces que necesites.'
},
{
  q: '¿Necesito experiencia previa para usarlo?',
  a: 'No. El sistema incluye el Capítulo 1 dedicado exclusivamente a explicarte cómo usar todo sin improvisar. En menos de una hora ya vas a saber exactamente qué usar, cuándo y cómo adaptarlo a cada cliente.'
},
{
  q: '¿Sirve para profesionales de cualquier provincia de Argentina?',
  a: 'Sí. Todo el contenido está basado en la normativa nacional vigente (Ley 19.587, Decreto 351 y resoluciones SRT) aplicable en todo el territorio argentino.'
},
{
  q: '¿Qué pasa si ya tengo algunas capacitaciones armadas?',
  a: 'El sistema se complementa con lo que ya tenés. No reemplaza tu trabajo: lo organiza, lo completa y lo eleva de nivel. Podés incorporar tus materiales al sistema y tener todo en un solo lugar.'
},
{
  q: '¿Cuándo recibo el material?',
  a: 'De forma inmediata. Apenas confirmada la compra, recibís el acceso completo en tu correo electrónico. En menos de 5 minutos ya podés estar revisando el sistema.'
},
{
  q: '¿Sirve si recién me recibí o si tengo pocos clientes?',
  a: 'Es el momento ideal para empezar con el pie derecho. Este sistema te da desde el primer día la estructura, el material y el respaldo legal que le lleva años construir a otros profesionales.'
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
