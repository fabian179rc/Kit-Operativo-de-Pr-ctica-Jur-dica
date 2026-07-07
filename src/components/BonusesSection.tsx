import React from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
const bonuses = [
{
  num: 1,
  title: 'Pack de 8 Matrices Automatizadas en Excel',
  desc: 'Ocho planillas profesionales listas con fórmulas, formatos condicionales y filtros de búsqueda para riesgos, EPP, capacitación, documentación, emergencias, requisitos legales, acciones correctivas e indicadores. Abrís, cargás tus datos y el sistema organiza todo automáticamente.',
  image: "sm-bono1.webp"
},
{
  num: 2,
  title: 'Catálogo de +150 Combinaciones Peligro-Riesgo-Control',
  desc: 'Un diccionario técnico con más de ciento cincuenta combinaciones listas para copiar y adaptar en tu IPER. Organizadas por tipo de actividad, tarea y sector. Ideal para completar matrices de riesgo sin empezar desde cero y sin omitir peligros críticos que después aparecen en una auditoría.',
  image: "sm-bono2.webp"
},
{
  num: 3,
  title: 'Matriz de EPP Inteligente por Riesgo y Norma',
  desc: 'Un selector técnico donde identificás el riesgo y obtenés el tipo de EPP recomendado con referencia a normas IRAM, ANSI y EN. Incluye categorías para protección de cabeza, ojos, cara, auditiva, respiratoria, manos, pies y cuerpo. Ideal para justificar técnicamente cada equipo entregado y dejar trazabilidad de la elección.',
  image: "sm-bono3.webp"
},
{
  num: 4,
  title: 'Guía de Seguimiento de Requisitos Legales HyS',
  desc: 'Una metodología paso a paso para identificar, clasificar y mapear la normativa aplicable a cada cliente o establecimiento sin perderse en el boletín oficial. Incluye criterios para filtrar por actividad, provincia, tipo de riesgo y obligación, y un modelo de matriz de requisitos legales editable y auditable.',
  image: "sm-bono4.webp"
},
{
  num: 5,
  title: 'Checklist de Auditoría de Matrices HyS',
  desc: 'Una lista de treinta puntos de control para verificar si tus matrices son técnicamente consistentes, están actualizadas y resisten una auditoría externa. Detectá inconsistencias entre la matriz de riesgos y la de EPP, puestos sin capacitación asignada, documentos vencidos sin alerta y acciones correctivas sin cierre antes de que lo haga el auditor.',
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
