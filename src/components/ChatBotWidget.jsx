import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import l1Logo from '/l1.png';

const ChatBotWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);
  const [showActions, setShowActions] = useState(false);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    setTimeout(() => {
      setMessages(msgs => [...msgs, { from: 'bot', text: 'Thank you! We will get back to you soon.' }]);
    }, 800);
    setInput('');
  };

  return (
    <>
      <AnimatePresence>
        {!open && (
          <div className="relative group">
            <motion.button
              className="fixed bottom-8 left-8 z-50 bg-gradient-to-r from-[#ffe066] to-[#ffd700] text-[#b8860b] rounded-full shadow-lg p-2.5 flex items-center justify-center hover:from-[#ffd700] hover:to-[#ffe066] transition-colors duration-300"
              onClick={() => setOpen(true)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              aria-label="Open chat bot"
              onMouseEnter={() => setShowActions(true)}
              onMouseLeave={() => setTimeout(() => setShowActions(false), 200)}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </motion.button>
            {/* Floating WhatsApp and Call icons on hover of the button only */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-20 flex flex-col gap-2 items-center z-50 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 opacity-0 transition-opacity duration-200">
              <a href="https://wa.me/918755984565" target="_blank" rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#ffe066] to-[#ffd700] text-[#25d366] rounded-full shadow-lg p-2 flex items-center justify-center hover:scale-110 transition-transform duration-200 pointer-events-auto"
                title="WhatsApp">
                <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.58 2.236 6.364L4 29l7.818-2.236A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 21.917c-1.885 0-3.73-.52-5.32-1.5l-.38-.23-4.65 1.33 1.33-4.53-.25-.39A9.93 9.93 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.27-7.13c-.29-.15-1.71-.84-1.97-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.29-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3.01.15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z"/>
                </svg>
              </a>
              <a href="tel:+918755984565" className="bg-gradient-to-r from-[#ffe066] to-[#ffd700] text-[#b8860b] rounded-full shadow-lg p-2 flex items-center justify-center hover:scale-110 transition-transform duration-200 pointer-events-auto" title="Call">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z"/>
                </svg>
              </a>
            </div>
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-8 left-8 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white rounded-t-2xl">
              <div className="flex items-center gap-2">
                <img src={l1Logo} alt="Solwave Logo" className="h-12 w-20 rounded-full shadow-none object-cover" />
                <span className="text-darkred font-bold text-lg">Solwave Chat</span>
              </div>
              <button className="text-darkred text-xl hover:text-yellow-600" onClick={() => setOpen(false)}>&times;</button>
            </div>
            <div className="flex-1 px-4 py-3 overflow-y-auto max-h-64 bg-white">
              {messages.map((msg, idx) => (
                <div key={idx} className={`mb-2 flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`px-3 py-2 rounded-lg text-sm max-w-[80%] ${msg.from === 'user' ? 'bg-[#fbeaea] text-darkred' : 'bg-gray-100 text-darkred'}`}>{msg.text}</div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <form className="flex items-center border-t border-gray-200 p-2 bg-white rounded-b-2xl" onSubmit={handleSend}>
              <input
                className="flex-1 px-3 py-2 rounded-lg border border-gray-200 focus:ring-darkred focus:border-darkred text-sm bg-white"
                placeholder="Type your message..."
                value={input}
                onChange={e => setInput(e.target.value)}
              />
              <button type="submit" className="ml-2 px-3 py-2 bg-darkred text-white rounded-lg font-bold hover:bg-[#660000] transition-colors duration-200">Send</button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBotWidget; 