import React from "react";
import { motion } from "framer-motion";
import { PackageOpen } from "lucide-react";

const modulos = [
  {
    emoji: "🏈",
    title: "Core Playbook (50 Plays)",
    desc: "Arrive at every game with a visual play system kids actually understand.",
  },
  {
    emoji: "🎨",
    title: "Color-Code Route System",
    desc: "Stop explaining the same play 5 times — kids follow colors instantly.",
  },
  {
    emoji: "📋",
    title: "Practice Templates",
    desc: "Build a full 30, 45, or 60-minute practice in under 10 minutes.",
  },
  {
    emoji: "🖨️",
    title: "Wristband Inserts",
    desc: "Print mini play cards that fit inside any standard wristband.",
  },
  {
    emoji: "🔄",
    title: "Equal Play Rotation Matrix",
    desc: "Eliminate parent complaints about playing time before they start.",
  },
  {
    emoji: "📣",
    title: "Coach Communication Scripts",
    desc: "Know exactly what to say before, during, and after every practice.",
  },
];

const changes = [
  {
    emoji: "🧭",
    title: "More Structure Every Practice",
    desc: "You'll know exactly what to run, in what order, and for how long.",
  },
  {
    emoji: "⏱️",
    title: "Less Time Preparing",
    desc: "Ready-made templates replace hours of planning with minutes of setup.",
  },
  {
    emoji: "📊",
    title: "More Control on Game Day",
    desc: "Know your plays, your rotation, and your adjustments before kickoff.",
  },
  {
    emoji: "📅",
    title: "Cleaner Communication",
    desc: "Parents receive professional messages. Players receive clear instructions.",
  },
];

const tags = [
  { emoji: "🧒", label: "Ages 6-12" },
  { emoji: "🖨️", label: "100% Printable PDFs" },
  { emoji: "🇺🇸", label: "Any US Youth League" },
];

export function ContentSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 mb-5 rounded-full border border-white/15 bg-[#24352A] text-[#F3EFE3] font-semibold tracking-[0.18em] uppercase text-xs">
            <PackageOpen className="w-4 h-4 text-[#D4A017]" />
            What's Inside
          </span>
          <h2 className="font-heading font-bold text-[#F3EFE3] text-3xl md:text-5xl leading-tight mb-4">
            🏈 6 <span className="italic text-[#A8BB98]">Core Modules</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-2 mb-8">
          {modulos.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="flex items-start gap-2.5 bg-[#1E2E22] border border-white/10 rounded-xl px-3 py-2.5 shadow-sm"
            >
              <span className="text-xl flex-shrink-0" aria-hidden="true">
                {m.emoji}
              </span>
              <div>
                <span className="font-semibold text-[#F3EFE3] text-sm md:text-[15px] leading-tight block mb-0.5">
                  {m.title}
                </span>
                <span className="text-[#A9B39E] text-xs md:text-sm leading-snug">
                  {m.desc}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mb-8">
          <h3 className="font-heading font-bold text-[#F3EFE3] text-xl md:text-2xl mb-4 text-center">
            🎯 What Changes From Week One
          </h3>
          <div className="grid sm:grid-cols-2 gap-2">
            {changes.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="flex items-start gap-2.5 bg-[#1E2E22] border border-white/10 rounded-xl px-3 py-2.5 shadow-sm"
              >
                <span className="text-xl flex-shrink-0" aria-hidden="true">
                  {t.emoji}
                </span>
                <div>
                  <span className="font-semibold text-[#F3EFE3] text-sm md:text-[15px] leading-tight block mb-0.5">
                    {t.title}
                  </span>
                  <span className="text-[#A9B39E] text-xs md:text-sm leading-snug">
                    {t.desc}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#24352A] rounded-3xl p-5 md:p-7 shadow-sm text-center"
        >
          <h3 className="font-heading font-bold text-white text-xl md:text-2xl mb-5">
            🏈 Works for Any Youth League
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {tags.map((r, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white rounded-full px-4 py-2 text-sm font-semibold"
              >
                <span aria-hidden="true">{r.emoji}</span>
                {r.label}
              </span>
            ))}
          </div>
          <p className="text-[#e6ddc7] text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            The system is adaptable to{" "}
            <span className="font-bold text-white">
              any youth flag football league in the United States
            </span>
            . Print it, coach it, and make it your own.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
