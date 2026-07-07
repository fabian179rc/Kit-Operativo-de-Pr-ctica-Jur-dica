import React from 'react';
import { motion } from 'framer-motion';
import { PackageOpen } from 'lucide-react';

const modulos = [
  { emoji: '🗺️', label: 'Filosofía del Blindaje Documental' },
  { emoji: '📐', label: 'El Relevamiento Inteligente' },
  { emoji: '📅', label: 'Estructura Base del Programa' },
  { emoji: '⚠️', label: 'Matriz de Riesgos Integrada' },
  { emoji: '✅', label: 'Redacción Técnica Profesional' },
  { emoji: '🔍', label: 'Medidas Preventivas por Etapa' },
  { emoji: '📸', label: 'Procedimientos de Trabajo Seguro (PTS)' },
  { emoji: '📝', label: 'Gestión de Contratistas y Terceros' },
  { emoji: '🛠️', label: 'El Protocolo de Firmas' },
  { emoji: '📊', label: 'Defensa ante la Autoridad' },
  { emoji: '🏭', label: 'Auditoría del Programa en Campo' },
  { emoji: '🏆', label: 'Casos de Estudio Reales' },
];

const temas = [
  { emoji: '📋', label: 'Relevamiento previo' },
  { emoji: '🔍', label: 'Análisis de etapas y tareas' },
  { emoji: '⚠️', label: 'Evaluación de riesgos' },
  { emoji: '📝', label: 'Redacción del programa' },
  { emoji: '📊', label: 'Matrices de riesgos' },
  { emoji: '✅', label: 'Medidas preventivas' },
  { emoji: '👷', label: 'PTS críticos' },
  { emoji: '🏗️', label: 'Obras y servicios' },
  { emoji: '🔥', label: 'Gestión de contratistas' },
  { emoji: '📈', label: 'Defensa ante inspecciones' },
  { emoji: '➕', label: 'Y mucho más...' },
];

const rubros = [
  { emoji: '🏗️', label: 'Construcción' },
  { emoji: '🏭', label: 'Servicios Industriales' },
  { emoji: '🔧', label: 'Mantenimiento' },
  { emoji: '📄', label: 'Contratistas' },
];

export function ContentSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 mb-5 rounded-full border border-white/40 bg-[#4A553F] text-white font-semibold tracking-[0.18em] uppercase text-xs">
            <PackageOpen className="w-4 h-4 text-[#d4a017]" />
            ¿Qué contiene?
          </span>
          <h2 className="font-heading font-bold text-[#2f3a2c] text-3xl md:text-5xl leading-tight mb-4">
            📦 12{' '}
            <span className="italic text-[#5C6851]">Módulos Incluidos</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          {modulos.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm"
            >
              <span className="text-xl flex-shrink-0" aria-hidden="true">
                {m.emoji}
              </span>
              <span className="font-semibold text-[#2f3a2c] text-sm md:text-[15px] leading-tight">
                {m.label}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {temas.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="flex items-center gap-2.5 bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm"
              >
                <span className="text-xl flex-shrink-0" aria-hidden="true">
                  {t.emoji}
                </span>
                <span className="font-semibold text-[#2f3a2c] text-sm md:text-[15px] leading-tight">
                  {t.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#4A553F] rounded-3xl p-5 md:p-7 shadow-sm text-center"
        >
          <h3 className="font-heading font-bold text-white text-xl md:text-2xl mb-5">
            🏢 Adaptado a los rubros que más lo necesitan
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {rubros.map((r, i) => (
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
            La estructura técnica es universal. Los modelos siguen los
            lineamientos generales de la{' '}
            <span className="font-bold text-white">
              legislación argentina
            </span>{' '}
            pero son adaptables a cualquier normativa provincial o regional.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
