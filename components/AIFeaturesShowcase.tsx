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
  PiSparkleFill
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
  hidden: { opacity: 0, y: 50 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: delay,
      ease: "easeOut"
    }
  })
};

export const AIFeaturesShowcase: React.FC = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Dynamic Background Elements - Light Mode Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      {/* Animated Glowing Orbs - Light Mode Subtle */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5], 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-brand-100/50 rounded-full blur-[100px] mix-blend-multiply"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5], 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] mix-blend-multiply"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-sm font-semibold mb-6 backdrop-blur-md shadow-sm"
          >
            <PiCpuDuotone className="w-5 h-5 animate-pulse text-brand-600" />
            <span className="tracking-wide">POWERED BY QUBIT DYNAMICS AI</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Unleash the Power of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-blue-600">Intelligent Scholarship Discovery</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Experience the future of education with our suite of AI tools designed to analyze, match, and optimize your path to success.
          </motion.p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              custom={feature.delay}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(124,58,237,0.1)] hover:border-brand-200 overflow-hidden transition-all duration-300"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated Icon */}
              <div className="relative mb-6">
                <motion.div 
                  className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-brand-500/25"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                >
                  <feature.icon size={32} />
                </motion.div>
                {/* Decorative Sparkle */}
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <PiSparkleFill className="text-yellow-400 w-4 h-4 animate-bounce" />
                </div>
              </div>

              <h3 className="relative text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="relative text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors">
                {feature.description}
              </p>

              {/* Bottom decorative line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
