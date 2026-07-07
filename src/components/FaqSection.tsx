import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
const faqs = [
{
  q: '¿Es físico o digital?',
  a: '100% digital. Acceso inmediato para descargar, editar e imprimir desde cualquier dispositivo.'
},
{
  q: '¿Sirve para obras y también para industrias o servicios?',
  a: 'Sí. El sistema incluye modelos específicos para construcción, servicios industriales, mantenimiento y contratistas. Cada plantilla es adaptable a tu tipo de cliente.'
},
{
  q: '¿Necesito experiencia previa en programas de seguridad?',
  a: 'No. El sistema está diseñado para guiarte desde el relevamiento inicial hasta la entrega final, paso a paso. Funciona tanto si estás empezando como si ya tenés experiencia y querés optimizar tu trabajo.'
},
{
  q: '¿Sirve para cualquier provincia o país?',
  a: 'Sí. La estructura técnica es universal. Los modelos siguen los lineamientos generales de la legislación argentina pero son adaptables a cualquier normativa provincial o regional.'
},
{
  q: '¿Puedo usarlo con varios clientes distintos?',
  a: 'Sí. Las plantillas son editables y reutilizables. Una sola compra te da herramientas para todos tus clientes.'
},
{
  q: '¿Cuándo recibo el acceso?',
  a: 'Inmediatamente después de confirmar tu pago. Recibís el link de descarga en tu correo en menos de 5 minutos.'
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
