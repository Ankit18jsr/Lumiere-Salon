import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { fadeUp, pageTransition, staggerContainer } from '../utils/animations';

const servicesData = {
  Hair: [
    { name: "Signature Cut & Style", price: "$120+", desc: "Includes luxury wash, custom cut, and blowout." },
    { name: "Balayage Canvas", price: "$250+", desc: "Hand-painted sun-kissed dimension." },
    { name: "Full Color Alchemy", price: "$180+", desc: "All-over transformative color with gloss." },
    { name: "Keratin Smooth", price: "$300+", desc: "Frizz-eliminating smoothing treatment lasting 12 weeks." },
  ],
  Skincare: [
    { name: "Lumière Glow Facial", price: "$150", desc: "Our signature hydrating and plumping treatment." },
    { name: "Diamond Microdermabrasion", price: "$180", desc: "Resurface and renew for flawless texture." },
    { name: "LED Therapy Session", price: "$80", desc: "Cellular rejuvenation using therapeutic light." },
  ],
  Bridal: [
    { name: "Bridal Trial", price: "$150", desc: "In-depth consultation and makeup/hair run-through." },
    { name: "Wedding Day Glam", price: "$350", desc: "Flawless long-wear makeup and intricate updo." },
    { name: "Bridal Party Styling", price: "$120/pp", desc: "Elegant makeup and hair for bridesmaids." },
  ]
};

const Services = () => {
  const [activeTab, setActiveTab] = useState('Hair');

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
      className="bg-beige-50 pb-24"
    >
      {/* Header */}
      <section className="pt-40 pb-16 px-4 text-center">
        <motion.h1 variants={fadeUp} className="heading-xl text-charcoal mb-4">Our Services</motion.h1>
        <motion.p variants={fadeUp} className="text-gray-500 font-sans max-w-xl mx-auto">
          Elevate your aesthetic with our curated menu of luxury treatments.
        </motion.p>
        <div className="gold-divider"></div>
      </section>

      {/* Tabs */}
      <section className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-wrap justify-center gap-4 mb-12 border-b border-beige-300 pb-2">
          {Object.keys(servicesData).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-6 font-sans uppercase tracking-widest text-sm transition-all duration-300 relative
                ${activeTab === tab ? 'text-charcoal font-semibold' : 'text-gray-400 hover:text-gold-400'}`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-400"
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6"
            >
              {servicesData[activeTab].map((service, idx) => (
                <div key={idx} className="glass-card p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center hover:border-gold-300 transition-colors group">
                  <div className="mb-4 md:mb-0">
                    <h3 className="heading-md text-charcoal mb-1 group-hover:text-gold-500 transition-colors">{service.name}</h3>
                    <p className="font-sans text-gray-500 text-sm">{service.desc}</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="font-serif text-2xl text-gold-400">{service.price}</span>
                    <Link to="/booking" className="btn-outline text-sm px-6 py-2 border-gold-300 text-gold-500">Book</Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
