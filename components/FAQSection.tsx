import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PiCaretDownBold } from 'react-icons/pi';

const faqs = [
  {
    question: "What types of courses are available on the platform?",
    answer: "Our platform offers a wide range of courses in creative fields, including graphic design, creative writing, photography, web development, digital marketing, and more. We partner with top universities to ensure curriculum quality."
  },
  {
    question: "What if I need help during the course?",
    answer: "We provide comprehensive support throughout your learning journey. You'll have access to 24/7 mentorship, a dedicated community forum for peer discussions, and direct lines to course instructors for complex queries."
  },
  {
    question: "Can I get a refund if I’m not satisfied with the course?",
    answer: "Absolutely. We believe in our educational quality. If you're not completely satisfied within the first 30 days of enrollment, we offer a hassle-free, full refund guarantee. No questions asked."
  },
  {
    question: "Are the courses accredited or do they offer certifications?",
    answer: "Yes! Upon successful completion of any course, you receive a verified industry-recognized certificate. Many of our advanced programs also offer university credits and professional accreditations."
  }
];

// Springy Doodle SVG
const SpringDoodle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 50" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 25C15 10 20 40 30 25C40 10 45 40 55 25C65 10 70 40 80 25C90 10 95 40 98 25" />
  </svg>
);

const FAQItem = ({ item, isOpen, onClick }: { item: typeof faqs[0], isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="mb-4">
      <button
        onClick={onClick}
        className={`w-full text-left px-8 py-6 rounded-[1.5rem] transition-all duration-300 flex justify-between items-start md:items-center group ${
          isOpen 
            ? 'bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] ring-1 ring-gray-100' 
            : 'bg-white border border-transparent hover:border-gray-100 hover:shadow-sm'
        }`}
      >
        <span className={`font-bold text-lg pr-4 transition-colors ${isOpen ? 'text-brand-600' : 'text-gray-900 group-hover:text-brand-600'}`}>
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 mt-1 md:mt-0 ${isOpen ? 'text-brand-600' : 'text-gray-400'}`}
        >
          <PiCaretDownBold size={20} />
        </motion.div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 pt-2 text-gray-600 leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-brand-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center justify-center relative">
             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight z-10">
              Curious Minds: Your Top Questions Answered!
            </h2>
            <div className="absolute -top-6 -right-12 hidden md:block text-brand-500 transform rotate-12">
               <SpringDoodle className="w-24 h-16" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Accordion */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index} 
                item={faq} 
                isOpen={openIndex === index} 
                onClick={() => setOpenIndex(openIndex === index ? null : index)} 
              />
            ))}
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-full min-h-[500px] hidden lg:block"
          >
            <div className="absolute inset-0 bg-brand-200 rounded-[2.5rem] transform rotate-3 translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200" 
              alt="Happy student" 
              className="relative w-full h-full object-cover rounded-[2.5rem] shadow-2xl z-10"
            />
            
            {/* Floating Badge */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute bottom-12 -left-8 bg-white p-5 rounded-2xl shadow-xl z-20 max-w-[200px]"
            >
               <p className="text-brand-600 font-bold text-lg mb-1">95%</p>
               <p className="text-gray-600 text-sm font-medium">Student Satisfaction Rate</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
