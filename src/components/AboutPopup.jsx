import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutPopup = ({ isOpen, onClose }) => {
  useEffect(() => {
    console.log('Popup state:', isOpen);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#000000]/25 p-8 rounded-2xl shadow-2xl max-w-2xl w-full mx-4 relative flex flex-col items-center font-[Quicksand,sans-serif]"
        onClick={e => e.stopPropagation()}
      >
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-left w-full mb-8" style={{letterSpacing: '-0.03em'}}>
          Hi, I'm <span className="text-pink-400">Tiya</span>.
        </h2>
        {/* Body text */}
        <div className="text-gray-100 text-lg md:text-xl font-normal leading-relaxed mb-6 text-left w-full" style={{fontFamily:'Quicksand,sans-serif'}}>
          I'm a first year student at The University of British Columbia. I strive to develop technical solutions and designs that provide a smarter and analytical approach to problem solving. I am hoping to major in Cognitive systems and I aim to showcase my creative expression through tech. I work great in teams and in leadership roles. When I'm not working, you'll find me dabbling in desserts.<br/>Let's connect!
        </div>
        {/* Social icons row with gradients */}
        <div className="w-full flex justify-center items-center gap-8 mt-6 mb-2">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/tiyaverma//" target="_blank" rel="noopener noreferrer">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-cyan-300 via-blue-400 to-pink-400 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.79-1.75-1.75s.784-1.75 1.75-1.75 1.75.79 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
            </div>
          </a>
          {/* GitHub */}
          <a href="https://github.com/Tiya-Verma/" target="_blank" rel="noopener noreferrer">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-pink-400 via-yellow-300 to-cyan-300 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </div>
          </a>
          {/* Email */}
          <a href="mailto:tiyaverma2004@yahoo.in" target="_blank" rel="noopener noreferrer">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-yellow-300 via-pink-400 to-cyan-300 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm-12-10.713v20h24v-20h-24zm22 2.697v14.803h-20v-14.803l10 8.097 10-8.097z"/></svg>
            </div>
          </a>
        </div>
        {/* Subtle close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold bg-transparent border-none focus:outline-none"
          aria-label="Close"
        >
          ✕
        </button>
      </motion.div>
    </motion.div>
  );
};

export default AboutPopup; 