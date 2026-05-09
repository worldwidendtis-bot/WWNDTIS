import React, { useState, useRef, useEffect, useMemo } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  CheckCircle2, 
  Users, 
  Award, 
  Clock, 
  ChevronRight, 
  ChevronDown, 
  Play, 
  ShieldCheck, 
  Globe2, 
  HardHat, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Search,
  BookOpen,
  Zap,
  Target,
  Trophy,
  Microscope,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring, useInView, useMotionValue } from 'motion/react';

// --- Custom Cursor ---
const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 200 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest('a, button, .cursor-pointer'));
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [cursorX, cursorY, dotX, dotY]);

  return (
    <>
      <motion.div 
        className="custom-cursor bg-white/5 backdrop-blur-sm"
        animate={{ 
          scale: isHovering ? 2.5 : 1,
          borderColor: isHovering ? 'rgba(249, 178, 51, 0.5)' : 'rgba(249, 178, 51, 1)'
        }}
        style={{ left: springX, top: springY }}
      />
      <motion.div 
        className="cursor-dot"
        animate={{ scale: isHovering ? 0 : 1 }}
        style={{ left: dotX, top: dotY }}
      />
    </>
  );
};

// --- Kinetic Text ---
const KineticText = ({ text, className }: { text: string, className?: string }) => {
  const words = text.split(' ');
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    hidden: {
      opacity: 0,
      y: '100%',
    },
  };

  return (
    <motion.h1 
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {words.map((word, i) => (
        <span key={i} className="reveal-mask mr-[0.2em]">
          <motion.span variants={child} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
};

// --- Global UI Components ---

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-4">
    <div className="w-8 h-[1px] bg-gold" />
    <span className="text-[11px] font-bold text-gold uppercase tracking-[0.2em]">{children}</span>
  </div>
);

const SectionTitle = ({ children, accent }: { children: React.ReactNode, accent?: string }) => (
  <h2 className="text-4xl md:text-6xl font-black mb-6 leading-[1.1] tracking-tighter">
    {children} {accent && <span className="gold-text">{accent}</span>}
  </h2>
);

const SectionSub = ({ children }: { children: React.ReactNode }) => (
  <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-12">
    {children}
  </p>
);

// --- Ticker ---
const TopTicker = () => (
  <div className="bg-navy-light border-b border-white/5 h-10 flex items-center overflow-hidden whitespace-nowrap z-[100] relative">
    <motion.div
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      className="flex gap-20 items-center px-4"
    >
      {Array(10).fill(null).map((_, i) => (
        <span key={i} className="text-[10px] font-black text-white uppercase tracking-[0.4em] flex items-center gap-6">
          <span className="w-1.5 h-1.5 bg-gold rounded-full shadow-[0_0_10px_rgba(249,178,51,0.6)]" />
          India's #1 NDT Training Institute • 100% Placement Guarantee • Admissions Open for May 2024 Batch
        </span>
      ))}
    </motion.div>
  </div>
);

// --- Navbar ---
const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (latest) => setIsScrolled(latest > 80));
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-10 left-0 right-0 z-50 transition-all duration-500 px-6 sm:px-12 ${
        isScrolled ? 'top-0 py-3' : 'py-6'
      }`}
    >
      <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 px-6 ${
        isScrolled 
          ? 'glass-card bg-navy-light/95 shadow-premium py-3 rounded-2xl border-white/10' 
          : 'bg-navy-mid/30 border border-white/5 py-4 rounded-3xl backdrop-blur-sm'
      }`}>
        <a href="#" className="flex items-center group">
          <div className="w-10 h-10 bg-gold-gradient rounded-lg flex items-center justify-center font-display font-black text-navy-dark text-[10px] shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            WW<br/>NDT
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-2">
          {['Home', 'Courses', 'Why Us', 'Placement'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="px-4 py-2 text-[10px] font-black text-white/80 hover:text-gold transition-colors uppercase tracking-[0.3em] relative group"
            >
              {item}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gold group-hover:w-4 transition-all" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <a href="#admission" className="text-[10px] font-black uppercase tracking-[0.3em] text-gold border-b border-gold/30 hover:border-gold pb-1 transition-all">
            Join The Academy
          </a>
        </div>
      </div>
    </motion.header>
  );
};

