import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import headshot from '../assets/yanda.jpg';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const services = [
    "Email Management ✉️",
    "Calendar Organization 📅",
    "Social Media Management 📱",
    "Customer Support 🤝💫",
    "Data Entry & Research 📊💻",
    "Travel Arrangements ✈️🌎"
  ];

  // Typing effect logic
  useEffect(() => {
    const text = services[currentIndex];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= text.length) {
        setDisplayText(text.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          const erasingInterval = setInterval(() => {
            if (charIndex >= 0) {
              setDisplayText(text.slice(0, charIndex));
              charIndex--;
            } else {
              clearInterval(erasingInterval);
              setCurrentIndex((prev) => (prev + 1) % services.length);
            }
          }, 50);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentIndex]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            <span className="text-primary">Luyanda Khumalo's</span> Virtual Assistant Excellence
          </motion.h1>
          <div className="h-20">
            <h2 className="text-3xl text-primary font-semibold">
              {displayText}<span className="animate-blink">|</span>
            </h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-primary text-white px-8 py-3 rounded-full shadow-lg"
            onClick={() => window.location.href = 'https://calendly.com/luyandak367/30min'}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Call
          </motion.button>
        </div>
        
        <motion.div 
          className="md:w-1/2 mt-8 md:mt-0"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <img 
            src={headshot} 
            alt="Professional Headshot" 
            className="rounded-full w-64 h-64 mx-auto object-cover shadow-xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;