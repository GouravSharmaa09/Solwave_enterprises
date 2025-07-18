import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  
  const slides = [
    {
      id: 1,
      title: "Transform Your Home with Solar Energy",
      subtitle: "Clean, Sustainable, and Cost-Effective",
      description: "Harness the power of the sun with our premium solar solutions. Reduce your electricity bills while contributing to a greener planet.",
      backgroundImage: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Advanced Solar Technology",
      subtitle: "Innovation Meets Efficiency",
      description: "Experience cutting-edge solar panels with maximum efficiency ratings and extended warranties for long-term energy independence.",
      backgroundImage: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Professional Installation",
      subtitle: "Expert Service, Guaranteed Results",
      description: "Our certified technicians ensure seamless installation and optimal performance of your solar energy system.",
      backgroundImage: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div 
            className="text-white space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={currentSlide}
          >
            <motion.div variants={textVariants}>
              <span className="inline-block px-4 py-2 bg-darkred text-white text-sm font-medium rounded-full mb-4">
                {slides[currentSlide].subtitle}
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold leading-tight"
              variants={textVariants}
            >
              {slides[currentSlide].title}
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-lg leading-relaxed"
              variants={textVariants}
            >
              {slides[currentSlide].description}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={textVariants}
            >
              <button
                className="bg-darkred hover:bg-[#660000] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => navigate('/contact')}
              >
                Get Free Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Info Cards */}
          <motion.div 
            className="relative space-y-6"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            key={`info-${currentSlide}`}
          >
            {/* Solar Benefits Cards */}
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3 text-white mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-lg font-semibold">Clean Energy</span>
              </div>
              <p className="text-gray-300">100% renewable energy from the sun</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center gap-3 text-white mb-3">
                <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                <span className="text-lg font-semibold">Cost Savings</span>
              </div>
              <p className="text-gray-300">Reduce electricity bills by up to 90%</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <div className="flex items-center gap-3 text-white mb-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-lg font-semibold">25-Year Warranty</span>
              </div>
              <p className="text-gray-300">Long-term protection for your investment</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none
              ${index === currentSlide 
                ? 'bg-darkred/80 w-4' 
                : 'bg-white/30 w-1.5 hover:bg-white/60'}
            `}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-sm font-medium">Scroll</span>
        <div className="w-px h-8 bg-white/50"></div>
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
