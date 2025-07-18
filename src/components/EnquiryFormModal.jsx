import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnquiryFormModal = ({ open, onClose, item }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState(item ? `Enquiry for ${item.name || item.title || ''}` : '');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setName('');
    setEmail('');
    setPhone('');
    setCity('');
    setCountry('');
    setMessage(item ? `Enquiry for ${item.name || item.title || ''}` : '');
    setTimeout(() => setSuccess(false), 2500);
    if (onClose) setTimeout(onClose, 2000);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gradient-to-br from-orange-50 via-white to-orange-100 rounded-3xl shadow-2xl border border-orange-100 p-8 w-full max-w-md md:max-w-xl relative flex flex-col items-center min-h-[36rem] md:min-h-[32rem] max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <button
              className="absolute top-3 right-3 text-2xl font-bold text-gray-400 hover:text-orange-500"
              onClick={onClose}
              aria-label="Close"
            >
              &times;
            </button>
            <img src="/l1.png" alt="Solwave Logo" className="h-20 w-20 mb-4 rounded-full object-cover shadow-md border-2 border-orange-200 bg-white" />
            <h2 className="text-2xl font-bold text-[#001933] mb-2 text-center">Enquiry for {item?.name || item?.title || 'Item'}</h2>
            <form className="w-full space-y-4 mt-2" onSubmit={handleSubmit}>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-white/80 transition-all duration-200 shadow-sm hover:shadow-md"
                placeholder="Your Name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
              <input
                type="email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-white/80 transition-all duration-200 shadow-sm hover:shadow-md"
                placeholder="Email Address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-white/80 transition-all duration-200 shadow-sm hover:shadow-md"
                placeholder="Phone Number"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  className="w-1/2 border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-white/80 transition-all duration-200 shadow-sm hover:shadow-md"
                  placeholder="City"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  required
                />
                <input
                  type="text"
                  className="w-1/2 border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-white/80 transition-all duration-200 shadow-sm hover:shadow-md"
                  placeholder="Country"
                  value={country}
                  onChange={e => setCountry(e.target.value)}
                  required
                />
              </div>
              <textarea
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-white/80 transition-all duration-200 shadow-sm hover:shadow-md"
                rows={3}
                placeholder="Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold py-3 rounded-xl border-2 border-orange-400 transition-all duration-300 hover:from-orange-500 hover:to-orange-600 hover:border-orange-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 active:scale-95 shadow-lg"
              >
                Send Enquiry
              </button>
              {success && (
                <div className="text-center text-green-600 font-semibold mt-2 p-2 bg-green-50 rounded-lg animate-pulse">
                  Message sent successfully!
                </div>
              )}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryFormModal; 