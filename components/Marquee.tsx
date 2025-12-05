import React from 'react';
import { motion } from 'framer-motion';

const universities = [
  "Harvard", "MIT", "Oxford", "Cambridge", "Stanford", "Yale", "Imperial", "UCL", "ETH Zurich", "Toronto", "Melbourne", "NUS"
];

export const Marquee: React.FC = () => {
  return (
    <div className="w-full py-10 overflow-hidden bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Trusted by 50+ Partner Universities</p>
      </div>
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap gap-16 py-2"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
        >
          {[...universities, ...universities, ...universities].map((uni, idx) => (
            <div key={`${uni}-${idx}`} className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-default">
              <span className="text-2xl font-bold text-gray-400 font-serif">{uni}</span>
            </div>
          ))}
        </motion.div>
        
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </div>
  );
};