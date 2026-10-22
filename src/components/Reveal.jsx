import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reveal: Smooth viewport entrance & un-reveal component
 * @param {boolean} once - If false, element re-animates (unreveals) when scrolling out and back in
 * @param {number} delay - Stagger delay in seconds
 * @param {string} direction - 'up' | 'down' | 'left' | 'right' | 'none'
 * @param {number} distance - pixel offset for reveal movement
 * @param {number} duration - animation duration
 */
export const Reveal = ({
  children,
  className = '',
  style = {},
  once = false, // false enables both reveal on enter and un-reveal on leave!
  delay = 0,
  direction = 'up',
  distance = 24,
  duration = 0.55
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const initialOffset = getInitialPosition();

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1]
        }
      }}
      viewport={{ once, margin: '-60px' }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
