import React from 'react';
import { motion } from 'framer-motion';
import { PiStarFill } from 'react-icons/pi';

const testimonials = [
  {
    name: "Jenni Amy",
    location: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
    text: "This platform has completely transformed my approach to studying abroad. The process was incredibly well-structured, and all the counselors are industry experts.",
    rating: 5
  },
  {
    name: "Devon Lane",
    location: "Paris, France",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150",
    text: "This website offers fantastic university matching that is engaging and informative. The practical advice and real-world case studies have given me solid understanding. Loved the whole process.",
    rating: 5
  },
  {
    name: "Esther Howard",
    location: "Grand Canyon, USA",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    text: "I've applied to several universities through this website, and each experience has been fantastic. The steps are practical, the support is engaging, and the community is supportive.",
    rating: 5
  },
  {
    name: "Darlene Robertson",
    location: "Marrakech, Morocco",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    text: "I've been using this site to learn more about scholarship opportunities, and the results have been phenomenal. The resources are detailed and cover everything.",
    rating: 5
  },
  {
    name: "Kathryn Murphy",
    location: "Sydney, Australia",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    text: "The admission guidance offered here is top-notch. The curriculum covers everything from the basics of application to advanced visa interview techniques.",
    rating: 5
  },
  {
    name: "William Wilson",
    location: "Reykjavik, Iceland",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    text: "I've always loved learning but wanted to take my education to the next level globally. This website offers excellent support that covers from amateur to advanced.",
    rating: 5
  }
];

// SVG Doodle Component
const Doodle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 120 30" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 15C15 5 25 25 35 15C45 5 55 25 65 15C75 5 85 25 95 15C105 5 115 25 115 15" />
  </svg>
);

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-brand-50/30 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-100/40 rounded-full blur-3xl mix-blend-multiply opacity-50"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl mix-blend-multiply opacity-50"></div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
            <div className="inline-block relative px-12">
                <Doodle className="absolute -top-8 -left-4 w-24 h-12 text-brand-500/50 transform -rotate-12 hidden md:block" />
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 relative z-10 tracking-tight">
                    Hear From Our Beloved Student
                </h2>
                <Doodle className="absolute -bottom-8 -right-4 w-24 h-12 text-brand-500/50 transform rotate-180 hidden md:block" />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-14 h-14 rounded-full object-cover ring-4 ring-brand-50"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg leading-tight">{item.name}</h4>
                  <p className="text-xs text-gray-500 mb-1.5 font-medium">{item.location}</p>
                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <PiStarFill key={i} className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-[15px] font-medium opacity-90">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
