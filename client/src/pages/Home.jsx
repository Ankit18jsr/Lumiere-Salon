import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { fadeUp, fadeLeft, pageTransition, staggerContainer } from '../utils/animations';

const Home = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
      className="bg-beige-50"
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: 'easeOut' }}
            className="w-full h-full"
          >
            <img 
              src="/images/hero.png" 
              alt="Luxury Salon Interior" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 flex flex-col items-center mt-12">
          <motion.span 
            variants={fadeUp}
            className="text-gold-300 font-sans tracking-[0.4em] uppercase text-xs sm:text-sm mb-6 block"
          >
            Welcome to the Gold Standard
          </motion.span>
          
          <motion.h1 
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="heading-xl mb-6 text-shadow-soft"
          >
            Where Beauty <br/> Meets Art
          </motion.h1>
          
          <motion.p 
            variants={fadeUp}
            transition={{ delay: 0.4 }}
            className="font-sans text-lg sm:text-xl text-beige-100 font-light max-w-xl mx-auto mb-10"
          >
            Experience our exclusive sanctuary of sophisticated styling, advanced skincare, and bespoke beauty treatments.
          </motion.p>
          
          <motion.div variants={fadeUp} transition={{ delay: 0.6 }}>
            <Link to="/booking" className="btn-gold mr-4">
              Book Appointment
            </Link>
            <Link to="/services" className="btn-outline hidden sm:inline-flex bg-transparent border-white text-white hover:bg-white hover:text-ink">
              Discover Services
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50"
          animate="float"
        >
          <span className="text-[10px] uppercase tracking-widest mb-2 font-sans">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="section-pad bg-white">
        <div className="container mx-auto">
          <AnimatedSection variants={staggerContainer()} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeLeft} className="relative aspect-[4/5] w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gold-400 translate-x-4 translate-y-4 rounded-xl opacity-20"></div>
              <img 
                src="/images/about.png" 
                alt="Styling session" 
                className="w-full h-full object-cover rounded-xl shadow-glass relative z-10"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col items-start">
              <span className="badge-gold mb-6">Our Philosophy</span>
              <h2 className="heading-lg text-charcoal mb-6">
                Elevating your natural elegance.
              </h2>
              <div className="gold-divider ml-0 mb-6 transition-all"></div>
              <p className="text-gray-600 leading-relaxed font-sans mb-8">
                At Lumière, we believe that true beauty lies in the details. Founded by master stylists and skincare experts, our salon offers a curation of premium treatments designed to nourish, transform, and empower. Step into our world and experience service that goes beyond the mirror.
              </p>
              <Link to="/about" className="font-serif italic text-gold-500 hover:text-gold-400 text-lg transition-colors flex items-center gap-2 group">
                Read our story 
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-pad bg-ink text-white">
        <div className="container mx-auto">
          <AnimatedSection variants={fadeUp} className="text-center mb-16">
            <span className="text-gold-400 tracking-widest text-sm uppercase mb-4 block">Our Expertise</span>
            <h2 className="heading-lg mb-6">Signature Services</h2>
            <div className="gold-divider bg-gold-400"></div>
          </AnimatedSection>

          <AnimatedSection variants={staggerContainer()} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div variants={fadeUp} className="group relative h-96 overflow-hidden rounded-2xl cursor-pointer">
              <img src="/images/gallery1.png" alt="Hair" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="heading-md mb-2 group-hover:text-gold-300 transition-colors">Hair Styling & Color</h3>
                <p className="font-sans text-sm text-beige-300 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Bespoke cuts, balayage, and luxurious repair treatments.
                </p>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div variants={fadeUp} className="group relative h-96 overflow-hidden rounded-2xl cursor-pointer">
              <img src="/images/gallery3.png" alt="Skincare" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="heading-md mb-2 group-hover:text-gold-300 transition-colors">Advanced Skincare</h3>
                <p className="font-sans text-sm text-beige-300 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Rejuvenating facials, peels, and glowing results.
                </p>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div variants={fadeUp} className="group relative h-96 overflow-hidden rounded-2xl cursor-pointer">
              <img src="/images/gallery2.png" alt="Bridal" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="heading-md mb-2 group-hover:text-gold-300 transition-colors">Bridal & Events</h3>
                <p className="font-sans text-sm text-beige-300 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Flawless makeup and styling for your special day.
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn-outline border-white text-white hover:bg-gold-400 hover:text-ink hover:border-gold-400">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
