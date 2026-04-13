import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { fadeUp, pageTransition, staggerContainer } from '../utils/animations';
import { HiCheck } from 'react-icons/hi';

const plans = [
  {
    name: "Classic",
    price: "$150",
    desc: "Essential maintenance for the modern woman.",
    features: ["Signature Haircut", "Deep Conditioning", "Classic Blowout", "Standard Manicure"],
    featured: false
  },
  {
    name: "Premium",
    price: "$350",
    desc: "The ultimate salon experience and transformation.",
    features: ["Full Balayage / Color", "Olaplex Treatment", "Lumière Glow Facial", "Gel Manicure", "Scalp Massage"],
    featured: true,
    badge: "Most Popular"
  },
  {
    name: "Bridal",
    price: "$500",
    desc: "Comprehensive luxury for your special day.",
    features: ["Pre-wedding Consultation", "Hair styling trial", "Full wedding day makeup", "Bridal updo/styling", "Complimentary champagne"],
    featured: false
  }
];

const Pricing = () => {
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
        <motion.h1 variants={fadeUp} className="heading-xl text-charcoal mb-4">Pricing Packages</motion.h1>
        <motion.p variants={fadeUp} className="text-gray-500 font-sans max-w-xl mx-auto">
          Transparent pricing for our carefully curated luxury packages. Walk-in and à la carte options also available.
        </motion.p>
        <div className="gold-divider"></div>
      </section>

      <section className="container mx-auto px-4">
        <AnimatedSection variants={staggerContainer()} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeUp}
              className={`glass-card p-8 flex flex-col relative bg-white/70 ${plan.featured ? 'price-featured -translate-y-4' : 'mt-4 border-white'}`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="badge-gold bg-gold-400 text-white shadow-md">{plan.badge}</span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="heading-md text-charcoal mb-2">{plan.name}</h3>
                <p className="font-sans text-gray-500 text-sm mb-6 min-h-[40px]">{plan.desc}</p>
                <div className="flex items-center justify-center baseline">
                  <span className="text-4xl font-serif text-charcoal">{plan.price}</span>
                  <span className="font-sans text-gray-400 ml-2">/ visit</span>
                </div>
              </div>

              <div className="flex-1">
                <ul className="space-y-4 font-sans text-sm text-charcoal mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <HiCheck className="text-gold-400 text-lg flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <Link 
                  to="/booking" 
                  className={`block text-center w-full ${plan.featured ? 'btn-gold' : 'btn-outline border-beige-300 text-charcoal hover:border-gold-400'}`}
                >
                  Choose Package
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatedSection>
      </section>
    </motion.div>
  );
};

export default Pricing;
