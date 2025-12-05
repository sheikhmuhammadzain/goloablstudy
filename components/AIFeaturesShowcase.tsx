import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  PiChatCircleTextDuotone,
  PiFileTextDuotone,
  PiChartBarDuotone,
  PiLightbulbDuotone,
  PiPenNibDuotone,
  PiTargetDuotone,
  PiCpuDuotone,
  PiArrowRightBold
} from 'react-icons/pi';

const features = [
  {
    title: "24/7 AI Scholarship Advisor",
    description: "Get instant answers about scholarships, universities, and application processes with our intelligent Qubit AI assistant.",
    icon: PiChatCircleTextDuotone,
    delay: 0
  },
  {
    title: "Intelligent Resume Analysis",
    description: "Upload your resume once — our AI extracts and structures your profile for seamless scholarship matching.",
    icon: PiFileTextDuotone,
    delay: 0.1
  },
  {
    title: "AI-Powered Assessment Reports",
    description: "Receive detailed reports showing how your profile matches scholarship requirements with actionable improvement suggestions.",
    icon: PiChartBarDuotone,
    delay: 0.2
  },
  {
    title: "Smart Skill Recommendations",
    description: "Our AI analyzes scholarship criteria and suggests the most impactful skills to highlight in your application.",
    icon: PiLightbulbDuotone,
    delay: 0.3
  },
  {
    title: "AI Professional Summaries",
    description: "Generate multiple tailored professional summaries optimized for each scholarship application.",
    icon: PiPenNibDuotone,
    delay: 0.4
  },
  {
    title: "Intelligent Matching System",
    description: "AI-powered matching connects you with scholarships perfectly aligned with your academic profile and goals.",
    icon: PiTargetDuotone,
    delay: 0.5
  }
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delay,
      ease: "easeOut"
    }
  })
};

export const AIFeaturesShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section with Doodles */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">

          {/* Doodle: Star - Left Side */}
          <motion.svg
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="absolute -left-4 md:-left-16 top-8 w-8 h-8 md:w-10 md:h-10 text-brand-400"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L14.09 8.26L21 9.27L16 13.97L17.18 21L12 17.77L6.82 21L8 13.97L3 9.27L9.91 8.26L12 2Z" />
          </motion.svg>

          {/* Doodle: Sparkle Dots - Right */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute -right-2 md:-right-12 top-4 flex flex-col gap-2"
          >
            <span className="text-yellow-400 text-xl">✦</span>
            <span className="text-brand-300 text-sm ml-2">✦</span>
            <span className="text-yellow-300 text-xs ml-1">✦</span>
          </motion.div>

          {/* Doodle: Curved Arrow - Top Right */}
          <motion.svg
            initial={{ opacity: 0, pathLength: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute right-8 md:right-16 -top-4 w-10 h-10 md:w-12 md:h-12 text-brand-300 hidden md:block"
            viewBox="0 0 50 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M10 35 Q 25 5, 42 18" />
            <path d="M36 12 L 42 18 L 34 22" />
          </motion.svg>

          {/* Doodle: Small Circle - Bottom Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="absolute left-8 md:left-0 bottom-0 w-3 h-3 rounded-full bg-brand-200 hidden md:block"
          />

          {/* Doodle: Plus Sign */}
          <motion.div
            initial={{ opacity: 0, rotate: -45 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="absolute -left-2 md:left-4 bottom-8 text-brand-300 text-2xl font-light hidden md:block"
          >
            +
          </motion.div>

          {/* Doodle: Wavy Line - Right Side */}
          <motion.svg
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute -right-4 md:right-4 bottom-4 w-8 h-6 text-yellow-400 hidden md:block"
            viewBox="0 0 40 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M2 10 Q 10 2, 20 10 T 38 10" />
          </motion.svg>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-semibold mb-6 uppercase tracking-wide"
          >
            <PiCpuDuotone size={16} />
            <span>Powered by Qubit Dynamics AI</span>
          </motion.div>

          {/* Title with Underline Doodle */}
          <div className="relative inline-block">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
            >
              Intelligent Scholarship Discovery
            </motion.h2>

            {/* Doodle: Hand-drawn Underline */}
            <motion.svg
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-56 md:w-72 h-3"
              viewBox="0 0 200 12"
              fill="none"
            >
              <motion.path
                d="M3 8 Q 50 2, 100 7 T 197 5"
                stroke="#a78bfa"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.svg>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 mt-6"
          >
            Experience the future of education with our suite of AI tools designed to analyze, match, and optimize your path to success.
          </motion.p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              custom={feature.delay}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(124,58,237,0.1)] transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
                <feature.icon size={32} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Learn More Link */}
              <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more
                <PiArrowRightBold size={16} />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
