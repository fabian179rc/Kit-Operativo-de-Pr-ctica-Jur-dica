import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle } from 'lucide-react';
const testimonials = [
{
  initial: 'J',
  color: 'bg-pink-100 text-pink-700',
  name: 'Jason M.',
  location: 'Volunteer Dad-Coach, Texas',
  text: "Before this, I was showing up to Saturday games with a printed sheet from Google. The Gridiron Guardian gave me a real system. My kids are more focused and the other parents actually think I know what I'm doing now."
},
{
  initial: 'S',
  color: 'bg-blue-100 text-blue-700',
  name: 'Sarah K.',
  location: 'Youth Flag Football Instructor, Florida',
  text: 'The wristband inserts were the game changer. I printed them, the kids put them on, and for the first time in two seasons they actually ran the right routes.'
},
{
  initial: 'M',
  color: 'bg-emerald-100 text-emerald-700',
  name: 'Mike D.',
  location: 'Youth Sports Coordinator, California',
  text: 'The practice templates saved me at least 3 hours a week. I used to spend Sunday nights planning. Now I spend 10 minutes and I’m done.'
}];

export function TestimonialsBottom() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 flex flex-col items-center">
          <MessageCircle className="w-10 h-10 text-[#D4A017] mb-3" />
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#F3EFE3]">
            What Youth Coaches Are Saying
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) =>
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
            className="bg-[#1E2E22] rounded-2xl p-5 shadow-sm border border-white/10 flex flex-col h-full">

              <div className="flex text-[#D4A017] mb-3">
                {[...Array(5)].map((_, i) =>
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
              )}
              </div>

              <p className="text-[#D9D4C5] text-[15px] leading-relaxed mb-4 italic flex-grow">
                "{t.text}"
              </p>

              <div className="flex items-center border-t border-white/10 pt-3 mt-auto">
                <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm ${t.color} mr-3 flex-shrink-0`}>

                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-[#F3EFE3] text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-[#A9B39E]">
                    {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
