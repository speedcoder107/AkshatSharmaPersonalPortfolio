import React from 'react';
import { motion } from 'framer-motion';
import { research } from '../data/data';
import { Microscope } from 'lucide-react';

export const Research: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="container"
      style={{ padding: '120px 2rem 80px', maxWidth: '1000px' }}
    >
      <motion.h1 
        style={{ fontSize: '3rem', marginBottom: '3rem', fontFamily: 'Playfair Display', textAlign: 'center' }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Research Experience
      </motion.h1>

      <div style={{ position: 'relative', borderLeft: '2px solid rgba(34, 211, 238, 0.2)', paddingLeft: '2rem' }}>
        {research.map((res, index) => (
          <motion.div 
            key={index}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            style={{ marginBottom: '4rem', position: 'relative' }}
          >
            {/* Timeline Dot */}
            <div style={{ 
              position: 'absolute', 
              left: '-2.6rem', 
              top: '0', 
              width: '1.2rem', 
              height: '1.2rem', 
              background: '#020617', 
              border: '2px solid #22d3ee', 
              borderRadius: '50%',
              boxShadow: '0 0 10px #22d3ee'
            }} />

            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <h2 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.5rem' }}>{res.title}</h2>
                  <p style={{ color: '#22d3ee', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Microscope size={18} /> {res.institution} | {res.mentor}
                  </p>
                </div>
                <span style={{ 
                  background: 'rgba(34, 211, 238, 0.1)', 
                  color: '#22d3ee', 
                  padding: '4px 12px', 
                  borderRadius: '20px', 
                  fontSize: '0.9rem', 
                  fontFamily: 'Fira Code' 
                }}>
                  {res.period}
                </span>
              </div>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#cbd5e1' }}>
                {res.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
