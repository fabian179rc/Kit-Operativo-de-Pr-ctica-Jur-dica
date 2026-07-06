import React from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
const bonuses = [
{
  num: 1,
  desc: 'Certificados, registros, formularios y actas listos para documentar cada capacitación.',
  image: "sm-bono1.webp"
},
{
  num: 2,
  desc: 'Evaluaciones, respuestas y seguimiento listos para medir el aprendizaje y respaldar cada capacitación.',
  image: "sm-bono2.webp"
},
{
  num: 3,
  desc: 'Dinámicas y ejercicios prácticos listos para lograr capacitaciones más participativas y memorables.',
  image: "sm-bono3.webp"
},
{
  num: 4,
  desc: 'Matrices, cronogramas y tableros listos para gestionar y controlar todo el plan anual.',
  image: "sm-bono4.webp"
},
{
  num: 5,
  desc: 'Infografías, carteles y material visual listos para imprimir y reforzar cada capacitación.',
  image: "sm-bono5.webp"
}];

export function BonusesSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 mb-5 rounded-full border border-white/40 bg-[#4A553F] text-white font-semibold tracking-[0.18em] uppercase text-xs">
            <Gift className="w-4 h-4 text-[#d4a017]" />
            5 Bonos Incluidos
          </span>
          <h2 className="font-heading font-bold text-[#2f3a2c] text-3xl md:text-5xl leading-tight">
            Y además, recibís{" "}
            <span className="italic text-[#5C6851]">5 bonos de lujo</span>
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
                  alt={`Bono ${b.num}: ${b.desc}`}
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
                <h3 className="font-heading font-bold text-[#2f3a2c] text-[15px]">
                  {b.desc}
                </h3>
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
