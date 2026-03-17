import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

const sections = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'education', name: 'Education' },
  { id: 'research', name: 'Research' },
  { id: 'projects', name: 'Projects' },
  { id: 'contact', name: 'Contact' },
];

const Dot = ({ 
  section, 
  mouseX, 
  activeSection, 
  scrollToSection,
  isMobile
}: { 
  section: typeof sections[0], 
  mouseX: any, 
  activeSection: string,
  scrollToSection: (id: string) => void,
  isMobile: boolean
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Distance from mouse to center of dot
  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
    return val - (bounds.y + bounds.height / 2);
  });

  // Size transformation (Dock effect)
  const widthSync = useTransform(distance, [-80, 0, 80], [8, 18, 8]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 200, damping: 20 });

  return (
    <div 
      ref={ref}
      onClick={() => scrollToSection(section.id)}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '12px', 
        cursor: 'pointer',
        justifyContent: 'flex-end',
        height: '35px',
        paddingRight: '5px'
      }}
    >
      <AnimatePresence>
        {isHovered && !isMobile && (
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            style={{ 
              color: '#22d3ee',
              fontSize: '0.7rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontFamily: 'Fira Code',
              whiteSpace: 'nowrap'
            }}
          >
            {section.name}
          </motion.span>
        )}
      </AnimatePresence>

      <motion.div
        style={{
          width,
          height: width,
          borderRadius: '50%',
          backgroundColor: activeSection === section.id ? '#22d3ee' : 'rgba(148, 163, 184, 0.4)',
          boxShadow: activeSection === section.id ? '0 0 15px #22d3ee' : 'none',
          border: activeSection === section.id ? 'none' : '1px solid rgba(255,255,255,0.1)',
        }}
      />
    </div>
  );
};

export const ScrollNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);
  const mouseX = useMotionValue(Infinity);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const smoothScrollTo = (targetY: number, duration: number = 1000) => {
    const startY = window.scrollY;
    const difference = targetY - startY;
    let startTime: number | null = null;

    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Easing function: easeInOutCubic
      const ease = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startY + (difference * ease));

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const rect = element.getBoundingClientRect();
      const targetY = rect.top + window.scrollY;
      smoothScrollTo(targetY, 800); // 800ms for a visible, smooth transition
    }
  };

  const handleTouch = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      mouseX.set(e.touches[0].clientY);
    }
  };

  return (
    <motion.div 
      onMouseMove={(e) => mouseX.set(e.clientY)}
      onMouseLeave={() => mouseX.set(Infinity)}
      onTouchStart={handleTouch}
      onTouchMove={handleTouch}
      onTouchEnd={() => mouseX.set(Infinity)}
      style={{ 
        position: 'fixed', 
        right: isMobile ? '10px' : '20px', 
        top: '50%', 
        transform: 'translateY(-50%)', 
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        padding: '10px',
        touchAction: 'none' // Prevents scrolling while interacting with dots
      }}
    >
      {sections.map((section) => (
        <Dot 
          key={section.id} 
          section={section} 
          mouseX={mouseX} 
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          isMobile={isMobile}
        />
      ))}
    </motion.div>
  );
};
