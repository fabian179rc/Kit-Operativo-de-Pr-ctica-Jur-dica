import React from 'react';
import { motion } from 'framer-motion';
const situations = [
{
  emoji: '😰',
  title: 'Cobrás barato para no perder el cliente',
  desc: 'Ajustás tu precio cada vez que sentís resistencia. Terminás trabajando el doble por la mitad de lo que vale tu servicio.'
},
{
  emoji: '😩',
  title: 'Hacés de todo por el mismo precio',
  desc: 'Visitas, documentación, capacitaciones, trámites, emergencias a las once de la noche. Sin límites. Sin alcance. Sin rentabilidad.'
},
{
  emoji: '⏱️',
  title: 'Tu negocio se detiene cuando vos parás',
  desc: 'No tenés procesos. No tenés sistemas. Si no estás corriendo, no entra un peso. Eso no es una consultora, es un autoempleo agotador.'
},
{
  emoji: '📂',
  title: 'Tus propuestas mueren en el visto',
  desc: 'Mandás un presupuesto en Word o por WhatsApp y nunca más te responden. No sabés cómo presentar tu valor para que el cliente diga que sí.'
},
{
  emoji: '📉',
  title: 'Tus clientes no te ven como una inversión',
  desc: 'Te ven como un costo que pueden recortar. No como un socio estratégico que los protege legalmente y les ahorra dinero.'
}];

export function ProblemSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-[#F3EFE3] uppercase">
            ¿Te reconocés en esto?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {situations.map((item, i) =>
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
            className="bg-[#1E2E22] p-4 md:p-6 rounded-2xl shadow-sm border border-white/10">

              <div className="flex items-center gap-2 mb-1.5 md:mb-2">
                <span className="text-xl md:text-3xl flex-shrink-0">
                  {item.emoji}
                </span>
                <h3 className="text-base md:text-lg font-bold text-[#F3EFE3]">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm md:text-base text-[#A9B39E] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
