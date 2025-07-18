import React, { useState, useEffect, useRef } from "react";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import StatsSection from "../components/StatsSection";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import EnquiryFormModal from "../components/EnquiryFormModal";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { Player } from '@lottiefiles/react-lottie-player';
import ChatBotWidget from '../components/ChatBotWidget';
import { projects } from "./Projects";


// import greenEnergyAnimation from './assets/Green Energy Animation.json';

const solexProducts = [
  {
    name: "Tapi R",
    type: "N-Type TOPcon Technology",
    wattage: "595 – 610 W",
    efficiency: "23.14%",
    warranty: "12 Years (Product), 30 Years (Performance)",
    cells: "132 Half Cut Cell",
    image: "https://solex.in/wp-content/uploads/2025/02/Tapi-RSOLEX-1920X920-100.jpg",
    slug: "tapi-r"
  },
  {
    name: "Tapi Trans",
    type: "N-Type Dual Glass Module",
    wattage: "560 – 585 W",
    efficiency: "22.83%",
    warranty: "12 Years (Product), 30 Years (Performance)",
    cells: "144 Half Cut Cell",
    image: "https://solex.in/wp-content/uploads/2025/02/Tapi-TransSOLEX-1920X920_1-100.jpg",
    slug: "tapi-trans"
  },
  {
    name: "Tapi Series",
    type: "Monocrystalline / Bi-Facial Monocrystalline",
    wattage: "530 – 555 W",
    efficiency: "21.48%",
    warranty: "12 Years (Product), 30 Years (Performance)",
    cells: "144 Half Cut Cell",
    image: "https://solex.in/wp-content/uploads/2025/02/Tapi-SeriesSOLEX-1920X920_2-100.jpg",
    slug: "tapi-series"
  },
  {
    name: "Tapi Black",
    type: "All Black Monocrystalline / Bi-Facial Monocrystalline",
    wattage: "400 – 420 W",
    efficiency: "21.50%",
    warranty: "12 Years (Product), 30 Years (Performance)",
    cells: "108 Half Cut Cell",
    image: "https://solex.in/wp-content/uploads/2025/02/Tapi-Black-SOLEX-1920X920_3-100.jpg",
    slug: "tapi-black"
  },
  {
    name: "Ganga",
    type: "Monocrystalline",
    wattage: "120 – 125 W",
    efficiency: "19.91%",
    warranty: "10 Years (Product)",
    cells: "33 Half Cut Cell",
    image: "https://solex.in/wp-content/uploads/2025/02/SOLEX-1920X920_4-100_GANGA.webp",
    slug: "ganga"
  }
];

// Duplicate the first product to make 6
const pnImages = [
  '/pn1.jpg',
  '/pn2.jpg',
  '/pn3.jpg',
  '/pn4.jpg',
  '/pn5.jpg',
  '/pn6.jpg',
];
const products6 = solexProducts.map((prod, idx) => ({
  ...prod,
  pnImage: pnImages[idx % pnImages.length],
}));
products6.push({ ...solexProducts[0], pnImage: pnImages[0] }); // duplicate for 6th card

const services = [
  { title: 'Solar Projects', desc: 'Residential, Commercial, Utility Scale', image: 'https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg' },
  { title: 'Project Management', desc: 'End-to-end project governance', image: 'https://images.pexels.com/photos/4254166/pexels-photo-4254166.jpeg' },
  { title: 'Asset Management', desc: 'Ongoing maintenance & support', image: 'https://images.pexels.com/photos/14613940/pexels-photo-14613940.jpeg' },
  { title: 'Project Development', desc: 'Leasing, Financing, Micro Grids', image: 'https://images.pexels.com/photos/6158914/pexels-photo-6158914.jpeg' },
  { title: 'OEM Marketplace', desc: 'Vendor & installer connections', image: 'https://esunscope.com/assets/uploads/WhatsApp%20Image%202023-09-28%20at%2012.50.53%20PM.jpeg' },
  { title: 'EV Charging Stations', desc: 'Electric vehicle infrastructure', image: 'https://images.pexels.com/photos/9800028/pexels-photo-9800028.jpeg' },
  { title: 'Wind Energy', desc: 'Clean wind power solutions', image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: 40, transition: { duration: 0.3, ease: "easeIn" } }
};

