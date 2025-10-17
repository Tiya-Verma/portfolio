import React from 'react';
import { motion } from 'framer-motion';
import useClickSound from '../hooks/useClickSound';

const ProjectsPopup = ({ isOpen, onClose }) => {
  const playClickSound = useClickSound();

  if (!isOpen) return null;

  const handleClose = () => {
    playClickSound();
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#000000]/25 p-8 rounded-lg shadow-xl max-w-2xl w-full mx-4 relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300"
        >
          ✕
        </button>
        <h2 className="text-5xl md:text-6xl font-extrabold text-left w-full mb-8" style={{letterSpacing: '-0.03em'}}>
          <span className="text-blue-400">Projects</span>
        </h2>
        <div className="text-white-300 space-y-8">
          <p>
            work in progress...
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsPopup; 