import React from 'react';
import { motion } from 'framer-motion';

const universities = [
  {
    name: "Harvard",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/150px-Harvard_University_coat_of_arms.svg.png"
  },
  {
    name: "MIT",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/200px-MIT_logo.svg.png"
  },
  {
    name: "Oxford",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/150px-Oxford-University-Circlet.svg.png"
  },
  {
    name: "Cambridge",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Coat_of_Arms_of_the_University_of_Cambridge.svg/150px-Coat_of_Arms_of_the_University_of_Cambridge.svg.png"
  },
  {
    name: "Stanford",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Seal_of_Leland_Stanford_Junior_University.svg/150px-Seal_of_Leland_Stanford_Junior_University.svg.png"
  },
  {
    name: "Yale",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Yale_University_logo.svg/200px-Yale_University_logo.svg.png"
  },
  {
    name: "Princeton",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Princeton_seal.svg/150px-Princeton_seal.svg.png"
  },
  {
    name: "Columbia",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Columbia_University_shield.svg/150px-Columbia_University_shield.svg.png"
  },
  {
    name: "UCL",
    logo: "https://upload.wikimedia.org/wikipedia/sco/thumb/d/d1/University_College_London_logo.svg/200px-University_College_London_logo.svg.png"
  },
  {
    name: "Imperial",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Imperial_College_London_crest.svg/150px-Imperial_College_London_crest.svg.png"
  },
  {
    name: "Toronto",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/150px-Utoronto_coa.svg.png"
  },
  {
    name: "Melbourne",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/University_of_Melbourne_logo.svg/200px-University_of_Melbourne_logo.svg.png"
  },
];

export const Marquee: React.FC = () => {
  return (
    <div className="w-full py-10 overflow-hidden bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Trusted by 500+ Partner Universities Worldwide</p>
      </div>
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap gap-16 py-4 items-center"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35,
          }}
        >
          {[...universities, ...universities, ...universities].map((uni, idx) => (
            <div
              key={`${uni.name}-${idx}`}
              className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-default min-w-[100px]"
            >
              <img
                src={uni.logo}
                alt={`${uni.name} logo`}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
              <span className="text-xs font-medium text-gray-500">{uni.name}</span>
            </div>
          ))}
        </motion.div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </div>
  );
};