const serviceCardVariants = {
  hiddenLeft: { opacity: 0, x: -60 },
  hiddenRight: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const productCardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Home() {
  const [showWidgets, setShowWidgets] = useState(true);
  const [showScroll, setShowScroll] = useState(false);
  // Remove modal state/logic for product cards
  const navigate = useNavigate();
  const [productPaused, setProductPaused] = useState(false);
  const [servicePaused, setServicePaused] = useState(false);
  const [projectPaused, setProjectPaused] = useState(false);
  const [lastTouchedProjectIdx, setLastTouchedProjectIdx] = useState(null);
  const [readyToNavigateProjectIdx, setReadyToNavigateProjectIdx] = useState(null);
  const readyToNavigateTimer = useRef(null);
  const projectPausedRef = useRef(projectPaused);
  useEffect(() => { projectPausedRef.current = projectPaused; }, [projectPaused]);

  useEffect(() => {
    // Reset projectPaused, lastTouchedProjectIdx, and readyToNavigateProjectIdx when Home mounts
    setProjectPaused(false);
    setLastTouchedProjectIdx(null);
    setReadyToNavigateProjectIdx(null);
    if (readyToNavigateTimer.current) {
      clearTimeout(readyToNavigateTimer.current);
      readyToNavigateTimer.current = null;
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;
      // Hide if at top (hero) or near bottom (footer)
      if (scrollY < 600 || windowHeight + scrollY >= bodyHeight - 200) {
        setShowWidgets(false);
      } else {
        setShowWidgets(true);
      }
      setShowScroll(scrollY > 200 && windowHeight + scrollY < bodyHeight - 200);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Refs for scrolling
  const servicesScrollRef = useRef(null);
  const projectsScrollRef = useRef(null);
  const productsScrollRef = useRef(null);

  const handleScroll = (ref, dir) => {
    if (ref.current) {
      ref.current.scrollBy({ left: dir * 300, behavior: 'smooth' });
    }
  };

  // Improved auto-scroll for products, services, and projects on mobile, only when section is in view, and only that section scrolls
  useEffect(() => {
    // const isMobile = window.innerWidth < 768;
    // if (!isMobile) return;
    const productsRef = productsScrollRef.current;
    const servicesRef = servicesScrollRef.current;
    const projectsRef = projectsScrollRef.current;
    if (!productsRef || !servicesRef || !projectsRef) return;

    let productIdx = 0;
    let serviceIdx = 0;
    let projectIdx = 0;
    let productCards = productsRef.querySelectorAll('.snap-center');
    let serviceCards = servicesRef.querySelectorAll('.snap-center');
    let projectCards = projectsRef.querySelectorAll('.snap-center');
    if (productCards.length < 2 && serviceCards.length < 2 && projectCards.length < 2) return;
    let productTimeoutId;
    let serviceTimeoutId;
    let projectTimeoutId;
    let productsInView = false;
    let servicesInView = false;
    let projectsInView = false;

    // Remove pause/resume handlers for scroll containers here
    // (now handled by JSX props)

    // Reset index if user scrolls manually
    const resetProductIdx = () => {
      const scrollLeft = productsRef.scrollLeft;
      const cardWidth = productCards[0]?.offsetWidth || 1;
      productIdx = Math.round(scrollLeft / cardWidth);
    };
    const resetServiceIdx = () => {
      const scrollLeft = servicesRef.scrollLeft;
      const cardWidth = serviceCards[0]?.offsetWidth || 1;
      serviceIdx = Math.round(scrollLeft / cardWidth);
    };
    const resetProjectIdx = () => {
      const scrollLeft = projectsRef.scrollLeft;
      const cardWidth = projectCards[0]?.offsetWidth || 1;
      projectIdx = Math.round(scrollLeft / cardWidth);
    };
    productsRef.addEventListener('scroll', resetProductIdx);
    servicesRef.addEventListener('scroll', resetServiceIdx);
    projectsRef.addEventListener('scroll', resetProjectIdx);

    // IntersectionObserver to detect if section is in view
    const observerOptions = { threshold: 0.3 };
    const productsObserver = new window.IntersectionObserver(
      ([entry]) => { productsInView = entry.isIntersecting; if (productsInView) startProductScroll(); else stopProductScroll(); },
      observerOptions
    );
    const servicesObserver = new window.IntersectionObserver(
      ([entry]) => { servicesInView = entry.isIntersecting; if (servicesInView) startServiceScroll(); else stopServiceScroll(); },
      observerOptions
    );
    const projectsObserver = new window.IntersectionObserver(
      ([entry]) => { projectsInView = entry.isIntersecting; if (projectsInView) startProjectScroll(); else stopProjectScroll(); },
      observerOptions
    );
    productsObserver.observe(productsRef);
    servicesObserver.observe(servicesRef);
    projectsObserver.observe(projectsRef);

    // Auto-scroll for products
    const startProductScroll = () => {
      if (productTimeoutId) clearTimeout(productTimeoutId);
      const scroll = () => {
        console.log('Auto-scroll products running', { productsInView, productPaused });
        if (!productsInView || productPaused) {
          productTimeoutId = setTimeout(scroll, 500);
          return;
        }
        productCards = productsRef.querySelectorAll('.snap-center');
        if (productCards.length > 1) {
          productIdx = (productIdx + 1) % productCards.length;
          productCards[productIdx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
          console.log('Product card scrolled to', productIdx);
        }
        productTimeoutId = setTimeout(scroll, 4000);
      };
      productTimeoutId = setTimeout(scroll, 4000);
    };
    const stopProductScroll = () => {
      if (productTimeoutId) clearTimeout(productTimeoutId);
    };
    // Auto-scroll for services
    const startServiceScroll = () => {
      if (serviceTimeoutId) clearTimeout(serviceTimeoutId);
      const scroll = () => {
        console.log('Auto-scroll services running', { servicesInView, servicePaused });
        if (!servicesInView || servicePaused) {
          serviceTimeoutId = setTimeout(scroll, 500);
          return;
        }
        serviceCards = servicesRef.querySelectorAll('.snap-center');
        if (serviceCards.length > 1) {
          serviceIdx = (serviceIdx + 1) % serviceCards.length;
          serviceCards[serviceIdx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
          console.log('Service card scrolled to', serviceIdx);
        }
        serviceTimeoutId = setTimeout(scroll, 2000);
      };
      serviceTimeoutId = setTimeout(scroll, 2000);
    };
    const stopServiceScroll = () => {
      if (serviceTimeoutId) clearTimeout(serviceTimeoutId);
    };
    // Auto-scroll for projects
    const startProjectScroll = () => {
      if (projectTimeoutId) clearTimeout(projectTimeoutId);
      const scroll = () => {
        console.log('Auto-scroll projects running', { projectsInView, projectPaused: projectPausedRef.current });
        if (!projectsInView || projectPausedRef.current) {
          projectTimeoutId = setTimeout(scroll, 500);
          return;
        }
        projectCards = projectsRef.querySelectorAll('.snap-center');
        if (projectCards.length > 1) {
          projectIdx = (projectIdx + 1) % projectCards.length;
          projectCards[projectIdx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
          console.log('Project card scrolled to', projectIdx);
        }
        projectTimeoutId = setTimeout(scroll, 4000); // Increased delay to 4 seconds
      };
      projectTimeoutId = setTimeout(scroll, 4000); // Increased delay to 4 seconds
    };
    const stopProjectScroll = () => {
      if (projectTimeoutId) clearTimeout(projectTimeoutId);
    };

    // Cleanup
    return () => {
      stopProductScroll();
      stopServiceScroll();
      stopProjectScroll();
      productsRef.removeEventListener('scroll', resetProductIdx);
      servicesRef.removeEventListener('scroll', resetServiceIdx);
      projectsRef.removeEventListener('scroll', resetProjectIdx);
      // Removed container hover/touch event listeners
      productsObserver.disconnect();
      servicesObserver.disconnect();
      projectsObserver.disconnect();
    };
  }, [productPaused, servicePaused, projectPaused]);

  // State for product image slider (array of indices)
  const [productImageIndices, setProductImageIndices] = useState(Array(products6.length).fill(0));

  // Auto-slide images for each product card (4 seconds on mobile, 2 seconds on desktop)
  useEffect(() => {
    const timers = [];
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const interval = isMobile ? 4000 : 2000;
    productImageIndices.forEach((imgIdx, i) => {
      timers[i] = setTimeout(() => {
        setProductImageIndices(prev => {
          const next = [...prev];
          next[i] = (next[i] + 1) % 2;
          return next;
        });
      }, interval);
    });
    return () => timers.forEach(t => t && clearTimeout(t));
  }, [productImageIndices]);

  // Animation should be visible only when not at Hero (top) and not at Footer
  const showAnimation = showWidgets && window.scrollY >= 600;

  return (
    <>
      <HeroSection />
      {/* Main content (z-10) */}
      <div className="relative z-10">
        {/* Animation background covering all content except when Hero or Footer is visible */}
        {showAnimation && (
          <div className="fixed left-0 top-0 w-full h-full pointer-events-none opacity-20 z-0">
            <Player
              autoplay
              loop
              src="/animation.json"
              style={{ width: '100vw', height: '100vh' }}
              speed={1}
            />
          </div>
        )}
        {/* All content sections */}
        {/* Welcome To Solwave Section */}
        <section className="py-20 bg-transparent">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                <span className="text-darkred">Welcome To </span>
                <span className="text-blue-700">Solwave</span>
              </h2>
              <p className="max-w-5xl text-left mx-auto text-gray-700 text-base md:text-lg leading-relaxed mb-2">
                Solwave is a fully integrated solar solutions provider having wide range of solar energy products with cutting edge technology and industry expertise to fulfill renewable energy need of India. Headquartered at Bareilly, Solwave is a leading manufacturer of Solar Energy Systems. We supply Solar Power and Heating Systems for Households, Private users, Commercial Enterprises, Institutions, Public Facilities and Investors.
                <Link
                  to="/about"
                  className="ml-2 text-darkred font-semibold hover:underline hover:text-[#660000] transition-colors duration-200 select-none"
                >
                  Read More
                </Link>
              </p>
            </div>
          </section>
          {/* Our Products Section (Grid 2x3) */}
          <section className="py-20 bg-transparent">
            <div className="container mx-auto px-2 sm:px-4">
              <h2 className="text-5xl font-bold text-gray-800 mb-16 text-center">Our Products</h2>
              <div
                ref={productsScrollRef}
                className="flex overflow-x-auto gap-4 md:grid md:grid-cols-3 md:gap-6 max-w-7xl mx-auto scrollbar-hide snap-x snap-mandatory touch-pan-x"
              >
                <AnimatePresence>
                  {products6.map((prod, idx) => (
                    <motion.div
                      key={prod.name + idx}
                      variants={productCardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.2 }}
                      whileHover={{ y: -12, scale: 1.04 }}
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                      className="group bg-white rounded-3xl border border-gray-100 overflow-hidden flex flex-col w-[90vw] min-w-[90vw] max-w-[90vw] h-[440px] relative md:w-full md:min-w-0 md:max-w-none snap-center"
                      onMouseEnter={() => setProductImageIndices(prev => { const arr = [...prev]; arr[idx] = (arr[idx] + 1) % 2; return arr; })}
                      onTouchStart={() => setProductImageIndices(prev => { const arr = [...prev]; arr[idx] = (arr[idx] + 1) % 2; return arr; })}
                    >
                      {/* Product Image Slider with fade effect */}
                      <div className="w-full h-48 sm:h-56 md:h-72 bg-gray-100 relative overflow-hidden">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in ${productImageIndices[idx] === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        />
                        <img
                          src={prod.pnImage}
                          alt={prod.name + ' alternate'}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in ${productImageIndices[idx] === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        />
                      </div>
                      {/* Product Content */}
                      <div className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col justify-between relative z-10">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 font-serif">{prod.name}</h3>
                          <p className="font-sans font-bold text-darkred text-base md:text-lg mb-2">{prod.type}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full">
                          <Link
                            to={`/products/${prod.slug}`}
                            className="flex-1 px-4 py-2 rounded-full bg-darkred text-white font-bold border-2 border-darkred transition-all duration-300 text-sm text-center hover:bg-black hover:text-white hover:border-black focus:scale-105 active:scale-95 hover:shadow-lg hover:scale-105"
                          >
                            Know More
                          </Link>
                          <button
                            className="flex-1 px-4 py-2 rounded-full bg-darkred text-white font-bold border-2 border-darkred transition-all duration-300 text-sm text-center hover:bg-black hover:text-white hover:border-black focus:scale-105 active:scale-95 hover:shadow-lg hover:scale-105"
                            onClick={() => navigate(`/enquiry?item=${encodeURIComponent(prod.name)}`)}
                          >
                            Enquiry Now
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </section>
          {/* Our Services Section (Grid) */}
          <section className="py-20 bg-transparent">
            <div className="container mx-auto px-2 sm:px-4">
              <h2 className="text-5xl font-bold text-gray-800 mb-16 text-center">Our Services</h2>
              <div
                ref={servicesScrollRef}
                className="flex overflow-x-auto gap-4 md:grid md:grid-cols-3 md:gap-6 max-w-7xl mx-auto scrollbar-hide snap-x snap-mandatory touch-pan-x"
                onMouseEnter={() => setServicePaused(true)}
                onMouseLeave={() => setServicePaused(false)}
                onTouchStart={() => setServicePaused(true)}
                onTouchEnd={() => setServicePaused(false)}
              >
                {services.map((service, idx) => (
                  <motion.div
                    key={service.title + idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                    className="group bg-white border border-gray-100 overflow-hidden flex flex-col w-[85vw] min-w-[85vw] max-w-[85vw] h-[320px] relative rounded-none shadow-md md:w-full md:min-w-0 md:max-w-none snap-center"
                  >
                    <div className="w-full h-32 sm:h-40 bg-gray-100" style={{
                      backgroundImage: `url(${service.image})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                    }} />
                    <div className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col justify-center relative z-10">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 font-serif">{service.title}</h3>
                      <p className="font-sans text-gray-600 text-sm md:text-base">{service.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          {/* Our Projects Section (Grid) */}
          <section className="py-20 bg-transparent">
            <div className="container mx-auto px-2 sm:px-4">
              <h2 className="text-5xl font-bold text-gray-800 mb-16 text-center">Our Projects</h2>
              <div
                ref={projectsScrollRef}
                className="flex overflow-x-auto gap-4 md:grid md:grid-cols-3 md:gap-6 max-w-7xl mx-auto scrollbar-hide snap-x snap-mandatory touch-pan-x"
              >
                {projects.map((proj, idx) => (
                  <Link
                    to={`/projects/${proj.slug}`}
                    key={proj.name + idx}
                    className="group bg-white rounded-none border border-gray-100 overflow-hidden flex flex-col w-[90vw] min-w-[90vw] max-w-[90vw] h-[380px] relative shadow-md transition-transform duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl cursor-pointer flex-shrink-0 md:w-full md:min-w-0 md:max-w-none snap-center"
                    style={{ textDecoration: 'none' }}
                    onMouseEnter={() => setProjectPaused(true)}
                    onMouseLeave={() => setProjectPaused(false)}
                    onTouchStart={() => {
                      if (!projectPaused || readyToNavigateProjectIdx !== idx) {
                        setProjectPaused(true);
                        setReadyToNavigateProjectIdx(idx);
                        if (readyToNavigateTimer.current) clearTimeout(readyToNavigateTimer.current);
                        readyToNavigateTimer.current = setTimeout(() => {
                          setReadyToNavigateProjectIdx(null);
                        }, 1500); // 1.5 seconds to tap again
                        // Do NOT call e.preventDefault() here!
                      } else if (projectPaused && readyToNavigateProjectIdx === idx) {
                        if (readyToNavigateTimer.current) {
                          clearTimeout(readyToNavigateTimer.current);
                          readyToNavigateTimer.current = null;
                        }
                        // Do not preventDefault, allow navigation
                      }
                    }}
                    onClick={e => {
                      // Only allow navigation if paused and this is the ready card
                      if (!projectPaused || readyToNavigateProjectIdx !== idx) {
                        e.preventDefault();
                      }
                    }}
                  >
                    <div
                      className="w-full h-32 sm:h-48 bg-gray-100 transition-transform duration-500 group-hover:-translate-x-4"
                      style={{
                        backgroundImage: `url(${proj.img})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                      }}
                    />
                    <div className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col justify-start relative z-10 transition-transform duration-500 group-hover:translate-x-4">
                      <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-2 font-serif">{proj.name}</h3>
                      <p className="font-sans text-darkred text-sm md:text-base mb-2">{proj.desc}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 font-bold text-xs md:text-sm">{proj.size}</span>
                        <button
                          className="ml-2 px-3 py-1 rounded-full bg-darkred text-white font-bold border-2 border-darkred text-xs hover:bg-black hover:text-white hover:border-black transition-all duration-300 focus:scale-105 active:scale-95 hover:shadow-lg"
                          onClick={e => { e.preventDefault(); e.stopPropagation(); navigate(`/enquiry?item=${encodeURIComponent(proj.name)}`); }}
                        >
                          Enquiry
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Brands We Provide Section */}
          <section className="py-20 bg-transparent">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-darkred">The Brands We Provide</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto items-center">
                <img src="https://mma.prnewswire.com/media/1520978/Vikram_Solar_Logo.jpg?p=facebook" alt="Vikram Solar" className="h-24 object-contain mx-auto" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Adani_2012_logo.png/1024px-Adani_2012_logo.png" alt="Adani" className="h-24 object-contain mx-auto" />
                <img src="https://media.licdn.com/dms/image/v2/D4D0BAQEBHXEXhGI2zw/company-logo_200_200/company-logo_200_200/0/1699356685448?e=2147483647&v=beta&t=qH352S2khHnJ_KWPBwp3rZV2KmBclfhKlY9U553c2VY" alt="Waaree" className="h-24 object-contain mx-auto" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmxyAXo2dPpQ5Q6YRYKlTGpHrXRLydZqHE1g&s" alt="Luminous" className="h-24 object-contain mx-auto" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa_J1mhulLA5ocSeORkOurUSda3f6hCHc7wQ&s" alt="UTL" className="h-24 object-contain mx-auto" />
                <img src="https://images.sftcdn.net/images/t_app-icon-m/p/1616fec8-24e4-48f8-8412-a9054bf2f48e/1889351157/polycab-solar-logo" alt="Polycab" className="h-24 object-contain mx-auto" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYiegmsPI8EJeL1KA-E1FktPeSC0dxCXE-LQ&s" alt="Loom Solar" className="h-24 object-contain mx-auto" />
                <img src="https://docs.exideindustries.com/images/international-business/international-brands/exide-logo.jpg" alt="Exide" className="h-24 object-contain mx-auto" />
                <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0016/4238/brand.gif?itok=ru7coxk3" alt="ABB" className="h-24 object-contain mx-auto" />
                <img src="https://solartrade.s3.ap-south-1.amazonaws.com/media/img/md/50e6da11-3fb6-4f7c-8332-8a3f333b57d2" alt="Eapro" className="h-24 object-contain mx-auto" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLc09agqg1m_mtfgxd5hQCBc7OtdWWDijq5Q&s" alt="Smarten" className="h-24 object-contain mx-auto" />
                <img src="https://w7.pngwing.com/pngs/680/167/png-transparent-havells-logo-havell-s-electrical-shop-havells-logo-company-krrish-text-carnivoran-dog-like-mammal.png" alt="Havells" className="h-24 object-contain mx-auto" />
              </div>
            </div>
          </section>
          {/* Modal for Enquiry Now */}
          {/* Removed EnquiryFormModal as it's no longer needed for product cards */}
          <FeaturesSection />
          <StatsSection />
          <ScrollToTopButton show={showScroll && showWidgets} />
          {showWidgets && <ChatBotWidget />}
        </div>
    </>
  );
}
