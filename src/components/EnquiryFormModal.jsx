import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnquiryFormModal = ({ open, onClose, item }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(item ? `Enquiry for ${item.name || item.title || ''}` : '');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setName('');
    setEmail('');
    setPhone('');
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
            className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative flex flex-col items-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <button
              className="absolute top-3 right-3 text-2xl font-bold text-gray-400 hover:text-orange-500"
              onClick={onClose}
              aria-label="Close"
            >
              &times;
            </button>
            <img src="/logo2.jpg" alt="Solwave Logo" className="h-16 w-16 rounded-full shadow-none object-cover mb-3" />
            <h2 className="text-2xl font-bold text-[#001933] mb-2 text-center">Enquiry for {item?.name || item?.title || 'Item'}</h2>
            <form className="w-full space-y-4 mt-2" onSubmit={handleSubmit}>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-orange-500 focus:border-orange-500 bg-white"
                placeholder="Your Name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-orange-500 focus:border-orange-500 bg-white"
                placeholder="Email Address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-orange-500 focus:border-orange-500 bg-white"
                placeholder="Phone Number"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
              />
              <textarea
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-orange-500 focus:border-orange-500 bg-white"
                rows={3}
                placeholder="Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-[#001933] text-white font-bold py-2 rounded-lg border-2 border-[#001933] transition-all duration-300 hover:bg-orange-500 hover:border-orange-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 active:scale-95"
              >
                Send Enquiry
              </button>
              {success && (
                <div className="text-center text-green-600 font-semibold mt-2 p-2 bg-green-50 rounded-lg">
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