import { motion } from 'framer-motion';

/** Glassmorphism card with hover lift animation */
export default function Card({ children, className = '', hover = true, onClick, as: Component = 'div' }) {
  const MotionComp = motion.create(Component);

  return (
    <MotionComp
      className={`glass rounded-2xl p-6 ${hover ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl' : ''} ${onClick ? 'cursor-pointer' : ''} ${className}`}
      whileHover={hover ? { y: -4 } : undefined}
      onClick={onClick}
    >
      {children}
    </MotionComp>
  );
}
