import React from 'react';
export function Footer() {
  return (
    <footer className="bg-[#101A14] text-[#A9B39E] py-10 border-t border-[#24352A]">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <div className="text-white font-bold text-xl mb-6 flex items-center justify-center gap-2">
          🛡️ SISTEMA MAESTRO PARA CONSULTORES HyS
        </div>

        <p className="text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
          Este producto es una herramienta de organización, gestión
          comercial y desarrollo profesional. No reemplaza la normativa
          vigente ni el criterio técnico profesional.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
          <a href="#" className="hover:text-white transition-colors">
            Términos y Condiciones
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Política de Privacidad
          </a>
          <a
            href="mailto:soporte@maestroconsultoreshys.com"
            className="hover:text-white transition-colors"
          >
            Contacto
          </a>
        </div>

        <div className="text-xs text-[#7C8877]">
          <p>
            © 2026 Sistema Maestro para Consultores HyS — Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>);

}
