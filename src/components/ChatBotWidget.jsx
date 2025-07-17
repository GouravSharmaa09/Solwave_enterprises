import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatBotWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

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
          <motion.button
            className="fixed bottom-8 left-8 z-50 bg-[#001933] text-white rounded-full shadow-lg p-4 flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            aria-label="Open chat bot"
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </motion.button>
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
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-[#001933] rounded-t-2xl">
              <div className="flex items-center gap-2">
                <img src="/logo2.jpg" alt="Solwave Logo" className="h-8 w-8 rounded-full shadow-none object-cover" />
                <span className="text-white font-bold text-lg">Solwave Chat</span>
              </div>
              <button className="text-white text-xl hover:text-orange-400" onClick={() => setOpen(false)}>&times;</button>
            </div>
            <div className="flex-1 px-4 py-3 overflow-y-auto max-h-64 bg-white">
              {messages.map((msg, idx) => (
                <div key={idx} className={`mb-2 flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`px-3 py-2 rounded-lg text-sm max-w-[80%] ${msg.from === 'user' ? 'bg-orange-100 text-gray-900' : 'bg-[#001933] text-white'}`}>{msg.text}</div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <form className="flex items-center border-t border-gray-100 p-2 bg-white rounded-b-2xl" onSubmit={handleSend}>
              <input
                className="flex-1 px-3 py-2 rounded-lg border border-gray-200 focus:ring-orange-500 focus:border-orange-500 text-sm bg-white"
                placeholder="Type your message..."
                value={input}
                onChange={e => setInput(e.target.value)}
              />
              <button type="submit" className="ml-2 px-3 py-2 bg-[#001933] text-white rounded-lg font-bold hover:bg-orange-500 transition-colors duration-200">Send</button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBotWidget; 