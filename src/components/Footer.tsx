import React from 'react';
export function Footer() {
  return (
    <footer className="bg-[#0A1622] text-[#93A7B8] py-10 border-t border-[#1D3550]">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <div className="text-white font-bold text-xl mb-6 flex items-center justify-center gap-2">
          🛡️ SISTEMA PROCESAL: ACCIONES Y MEDIDAS CAUTELARES 2026
        </div>

        <p className="text-xs md:text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
          SISTEMA PROCESAL es una herramienta digital para profesionales del
          Derecho. Adaptá los modelos a la normativa y jurisdicción aplicable.
          No constituye asesoramiento legal ni reemplaza al profesional
          responsable de cada caso.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
          <a href="#" className="hover:text-white transition-colors">
            Términos y Condiciones
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Política de Privacidad
          </a>
          <a
            href="mailto:soporte@practica-procesal.tupuntodigital.shop"
            className="hover:text-white transition-colors"
          >
            Contacto
          </a>
        </div>

        <div className="text-xs text-[#5C7488]">
          <p>
            © 2026 SISTEMA PROCESAL: ACCIONES Y MEDIDAS CAUTELARES 2026 — Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>);

}
