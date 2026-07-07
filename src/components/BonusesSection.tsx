import React from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
const bonuses = [
{
  num: 1,
  title: 'Pack de Plantillas de Propuestas Comerciales',
  desc: 'Modelos profesionales diseñados para presentar servicios mensuales, auditorías y capacitaciones de forma visual, ordenada y persuasiva. Incluye estructura para destacar el problema del cliente, la solución que ofrecés, el alcance del servicio, los entregables y el valor de la inversión. Dejá de mandar presupuestos en Word y empezá a presentar propuestas que posicionan tu consultora como referente.',
  image: "sm-bono1.webp"
},
{
  num: 2,
  title: 'CRM para Consultores HyS en Excel',
  desc: 'Una planilla completa para controlar prospectos, estados de propuestas, clientes activos, vencimientos de contratos, facturación mensual y rentabilidad por cliente. Ideal para dejar de gestionar con la memoria y tener en un solo lugar la radiografía comercial y financiera de toda tu consultora.',
  image: "sm-bono2.webp"
},
{
  num: 3,
  title: 'Guion de Primera Reunión y Manejo de Objeciones',
  desc: 'Qué decir en cada etapa de la reunión inicial para descubrir el problema del cliente, generar urgencia y posicionar tu servicio como la solución obvia. Incluye respuestas profesionales para las objeciones más frecuentes: está caro, ya tengo alguien que me firma, lo tengo que pensar y necesito consultarlo.',
  image: "sm-bono3.webp"
},
{
  num: 4,
  title: 'Kit de Onboarding Profesional para Nuevos Clientes',
  desc: 'Email de bienvenida, formulario de pedido de documentación inicial, guía de reglas del servicio y protocolo de comunicación. Todo lo que necesitás para arrancar cada relación comercial con autoridad, orden y claridad desde el primer día sin depender de la memoria ni de WhatsApp.',
  image: "sm-bono4.webp"
},
{
  num: 5,
  title: 'Guía de Honorarios para Consultores HyS',
  desc: 'Una guía de referencia para calcular y justificar tus honorarios según tipo de industria, cantidad de empleados, nivel de riesgo, complejidad del servicio y frecuencia de visitas. Incluye rangos orientativos por tipo de servicio y metodología para presentar incrementos anuales sin perder clientes.',
  image: "sm-bono5.webp"
}];

export function BonusesSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 mb-5 rounded-full border border-white/40 bg-[#4A553F] text-white font-semibold tracking-[0.18em] uppercase text-xs">
            <Gift className="w-4 h-4 text-[#d4a017]" />
            5 Bonos Gratis Incluidos
          </span>
          <h2 className="font-heading font-bold text-[#2f3a2c] text-3xl md:text-5xl leading-tight">
            Y además, recibís{" "}
            <span className="italic text-[#5C6851]">5 bonos gratis</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {bonuses.map((b, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 16
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: i * 0.08
            }}
            className="bg-white border border-slate-200 rounded-2xl p-3 shadow-sm">

              <div className="relative rounded-xl overflow-hidden mb-3 h-56 bg-[#f4efe2] flex items-center justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}${b.image}`}
                  alt={`Bono ${b.num}: ${b.title}`}
                  width={400}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain" />
                <span className="absolute top-2.5 left-2.5 bg-rose-500 text-white font-bold text-[11px] tracking-wide uppercase px-2.5 py-1 rounded-md shadow-sm">
                  Bono {b.num}
                </span>
                <span className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 bg-emerald-600 text-white font-bold text-[11px] tracking-wide uppercase px-2.5 py-1 rounded-md shadow-sm">
                  🎁 Gratis
                </span>
              </div>
              <div className="px-2 pb-2">
                <h3 className="font-heading font-bold text-[#2f3a2c] text-[15px] mb-1.5">
                  Bono {b.num}: {b.title}
                </h3>
                <p className="text-slate-600 text-sm leading-snug">
                  {b.desc}
                </p>
              </div>
            </motion.div>
          )}
        </div>

        <div className="text-center px-6 py-10 bg-white/60 border border-amber-100 rounded-3xl">
          <Gift className="w-9 h-9 text-[#d4a017] mx-auto mb-4" />
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#5C6851] mb-2">
            Todo incluido en
          </p>
          <h3 className="font-heading font-bold text-[#2f3a2c] text-3xl md:text-4xl mb-3">
            el Sistema Maestro
          </h3>
          <p className="text-slate-600">
            Los 5 bonos son gratis con tu compra hoy.
          </p>
        </div>
      </div>
    </section>);

}
