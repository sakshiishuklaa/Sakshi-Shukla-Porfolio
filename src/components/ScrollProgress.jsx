import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = ({ color }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-left z-50"
      style={{ 
        scaleX,
        background: color || '#1A1A1A'
      }}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(scaleX.get() * 100)}
    />
  );
};

export default ScrollProgress; 