import React from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
const bonuses = [
{
  num: 1,
  title: 'Formulario Maestro de Investigación de Accidentes',
  desc: 'Una plantilla completa de 10 páginas que te guía paso a paso desde los datos generales, descripción del evento, recolección de evidencia, análisis de causas hasta el plan de acción correctiva. Abrís el formulario, seguís el orden y no se te escapa ningún dato crítico bajo presión.',
  image: "sm-bono1.webp"
},
{
  num: 2,
  title: 'Guion de Entrevistas Profesionales para Testigos y Afectados',
  desc: 'Un set de 30 preguntas técnicas organizadas por momento de la entrevista para extraer información objetiva sin generar culpa, miedo ni silencio. Incluye preguntas para el accidentado, testigos directos, supervisores y responsables operativos.',
  image: "sm-bono2.webp"
},
{
  num: 3,
  title: 'Calculadora de Costos de Accidentes',
  desc: 'Una herramienta en Excel para calcular y presentar el costo real del accidente ante la dirección: costos directos, indirectos, horas perdidas, daños materiales, impacto productivo y proyección de ahorro con inversión en prevención.',
  image: "sm-bono3.webp"
},
{
  num: 4,
  title: 'Banco de +100 Frases Técnicas para Informes de Investigación',
  desc: 'Frases profesionales listas para usar al describir hechos, condiciones inseguras, causas inmediatas, causas raíz y recomendaciones. Redactá informes más sólidos, objetivos y legalmente defendibles sin buscar las palabras correctas.',
  image: "sm-bono4.webp"
},
{
  num: 5,
  title: 'Galería de Árboles de Causas Resueltos',
  desc: 'Diez casos reales analizados con metodología de Árbol de Causas: caída en altura, atrapamiento, contacto eléctrico, golpe por objeto, sobreesfuerzo y más. Entendés la lógica del análisis aplicada a situaciones reales y podés replicarla en tu próxima investigación.',
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
