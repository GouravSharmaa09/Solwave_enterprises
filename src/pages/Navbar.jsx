import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Our Services' },
  { to: '/projects', label: 'Our Projects' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Decide background
  const isHome = location.pathname === '/';
  const showDarkBg = !isHome || isScrolled;

  // Animation variants matching Hero section style
  const navContainerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.05
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: { duration: 0.2 }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  // Restore scroll when menu closes
  useEffect(() => {
    if (!isMobileMenuOpen && typeof window !== 'undefined' && document) {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        showDarkBg
          ? 'bg-white backdrop-blur-md shadow-lg border-b border-white'
          : 'bg-white/10 backdrop-blur-lg'
      }`}
      variants={navContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            variants={logoVariants}
          >
            <img src="/l1.png" alt="Solwave Logo" style={{ height: '12rem', width: '24rem' }} className="mt-10 p-2 -ml-14 rounded-full shadow-none object-cover" />
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center space-x-1"
            variants={navContainerVariants}
          >
            {navLinks.map(link =>
              link.label === 'Our Services' ? (
                <div
                  className="relative"
                  key={link.to}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `px-6 py-2 font-semibold text-lg transition-colors duration-200 select-none ${
                        isActive
                          ? 'text-[#ff9800] hover:!text-orange-500 hover:bg-gradient-to-r hover:from-[#ff9800] hover:to-[#ffd700] hover:bg-clip-text hover:text-transparent'
                          : 'text-black hover:!text-orange-500 hover:bg-gradient-to-r hover:from-[#ff9800] hover:to-[#ffd700] hover:bg-clip-text hover:text-transparent'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                  <div className={`absolute left-0 top-full mt-2 w-56 bg-white rounded-lg shadow-lg transition-opacity duration-200 z-50 ${isServicesOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                    <NavLink to="/epc" className="block px-6 py-3 text-gray-800 transition-colors duration-150 hover:bg-orange-100 hover:text-orange-600">EPC</NavLink>
                    <NavLink to="/om-service" className="block px-6 py-3 text-gray-800 transition-colors duration-150 hover:bg-orange-100 hover:text-orange-600">O&M SERVICE</NavLink>
                    <NavLink to="/project-development" className="block px-6 py-3 text-gray-800 transition-colors duration-150 hover:bg-orange-100 hover:text-orange-600">PROJECT DEVELOPMENT</NavLink>
                    <NavLink to="/hr" className="block px-6 py-3 text-gray-800 transition-colors duration-150 hover:bg-orange-100 hover:text-orange-600">HR</NavLink>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-6 py-2 font-semibold text-lg transition-colors duration-200 select-none ${
                      isActive
                        ? 'text-[#ff9800] hover:!text-orange-500 hover:bg-gradient-to-r hover:from-[#ff9800] hover:to-[#ffd700] hover:bg-clip-text hover:text-transparent'
                        : 'text-black hover:!text-orange-500 hover:bg-gradient-to-r hover:from-[#ff9800] hover:to-[#ffd700] hover:bg-clip-text hover:text-transparent'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            variants={navItemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-6 h-6 flex flex-col justify-center items-center"
              animate={isMobileMenuOpen ? "open" : "closed"}
            >
              <motion.span
                className="w-6 h-0.5 bg-black block"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-black block mt-1.5"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-black block mt-1.5"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6 }
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Prevent background scroll when menu is open */}
              {typeof window !== 'undefined' && document && (document.body.style.overflow = 'hidden')}
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 z-40 bg-black/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
              />
              {/* Sidebar Card */}
              <motion.div
                className="md:hidden fixed top-0 left-0 h-full w-[65vw] min-w-[260px] max-w-[440px] z-50 flex flex-col"
                variants={{
                  hidden: { x: '-100%' },
                  visible: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
                  exit: { x: '-100%', transition: { type: 'spring', stiffness: 300, damping: 30 } }
                }}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="relative h-full w-full flex flex-col bg-transparent p-0 m-0">
                  <button
                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-orange-100 text-black text-2xl z-50 shadow"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    &times;
                  </button>
                  <div className="flex-1 flex flex-col items-stretch p-0 m-0">
                     <div className="bg-white shadow-xl w-full h-full min-h-screen flex flex-col justify-start px-0 py-0" style={{ borderRadius: 0 }}>
                       <nav className="flex flex-col w-full pt-16 pb-8 px-6 space-y-4">
                        {navLinks.map((link, index) => (
                          <motion.div
                            key={link.to + link.label + index}
                            variants={mobileItemVariants}
                            custom={index}
                            className="w-full"
                          >
                            {link.label === 'Our Services' ? (
                              <>
                                <button
                                  className="block w-full text-left px-0 py-3 text-base text-black font-semibold transition-all duration-300 focus:outline-none bg-transparent hover:text-orange-500"
                                  onClick={() => setIsMobileServicesOpen((open) => !open)}
                                >
                                  {link.label}
                                  <span className={`ml-2 inline-block transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-90' : ''}`}>▶</span>
                                </button>
                                {isMobileServicesOpen && (
                                  <div className="pl-4 flex flex-col gap-1">
                                    <NavLink to="/epc" className="block w-full px-0 py-2 text-base text-black font-normal bg-transparent hover:text-orange-500" onClick={() => setIsMobileMenuOpen(false)}>EPC</NavLink>
                                    <NavLink to="/om-service" className="block w-full px-0 py-2 text-base text-black font-normal bg-transparent hover:text-orange-500" onClick={() => setIsMobileMenuOpen(false)}>O&M SERVICE</NavLink>
                                    <NavLink to="/project-development" className="block w-full px-0 py-2 text-base text-black font-normal bg-transparent hover:text-orange-500" onClick={() => setIsMobileMenuOpen(false)}>PROJECT DEVELOPMENT</NavLink>
                                    <NavLink to="/hr" className="block w-full px-0 py-2 text-base text-black font-normal bg-transparent hover:text-orange-500" onClick={() => setIsMobileMenuOpen(false)}>HR</NavLink>
                                  </div>
                                )}
                              </>
                            ) : (
                              <NavLink
                                to={link.to}
                                className={({ isActive }) => (
                                  `block w-full px-0 py-3 text-base text-black font-semibold transition-all duration-300 bg-transparent text-left ${
                                    isActive
                                      ? 'text-[#ff9800] underline'
                                      : 'hover:text-orange-500'
                                  }`
                                )}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {link.label}
                              </NavLink>
                            )}
                          </motion.div>
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar; 