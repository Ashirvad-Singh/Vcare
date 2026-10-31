import React from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWindowScroll } from '../../hooks/useWindowScroll';

export const ScrollToTop: React.FC = () => {
  const { scrollY } = useWindowScroll();
  const visible = scrollY > 350;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-navy-900/90 hover:bg-medical text-white shadow-xl border border-white/20 backdrop-blur-md transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 group"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
