import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/data';
import { Mail, Linkedin, Github } from 'lucide-react';
import catPic from '../assets/me_and_my_cat_loki.jpeg';

export const Contact: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.0, ease: "easeOut" }}
      className="container"
      style={{ padding: '80px 1rem', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        style={{ textAlign: 'center', maxWidth: '600px', width: '100%' }}
      >
        <h1 style={{ marginBottom: '1rem', fontFamily: 'Playfair Display' }}>Get In Touch</h1>
        <p style={{ color: '#94a3b8', marginBottom: '3rem' }}>
          Whether you want to discuss quantum mechanics, collaborate on a project, or just say hi to Loki, feel free to reach out.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <motion.a 
            href={`mailto:${personalInfo.email}`} 
            className="glass-card" 
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0.8rem 1.5rem', color: '#fff', textDecoration: 'none', flex: '1 1 200px', maxWidth: '300px', justifyContent: 'center' }}
          >
            <Mail size={20} color="#22d3ee" />
            <span>Email Me</span>
          </motion.a>
          <motion.a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noreferrer" 
            className="glass-card" 
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(10, 102, 194, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0.8rem 1.5rem', color: '#fff', textDecoration: 'none', flex: '1 1 200px', maxWidth: '300px', justifyContent: 'center' }}
          >
            <Linkedin size={20} color="#0a66c2" />
            <span>LinkedIn</span>
          </motion.a>
          <motion.a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noreferrer" 
            className="glass-card" 
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0.8rem 1.5rem', color: '#fff', textDecoration: 'none', flex: '1 1 200px', maxWidth: '300px', justifyContent: 'center' }}
          >
            <Github size={20} color="#fff" />
            <span>GitHub</span>
          </motion.a>
        </div>

        <div style={{ marginTop: '5rem', opacity: 0.8 }}>
          <motion.img 
            src={catPic} 
            alt="Loki the Cat" 
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            style={{ width: 'clamp(80px, 15vw, 120px)', height: 'clamp(80px, 15vw, 120px)', borderRadius: '50%', objectFit: 'cover', border: '3px solid #22d3ee', marginBottom: '1rem' }} 
          />
          <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#64748b', padding: '0 1rem' }}>
            "In this house, we obey the laws of thermodynamics... and Loki's meal schedule."
          </p>
          <p style={{ marginTop: '2rem', fontSize: '0.75rem', color: '#475569' }}>
            © {new Date().getFullYear()} Akshat Sharma. Built with React & Quantum Entanglement.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
