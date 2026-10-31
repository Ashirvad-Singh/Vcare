import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, Eye } from 'lucide-react';
import { GalleryItem } from '../../types';

interface GalleryLightboxProps {
  items: GalleryItem[];
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'unset';
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + items.length) % items.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % items.length);
  };

  return (
    <div>
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            onClick={() => openLightbox(index)}
            className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover transition-all duration-300 border border-slate-200/80 bg-navy-950"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              loading="lazy"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

            {/* Hover Icon Button */}
            <div className="absolute top-4 right-4 p-2 rounded-xl bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <Eye className="w-4 h-4" />
            </div>

            {/* Text details */}
            <div className="absolute bottom-0 inset-x-0 p-5 text-white transform transition-transform duration-300">
              <span className="text-[10px] uppercase tracking-widest font-semibold text-cyan-300 mb-1 block">
                {item.category.replace('-', ' ')}
              </span>
              <h4 className="font-display text-base font-bold text-white group-hover:text-cyan-200 transition-colors line-clamp-1">
                {item.title}
              </h4>
              <p className="text-xs text-slate-300 mt-1 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/95 backdrop-blur-md p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 focus:outline-none"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 focus:outline-none"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 focus:outline-none"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image & Caption Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[85vh] flex flex-col items-center overflow-hidden rounded-2xl bg-navy-900 border border-white/10 shadow-2xl"
            >
              <div className="relative overflow-hidden w-full max-h-[70vh] flex items-center justify-center bg-black/40">
                <img
                  src={items[selectedIndex].image}
                  alt={items[selectedIndex].title}
                  className="max-w-full max-h-[70vh] object-contain"
                />
              </div>

              <div className="w-full p-4 sm:p-6 bg-navy-900 text-white text-center">
                <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                  Photo {selectedIndex + 1} of {items.length} &bull; {items[selectedIndex].category.replace('-', ' ')}
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold mt-1 text-white">
                  {items[selectedIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl mx-auto">
                  {items[selectedIndex].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
