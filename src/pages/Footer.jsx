import React from 'react';
import { Link } from 'react-router-dom';

const socialLinks = [
  { href: 'https://facebook.com/', label: 'Facebook', icon: (
    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
  ) },
  { href: 'https://instagram.com/', label: 'Instagram', icon: (
    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344c-.98.98-1.213 2.092-1.272 3.373C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.613.059 1.281.292 2.393 1.272 3.373.98.98 2.092 1.213 3.373 1.272C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.292 3.373-1.272.98-.98 1.213-2.092 1.272-3.373.059-1.281.072-1.69.072-7.613 0-5.923-.013-6.332-.072-7.613-.059-1.281-.292-2.393-1.272-3.373-.98-.98-2.092-1.213-3.373-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
  ) },
  { href: 'https://linkedin.com/', label: 'LinkedIn', icon: (
    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
  ) },
  { href: 'https://wa.me/', label: 'WhatsApp', icon: (
    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.25-1.44l-.38-.22-3.67.96.98-3.58-.25-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.13-7.47c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.26-1 1-1 2.43s1.02 2.82 1.16 3.02c.14.2 2.01 3.08 4.88 4.2.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z"/></svg>
  ) },
];

const Footer = () => (
  <footer className="bg-[#708090] text-white py-1 border-t-0">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-8">
      {/* Left: Logo and Description */}
      <div className="flex-1 min-w-[220px] flex flex-col items-start">
        <img src="/l1.png" alt="Solwave Logo" style={{ height: '8rem', width: '16rem' }} className="mb-2 rounded-full shadow-none object-cover" />
        {/* <span className="font-bold text-xl mb-2">Solwave</span> */}
        <p className="text-sm leading-snug mb-2">Solwave is a fully integrated solar solutions provider having wide range of solar energy products with cutting edge technology to fulfill renewable energy need of India.</p>
      </div>
      {/* Center: Quick Links */}
      <div className="flex-1 min-w-[180px] w-full mt-6">
        <div className="flex flex-row md:flex-col w-full md:w-auto md:items-start md:gap-8">
          {/* Quick Links Section */}
          <ul className="flex flex-col gap-2 text-sm w-1/2 md:w-full justify-center md:gap-0 md:space-y-2 md:justify-start md:w-auto">
            <li className="block md:hidden text-white font-bold text-base mb-2 py-1">Quick Links</li>
            <li className="hidden md:block text-white font-bold text-base mb-2 py-1">Quick Links</li>
            <li><Link to="/" className="text-black py-1 block hover:text-orange-400 hover:underline">Home</Link></li>
            <li><Link to="/about" className="text-black py-1 block hover:text-orange-400 hover:underline">About</Link></li>
            <li><Link to="/projects" className="text-black py-1 block hover:text-orange-400 hover:underline">Projects</Link></li>
            <li><Link to="/products" className="text-black py-1 block hover:text-orange-400 hover:underline">Products</Link></li>
            <li><Link to="/contact" className="text-black py-1 block hover:text-orange-400 hover:underline">Contact</Link></li>
          </ul>
          {/* Our Services Section (visible on all screens, side by side on mobile) */}
          <ul className="flex flex-col gap-2 text-sm w-1/2 md:w-full justify-center md:gap-0 md:space-y-2 md:justify-start md:w-auto md:pl-4">
            <li className="block md:hidden text-white font-bold text-base mb-2 py-1">Our Services</li>
            <li className="hidden md:block text-white font-bold text-base mb-2 py-1">Our Services</li>
            <li><Link to="/epc" className="text-black mb-2 py-1 block hover:text-orange-400 hover:underline">EPC</Link></li>
            <li><Link to="/om-service" className="text-black mb-2 py-1 block hover:text-orange-400 hover:underline">O&M SERVICE</Link></li>
            <li><Link to="/project-development" className="text-black mb-2 py-1 block hover:text-orange-400 hover:underline">PROJECT DEVELOPMENT</Link></li>
            <li><Link to="/hr" className="text-black mb-2 py-1 block hover:text-orange-400 hover:underline">HR</Link></li>
          </ul>
        </div>
      </div>
      {/* Right: Address, Contact, Social Icons */}
      <div className="flex-1 min-w-[220px] flex flex-col items-start gap-2 md:pl-8 mt-6">
        <div className="font-bold mb-1 text-base text-white hidden md:block">Address</div>
        <div className="text-sm mb-1 font-semibold hidden md:block">Registered & Corporate Office:</div>
        <div className="text-sm mb-1 hidden md:block">64, suraj marg, Maa Hinglaj Nagar, Lalarpura, Jaipur, Rajasthan 302021</div>
        {/* <div className="text-sm mb-1 hidden md:block">VIP Colony, Near RTO Office Nakatiya,(jaipur) 303012</div> */}
        <div className="font-bold mb-1 text-base text-white mt-4">Contact</div>
        <div className="flex items-center gap-2 text-sm"><span>📞</span> <span>9887005337</span></div>
        <div className="flex items-center gap-2 text-sm"><span>✉️</span> <span>info@solwaveenterprises.com</span></div>
        <div className="flex flex-row gap-3 mt-2">
          {socialLinks.map(link => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}
              className="bg-white/10 hover:bg-orange-500 text-white hover:text-white rounded-full p-2 transition-colors duration-200 shadow-md w-9 h-9 flex items-center justify-center">
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
    {/* Copyright and Policy Links */}
    <div className="text-gray-200 text-xs text-center mt-4 border-t border-white/20 pt-2 flex flex-col md:flex-row justify-between items-center gap-2">
      <span>&copy; {new Date().getFullYear()} Solwave | Design & Developed by Gourav Sharma</span>
      <div className="flex flex-wrap gap-2 flex-row justify-center md:justify-start items-center">
        <Link to="/privacy-policy" className="text-black hover:text-orange-400 hover:underline">Privacy Policy</Link>
        <span className="block md:hidden text-black">|</span>
        <Link to="/terms-and-conditions" className="text-black hover:text-orange-400 hover:underline">Terms & Conditions</Link>
        <span className="block md:hidden text-black">|</span>
        <Link to="/data-protection-policy" className="text-black hover:text-orange-400 hover:underline">Data Policy</Link>
      </div>
    </div>
  </footer>
);

export default Footer; 