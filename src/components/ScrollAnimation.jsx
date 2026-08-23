import { motion } from 'framer-motion';
import { useRef } from 'react';

const ScrollAnimation = ({ children, className = '' }) => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
