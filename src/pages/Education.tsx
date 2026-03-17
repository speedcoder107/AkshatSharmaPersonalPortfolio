import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/data';
import { GraduationCap } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <div 
      className="container"
      style={{ padding: '80px 1rem' }}
    >
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: '3rem', fontFamily: 'Playfair Display', textAlign: 'center' }}
      >
        Academic Background
      </motion.h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', 
        gap: '2rem' 
      }}>
        {education.map((edu, index) => (
          <motion.div 
            key={index} 
            className="glass-card" 
            style={{ borderLeft: '4px solid #a855f7' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'rgba(168, 85, 247, 0.1)', padding: '12px', borderRadius: '12px' }}>
                <GraduationCap size={window.innerWidth < 768 ? 24 : 32} color="#a855f7" />
              </div>
              <div>
                <h3 style={{ margin: 0, color: '#fff' }}>{edu.degree}</h3>
                <p style={{ color: '#22d3ee', fontWeight: 600 }}>{edu.institution}</p>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '1.5rem', fontFamily: 'Fira Code' }}>{edu.period}</p>
            <p style={{ lineHeight: 1.7, color: '#cbd5e1' }}>{edu.details}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
