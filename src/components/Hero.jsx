import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import { ParticleBackground } from './ParticleBackground';
import { portfolioData } from '../data/portfolio';

export const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const handleScrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/20 to-white dark:from-dark-900/50 dark:via-dark-900/20 dark:to-dark-900 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Title */}
          <motion.div variants={item} className="space-y-4">
            <motion.p
              className="text-primary-600 dark:text-primary-400 text-lg font-semibold tracking-wider uppercase"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Welcome to my portfolio
            </motion.p>
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm <span className="text-primary-600 dark:text-primary-400">{portfolioData.name.split(' ')[0]}</span>
            </motion.h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            {portfolioData.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <motion.button
              onClick={() => handleScrollToSection('#projects')}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button
              onClick={() => handleScrollToSection('#contact')}
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="pt-12"
          >
            <motion.button
              onClick={() => handleScrollToSection('#about')}
              className="flex flex-col items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mx-auto"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <FiArrowDown size={24} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
