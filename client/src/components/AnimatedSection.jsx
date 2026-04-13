import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimatedSection = ({ children, variants, className = "", threshold = 0.1 }) => {
  const { ref, controls } = useScrollAnimation(threshold);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
