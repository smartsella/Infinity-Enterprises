
import React from 'react';
import { motion } from 'framer-motion';

export function Card({ 
  children, 
  className = '', 
  hoverEffect = true 
}) {
  return (
    <motion.div 
      className={`glass-card ${className} ${hoverEffect ? 'hover:shadow-blue-500/10' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
