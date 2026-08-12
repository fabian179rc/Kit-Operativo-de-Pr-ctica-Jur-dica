import React from 'react';
import { motion } from 'framer-motion';
const pains = [
{
  emoji: '📂',
  title: 'No Organized Play System',
  desc: 'Plays scattered across notes, YouTube videos, and random downloads. Every practice starts from scratch.'
},
{
  emoji: '⏱️',
  title: 'Practice Prep Takes Too Long',
  desc: "You spend more time planning than coaching. By Saturday morning, you're already stressed."
},
{
  emoji: '📌',
  title: 'Players Forget Everything',
  desc: "You explain the play three times and they still don't line up right."
},
{
  emoji: '🎯',
  title: 'Parents Watching, Judging',
  desc: 'Other parents see every mistake. You want to look prepared, not lost.'
}];

export function ProblemSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-6">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-[#F3EFE3] uppercase">
            Does Coaching Feel Harder Than It Should?
          </h2>
          <p className="text-sm md:text-base text-[#A9B39E] leading-relaxed max-w-2xl mx-auto">
            You know the game. You know your players. But every Saturday
            morning turns into a scramble to find plays, organize
            rotations, and figure out what to say when things go sideways.
          </p>
        </div>

        <div className="bg-[#1E2E22] border border-[#D4A017]/20 text-[#F3EFE3] rounded-2xl p-3 md:p-4 shadow-sm text-center mb-5 max-w-2xl mx-auto">
          <p className="md:text-lg font-medium text-[#D9D4C5] text-[15px]">
            ⚡ That's not a knowledge problem. That's a system problem.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {pains.map((item, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: i * 0.1
            }}
            className="bg-[#1E2E22] p-3 md:p-4 rounded-2xl shadow-sm border border-white/10">

              <div className="flex items-center gap-2 mb-1 md:mb-1.5">
                <span className="text-xl md:text-3xl flex-shrink-0">
                  {item.emoji}
                </span>
                <h3 className="text-base md:text-lg font-bold text-[#F3EFE3]">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm md:text-base text-[#A9B39E] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
