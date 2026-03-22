import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { projects } from '../constants';
import useClickSound from '../hooks/useClickSound';

const ProjectsPage = () => {
  const navigate = useNavigate();
  const playClickSound = useClickSound();

  const handleBack = () => {
    playClickSound();
    navigate('/');
  };

  const handleCardClick = (link) => {
    playClickSound();
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-primary px-6 py-28 md:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 shadow-[0_14px_50px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.25)] backdrop-blur-2xl md:p-8"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/18 via-transparent to-transparent" />
          <div className="pointer-events-none absolute -top-24 left-10 h-56 w-56 rounded-full bg-white/15 blur-3xl" />

          <button
            type="button"
            onClick={handleBack}
            className="absolute right-4 top-3 z-10 text-2xl font-bold text-gray-300 transition hover:text-white"
            aria-label="Close projects page"
          >
            ✕
          </button>

          <h1
            className="relative z-10 mb-3 text-5xl font-extrabold text-white md:text-6xl"
            style={{ letterSpacing: '-0.03em' }}
          >
            My <span className="text-pink-400">Projects</span>
          </h1>
          <p
            className="relative z-10 mb-8 max-w-2xl text-base text-gray-200 md:text-lg"
            style={{ fontFamily: 'Quicksand,sans-serif' }}
          >
            Selected work showcased in a clean visual gallery, while keeping the same soft-glass look and
            typography used in the About section.
          </p>

          <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <motion.button
                key={project.name}
                type="button"
                onClick={() => handleCardClick(project.source_code_link)}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="group overflow-hidden rounded-xl border border-white/10 bg-[#f3f3f3] p-4 text-left shadow-xl transition"
              >
                <div className="flex h-64 w-full items-center justify-center overflow-hidden rounded-lg bg-[#ededed]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="max-h-full max-w-full object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="pt-4">
                  <h2 className="text-2xl font-semibold text-gray-900">{project.name}</h2>
                  <p
                    className="mt-2 text-sm leading-relaxed text-gray-700"
                    style={{ fontFamily: 'Quicksand,sans-serif' }}
                  >
                    {project.description}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
