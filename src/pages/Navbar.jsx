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
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Decide background
  const isHome = location.pathname === '/';
  const showDarkBg = isScrolled || !isHome;

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

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        showDarkBg
          ? 'bg-[#001933] backdrop-blur-md shadow-lg border-b border-[#001933]'
          : 'bg-white/10 backdrop-blur-lg'
      }`}
      variants={navContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            variants={logoVariants}
          >
            <img src="/logo2.jpg" alt="Solwave Logo" className="h-16 w-16 rounded-full shadow-none object-cover" />
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
                          ? 'text-[#ff9800] hover:bg-gradient-to-r hover:from-[#ff9800] hover:to-[#ffd700] hover:bg-clip-text hover:text-transparent'
                          : 'text-white hover:bg-gradient-to-r hover:from-[#ff9800] hover:to-[#ffd700] hover:bg-clip-text hover:text-transparent'
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
                        ? 'text-[#ff9800] hover:bg-gradient-to-r hover:from-[#ff9800] hover:to-[#ffd700] hover:bg-clip-text hover:text-transparent'
                        : 'text-white hover:bg-gradient-to-r hover:from-[#ff9800] hover:to-[#ffd700] hover:bg-clip-text hover:text-transparent'
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
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-white"
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
                className="w-6 h-0.5 bg-white block"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-white block mt-1.5"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-white block mt-1.5"
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
            <motion.div
              className="md:hidden absolute top-full left-0 w-full bg-[#001933] backdrop-blur-md border-b border-[#001933]"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="px-4 py-6 space-y-3">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.to + link.label + index}
                    variants={mobileItemVariants}
                    custom={index}
                  >
                    <NavLink
                      to={link.to}
                      className={({ isActive }) => (
                        `block px-4 py-3 text-white font-medium transition-all duration-300 rounded-lg ${
                          isActive
                            ? 'bg-[#001933]/80 text-[#ff9800] border border-[#001933] hover:bg-gradient-to-r hover:from-[#ff9800] hover:to-[#ffd700] hover:bg-clip-text hover:text-transparent'
                            : 'hover:bg-gradient-to-r hover:from-[#ff9800] hover:to-[#ffd700] hover:bg-clip-text hover:text-transparent'
                        }`
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar; 