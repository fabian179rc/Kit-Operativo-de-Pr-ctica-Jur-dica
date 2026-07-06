import React from 'react';
import { motion } from 'framer-motion';
import { PackageOpen, CheckCircle2 } from 'lucide-react';

const temas = [
  { emoji: '🦺', label: 'Uso de EPP' },
  { emoji: '🪜', label: 'Trabajo en Altura' },
  { emoji: '⚡', label: 'Riesgo Eléctrico' },
  { emoji: '🔥', label: 'Prevención de Incendios' },
  { emoji: '🩹', label: 'Primeros Auxilios' },
  { emoji: '🚪', label: 'Evacuación' },
  { emoji: '🧍', label: 'Ergonomía' },
  { emoji: '📦', label: 'Manipulación de Cargas' },
  { emoji: '☣️', label: 'Sustancias Químicas' },
  { emoji: '🕳️', label: 'Espacios Confinados' },
  { emoji: '🧹', label: 'Orden y Limpieza' },
  { emoji: '❤️‍🩹', label: 'Salud Ocupacional' },
  { emoji: '➕', label: 'Y muchos más...' },
];

const rubros = [
  { emoji: '🏗️', label: 'Construcción' },
  { emoji: '🏭', label: 'Industria' },
  { emoji: '🚚', label: 'Logística' },
  { emoji: '🏢', label: 'Oficinas' },
  { emoji: '🏥', label: 'Hospitales' },
  { emoji: '🛎️', label: 'Servicios' },
];

const incluye = [
  '📝 Guion del Capacitador',
  '📊 Presentación lista para utilizar',
  '✍️ Evaluación de conocimientos',
  '🗒️ Registro de asistencia',
  '🏅 Certificado de participación',
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
            ¿QUÉ CONTIENE EL{' '}
            <span className="italic text-[#5C6851]">SISTEMA MAESTRO?</span>
          </h2>
          <p className="text-lg md:text-xl font-bold text-[#5C6851] max-w-2xl mx-auto">
            Todo lo que necesitás para brindar capacitaciones profesionales
            durante todo el año. 💪
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/60 border border-amber-100 rounded-3xl p-5 md:p-7 shadow-sm mb-6 text-center"
        >
          <p className="text-slate-700 text-[15px] md:text-lg leading-relaxed">
            📚 El{' '}
            <span className="font-bold text-[#5C6851]">
              Sistema Maestro de Capacitaciones HyS
            </span>{' '}
            reúne más de{' '}
            <span className="font-bold text-[#2f3a2c]">150 páginas</span> con
            el método completo para{' '}
            <span className="font-semibold text-[#2f3a2c]">planificar</span>,{' '}
            <span className="font-semibold text-[#2f3a2c]">dictar</span> y{' '}
            <span className="font-semibold text-[#2f3a2c]">documentar</span>{' '}
            capacitaciones de forma profesional.
          </p>
        </motion.div>

        <div className="mb-8">
          <h3 className="font-heading font-bold text-[#2f3a2c] text-xl md:text-2xl mb-4 text-center">
            🎯 Incluye los temas más importantes de Higiene y Seguridad
          </h3>
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
          className="bg-[#4A553F] rounded-3xl p-5 md:p-7 shadow-sm mb-8 text-center"
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
            ⚖️ Con una guía práctica basada en la{' '}
            <span className="font-bold text-white">Ley 19.587</span>, el{' '}
            <span className="font-bold text-white">Decreto 351</span> y la
            normativa <span className="font-bold text-white">SRT</span>{' '}
            vigente.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-amber-100 rounded-3xl p-5 md:p-7 shadow-lg shadow-black/5"
        >
          <h3 className="font-heading font-bold text-[#2f3a2c] text-2xl md:text-3xl mb-5 text-center">
            ✨ Cada capacitación incluye:
          </h3>
          <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {incluye.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="font-semibold text-[#2f3a2c] text-[15px] leading-tight">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
