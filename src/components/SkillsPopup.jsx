import React from 'react';
import { motion } from 'framer-motion';

const skillsCloud = [
  { text: 'JAVA', size: 'text-6xl', color: 'text-white', x: -105, y: -70 },
  { text: 'PYTHON', size: 'text-6xl', color: 'text-white', x: 27, y: -100 },
  { text: 'JAVASCRIPT', size: 'text-3xl', color: 'text-cyan-200', x: -145, y: 67 },
  { text: 'VS CODE', size: 'text-6xl', color: 'text-white', x: 135, y: 80 },
  { text: 'INTELLIJ IDEA', size: 'text-2xl', color: 'text-cyan-200', x: -25, y: 125 },
  { text: 'AFTER EFFECTS', size: 'text-2xl', color: 'text-cyan-200', x: -40, y: -140 },
  { text: 'REACT', size: 'text-2xl', color: 'text-cyan-200', x: 80, y: -140 },
  { text: 'BLENDER 3D', size: 'text-4xl', color: 'text-white', x: 180, y: 0 },
  { text: 'GIT', size: 'text-6xl', color: 'text-white', x: 35, y: -170 },
  { text: 'HTML', size: 'text-6xl', color: 'text-white', x: -170, y: -10 },
  { text: 'CSS', size: 'text-6xl', color: 'text-white', x: -100, y: 110 },
  { text: 'THREE.JS', size: 'text-3xl', color: 'text-cyan-200', x: 100, y: 120 },
  { text: 'ILLUSTRATOR', size: 'text-2xl', color: 'text-cyan-200', x: -60, y: 155 },
  { text: 'PHOTOSHOP', size: 'text-5xl', color: 'text-white', x: 60, y: 165 },
  { text: 'PROCREATE', size: 'text-2xl', color: 'text-cyan-200', x: -75, y: -110 },
  { text: '3D RENDERING', size: 'text-2xl', color: 'text-cyan-200', x: 150, y: -90 },
  { text: 'NODE.JS', size: 'text-3xl', color: 'text-cyan-200', x: 150, y: -50 },
  { text: 'WEB3.JS', size: 'text-2xl', color: 'text-cyan-200', x: 0, y: -60 },
  { text: 'TAILWIND.CSS', size: 'text-3xl', color: 'text-cyan-200', x: 190, y: 35 },
  { text: 'FIGMA', size: 'text-2xl', color: 'text-cyan-200', x: -60, y: 55 },
  { text: 'PANDAS', size: 'text-2xl', color: 'text-cyan-200', x: 30, y: 90 },
  { text: 'C', size: 'text-6xl', color: 'text-white', x: -10, y: 70 },
  { text: 'R', size: 'text-3xl', color: 'text-cyan-200', x: 60, y: -60 },
  { text: 'TYPESCRIPT', size: 'text-2xl', color: 'text-cyan-200', x: -180, y: 35 },
];

const SkillsPopup = ({ isOpen, onClose }) => {
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
        className="bg-[#000000]/20 p-6 rounded-lg shadow-xl max-w-2xl w-full mx-4 relative flex flex-col items-center justify-center makeanote-font"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl makeanote-font"
        >
          ✕
        </button>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="relative flex flex-wrap items-center justify-center mb-8 w-full min-h-[400px]">
            {/* Central 'Skills' word */}
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl md:text-7xl font-extrabold text-yellow-400 text-center w-full mb-8" style={{letterSpacing: '-0.03em'}}>SKILLS</span>
            {/* Manually positioned skills around the center */}
            {skillsCloud.map((skill, i) => (
              <span
                key={i}
                className={`absolute makeanote-font ${skill.size} ${skill.color} select-none`}
                style={{
                  left: `calc(50% + ${skill.x}px)`,
                  top: `calc(50% + ${skill.y}px)`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 5
                }}
              >
                {skill.text}
              </span>
            ))}
          </div>
          {/* Social icons removed as requested */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillsPopup; 