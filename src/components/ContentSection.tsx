import React from 'react';
import { motion } from 'framer-motion';
import { PackageOpen } from 'lucide-react';

const modulos = [
  { emoji: '🗺️', label: 'Mindset del Consultor Elite' },
  { emoji: '📐', label: 'Nicho y Posicionamiento' },
  { emoji: '📅', label: 'El Diagnóstico de Venta' },
  { emoji: '⚠️', label: 'Propuestas High-Ticket que Cierran' },
  { emoji: '✅', label: 'Onboarding de Clientes' },
  { emoji: '🔍', label: 'El Sistema Operativo Semanal' },
  { emoji: '📸', label: 'Gestión Documental Eficiente' },
  { emoji: '📝', label: 'Comunicación con Autoridad' },
  { emoji: '🛠️', label: 'Renovaciones e Incrementos de Honorarios' },
  { emoji: '📊', label: 'Marketing para Prevencionistas' },
  { emoji: '🏭', label: 'Finanzas para Consultores' },
  { emoji: '🏆', label: 'Escalado de la Consultora' },
];

const temas = [
  { emoji: '📋', label: 'Posicionamiento y nicho' },
  { emoji: '🔍', label: 'Diagnóstico de venta' },
  { emoji: '⚠️', label: 'Propuestas que cierran' },
  { emoji: '📝', label: 'Onboarding de clientes' },
  { emoji: '📊', label: 'Sistema operativo semanal' },
  { emoji: '✅', label: 'Gestión documental' },
  { emoji: '👷', label: 'Comunicación con autoridad' },
  { emoji: '🏗️', label: 'Renovaciones y aumentos' },
  { emoji: '🔥', label: 'Marketing para consultores' },
  { emoji: '🧯', label: 'Finanzas y rentabilidad' },
  { emoji: '📈', label: 'Escalado y delegación' },
  { emoji: '➕', label: 'Y mucho más...' },
];

const etapas = [
  { emoji: '🌱', label: 'Consultores que recién empiezan' },
  { emoji: '📈', label: 'Consultores que ya tienen clientes' },
  { emoji: '🌎', label: 'Cualquier mercado o país' },
];

export function ContentSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 mb-5 rounded-full border border-white/15 bg-[#24352A] text-[#F3EFE3] font-semibold tracking-[0.18em] uppercase text-xs">
            <PackageOpen className="w-4 h-4 text-[#D4A017]" />
            ¿Qué contiene?
          </span>
          <h2 className="font-heading font-bold text-[#F3EFE3] text-3xl md:text-5xl leading-tight mb-4">
            📦 12{' '}
            <span className="italic text-[#A8BB98]">Módulos Incluidos</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-2 md:gap-3 mb-8">
          {modulos.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="flex items-center gap-2 md:gap-3 bg-[#1E2E22] border border-white/10 rounded-xl px-3 py-2 md:px-4 md:py-3 shadow-sm"
            >
              <span className="text-base md:text-xl flex-shrink-0" aria-hidden="true">
                {m.emoji}
              </span>
              <span className="font-semibold text-[#F3EFE3] text-xs md:text-[15px] leading-tight">
                {m.label}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mb-8">
          <h3 className="font-heading font-bold text-[#F3EFE3] text-xl md:text-2xl mb-4 text-center">
            🎯 Cubre los Procesos Más Importantes
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
            {temas.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="flex items-center gap-2.5 bg-[#1E2E22] border border-white/10 rounded-xl px-4 py-3 shadow-sm"
              >
                <span className="text-xl flex-shrink-0" aria-hidden="true">
                  {t.emoji}
                </span>
                <span className="font-semibold text-[#F3EFE3] text-sm md:text-[15px] leading-tight">
                  {t.label}
                </span>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-[#A9B39E] text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            💡 Cada módulo viene con guiones, plantillas comerciales y
            herramientas listas para implementar de inmediato.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#24352A] rounded-3xl p-5 md:p-7 shadow-sm text-center"
        >
          <h3 className="font-heading font-bold text-white text-xl md:text-2xl mb-5">
            🎯 Sirve en cualquier etapa de tu consultora
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {etapas.map((r, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white rounded-full px-4 py-2 text-sm font-semibold"
              >
                <span aria-hidden="true">{r.emoji}</span>
                {r.label}
              </span>
            ))}
          </div>
          <p className="text-[#e6ddc7] text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Los principios de negocio, ventas y gestión de clientes son{' '}
            <span className="font-bold text-white">universales</span>. Las
            plantillas y herramientas son adaptables a cualquier mercado y
            contexto.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
