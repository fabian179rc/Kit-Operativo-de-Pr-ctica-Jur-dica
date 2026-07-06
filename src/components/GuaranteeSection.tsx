import React from "react";
import { ShieldCheck } from "lucide-react";
export function GuaranteeSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <div className="mb-8">
          <span className="inline-block px-6 py-2.5 mb-5 rounded-full border border-white/40 bg-[#566049] text-white font-semibold tracking-[0.18em] uppercase text-xs">
            Tu inversión está 100% protegida
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#2f3a2c] flex items-center justify-center gap-3">
            <ShieldCheck className="w-10 h-10 text-[#d4a017]" />
            Garantía Total de 7 Días
          </h2>
        </div>

        <div className="bg-white/60 border border-amber-100 rounded-3xl p-6 md:p-8 shadow-sm">
          <h3 className="text-xl font-bold text-[#2f3a2c] mb-3">
            Te entregamos exactamente lo que prometemos
          </h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            Tenés 7 días para revisar el sistema completo. Si no es lo que
            prometemos, te devolvemos el 100% de tu dinero, sin vueltas.
          </p>
          <div className="inline-flex bg-white px-4 py-2 rounded-full border border-amber-200 text-[#6f7a64] font-bold text-sm shadow-sm">
            Riesgo Cero Garantizado
          </div>
        </div>
      </div>
    </section>
  );
}
