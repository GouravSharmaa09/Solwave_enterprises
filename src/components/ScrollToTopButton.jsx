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
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-[#ffe066] to-[#ffd700] text-[#b8860b] rounded-full shadow-lg p-2.5 flex items-center justify-center hover:from-[#ffd700] hover:to-[#ffe066] transition-colors duration-300"
          onClick={handleClick}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          aria-label="Scroll to top"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M6 15l6-6 6 6" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton; 