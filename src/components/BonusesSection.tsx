import React from "react";
import { motion } from "framer-motion";
const bonuses = [
  {
    num: 1,
    title: "The Game-Day Command Center",
    desc: "Walk onto the field with a one-page system that makes you look organized and ready to lead.",
    image: "b1.webp",
  },
  {
    num: 2,
    title: "The Parent-Peace Communication Pack",
    desc: "Copy-and-paste messages to prevent confusion and complaints before they start.",
    image: "b2.webp",
  },
  {
    num: 3,
    title: "The 10-Minute Practice Builder",
    desc: "Build a full practice in minutes with plug-and-play templates for 30, 45, and 60-minute sessions.",
    image: "b3.webp",
  },
  {
    num: 4,
    title: "The Kid-Friendly Drill Card Vault",
    desc: "Give your players more reps, more movement, and more focus with a printable drill vault packed with simple youth-friendly exercises for every practice.",
    image: "b4.webp",
  },
  {
    num: 5,
    title: "The Flag Football Confidence Scripts",
    desc: "Use ready-to-go coaching scripts so you always know what to say on and off the field.",
    image: "b5.webp",
  },
];

export function BonusesSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-[#F3EFE3] text-3xl md:text-5xl leading-tight">
            5 Bonuses Included{" "}
            <span className="italic text-[#A8BB98]">At No Extra Cost</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {bonuses.map((b, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: i * 0.08,
              }}
              className="bg-[#1E2E22] border border-white/10 rounded-2xl p-3 shadow-sm"
            >
              <div className="relative rounded-xl overflow-hidden mb-3 h-56 bg-[#12201A] flex items-center justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}${b.image}`}
                  alt={`Bonus ${b.num}: ${b.title}`}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
                <span className="absolute top-2.5 left-2.5 bg-rose-500 text-white font-bold text-[11px] tracking-wide uppercase px-2.5 py-1 rounded-md shadow-sm">
                  Bonus {b.num}
                </span>
                <span className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 bg-emerald-600 text-white font-bold text-[11px] tracking-wide uppercase px-2.5 py-1 rounded-md shadow-sm">
                  🎁 Free
                </span>
              </div>
              <div className="px-2 pb-2">
                <p className="text-[#A9B39E] text-sm leading-snug">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
