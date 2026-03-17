import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/data';
import { Terminal } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <div 
      className="container"
      style={{ padding: '80px 1rem' }}
    >
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: '3rem', fontFamily: 'Playfair Display', textAlign: 'center' }}
      >
        Projects
      </motion.h1>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', 
        gap: '2rem' 
      }}>
        {projects.map((proj, index) => (
          <motion.div 
            key={index}
            className="glass-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
          >
            <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Terminal size={24} color="#a855f7" />
              <h2 style={{ fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', margin: 0 }}>{proj.name}</h2>
            </div>
            
            <p style={{ flex: 1, marginBottom: '2rem', fontSize: '0.95rem', color: '#cbd5e1' }}>
              {proj.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {proj.tech.split(',').map((tech, i) => (
                <span key={i} style={{ 
                  background: 'rgba(168, 85, 247, 0.1)', 
                  color: '#e879f9', 
                  padding: '4px 10px', 
                  borderRadius: '15px', 
                  fontSize: '0.75rem',
                  fontFamily: 'Fira Code'
                }}>
                  {tech.trim()}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
