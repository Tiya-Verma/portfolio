import React from 'react';
import { motion } from 'framer-motion';

const ProjectsPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#000000]/25 p-8 rounded-lg shadow-xl max-w-2xl w-full mx-4 relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300"
        >
          ✕
        </button>
        <h2 className="text-3xl font-bold text-white mb-4">Projects</h2>
        <div className="text-gray-300 space-y-4">
          <p>
            Here are some of my featured projects:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Project 1: Description of project 1.</li>
            <li>Project 2: Description of project 2.</li>
            <li>Project 3: Description of project 3.</li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsPopup; 