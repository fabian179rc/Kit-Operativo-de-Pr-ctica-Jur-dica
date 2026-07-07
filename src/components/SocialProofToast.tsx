import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const PRODUCT_NAME = "Sistema Maestro de Programas de Seguridad HyS";

const proofs = [
  { name: "Verónica J.", location: "Tegucigalpa", time: "hace 15 minutos" },
  { name: "Martín G.", location: "Buenos Aires", time: "hace 8 minutos" },
  { name: "Carolina F.", location: "Córdoba", time: "hace 22 minutos" },
  { name: "Roberto S.", location: "Rosario", time: "hace 34 minutos" },
  { name: "Andrea P.", location: "Mendoza", time: "hace 5 minutos" },
  { name: "Luis M.", location: "San Salvador", time: "hace 41 minutos" },
  { name: "Patricia N.", location: "Lima", time: "hace 12 minutos" },
  { name: "Diego R.", location: "Santiago", time: "hace 27 minutos" },
  { name: "Gabriela T.", location: "Salta", time: "hace 19 minutos" },
  { name: "Fernando A.", location: "Bogotá", time: "hace 9 minutos" },
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
          className="fixed bottom-6 left-4 sm:left-6 z-40 w-[260px] sm:w-[290px]"
        >
          <div className="relative bg-[#1c2420] border border-white/10 rounded-2xl shadow-2xl shadow-black/40 px-4 py-3.5">
            <button
              onClick={() => setCurrent(null)}
              aria-label="Cerrar"
              className="absolute top-2.5 right-2.5 text-white/40 hover:text-white/80 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center gap-1.5 mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-emerald-400 text-[10px] font-bold tracking-[0.12em] uppercase">
                Compra verificada
              </span>
            </div>

            <p className="text-white text-sm font-bold leading-tight mb-1 pr-4">
              {current.name}{" "}
              <span className="font-normal text-white/60">
                de {current.location}
              </span>
            </p>

            <p className="text-white/80 text-[13px] leading-snug mb-1.5">
              compró{" "}
              <span className="font-semibold text-emerald-400">
                {PRODUCT_NAME}
              </span>{" "}
              📗
            </p>

            <p className="text-white/40 text-[11px]">{current.time}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
