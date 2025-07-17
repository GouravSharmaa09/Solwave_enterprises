import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTopButton = ({ show }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          className="fixed bottom-8 right-8 z-50 bg-[#001933] text-white rounded-full shadow-lg p-3 flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
          onClick={handleClick}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          aria-label="Scroll to top"
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M6 15l6-6 6 6" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton; 