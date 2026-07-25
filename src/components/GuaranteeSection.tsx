import React from "react";
import { ShieldCheck } from "lucide-react";
export function GuaranteeSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <div className="mb-8">
          <span className="inline-block px-6 py-2.5 mb-5 rounded-full border border-white/15 bg-[#24352A] text-[#F3EFE3] font-semibold tracking-[0.18em] uppercase text-xs">
            Tu inversión está 100% protegida
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#F3EFE3] flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3">
            <ShieldCheck className="w-10 h-10 text-[#D4A017]" />
            Garantía Total de 7 Días
          </h2>
        </div>

        <div className="bg-[#1E2E22] border border-[#D4A017]/20 rounded-3xl p-4 md:p-8 shadow-sm">
          <p className="text-sm md:text-base text-[#A9B39E] leading-relaxed mb-4 md:mb-6">
            Revisá todo el sistema con total tranquilidad. Si en 7 días
            sentís que no cumple lo que prometemos, te devolvemos el 100% de
            tu dinero. Sin formularios. Sin explicaciones. Sin riesgo.
          </p>
          <div className="inline-flex bg-[#24352A] px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-[#D4A017]/25 text-[#B9C7A9] font-bold text-xs md:text-sm shadow-sm">
            Riesgo Cero Garantizado ✅
          </div>
        </div>
      </div>
    </section>
  );
}
