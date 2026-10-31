import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 350);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 8;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy-950 text-white overflow-hidden"
        >
          {/* Subtle medical grid background */}
          <div className="absolute inset-0 opacity-15 pointer-events-none medical-grid-pattern" />

          {/* Diagnostic Scanning Graphic */}
          <div className="relative w-48 h-48 flex items-center justify-center mb-8">
            {/* Outer Pulsing Diagnostic Rings in Logo Red */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
              className="absolute inset-0 rounded-full border border-dashed border-brand-red/40"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
              className="absolute inset-3 rounded-full border border-brand-blue-light/30"
            />
            
            {/* Radar scan cone */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
              className="absolute inset-4 rounded-full overflow-hidden"
            >
              <div className="w-1/2 h-1/2 origin-bottom-right bg-gradient-to-tr from-brand-red/30 to-transparent" />
            </motion.div>

            {/* Glowing inner core containing logo */}
            <motion.div
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="relative z-10 w-28 h-28 rounded-full bg-white shadow-glow-red flex items-center justify-center p-2 border-2 border-brand-red"
            >
              <img
                src="/assets/img/logo.png"
                alt="V Care Diagnostics"
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Red scanning line sweep */}
            <motion.div
              animate={{ y: [-70, 70, -70] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="absolute w-44 h-[2px] bg-gradient-to-r from-transparent via-brand-red to-transparent shadow-[0_0_12px_#DC2626]"
            />
          </div>

          {/* Branding and status reveal */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center z-10 max-w-sm px-6"
          >
            <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-white font-display">
              <span className="text-white">V CARE</span> <span className="text-brand-red-light">DIAGNOSTICS</span>
            </h2>
            <p className="text-xs uppercase tracking-widest text-slate-300 mt-1">
              Precision Medical Imaging &bull; Bareilly
            </p>

            {/* Progress Bar in Logo Red */}
            <div className="w-56 h-1.5 bg-navy-900 rounded-full mt-6 overflow-hidden mx-auto border border-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-blue-light via-brand-red to-brand-gold rounded-full"
                style={{ width: `${Math.min(loadingProgress, 100)}%` }}
              />
            </div>

            <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono mt-2 w-56 mx-auto">
              <span>CALIBRATING SENSORS</span>
              <span className="text-brand-red-light font-bold">{Math.min(loadingProgress, 100)}%</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
