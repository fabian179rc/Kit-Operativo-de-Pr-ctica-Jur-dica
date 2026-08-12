import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
const faqs = [
{
  q: 'Is this a physical or digital product?',
  a: '100% digital. You receive instant access after purchase to download and use on any device.'
},
{
  q: 'Is this for beginners or experienced coaches?',
  a: 'Both. The system is designed to help volunteer dad-coaches and professional youth instructors.'
},
{
  q: 'What age group is this designed for?',
  a: 'Players ages 6 to 12. Includes specific adjustments for younger (6-8) and older (9-12) groups.'
},
{
  q: 'Do I need special software to use it?',
  a: 'No. All files are PDF format. You can open, print, and use them with any device.'
},
{
  q: 'Can I print the materials?',
  a: 'Yes. Everything is designed to be printed and used on the field.'
},
{
  q: 'Is this specific to one league or location?',
  a: 'No. The system is adaptable to any youth flag football league in the United States.'
}];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <span className="inline-block px-6 py-2.5 mb-5 rounded-full border border-white/15 bg-[#24352A] text-[#F3EFE3] font-semibold tracking-[0.18em] uppercase text-xs">
            Frequently Asked Questions
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#F3EFE3] leading-tight">
            Answers to{" "}
            <em className="text-[#C97A4A] font-bold italic">
              your questions
            </em>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-[#1E2E22] rounded-2xl shadow-sm shadow-black/20">

                <button
                  className="w-full px-6 md:px-8 py-5 md:py-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}>

                  <span className="font-heading font-bold text-[#F3EFE3] text-lg md:text-xl">
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-full bg-[#24352A] text-[#F3EFE3] flex items-center justify-center transition-colors"
                    aria-hidden="true">

                    {isOpen ?
                    <Minus className="w-4 h-4" /> :

                    <Plus className="w-4 h-4" />
                    }
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen &&
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0
                    }}
                    animate={{
                      height: 'auto',
                      opacity: 1
                    }}
                    exit={{
                      height: 0,
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut'
                    }}
                    className="overflow-hidden">

                      <div className="px-6 md:px-8 pb-6 md:pb-7 -mt-1 text-[#A9B39E] leading-relaxed text-[15px] md:text-base max-w-[58ch]">
                        {faq.a}
                      </div>
                    </motion.div>
                  }
                </AnimatePresence>
              </div>);

          })}
        </div>
      </div>
    </section>);

}
