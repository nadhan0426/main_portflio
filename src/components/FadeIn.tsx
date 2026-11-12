import React from 'react';
import { motion, TargetAndTransition } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'span' | 'h1' | 'h2' | 'p';
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = '',
  as = 'div',
}) => {
  const initial = {
    opacity: 0,
    x,
    y,
  };

  const whileInView: TargetAndTransition = {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  };

  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, margin: '-50px', amount: 0 }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};