// --- Hero Section ---
const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative min-h-[98vh] flex items-center pt-32 pb-40 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-navy-light/10 rounded-full blur-[160px] opacity-20" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-gold/5 rounded-full blur-[160px] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 bg-white/[0.03] border border-white/10 px-4 py-2 rounded-full mb-12 backdrop-blur-2xl">
              <div className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse shadow-[0_0_12px_#F9B233]" />
              <span className="text-[9px] font-black text-white/50 uppercase tracking-[0.4em]">Excellence in Engineering Education</span>
            </div>
            
            <KineticText 
              text="Forging Next-Gen Engineering Leaders"
              className="text-6xl md:text-[8.5vw] font-black mb-14 leading-[0.82] tracking-[-0.065em] shrink-0"
            />
            
            <div className="grid md:grid-cols-2 gap-16 items-end">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.5, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-lg md:text-xl text-slate-300 leading-tight max-w-sm font-medium tracking-tight"
              >
                India's high-precision NDT training ecosystem. Bridging the gap between classroom theory and global industrial mastery since 2011.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="flex flex-wrap gap-8 items-center"
              >
                <a 
                  href="#admission"
                  className="group relative bg-gold-gradient text-navy-dark px-14 py-6 rounded-full font-black text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-gold/20"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Start Your Path <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
                  </span>
                </a>
                <a href="#courses" className="text-white/40 hover:text-white font-black text-[10px] uppercase tracking-[0.3em] transition-all flex items-center gap-4">
                  Explore Specialties <ChevronDown className="w-4 h-4 animate-bounce" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20"
      >
        <span className="text-[9px] font-black uppercase tracking-[0.4em]">Scroll to Discover</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </motion.section>
  );
};

// --- Trust Logos ---
const TrustStrip = () => (
  <div className="py-24 border-y border-white/5 bg-navy-mid/10 relative overflow-hidden">
    <div className="absolute inset-0 technical-grid opacity-20" />
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center text-[9px] font-black text-white/30 uppercase tracking-[0.4em] mb-16">
        Authorized & Accredited By
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-12 opacity-20 hover:opacity-100 transition-all duration-1000">
        {['ASNT', 'ISO 9001', 'QCI', 'NABL', 'MSME', 'TWI'].map(brand => (
          <div key={brand} className="text-xl md:text-2xl font-display font-black whitespace-nowrap tracking-tighter">{brand}</div>
        ))}
      </div>
    </div>
  </div>
);

// --- Course Card ---
const CourseCard = ({ icon: Icon, title, desc, price, duration, type }: any) => (
  <motion.div 
     whileHover={{ y: -10 }}
     className="glass-card bg-navy-mid/20 p-10 rounded-[2.5rem] border-white/5 group hover:border-gold/30 transition-all duration-500 flex flex-col h-full overflow-hidden relative"
  >
    <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.07] transition-all duration-700 group-hover:scale-110 group-hover:rotate-12">
       <Icon className="w-40 h-40" />
    </div>
    
    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 bg-gold/5 border border-gold/10 group-hover:border-gold/30 transition-all">
      <Icon className="w-8 h-8 text-gold" />
    </div>
    
    <div className="flex gap-1 mb-6">
      {[1,2,3,4,5].map(s => <Star key={s} className="w-2.5 h-2.5 fill-gold text-gold" />)}
    </div>
    
    <h3 className="text-2xl md:text-3xl font-black mb-4 group-hover:text-gold transition-colors leading-tight tracking-tight">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed mb-10 flex-grow opacity-60 group-hover:opacity-100 transition-opacity font-medium">{desc}</p>
    
    <div className="flex flex-wrap gap-4 mb-10">
      <div className="bg-white/5 px-5 py-2 rounded-xl border border-white/5 text-[9px] font-black text-white/40 uppercase tracking-[0.2em] flex items-center gap-3">
        <Clock className="w-3 h-3 text-gold" /> {duration}
      </div>
      <div className="bg-white/5 px-5 py-2 rounded-xl border border-white/5 text-[9px] font-black text-white/40 uppercase tracking-[0.2em] flex items-center gap-3">
        <Zap className="w-3 h-3 text-gold" /> {type}
      </div>
    </div>

    <div className="pt-10 border-t border-white/5 flex items-center justify-between">
      <div>
        <div className="text-[9px] text-white/20 font-black uppercase tracking-[0.3em] mb-1">Tuition Fee</div>
        <div className="text-3xl font-mono font-black text-gold tracking-tighter">₹{price}</div>
      </div>
      <a href="#admission" className="w-14 h-14 rounded-2xl glass-card border-white/5 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-all duration-300 shadow-xl">
        <ChevronRight className="w-6 h-6" />
      </a>
    </div>
  </motion.div>
);

