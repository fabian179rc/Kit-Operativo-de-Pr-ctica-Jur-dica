import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
const faqs = [
{
  q: '¿Es un producto físico o digital?',
  a: 'Es un producto 100% digital. Recibís acceso inmediato al material en formato PDF de alta resolución para descargarlo y utilizarlo desde tu computadora, tablet o dispositivo móvil.'
},
{
  q: '¿Es aplicable a todas las provincias de Argentina?',
  a: 'Los modelos están elaborados conforme a la legislación de fondo nacional (Código Civil y Comercial, Código Procesal Civil y Comercial de la Nación y leyes especiales) y resultan adaptables a los reglamentos procesales de cada jurisdicción provincial. El profesional deberá adecuarlos al fuero y juzgado de actuación correspondiente.'
},
{
  q: '¿Puedo copiar y adaptar los modelos a mi procesador de texto?',
  a: 'Sí. El formato PDF permite la selección y copiado de texto, lo que facilita la integración directa con Microsoft Word, Google Docs o cualquier procesador de textos habitual en el ejercicio profesional.'
},
{
  q: '¿Cuándo recibo el acceso al material?',
  a: 'El acceso es inmediato. Una vez confirmado el pago, recibirás las instrucciones de descarga en tu correo electrónico registrado.'
},
{
  q: '¿Reemplaza el asesoramiento de un abogado senior o de un estudio jurídico?',
  a: 'No. El Kit Operativo es una herramienta de orientación, organización y redacción técnica para profesionales del Derecho. No constituye asesoramiento legal ni patrocinio jurídico. El profesional habilitado es el único responsable de la estrategia y presentación de cada caso concreto.'
},
{
  q: '¿Necesito experiencia previa para utilizarlo?',
  a: 'No. El material está estructurado para ser útil tanto para abogados nóveles como para profesionales con experiencia que buscan optimizar su flujo de trabajo. Cada módulo cuenta con indicaciones claras de aplicación.'
}];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <span className="inline-block px-6 py-2.5 mb-5 rounded-full border border-white/15 bg-[#1D3550] text-[#EDF2F6] font-semibold tracking-[0.18em] uppercase text-xs">
            Preguntas Frecuentes
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#EDF2F6] leading-tight">
            Respuestas a tus{" "}
            <em className="text-[#E0932E] font-bold italic">
              consultas habituales
            </em>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-[#16293B] rounded-2xl shadow-sm shadow-black/20">

                <button
                  className="w-full px-6 md:px-8 py-5 md:py-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}>

                  <span className="font-heading font-bold text-[#EDF2F6] text-lg md:text-xl">
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-full bg-[#1D3550] text-[#EDF2F6] flex items-center justify-center transition-colors"
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

                      <div className="px-6 md:px-8 pb-6 md:pb-7 -mt-1 text-[#93A7B8] leading-relaxed text-[15px] md:text-base max-w-[58ch]">
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
