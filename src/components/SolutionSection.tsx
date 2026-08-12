import React from "react";
export function SolutionSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="mb-6">
          <span className="inline-block px-6 py-2.5 rounded-full border border-white/15 bg-[#1D3550] text-[#EDF2F6] font-semibold tracking-[0.18em] uppercase text-xs">
            LA SOLUCIÓN QUE ESPERABAS — UN SISTEMA TODO EN UNO
          </span>
        </div>

        <div className="bg-[#16293B] border border-[#E0932E]/20 text-[#EDF2F6] rounded-3xl p-6 md:p-8 shadow-sm">
          <p className="md:text-xl font-medium text-[#DCE6ED] text-[16px]">
            Un sistema de trabajo completo, desde la primera entrevista
            hasta el cobro de honorarios.
          </p>
        </div>
      </div>
    </section>
  );
}