// --- Video Carousel ---
const VideoCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setMaxScroll(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const amount = 500;
      const newScroll = direction === 'left' 
        ? Math.max(0, scrollAmount - amount)
        : Math.min(maxScroll, scrollAmount + amount);
      
      setScrollAmount(newScroll);
      containerRef.current.scrollTo({ left: newScroll, behavior: 'smooth' });
    }
  };

  const testimonials = [
    { id: 1, name: "Mohammed Afzal", role: "Lead Inspector • Saudi Aramco", company: "Grade II Inspector", image: "https://images.unsplash.com/photo-1544717297-fa154da09f9d?auto=format&fit=crop&q=80&w=800" },
    { id: 2, name: "Rahul S.", role: "QA/QC Manager • ADNOC", company: "Welding Specialist", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" },
    { id: 3, name: "Arjun Prem", role: "NDT Specialist • Reliance", company: "Offshore Inspector", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
    { id: 4, name: "Kevin V.", role: "Safety Lead • Petrofac", company: "HSE Specialist", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800" },
    { id: 5, name: "Sameer N.", role: "NDT Level II • Shell", company: "Phased Array Expert", image: "https://images.unsplash.com/photo-1519085184581-b851b174ed10?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="relative group">
      <div 
        ref={containerRef}
        className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-12 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonials.map((test) => (
          <motion.div 
            key={test.id}
            className="min-w-[320px] md:min-w-[480px] snap-center relative"
            whileHover={{ y: -10 }}
          >
            <div className="aspect-video bg-navy-mid rounded-[3rem] overflow-hidden border border-white/5 relative shadow-2xl transition-all duration-500 hover:border-gold/30">
              <img 
                src={test.image} 
                className="w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-20" 
                alt={test.name} 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 bg-gold-gradient rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
                >
                  <Play className="w-8 h-8 text-navy-dark fill-current translate-x-1" />
                </motion.div>
              </div>
              <div className="absolute top-8 left-8">
                 <div className="glass-card bg-navy-dark/60 px-5 py-2 rounded-full border-white/10">
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">Alumni Talk</span>
                 </div>
              </div>
            </div>
            <div className="mt-10 px-4">
              <h4 className="text-white font-extrabold text-2xl mb-2 tracking-tight">{test.name}</h4>
              <div className="text-gold text-xs font-bold uppercase tracking-widest mb-1">{test.role}</div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">{test.company}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute -bottom-4 right-4 flex gap-4">
        <button 
          onClick={() => scroll('left')}
          className="w-14 h-14 rounded-full glass-card flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-all border-white/10"
        >
          <ChevronRight className="w-6 h-6 rotate-180" />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="w-14 h-14 rounded-full glass-card flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-all border-white/10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

// --- FAQ Item ---
const FAQItem = ({ q, a }: { q: string, a: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-white/5 rounded-2xl overflow-hidden glass-card bg-navy-mid/20 transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 px-8 text-left hover:bg-gold/5 transition-colors"
      >
        <span className="text-lg font-bold tracking-tight">{q}</span>
        <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-45 bg-gold/10 border-gold/30 text-gold' : ''}`}>
          <ChevronRight className="w-5 h-5" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-8 pt-0 text-slate-400 leading-relaxed text-md font-medium border-t border-white/5">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---
export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="relative min-h-screen bg-navy-dark selection:bg-gold selection:text-navy-dark technical-grid font-sans overflow-x-hidden">
      <div className="premium-grain" />
      <CustomCursor />
      
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gold-gradient origin-left z-[999]" style={{ scaleX }} />
      
      <TopTicker />
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <TrustStrip />
      </motion.div>

      {/* 4. Courses Section */}
      <motion.section 
        id="courses" 
        className="py-40 relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24">
            <div>
              <SectionLabel>Our Programs</SectionLabel>
              <SectionTitle accent="Courses">Industry-Leading</SectionTitle>
              <SectionSub>Comprehensive training designed by industry veterans. Get certified and job-ready in 45 days.</SectionSub>
            </div>
            <a href="#admission" className="glass-card px-8 py-3 rounded-full text-sm font-bold border-white/10 hover:border-gold/30 transition-all mb-12 md:mb-0">
               View All Programs →
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <CourseCard 
              icon={Microscope}
              title="NDT Level II Course"
              desc="Master ultrasonic, radiographic, magnetic particle, and liquid penetrant testing methods."
              price="35,000"
              duration="45 Days"
              type="Professional"
            />
            <CourseCard 
              icon={ShieldCheck}
              title="QA/QC Course"
              desc="Quality assurance for civil, mechanical, and welding projects globally."
              price="35,000"
              duration="30 Days"
              type="Certified"
            />
            <CourseCard 
              icon={HardHat}
              title="Fire & Safety"
              desc="International industrial safety standards for hazardous oil & gas environments."
              price="45,000"
              duration="3 Months"
              type="Safety Specialist"
            />
          </div>
        </div>
      </motion.section>

      {/* 5. Why Choose Us */}
      <motion.section 
        id="why-us" 
        className="py-40 bg-navy-mid/40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <div className="relative">
                <div className="aspect-square glass-card bg-navy-light/60 rounded-[3rem] p-12 flex flex-col justify-center gap-8 relative z-10">
                   <div className="grid grid-cols-2 gap-8">
                     {[
                       { n: "10K+", l: "Students Trained" },
                       { n: "100%", l: "Placement Rate" },
                       { n: "50+", l: "Industry Partners" },
                       { n: "15+", l: "Years Excellence" }
                     ].map((s, i) => (
                       <div key={i} className="glass-card p-8 rounded-3xl border-white/5 relative overflow-hidden group">
                          <div className="text-4xl font-black text-gold mb-2">{s.n}</div>
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{s.l}</div>
                          <div className="absolute bottom-0 left-0 h-1 w-0 bg-gold transition-all group-hover:w-full" />
                       </div>
                     ))}
                   </div>
                   
                   <div className="space-y-4">
                      <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-500">
                        <span>Success Rate</span>
                        <span className="text-gold">98%</span>
                      </div>
                      <div className="h-3 bg-white/5 rounded-full overflow-hidden p-0.5">
                        <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: '98%' }}
                           transition={{ duration: 1.5, delay: 0.5 }}
                           className="h-full bg-gold-gradient rounded-full" 
                        />
                      </div>
                   </div>
                </div>
                {/* Visual accents */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
             </div>
             
             <div>
                <SectionLabel>Why Choose Us</SectionLabel>
                <SectionTitle accent="Trusted">India's Most</SectionTitle>
                <SectionSub>We don't just teach — we transform careers. Our track record speaks for itself with global success stories.</SectionSub>
                
                <div className="space-y-8 mt-12">
                   {[
                     { i:Zap, t: "Expert Industry Faculty", d: "Learn from veterans with 15+ years of real-world Gulf and domestic experience." },
                     { i:Microscope, t: "World-Class Labs", d: "Hands-on training with actual industrial UT/RT equipment in every session." },
                     { i:Target, t: "Global Network", d: "Direct recruitment links with MNCs in UAE, Saudi Arabia, and Europe." }
                   ].map((f, i) => (
                     <div key={i} className="flex gap-6 group">
                        <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                           <f.i className="w-7 h-7 text-gold" />
                        </div>
                        <div>
                           <h4 className="text-xl font-bold mb-2 tracking-tight group-hover:text-gold transition-colors">{f.t}</h4>
                           <p className="text-slate-400 text-sm leading-relaxed">{f.d}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </motion.section>

      {/* 6. Placement Guarantee Section */}
      <motion.section 
        id="placement" 
        className="py-40 relative"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
         <div className="max-w-5xl mx-auto px-6">
            <motion.div 
               whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
               className="glass-card bg-navy-mid p-16 rounded-[4rem] text-center relative overflow-hidden backdrop-blur-3xl border-gold/10"
            >
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-gold/10 rounded-full blur-[80px]" />
               
               <div className="text-6xl md:text-9xl font-black text-gold mb-4 leading-none tracking-tighter">100%</div>
               <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">Placement Guarantee</h2>
               <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12">We guarantee 100% job placement for all certified graduates. If you don't secure a role, we re-train you at no extra cost until you are hired.</p>
               
               <div className="flex flex-wrap gap-8 justify-center items-center opacity-30">
                  {["Aramco", "L&T", "ONGC", "Reliance", "ADNOC", "Petronas"].map(b => (
                    <span key={b} className="text-2xl font-display font-bold">{b}</span>
                  ))}
               </div>
            </motion.div>
         </div>
      </motion.section>

      {/* 8. Voices of Success (Carousel) */}
      <motion.section 
        className="py-40 bg-navy-mid/40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <SectionLabel>Voices of Success</SectionLabel>
            <SectionTitle accent="Stories">Student</SectionTitle>
            <p className="section-sub mx-auto">Real stories from our students who made it from the classroom to international sites.</p>
          </div>
          <VideoCarousel />
        </div>
      </motion.section>

      {/* 9. Faculty Section */}
      <motion.section 
        id="instructors" 
        className="py-40"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-24">
              <SectionLabel>Our Faculty</SectionLabel>
              <SectionTitle accent="Experts">Learn From</SectionTitle>
           </div>
           
           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { n: "Feroz Alam", r: "Lead Trainer", c: "15+ Yrs Exp", i: "FA" },
                { n: "Tabrej Alam", r: "Senior Expert", c: "12+ Yrs Exp", i: "TA" },
                { n: "MD Javed", r: "NDT Specialist", c: "10+ Yrs Exp", i: "MJ" },
                { n: "Deepak Kumar", r: "Tech Lead", c: "Certified Level III", i: "DK" }
              ].map((m, i) => (
                <motion.div key={i} whileHover={{ y: -8 }} className="glass-card p-10 rounded-[2.5rem] text-center group border-white/5 hover:border-gold/30 transition-all">
                   <div className="w-24 h-24 rounded-full bg-gold-gradient flex items-center justify-center font-display font-black text-3xl text-navy-dark mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-transform">
                      {m.i}
                   </div>
                   <h4 className="text-xl font-bold mb-2 tracking-tight">{m.n}</h4>
                   <div className="text-gold text-[10px] font-bold uppercase tracking-widest mb-4">{m.r}</div>
                   <div className="bg-white/5 py-2 rounded-xl text-[10px] font-bold text-slate-500 uppercase tracking-widest border border-white/5">{m.c}</div>
                </motion.div>
              ))}
           </div>
        </div>
      </motion.section>

      {/* 11. FAQ Section */}
      <motion.section 
        id="faq" 
        className="py-40 bg-navy-mid/40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto px-6">
           <div className="text-center mb-24">
              <SectionLabel>Support</SectionLabel>
              <SectionTitle accent="Questions">Common</SectionTitle>
           </div>
           
           <div className="space-y-4">
              <FAQItem q="What is the average salary after NDT certification?" a="Certified Level II professionals starting in India typically earn ₹40K-₹70K, while Gulf rotations offer ₹1.5L to ₹3L monthly depending on the specific inspection field." />
              <FAQItem q="Is it mandatory to have an engineering degree?" a="No. While B.Tech/Diploma is preferred, technical school graduates with field mindset can excel. Industry certifications often outweigh academic degrees in the Gulf." />
              <FAQItem q="Are the certificates valid internationally?" a="Absolutely. We train according to ASNT and ISO standards, making our certificates valid and respected in UAE, Saudi Arabia, Europe, and beyond." />
              <FAQItem q="Do you provide hostel facilities for outstation students?" a="Yes, we assist outstation students with premium, safe, and hygienic accommodation options near our Noida facility." />
           </div>
        </div>
      </motion.section>

      {/* 12. Admission Section */}
      <motion.section 
        id="admission" 
        className="py-40 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <div>
                <SectionLabel>Admission Process</SectionLabel>
                <SectionTitle accent="Journey">Start Your</SectionTitle>
                <SectionSub>Get from classroom to site in 3 simple steps. Our team handles your documentation and placement prep.</SectionSub>
                
                <div className="space-y-12 mt-12 relative">
                   <div className="absolute left-[27px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-gold via-gold/20 to-transparent" />
                   {[
                     { n: "01", t: "Free Counselling", d: "Consult with our experts to pick the right path for your career goals." },
                     { n: "02", t: "Hands-on Training", d: "Experience intensive lab and theory sessions with actual equipment." },
                     { n: "03", t: "Global Hired", d: "Crack interviews with our dedicated recruitment team support." }
                   ].map((s, i) => (
                     <div key={i} className="flex gap-10 relative">
                        <div className="w-14 h-14 rounded-full bg-gold-gradient text-navy-dark flex items-center justify-center font-display font-black text-xl shrink-0 shadow-lg relative z-10">
                           {s.n}
                        </div>
                        <div>
                           <h4 className="text-xl font-bold mb-2 tracking-tight">{s.t}</h4>
                           <p className="text-slate-500 text-sm">{s.d}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
             
             <div className="glass-card bg-navy-mid/60 p-12 rounded-[3.5rem] border-white/10 shadow-3xl">
                <h3 className="text-3xl font-bold mb-2 tracking-tight">Apply Online</h3>
                <p className="text-slate-500 text-sm mb-10">Limited seats for the upcoming batch. Apply today.</p>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                   <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-2">Full Name</label>
                         <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-gold outline-none text-sm transition-all" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-2">Phone</label>
                         <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-gold outline-none text-sm transition-all" placeholder="+91" />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-2">Interested Course</label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-gold outline-none text-sm transition-all appearance-none cursor-pointer">
                         <option className="bg-navy-dark">NDT Level II Course</option>
                         <option className="bg-navy-dark">QA/QC Course</option>
                         <option className="bg-navy-dark">Fire & Safety</option>
                      </select>
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-2">Message (Optional)</label>
                      <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-gold outline-none text-sm transition-all h-32 resize-none" placeholder="Write your query..." />
                   </div>
                   <button className="w-full py-5 rounded-2xl bg-gold-gradient text-navy-dark font-extrabold text-lg shadow-xl shadow-gold/20 hover:scale-[1.02] active:scale-[0.98] transition-all mt-4">
                      Submit Application
                   </button>
                   <p className="text-center text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-6">
                      🔒 Your data is secure with ISO standard systems
                   </p>
                </form>
             </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Banner */}
      <motion.div 
        className="max-w-7xl mx-auto px-6 mb-40"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div 
           whileHover={{ scale: 1.01 }}
           className="bg-gold-gradient p-1 bg-white rounded-[4rem] group"
        >
           <div className="bg-navy-dark rounded-[3.8rem] p-16 lg:p-24 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000" />
              <div className="relative z-10 max-w-xl text-center md:text-left">
                 <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">Final Countdown <br /> <span className="gold-text">Join The Best</span></h2>
                 <p className="text-slate-400 text-lg">Stop just searching. Start achieving. Connect with our advisors and map your 5-year career growth today.</p>
              </div>
              <div className="flex flex-col gap-4 relative z-10">
                 <a href="#admission" className="bg-gold-gradient text-navy-dark px-12 py-5 rounded-full font-bold text-xl text-center shadow-2xl hover:scale-105 transition-transform">Get Started Today</a>
                 <div className="flex items-center gap-6 justify-center">
                    <div className="flex -space-x-3">
                       {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-navy-dark bg-slate-700" />)}
                    </div>
                    <span className="text-xs font-bold text-slate-400">Join 100+ Enrolled This Week</span>
                 </div>
              </div>
           </div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-navy-dark pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
        {/* Accents */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
             <div className="lg:col-span-1">
                <a href="#" className="flex items-center mb-10 group">
                  <div className="w-12 h-12 bg-gold-gradient rounded-xl flex items-center justify-center font-display font-black text-navy-dark text-[10px] shadow-lg group-hover:scale-110 transition-transform">
                    WW<br/>NDT
                  </div>
                </a>
                <p className="text-slate-300 text-sm leading-relaxed mb-10 max-w-xs opacity-80">India's premier institute for NDT training and industrial safety. Setting global benchmarks since 2011.</p>
                <div className="flex gap-4">
                  {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-xl glass-card border-white/10 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
             </div>

             <div className="space-y-8">
                <h5 className="text-[11px] font-black uppercase tracking-[0.3em] text-gold">Programs</h5>
                <ul className="space-y-4">
                   {["NDT Level II Certification", "QA/QC Civil Engineer", "Radiographic Inspection", "MT & PT Masterclass", "NDT Combo Pack"].map(l => (
                     <li key={l}><a href="#" className="text-sm font-bold text-slate-300 hover:text-white transition-colors">{l}</a></li>
                   ))}
                </ul>
             </div>

             <div className="space-y-8">
                <h5 className="text-[11px] font-black uppercase tracking-[0.3em] text-gold">Company</h5>
                <ul className="space-y-4">
                   {["About Our Institute", "Meet The Faculty", "Placement Track", "Success Stories", "Scholarship Docs"].map(l => (
                     <li key={l}><a href="#" className="text-sm font-bold text-slate-300 hover:text-white transition-colors">{l}</a></li>
                   ))}
                </ul>
             </div>

             <div className="space-y-8">
                <h5 className="text-[11px] font-black uppercase tracking-[0.3em] text-gold">Headquarters</h5>
                <ul className="space-y-5">
                   <li className="flex gap-4 items-start">
                      <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                      <span className="text-sm text-slate-300 font-medium">Global Plaza Complex, <br /> Sector 135, Noida, UP • India</span>
                   </li>
                   <li className="flex gap-4 items-center">
                      <Phone className="w-5 h-5 text-gold shrink-0" />
                      <span className="text-sm text-slate-300 font-bold">+91 72900 95961</span>
                   </li>
                   <li className="flex gap-4 items-center">
                      <Mail className="w-5 h-5 text-gold shrink-0" />
                      <span className="text-sm text-slate-300 font-bold">info@ndtis.in</span>
                   </li>
                </ul>
             </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">© 2024 WORLD WIDE NDT INSTITUTE & SERVICES • ALL RIGHTS RESERVED</p>
             <div className="flex gap-10">
                {["Privacy", "Liability", "Standards"].map(l => (
                  <a key={l} href="#" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-gold transition-colors">{l}</a>
                ))}
             </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Static Action */}
      <motion.a 
        href="https://wa.me/917290095961"
        target="_blank"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-10 right-10 z-[100] w-16 h-16 bg-[#25D366] rounded-full shadow-[0_12px_48px_rgba(37,211,102,0.4)] flex items-center justify-center text-white"
      >
        <MessageCircle size={32} />
      </motion.a>
    </div>
  );
}

