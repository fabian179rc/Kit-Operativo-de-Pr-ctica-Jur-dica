import React from "react";
export function SolutionSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="mb-6">
          <span className="inline-block px-6 py-2.5 mb-5 rounded-full border border-white/15 bg-[#24352A] text-[#F3EFE3] font-semibold tracking-[0.18em] uppercase text-xs">
            THE SOLUTION YOU NEEDED — A COMPLETE PLUG-AND-PLAY SYSTEM
          </span>
          <h2 className="font-heading md:text-5xl font-bold text-[#F3EFE3] mb-6 max-w-3xl mx-auto text-[24px]">
            The Gridiron Guardian: The Ultimate 6-12Y Flag Football{" "}
            <span className="text-[#A8BB98] italic">
              Playbook &amp; Coaching System
            </span>
          </h2>
        </div>

        <div className="bg-[#1E2E22] border border-[#D4A017]/20 text-[#F3EFE3] rounded-3xl p-6 md:p-8 shadow-sm">
          <p className="md:text-xl font-medium text-[#D9D4C5] text-[16px]">
            A complete coaching system, ready to use from day one. From
            your first practice to your last game of the season.
          </p>
        </div>
      </div>
    </section>
  );
}
