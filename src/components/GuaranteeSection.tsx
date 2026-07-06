import React from "react";
import { ShieldCheck } from "lucide-react";
export function GuaranteeSection() {
  return (
    <section className="py-16 md:py-24 bg-[#e3f1eb] pt-[30px] pb-[30px]">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <div className="mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-[#1c3733] flex items-center justify-center gap-3">
            <ShieldCheck className="w-9 h-9 md:w-11 md:h-11 text-[#c79a3f]" />
            Garantía Total de 7 Días
          </h2>
        </div>

        <div className="bg-white border border-[#dde8e4] rounded-3xl p-6 md:p-12 shadow-sm">
          <p className="text-[#4f6b66] leading-relaxed text-lg mb-4">
            Revisá todo el sistema con total tranquilidad. Si en 7 días sentís
            que no cumple lo que prometemos, te devolvemos el 100% de tu
            dinero. Sin formularios. Sin explicaciones. Sin riesgo.
          </p>
          <div className="inline-flex px-6 py-3 rounded-full border border-[#24504a]/30 text-[#24504a] font-bold text-lg">
            Riesgo Cero Garantizado ✅
          </div>
        </div>
      </div>
    </section>
  );
}
