import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/data';
import profilePic from '../assets/My_profile_picture.jpeg';

export const About: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="container"
    >
      <div className="about-grid">
        {/* Image Side */}
        <motion.div 
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="about-image-container"
        >
          <div style={{ position: 'relative', maxWidth: '300px', margin: '0 auto' }}>
            <div style={{ position: 'absolute', top: '-15px', left: '-15px', width: '100%', height: '100%', border: '2px solid #22d3ee', zIndex: -1, opacity: 0.4 }} />
            <img 
              src={profilePic} 
              alt="Akshat Sharma" 
              style={{ width: '100%', borderRadius: '8px', boxShadow: '0 15px 30px rgba(0,0,0,0.4)' }} 
            />
          </div>
        </motion.div>

        {/* Text Side */}
        <div style={{ color: '#cbd5e1' }}>
          <motion.h1 
            style={{ marginBottom: '1.5rem', fontFamily: 'Playfair Display' }}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            The Journey
          </motion.h1>
          
          {personalInfo.about.map((paragraph, index) => (
            <motion.p 
              key={index} 
              style={{ marginBottom: '1.2rem', lineHeight: 1.7 }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (index * 0.1) }}
            >
              {paragraph}
            </motion.p>
          ))}

          {/* Highlights */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="about-highlights"
          >
            {personalInfo.highlights.map((highlight, index) => (
              <div key={index} className="highlight-item">
                <span className="highlight-title">{highlight.title}</span>
                <span className="highlight-detail">{highlight.detail}</span>
              </div>
            ))}
          </motion.div>

          {/* Interests Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="about-interests"
          >
            {personalInfo.interests.join(' • ')}
          </motion.div>
        </div>
      </div>
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          align-items: center;
        }
        .about-highlights {
          margin-top: 2.5rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .highlight-item {
          display: flex;
          flex-direction: column;
        }
        .highlight-title {
          color: #22d3ee;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.4rem;
        }
        .highlight-detail {
          font-size: 0.9rem;
          color: #cbd5e1;
        }
        .about-interests {
          margin-top: 3.5rem;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #94a3b8;
          font-family: 'Fira Code', 'Roboto Mono', monospace;
        }
        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }
          .about-image-container {
            order: -1;
          }
          .about-highlights {
            justify-content: center;
          }
          .about-interests {
            text-align: center;
          }
        }
      `}</style>
    </motion.div>
  );
};
