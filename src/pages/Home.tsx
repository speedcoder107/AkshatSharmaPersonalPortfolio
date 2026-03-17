import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/data';
import { ArrowRight, Atom } from 'lucide-react';

export const Home: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      const targetY = element.getBoundingClientRect().top + window.scrollY;
      const startY = window.scrollY;
      const difference = targetY - startY;
      const duration = 800;
      let startTime: number | null = null;

      const animateScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = progress < 0.5 
          ? 4 * progress * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, startY + (difference * ease));

        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      style={{ 
        width: '100%', 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center', 
        padding: '0 1.5rem',
        margin: '0 auto',
        maxWidth: '1200px'
      }}
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Atom size={clamp(40, 64)} color="#22d3ee" style={{ marginBottom: '1rem' }} />
      </motion.div>
      
      <motion.h1 
        style={{ marginBottom: '0.5rem', lineHeight: 1.1 }}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {personalInfo.name}
      </motion.h1>

      <motion.h2 
        className="gradient-text"
        style={{ fontWeight: 500, maxWidth: '800px', marginBottom: '2rem' }}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {personalInfo.title}
      </motion.h2>

      <motion.p 
        style={{ maxWidth: '600px', marginBottom: '3rem', color: '#94a3b8' }}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {personalInfo.shortBio}
      </motion.p>

      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <button 
          onClick={scrollToAbout}
          className="glass-card" 
          style={{ padding: 'clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2.5rem)', display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', border: '1px solid #22d3ee', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}
        >
          Begin Journey <ArrowRight size={18} />
        </button>
      </motion.div>
    </motion.div>
  );
};

// Simple helper to avoid TS errors while keeping it clean
function clamp(min: number, max: number) {
  return window.innerWidth < 768 ? min : max;
}
