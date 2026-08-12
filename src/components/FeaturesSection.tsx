import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
const features = [
  {
    lead: "Save time on prep",
    desc: "Stop building practices from scratch. Use ready-made templates and plug-and-play play sheets.",
  },
  {
    lead: "Coach with more structure",
    desc: "Organize plays, rotations, drills, and player notes with a professional system.",
  },
  {
    lead: "Look more professional",
    desc: "Deliver cleaner, more organized practices and game days, increasing your credibility as a coach.",
  },
  {
    lead: "Communicate without guessing",
    desc: "Use ready scripts and parent messages to lead with confidence every time.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#F3EFE3]">
            WHAT YOU'LL GET WITH THIS SYSTEM
          </h2>
        </div>

        <ul className="space-y-4">
          {features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{
                opacity: 0,
                y: 8,
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
              className="flex items-start gap-3"
            >
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1 text-[#D4A017]" />
              <p className="text-[#A9B39E] leading-relaxed">
                <span className="font-bold text-[#F3EFE3]">
                  {feature.lead}
                </span>{" "}
                — {feature.desc}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
