import React from 'react';
export function Footer() {
  return (
    <footer className="bg-[#232b21] text-[#c1c8b6] py-10 border-t border-[#3a4434]">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <div className="text-white font-bold text-xl mb-6 flex items-center justify-center gap-2">
          🛡️ SISTEMA MAESTRO DE PROGRAMAS DE SEGURIDAD HyS
        </div>

        <p className="text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
          Este producto es una herramienta de organización y documentación
          para profesionales. No reemplaza la normativa vigente ni el
          criterio técnico profesional.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
          <a href="#" className="hover:text-white transition-colors">
            Términos y Condiciones
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Política de Privacidad
          </a>
          <a
            href="mailto:soporte@programasdeseguridadhys.com"
            className="hover:text-white transition-colors"
          >
            Contacto
          </a>
        </div>

        <div className="text-xs text-[#a4ad96]">
          <p>
            © 2026 Sistema Maestro de Programas de Seguridad HyS — Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>);

}
