import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { fadeUp, pageTransition, staggerContainer } from '../utils/animations';
import { HiX } from 'react-icons/hi';

const images = [
  { id: 1, src: '/images/gallery1.png', category: 'Hair' },
  { id: 2, src: '/images/gallery2.png', category: 'Bridal' },
  { id: 3, src: '/images/gallery3.png', category: 'Skincare' },
  { id: 4, src: '/images/gallery4.png', category: 'Nails' },
  { id: 5, src: '/images/about.png', category: 'Salon' },
  { id: 6, src: '/images/hero.png', category: 'Salon' },
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
      className="bg-white min-h-screen pb-24"
    >
      {/* Header */}
      <section className="pt-40 pb-16 px-4 text-center">
        <motion.h1 variants={fadeUp} className="heading-xl text-charcoal mb-4">The Gallery</motion.h1>
        <motion.p variants={fadeUp} className="text-gray-500 font-sans max-w-xl mx-auto">
          A visual journey through our artistry and the beautiful moments created at Lumière.
        </motion.p>
        <div className="gold-divider"></div>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-4 sm:px-8 xl:px-16">
        <AnimatedSection variants={staggerContainer()} className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img) => (
            <motion.div 
              variants={fadeUp} 
              key={img.id}
              className="relative overflow-hidden rounded-xl cursor-pointer group break-inside-avoid"
              onClick={() => setSelectedImg(img)}
            >
              <img 
                src={img.src} 
                alt={`Gallery ${img.category}`} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-sans uppercase tracking-[0.2em] font-medium text-sm border border-white/50 px-6 py-2 rounded-full">
                  {img.category}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatedSection>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors text-4xl"
              onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
            >
              <HiX />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              src={selectedImg.src} 
              alt="Lightbox" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;
