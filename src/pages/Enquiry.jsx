import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SOLWAVE_ADDRESS = {
  head: 'Head Office',
  address: '64, suraj marg, Maa Hinglaj Nagar, Lalarpura, Jaipur, Rajasthan 302021',
  email: 'info@solwaveenterprises.com',
  phone: ['9887005337'],
  hours: '24 HOUR WITH YOU',
};

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const Enquiry = () => {
  const query = useQuery();
  const itemName = query.get('item') || '';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState(itemName ? `Enquiry for ${itemName}` : '');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setName('');
    setEmail('');
    setPhone('');
    setCity('');
    setCountry('');
    setMessage(itemName ? `Enquiry for ${itemName}` : '');
    setTimeout(() => setSuccess(false), 2500);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#fbeaea] via-white to-[#fbeaea] py-8 px-2 pt-28">
      <div className="w-full max-w-5xl flex-1 min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
        <motion.div
          className="w-full max-w-4xl bg-white/80 rounded-3xl border border-darkred p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          {/* Form Section */}
          <div className="w-full max-w-lg flex flex-col items-center">
            <img src="/l1.png" alt="Solwave Logo" className="h-28 w-28 mb-4 rounded-full object-cover border-2 border-darkred bg-white" />
            <h2 className="text-2xl font-bold text-[#001933] mb-2 text-center">Enquiry {itemName && <>for <span className="text-darkred">{itemName}</span></>}</h2>
            <form className="w-full space-y-4 mt-2" onSubmit={handleSubmit}>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-darkred focus:border-darkred bg-white/80 transition-all duration-200 hover:shadow-none"
                placeholder="Your Name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
              <input
                type="email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-darkred focus:border-darkred bg-white/80 transition-all duration-200 hover:shadow-none"
                placeholder="Email Address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-darkred focus:border-darkred bg-white/80 transition-all duration-200 hover:shadow-none"
                placeholder="Phone Number"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  className="w-1/2 border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-darkred focus:border-darkred bg-white/80 transition-all duration-200 hover:shadow-none"
                  placeholder="City"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  required
                />
                <input
                  type="text"
                  className="w-1/2 border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-darkred focus:border-darkred bg-white/80 transition-all duration-200 hover:shadow-none"
                  placeholder="Country"
                  value={country}
                  onChange={e => setCountry(e.target.value)}
                  required
                />
              </div>
              <textarea
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-darkred focus:border-darkred bg-white/80 transition-all duration-200 hover:shadow-none"
                rows={3}
                placeholder="Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-darkred to-[#660000] text-white font-bold py-3 rounded-xl border-2 border-darkred transition-all duration-300 hover:from-[#660000] hover:to-darkred hover:border-[#660000] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkred active:scale-95"
              >
                Send Enquiry
              </button>
              {success && (
                <div className="text-center text-green-600 font-semibold mt-2 p-2 bg-green-50 rounded-lg animate-pulse">
                  Message sent successfully!
                </div>
              )}
            </form>
          </div>
          {/* Address Section */}
          <div className="w-full max-w-lg flex flex-col items-center md:items-start mt-8 md:mt-28">
            <h3 className="text-xl font-bold text-darkred mb-2 text-center md:text-left">Solwave Location & Address</h3>
            <div className="text-gray-700 text-base mb-2 w-full">
              <div className="mb-1 font-semibold">{SOLWAVE_ADDRESS.head}</div>
              <div className="mb-2">{SOLWAVE_ADDRESS.address}</div>
              <div className="mb-1 font-semibold">Email</div>
              <div className="mb-2"><a href={`mailto:${SOLWAVE_ADDRESS.email}`} className="text-darkred hover:underline">{SOLWAVE_ADDRESS.email}</a></div>
              <div className="mb-1 font-semibold">Phone</div>
              <div className="mb-2">{SOLWAVE_ADDRESS.phone.map((ph, i) => (
                <div key={i}><a href={`tel:${ph}`} className="text-darkred hover:underline">{ph}</a></div>
              ))}</div>
              <div className="mb-1 font-semibold">Working Hours</div>
              <div className="mb-2">{SOLWAVE_ADDRESS.hours}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Enquiry; 