import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PiMagnifyingGlassBold,
  PiListBold,
  PiXBold,
  PiGraduationCapDuotone,
  PiGlobeHemisphereWestFill,
  PiUsersFill,
  PiArrowRightBold,
  PiCheckCircleFill,
  PiSparkleFill,
  PiSparkleDuotone,
  PiBookOpenTextDuotone,
  PiFilesDuotone,
  PiShareNetworkDuotone,
  PiTrophyDuotone,
  PiChatCircleTextFill
} from 'react-icons/pi';
import { Button } from './components/ui/Button';
import { Marquee } from './components/Marquee';
import { AIFeaturesShowcase } from './components/AIFeaturesShowcase';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';

// --- Types ---
interface Stat {
  label: string;
  value: string;
}

const stats: Stat[] = [
  { label: "Universities", value: "500+" },
  { label: "Countries", value: "150+" },
  { label: "Success Rate", value: "98%" },
];

const destinations = [
  { country: "United States", desc: "Over 200+ universities", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800" },
  { country: "United Kingdom", desc: "World's leading universities", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800" },
  { country: "Canada", desc: "Top educational opportunities", img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=800" },
  { country: "Australia", desc: "World-class education", img: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=800" },
  { country: "Germany", desc: "Excellence in education", img: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&q=80&w=800" },
  { country: "UAE", desc: "Modern educational hub", img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWFlfGVufDB8fDB8fHww" },
];

const features = [
  { title: "Smart Scholarship Matching", desc: "AI-powered matching system that connects you with scholarships perfectly.", icon: PiSparkleDuotone },
  { title: "Expert Admissions Guidance", desc: "Get personalized support from education experts who have helped thousands.", icon: PiGraduationCapDuotone },
  { title: "End-to-End Support", desc: "From document preparation to visa guidance — comprehensive services.", icon: PiFilesDuotone },
  { title: "Global Network Access", desc: "Connect with universities and opportunities across 50+ countries.", icon: PiShareNetworkDuotone },
  { title: "Success Stories", desc: "Join thousands of successful students who have achieved their dreams.", icon: PiTrophyDuotone },
  { title: "Premium Resources", desc: "Access exclusive scholarship databases and application templates.", icon: PiBookOpenTextDuotone },
];

// --- Navbar Component ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white font-bold shadow-[0_4px_0_0_#5b21b6]">G</div>
          <span className="font-bold text-xl tracking-tight text-gray-900">GlobalStudyRoad</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors">Study</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors">Services</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors">Resources</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm font-bold text-gray-900 hover:text-brand-600">Log In</a>
          <Button size="sm">Get Started</Button>
        </div>

        <button className="md:hidden text-gray-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <PiXBold size={24} /> : <PiListBold size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-4">
              <a href="#" className="text-base font-medium text-gray-600">Study</a>
              <a href="#" className="text-base font-medium text-gray-600">Services</a>
              <a href="#" className="text-base font-medium text-gray-600">Resources</a>
              <div className="h-px bg-gray-100 my-2"></div>
              <a href="#" className="text-base font-medium text-gray-900">Log In</a>
              <Button className="w-full">Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Hero Component ---
const Hero = () => {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden bg-white">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 z-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6"
            >
              Your Gateway to{' '}
              <span className="text-brand-600">Global Education</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed"
            >
              Discover thousands of study abroad programs, connect with top universities, and transform your future with AI-powered personalized guidance.
            </motion.p>

            {/* Primary Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="secondary">Learn More</Button>
            </motion.div>

            {/* Students Count with Avatars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="flex -space-x-3">
                {[11, 12, 13, 14].map(i => (
                  <img
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                    src={`https://i.pravatar.cc/100?img=${i}`}
                    alt="Student"
                  />
                ))}
              </div>
              <div>
                <p className="font-bold text-gray-900">5.1K+</p>
                <p className="text-sm text-gray-500">Students all over the world</p>
              </div>
            </motion.div>

            {/* Secondary Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <button className="px-5 py-2.5 rounded-full border-2 border-gray-200 text-sm font-semibold text-gray-700 hover:border-brand-300 hover:text-brand-600 transition-colors">
                Book Free Consultation
              </button>
              <button className="px-5 py-2.5 rounded-full border-2 border-gray-200 text-sm font-semibold text-gray-700 hover:border-brand-300 hover:text-brand-600 transition-colors">
                See Success Stories
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex gap-8 lg:gap-12"
            >
              <div className="border-l-4 border-brand-500 pl-4">
                <p className="text-3xl lg:text-4xl font-bold text-gray-900">6,409</p>
                <p className="text-sm text-gray-500 font-medium">Success Stories</p>
              </div>
              <div className="border-l-4 border-brand-300 pl-4">
                <p className="text-3xl lg:text-4xl font-bold text-gray-900">54,749</p>
                <p className="text-sm text-gray-500 font-medium">Hours of Guidance</p>
              </div>
              <div className="border-l-4 border-brand-200 pl-4">
                <p className="text-3xl lg:text-4xl font-bold text-gray-900">124</p>
                <p className="text-sm text-gray-500 font-medium">Expert Consultants</p>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Image with Blob */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="order-1 lg:order-2 relative flex justify-center"
          >
            {/* Decorative Blob Shape */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                viewBox="0 0 500 500"
                className="w-full h-full text-brand-200"
                fill="currentColor"
              >
                <path d="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99.5,339Q40,271,62.5,196Q85,121,156,78Q227,35,309.5,60Q392,85,432,152.5Q472,220,440.5,320.5Z" />
              </svg>
            </div>

            {/* Hero Image - Replace this path with your image */}
            {/* IMAGE PATH: /images/hero-student.png */}
            <img
              src="/images/hero-student.png"
              alt="Student achieving their dreams"
              className="relative z-10 w-full max-w-lg lg:max-w-xl object-contain drop-shadow-2xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// --- Features Section ---
const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why choose us</h2>
          <p className="text-lg text-gray-600">
            Discover what makes us the preferred choice. We combine expert guidance, AI precision, and a proven process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(124,58,237,0.1)] transition-all duration-300"
            >
              <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Destinations Section ---
const PopularDestinations = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
            <p className="text-lg text-gray-600">Explore the world's best study destinations and discover opportunities that match your career goals.</p>
          </div>
          <Button variant="secondary" className="hidden md:flex">View all places</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg cursor-pointer transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity opacity-70 group-hover:opacity-90"></div>
              <img src={dest.img} alt={dest.country} className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700" />

              <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                <h3 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
                  {dest.country}
                </h3>
                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 leading-relaxed">
                  {dest.desc}
                </p>
                <div className="mt-6 w-10 h-10 rounded-full bg-white text-brand-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all delay-100 translate-y-4 group-hover:translate-y-0 shadow-lg">
                  <PiArrowRightBold size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Expert Guidance CTA ---
const ExpertGuidance = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl shadow-brand-900/20">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-700 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-500 rounded-full blur-3xl opacity-30"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-brand-800 text-brand-200 text-sm font-semibold mb-6 border border-brand-700">
                Expert Guidance
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Unlock Your Academic Future</h2>
              <p className="text-brand-100 text-lg mb-8 leading-relaxed">
                Transform your study abroad dreams into reality with our personalized consultation. Our experts have guided 10,000+ students to success.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "100% Free: No hidden charges",
                  "24hr Response: Quick expert feedback",
                  "98% Success: Proven track record",
                  "Certified Experts: Industry professionals"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/90 text-sm font-medium">
                    <PiCheckCircleFill size={20} className="text-brand-400" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-brand-900 border-white shadow-[0_4px_0_0_#4c1d95] hover:bg-gray-50 hover:shadow-[0_4px_0_0_#3b0764]">Book Your Free Consultation</Button>
                <Button size="lg" variant="outline" className="border-brand-500 text-white shadow-[0_4px_0_0_#4c1d95] hover:bg-brand-800 hover:text-white hover:border-brand-400">Learn More</Button>
              </div>
            </div>

            <div className="relative lg:h-full min-h-[400px]">
              <div className="relative w-full h-full bg-white/10 backdrop-blur-sm rounded-3xl border border-white/10 p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <img src="https://i.pravatar.cc/150?img=32" alt="Expert" className="w-16 h-16 rounded-full border-2 border-brand-400 shadow-lg" />
                  <div>
                    <h4 className="text-white font-bold text-lg">Dr. Sarah Wilson</h4>
                    <p className="text-brand-200 text-sm">Senior Education Consultant</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-3 w-3/4 bg-white/20 rounded-full"></div>
                  <div className="h-3 w-1/2 bg-white/20 rounded-full"></div>
                  <div className="h-32 w-full bg-white/5 rounded-2xl border border-white/10 mt-6 p-5">
                    <div className="flex items-center gap-2 text-brand-200 mb-3 font-medium">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      Status: Reviewing Application
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed">"Your profile for MIT looks strong. Let's tweak the SOP to highlight your research experience more effectively..."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Newsletter Section ---
const Newsletter = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Community</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Unlock your global potential. Join thousands of students receiving the latest scholarship opportunities and success stories.
        </p>

        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-5 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all font-medium"
          />
          <Button>Subscribe</Button>
        </form>
        <p className="text-xs text-gray-400 mt-4">We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white font-bold shadow-[0_4px_0_0_#5b21b6]">G</div>
              <span className="font-bold text-xl text-gray-900">GlobalStudyRoad</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Empowering students worldwide to access world-class education and transform their futures through personalized guidance.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Programs</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-brand-600 transition-colors">Undergraduate</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Master's</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">PhD</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Diplomas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Destinations</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-brand-600 transition-colors">United States</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">United Kingdom</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Canada</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Australia</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-brand-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2025 GlobalStudyRoad. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-brand-600 transition-colors"><PiGlobeHemisphereWestFill size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-brand-600 transition-colors"><PiUsersFill size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Qubit Chat Widget ---
const QubitWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-80 md:w-96 mb-4 overflow-hidden"
          >
            <div className="bg-brand-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <PiSparkleFill size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Qubit Assistant</h4>
                  <p className="text-brand-200 text-xs flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                <PiXBold size={18} />
              </button>
            </div>
            <div className="p-4 h-64 bg-gray-50 flex flex-col justify-end">
              <div className="bg-white p-3 rounded-tr-xl rounded-tl-xl rounded-br-xl shadow-sm text-sm text-gray-700 max-w-[90%] mb-2 border border-gray-100">
                Hello! 👋 I'm Qubit AI. How can I help you find your dream university today?
              </div>
              <p className="text-center text-xs text-gray-400 mt-2">Qubit AI is here! ✨</p>
            </div>
            <div className="p-3 border-t border-gray-100 bg-white">
              <input
                type="text"
                placeholder="Ask anything..."
                className="w-full px-4 py-2 bg-gray-50 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 border border-gray-100"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="h-14 w-14 rounded-2xl bg-brand-600 text-white shadow-[0_4px_0_0_#5b21b6] flex items-center justify-center hover:bg-brand-700 transition-colors active:shadow-none active:translate-y-1"
      >
        {isOpen ? <PiXBold size={24} /> : <PiChatCircleTextFill size={28} />}
      </motion.button>
    </div>
  );
};

// --- Main App ---
const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-brand-100 selection:text-brand-900">
      <Navbar />
      <Hero />
      <Marquee />
      <AIFeaturesShowcase />
      <WhyChooseUs />
      <PopularDestinations />
      <ExpertGuidance />
      <Testimonials />
      <FAQSection />
      <Newsletter />
      <Footer />
      <QubitWidget />
    </div>
  );
};

export default App;