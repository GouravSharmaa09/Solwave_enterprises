import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ChatBotWidget from '../components/ChatBotWidget';

const COMPANY_INFO = {
  headOffice: {
    title: 'Head Office',
    address: '64, suraj marg, Maa Hinglaj Nagar, Lalarpura, Jaipur, Rajasthan 302021',
  },
  email: 'info@solwaveenterprises.com',
  phone: ['9887005337'],
  hours: '24 HOUR WITH YOU',
};

const fadeVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Contact = ({ product, onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState(product ? `Enquiry for ${product}` : '');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setCity('');
    setCountry('');
    setMessage(product ? `Enquiry for ${product}` : '');
    setTimeout(() => setSuccess(false), 3000);
    if (onClose) onClose();
  };

  return (
    <>
      <motion.div
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fbeaea] via-white to-[#fbeaea] py-12 px-4"
        initial="hidden"
        animate="visible"
        variants={fadeVariants}
      >
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl p-0 md:p-8 flex flex-col md:flex-row overflow-hidden">
          {/* Left: Contact Form */}
          <div className="flex-1 p-8 md:p-10 bg-white">
            <div className="flex flex-col items-center mb-8">
              <img src="/l1.png" alt="Solwave Logo" style={{ height: '12rem', width: '24rem' }} className="mt-10 p-2 -ml-14 rounded-full shadow-none object-cover" />
              <span className="text-2xl font-bold text-darkred tracking-wide font-sans">Solwave</span>
            </div>
            <h2 className="text-3xl font-bold text-darkred mb-8 text-center md:text-left">We’d love to hear from you.</h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="flex gap-4 flex-col md:flex-row">
                <div className="flex-1">
                  <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mb-2">First Name<span className="text-darkred">*</span></label>
                  <input type="text" id="firstName" className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-darkred focus:border-darkred px-4 py-3 bg-white" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} required />
                </div>
                <div className="flex-1">
                  <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mb-2">Last Name<span className="text-darkred">*</span></label>
                  <input type="text" id="lastName" className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-darkred focus:border-darkred px-4 py-3 bg-white" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} required />
                </div>
              </div>
              <div className="flex gap-4 flex-col md:flex-row">
                <div className="flex-1">
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Address<span className="text-darkred">*</span></label>
                  <input type="email" id="email" className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-darkred focus:border-darkred px-4 py-3 bg-white" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} required />
                </div>
                <div className="flex-1">
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Phone Number<span className="text-darkred">*</span></label>
                  <input type="tel" id="phone" className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-darkred focus:border-darkred px-4 py-3 bg-white" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} required />
                </div>
              </div>
              <div className="flex gap-4 flex-col md:flex-row">
                <div className="flex-1">
                  <label htmlFor="city" className="block text-sm font-bold text-gray-700 mb-2">City<span className="text-darkred">*</span></label>
                  <input type="text" id="city" className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-darkred focus:border-darkred px-4 py-3 bg-white" placeholder="City" value={city} onChange={e => setCity(e.target.value)} required />
                </div>
                <div className="flex-1">
                  <label htmlFor="country" className="block text-sm font-bold text-gray-700 mb-2">Country<span className="text-darkred">*</span></label>
                  <input type="text" id="country" className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-darkred focus:border-darkred px-4 py-3 bg-white" placeholder="Country" value={country} onChange={e => setCountry(e.target.value)} required />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message<span className="text-darkred">*</span></label>
                <textarea id="message" className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-darkred focus:border-darkred px-4 py-3 bg-white" rows={5} placeholder="Your message or enquiry..." value={message} onChange={e => setMessage(e.target.value)} required />
              </div>
              <button type="submit" className="w-full bg-darkred text-white font-bold py-3 rounded-lg border-2 border-darkred transition-all duration-300 hover:bg-[#660000] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkred active:scale-95 shadow-lg">Send Enquiry</button>
              {success && <div className="text-center text-green-600 font-semibold mt-4 p-3 bg-green-50 rounded-lg">Message sent successfully!</div>}
            </form>
          </div>
          {/* Right: Company Info */}
          <div className="flex-1 bg-white p-8 md:p-10 flex flex-col justify-center min-w-[300px] border-l border-gray-100">
            <h3 className="text-2xl font-bold text-darkred mb-6 text-center md:text-left">Contact Info</h3>
            <div className="flex flex-col items-center mb-6">
              <img src="/l1.png" alt="Solwave Logo" style={{ height: '12rem', width: '24rem' }} className="mt-10 p-2 -ml-14 rounded-full shadow-none object-cover" />
              <span className="text-xl font-bold text-darkred tracking-wide font-sans">Solwave</span>
            </div>
            <div className="mb-6">
              <div className="font-bold text-gray-700 mb-1">{COMPANY_INFO.headOffice.title}</div>
              <div className="text-gray-600 mb-3">{COMPANY_INFO.headOffice.address}</div>
            </div>
            <div className="mb-4">
              <div className="font-bold text-gray-700 mb-1">Email Us</div>
              <div className="text-gray-600 mb-3"><a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline text-darkred">{COMPANY_INFO.email}</a></div>
              <div className="font-bold text-gray-700 mb-1">Phone Number</div>
              <div className="text-gray-600 mb-3">
                {COMPANY_INFO.phone.map((ph, i) => (
                  <div key={i}><a href={`tel:${ph}`} className="hover:underline text-darkred">{ph}</a></div>
                ))}
              </div>
              <div className="font-bold text-gray-700 mb-1">Working Hours</div>
              <div className="text-gray-600 mb-3">{COMPANY_INFO.hours}</div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Google Map Section */}
      <div className="w-full mt-8 overflow-hidden" style={{ borderRadius: 0 }}>
        <iframe
          title="Solwave Location Map"
          src="https://www.google.com/maps?q=64,+suraj+marg,+Maa+Hinglaj+Nagar,+Lalarpura,+Jaipur,+Rajasthan+302021&output=embed"
          width="100%"
          height="420"
          style={{ border: 0, borderRadius: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[420px] border-0"
        ></iframe>
      </div>
      <ChatBotWidget />
    </>
  );
};

export default Contact; 