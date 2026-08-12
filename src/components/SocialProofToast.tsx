import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const PRODUCT_NAME = "The Gridiron Guardian";

const proofs = [
  { name: "Jason M.", location: "Austin, TX", time: "15 minutes ago" },
  { name: "Sarah K.", location: "Tampa, FL", time: "8 minutes ago" },
  { name: "Mike D.", location: "Sacramento, CA", time: "22 minutes ago" },
  { name: "Chris B.", location: "Columbus, OH", time: "34 minutes ago" },
  { name: "Amanda P.", location: "Phoenix, AZ", time: "5 minutes ago" },
  { name: "Kevin R.", location: "Charlotte, NC", time: "41 minutes ago" },
  { name: "Melissa T.", location: "Denver, CO", time: "12 minutes ago" },
  { name: "Brian S.", location: "Orlando, FL", time: "27 minutes ago" },
  { name: "Nicole F.", location: "Dallas, TX", time: "19 minutes ago" },
  { name: "Tyler A.", location: "Atlanta, GA", time: "9 minutes ago" },
];

const SHOW_DURATION = 7000;
const GAP_MIN = 18000;
const GAP_MAX = 32000;
const FIRST_DELAY = 6000;

export function SocialProofToast() {
  const [current, setCurrent] = useState<(typeof proofs)[number] | null>(
    null,
  );

  useEffect(() => {
    let seq = 0;
    let showTimer: ReturnType<typeof setTimeout>;
    let hideTimer: ReturnType<typeof setTimeout>;

    const schedule = (delay: number) => {
      showTimer = setTimeout(() => {
        setCurrent(proofs[seq % proofs.length]);
        seq += 1;
        hideTimer = setTimeout(() => {
          setCurrent(null);
          schedule(GAP_MIN + Math.random() * (GAP_MAX - GAP_MIN));
        }, SHOW_DURATION);
      }, delay);
    };

    schedule(FIRST_DELAY);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {current && (
        <motion.div
          initial={{ opacity: 0, x: -24, y: 8 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.35 }}
          className="fixed bottom-6 left-4 sm:left-6 z-40 w-[200px] sm:w-[290px]"
        >
          <div className="relative bg-[#1c2420] border border-white/10 rounded-xl sm:rounded-2xl shadow-2xl shadow-black/40 px-2.5 py-2 sm:px-4 sm:py-3.5">
            <button
              onClick={() => setCurrent(null)}
              aria-label="Close"
              className="absolute top-1.5 right-1.5 sm:top-2.5 sm:right-2.5 text-white/40 hover:text-white/80 transition-colors"
            >
              <X className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
            </button>

            <div className="flex items-center gap-1 sm:gap-1.5 mb-1 sm:mb-2">
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-400" />
              </span>
              <span className="text-emerald-400 text-[8px] sm:text-[10px] font-bold tracking-[0.1em] sm:tracking-[0.12em] uppercase">
                Verified Purchase
              </span>
            </div>

            <p className="text-white text-[11px] sm:text-sm font-bold leading-tight mb-0.5 sm:mb-1 pr-3 sm:pr-4">
              {current.name}{" "}
              <span className="font-normal text-white/60">
                from {current.location}
              </span>
            </p>

            <p className="text-white/80 text-[10px] sm:text-[13px] leading-snug mb-1 sm:mb-1.5">
              bought{" "}
              <span className="font-semibold text-emerald-400">
                {PRODUCT_NAME}
              </span>{" "}
              📗
            </p>

            <p className="text-white/40 text-[9px] sm:text-[11px]">{current.time}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
