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

        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-semibold mb-6 uppercase tracking-wide"
          >
            <PiCpuDuotone size={16} />
            <span>Powered by Qubit Dynamics AI</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Intelligent Scholarship Discovery
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
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
