import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToOffer } from "../utils/scrollToOffer";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
        >
          <div className="pointer-events-auto">
            <a
              href="#comprar"
              onClick={scrollToOffer}
              className="inline-flex items-center justify-center gap-2 bg-[#B85C43] hover:bg-[#A34F38] text-white font-bold text-base px-8 py-4 rounded-full shadow-2xl shadow-[#B85C43]/40 border-2 border-white/20 transition-colors"
            >
              🚀 QUIERO EL SISTEMA MAESTRO
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
