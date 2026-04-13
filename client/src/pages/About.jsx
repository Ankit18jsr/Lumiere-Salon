import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { fadeUp, fadeLeft, pageTransition, staggerContainer } from '../utils/animations';

const About = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
      className="bg-beige-50"
    >
      {/* Mini Hero */}
      <section className="relative pt-40 pb-20 px-4 bg-ink text-center">
        <div className="absolute inset-0 overflow-hidden">
          <img src="/images/about.png" alt="Background" className="w-full h-full object-cover opacity-20 blur-sm"/>
        </div>
        <div className="relative z-10">
          <motion.span variants={fadeUp} className="text-gold-400 uppercase tracking-widest text-sm mb-4 block">Our Story</motion.span>
          <motion.h1 variants={fadeUp} className="heading-xl text-white mb-6">Behind the Beauty</motion.h1>
          <div className="gold-divider bg-gold-400 mx-auto"></div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-pad bg-white">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection variants={fadeUp} className="text-center">
            <p className="text-xl md:text-2xl font-serif leading-relaxed text-charcoal mb-10">
              "We created Lumière because we believe salons should be an escape, not an errand. It’s a space where mastery in styling meets the ultimate luxury experience."
            </p>
            <p className="font-sans text-gray-500 max-w-3xl mx-auto">
              Established in 2018, Lumière is an award-winning salon that seamlessly blends modern techniques with timeless grace. Every stylist in our space is a master of their craft, ensuring that from the moment you step through our brass doors to the second you leave, you are treated like royalty.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-pad bg-beige-100">
        <div className="container mx-auto">
          <AnimatedSection variants={fadeUp} className="text-center mb-16">
            <h2 className="heading-lg text-charcoal mb-4">Meet The Masters</h2>
            <p className="text-gray-500 font-sans">The highly-trained artists behind the chair.</p>
          </AnimatedSection>

          <AnimatedSection variants={staggerContainer()} className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Stylist 1 */}
            <motion.div variants={fadeUp} className="glass-card overflow-hidden group">
              <div className="aspect-square w-full overflow-hidden">
                <img src="/images/stylist1.png" alt="Stylist 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-8 text-center bg-white/60">
                <h3 className="heading-md text-charcoal mb-1">Amelia Bennett</h3>
                <span className="text-gold-500 font-sans text-sm uppercase tracking-widest mb-4 block">Founder & Master Stylist</span>
                <p className="text-gray-600 font-sans text-sm">
                  With over 15 years in luxury salons across Paris and Beverly Hills, Amelia brings European elegance to every cut and color.
                </p>
              </div>
            </motion.div>

            {/* Stylist 2 */}
            <motion.div variants={fadeUp} className="glass-card overflow-hidden group border-t-8 border-t-transparent group-hover:-translate-y-2 transition-all">
              <div className="aspect-square w-full overflow-hidden">
                <img src="/images/stylist2.png" alt="Stylist 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-8 text-center bg-white/60">
                <h3 className="heading-md text-charcoal mb-1">Sophia Rivera</h3>
                <span className="text-gold-500 font-sans text-sm uppercase tracking-widest mb-4 block">Head of Aesthetics</span>
                <p className="text-gray-600 font-sans text-sm">
                  Specializing in holistic skincare and red-carpet bridal makeup, Sophia ensures you glow from the inside out.
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
