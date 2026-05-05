import React, { useState, useRef, useEffect } from 'react';
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
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring, useInView } from 'motion/react';

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
  <div className="bg-gold h-10 flex items-center overflow-hidden whitespace-nowrap z-[100] relative">
    <motion.div
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="flex gap-16 items-center px-4"
    >
      {Array(10).fill(null).map((_, i) => (
        <span key={i} className="text-[11px] font-bold text-navy-dark uppercase tracking-widest flex items-center gap-4">
          🏆 India's #1 NDT Training Institute • 100% Placement Guarantee • Admissions Open for May 2024 Batch
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
        isScrolled ? 'top-0 py-4' : 'py-8'
      }`}
    >
      <div className={`max-w-7xl mx-auto flex items-center justify-between rounded-full p-2 px-8 transition-all duration-500 ${
        isScrolled ? 'glass-card bg-navy-dark/90 shadow-2xl py-3' : 'bg-transparent'
      }`}>
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center font-display font-extrabold text-navy-dark text-lg shadow-lg group-hover:rotate-6 transition-transform">
            WW<br/>NDT
          </div>
          <div className="hidden sm:block">
            <span className="text-xl font-bold tracking-tighter block leading-none">WORLD WIDE</span>
            <span className="text-[10px] uppercase font-black tracking-widest text-gold">NDT Institute</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {['Home', 'Courses', 'Why Us', 'Placement', 'FAQ'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="px-5 py-2 text-[13px] font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest relative group"
            >
              {item}
              <span className="absolute bottom-0 left-5 right-5 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:+917290095961" className="hidden lg:flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-gold transition-colors">
            <Phone className="w-4 h-4 text-gold" /> +91 72900 95961
          </a>
          <a href="#admission" className="btn-primary py-3 px-8 rounded-full gold-gradient text-navy-dark font-bold text-sm shadow-xl shadow-gold/20 hover:scale-105 active:scale-95 transition-all">
            Apply Now
          </a>
        </div>
      </div>
    </motion.header>
  );
};

// --- Hero Section ---
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-40 overflow-hidden">
      {/* Background elements moved to global index.css body background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-[-10%] w-[600px] h-[600px] bg-steel/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-navy [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-10 backdrop-blur-md">
              <div className="w-2 h-2 bg-gold rounded-full animate-pulse shadow-[0_0_10px_#C8A45A]" />
              <span className="text-[10px] font-bold text-gold uppercase tracking-[0.2em]">Admissions Open — Batch Starting Soon</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.95] tracking-tight shrink-0">
               Launch Your <br />
               <span className="gold-text">NDT & QA/QC</span> <br />
               Industry Career
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed mb-12 max-w-xl opacity-80">
              India's most trusted Non-Destructive Testing training institute. Get certified, get placed—with expert instructors and 100% job guarantee.
            </p>

            <div className="flex flex-wrap gap-6 items-center mb-16">
              <motion.a 
                href="#admission"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="gold-gradient text-navy-dark px-10 py-5 rounded-full font-bold text-lg shadow-2xl shadow-gold/30 flex items-center gap-3"
              >
                Enroll Now • Free Counselling <ChevronRight className="w-5 h-5" />
              </motion.a>
              <a href="#courses" className="flex items-center gap-3 text-white font-bold group">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all">
                  <Play className="w-4 h-4 fill-current text-white group-hover:text-gold" />
                </div>
                Browse Courses
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 pt-12 border-t border-white/10">
              {[
                { n: "10K+", l: "Trained" },
                { n: "100%", l: "Placement" },
                { n: "50+", l: "Awards" },
                { n: "15+", l: "Years" }
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-3xl font-display font-black text-gold mb-1">{s.n}</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative glass-card bg-navy-mid/60 p-10 rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.5)] border-white/5 relative z-10">
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl animate-pulse" />
              
              <div className="flex items-center gap-4 mb-10 bg-gold/10 border border-gold/20 p-4 rounded-2xl">
                 <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-navy-dark" />
                 </div>
                 <div>
                    <div className="text-sm font-bold text-gold">100% Placement Guaranteed</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Global Network Partner</div>
                 </div>
              </div>

              <div className="space-y-4 mb-10">
                {[
                  { name: "NDT Level II Course", meta: "45 Days • Lab Training", price: "₹35K" },
                  { name: "QA/QC Specialization", meta: "30 Days • Certified", price: "₹35K" },
                  { name: "Fire & Safety Expert", meta: "3 Months • Field Prac", price: "₹45K" }
                ].map((c, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all group border border-white/5 hover:border-gold/30">
                    <div>
                      <div className="text-sm font-bold mb-1 group-hover:text-gold transition-colors">{c.name}</div>
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{c.meta}</div>
                    </div>
                    <div className="text-md font-display font-black text-gold">{c.price}</div>
                  </div>
                ))}
              </div>

              <button className="w-full py-5 rounded-2xl gold-gradient text-navy-dark font-extrabold text-lg shadow-xl shadow-gold/20 hover:scale-105 transition-transform">
                 Claim Your Scholarship
              </button>
            </div>

            {/* Floating Float Cards */}
            <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-12 -left-12 glass-card p-6 rounded-2xl z-20 shadow-2xl"
            >
               <div className="text-[10px] text-slate-500 font-bold uppercase mb-2">Google Rating</div>
               <div className="flex items-center gap-3">
                  <div className="text-2xl font-black text-gold">4.9</div>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-gold text-gold" />)}
                  </div>
               </div>
            </motion.div>

            <motion.div 
               animate={{ y: [0, 15, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute -bottom-10 -right-10 glass-card p-6 rounded-2xl z-20 shadow-2xl"
            >
               <div className="text-[10px] text-slate-500 font-bold uppercase mb-2">Global Alumni</div>
               <div className="text-2xl font-black text-gold">10K+</div>
               <div className="flex -space-x-3 mt-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-navy-mid bg-slate-700" />
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-navy-mid bg-navy-mid flex items-center justify-center text-[8px] font-black">+4K</div>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Trust Logos ---
const TrustStrip = () => (
  <div className="py-20 border-y border-white/5 bg-navy-mid/50 relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center text-[11px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-12">
        Approved & Recognized By Global Authorities
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-12 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
        {['ASNT', 'ISO 9001', 'QCI', 'NABL', 'SKILL INDIA', 'MSME', 'TWI'].map(brand => (
          <div key={brand} className="text-2xl font-display font-bold whitespace-nowrap">{brand}</div>
        ))}
      </div>
    </div>
  </div>
);

// --- Course Card ---
const CourseCard = ({ icon: Icon, title, desc, price, duration, type, accentColor = "gold" }: any) => (
  <motion.div 
     whileHover={{ y: -10 }}
     className="glass-card bg-navy-mid/40 p-10 rounded-[2.5rem] border-white/5 group hover:border-gold/30 transition-all duration-500 flex flex-col h-full overflow-hidden relative"
  >
    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
       <Icon className="w-32 h-32" />
    </div>
    
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-${accentColor}/10 border border-${accentColor}/20`}>
      <Icon className={`w-7 h-7 text-${accentColor}`} />
    </div>
    
    <div className="flex gap-1 mb-4">
      {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-gold text-gold" />)}
    </div>
    
    <h3 className="text-2xl font-bold mb-4 group-hover:text-gold transition-colors">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">{desc}</p>
    
    <div className="flex items-center gap-4 mb-8">
      <div className="bg-white/5 px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
        <Clock className="w-3 h-3 text-gold" /> {duration}
      </div>
      <div className="bg-white/5 px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
        <Zap className="w-3 h-3 text-gold" /> {type}
      </div>
    </div>

    <div className="pt-8 border-t border-white/5 flex items-center justify-between">
      <div>
        <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest font-mono">Full Certification</div>
        <div className="text-2xl font-mono font-black text-gold tracking-tight">₹{price}</div>
      </div>
      <a href="#admission" className="w-12 h-12 rounded-full glass-card border-white/20 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-all duration-300">
        <ChevronRight className="w-5 h-5" />
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
                  className="w-20 h-20 gold-gradient rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
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
    <div className="relative min-h-screen bg-navy selection:bg-gold selection:text-navy-dark technical-grid">
      <motion.div className="fixed top-0 left-0 right-0 h-1 gold-gradient origin-left z-[999]" style={{ scaleX }} />
      
      <TopTicker />
      <Navbar />

      <Hero />
      
      <TrustStrip />

      {/* 4. Courses Section */}
      <section id="courses" className="py-40 relative">
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
              accentColor="steel"
            />
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section id="why-us" className="py-40 bg-navy-mid/40">
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
                           className="h-full gold-gradient rounded-full" 
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
      </section>

      {/* 6. Placement Guarantee Section */}
      <section id="placement" className="py-40 relative">
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
      </section>

      {/* 8. Voices of Success (Carousel) */}
      <section className="py-40 bg-navy-mid/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <SectionLabel>Voices of Success</SectionLabel>
            <SectionTitle accent="Stories">Student</SectionTitle>
            <p className="section-sub mx-auto">Real stories from our students who made it from the classroom to international sites.</p>
          </div>
          <VideoCarousel />
        </div>
      </section>

      {/* 9. Faculty Section */}
      <section id="instructors" className="py-40">
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
                   <div className="w-24 h-24 rounded-full gold-gradient flex items-center justify-center font-display font-black text-3xl text-navy-dark mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-transform">
                      {m.i}
                   </div>
                   <h4 className="text-xl font-bold mb-2 tracking-tight">{m.n}</h4>
                   <div className="text-gold text-[10px] font-bold uppercase tracking-widest mb-4">{m.r}</div>
                   <div className="bg-white/5 py-2 rounded-xl text-[10px] font-bold text-slate-500 uppercase tracking-widest border border-white/5">{m.c}</div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 11. FAQ Section */}
      <section id="faq" className="py-40 bg-navy-mid/40">
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
      </section>

      {/* 12. Admission Section */}
      <section id="admission" className="py-40 relative">
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
                        <div className="w-14 h-14 rounded-full gold-gradient text-navy-dark flex items-center justify-center font-display font-black text-xl shrink-0 shadow-lg relative z-10">
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
                   <button className="w-full py-5 rounded-2xl gold-gradient text-navy-dark font-extrabold text-lg shadow-xl shadow-gold/20 hover:scale-[1.02] active:scale-[0.98] transition-all mt-4">
                      Submit Application
                   </button>
                   <p className="text-center text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-6">
                      🔒 Your data is secure with ISO standard systems
                   </p>
                </form>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-6 mb-40">
        <motion.div 
           whileHover={{ scale: 1.01 }}
           className="gold-gradient p-1 bg-white rounded-[4rem] group"
        >
           <div className="bg-navy-dark rounded-[3.8rem] p-16 lg:p-24 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000" />
              <div className="relative z-10 max-w-xl text-center md:text-left">
                 <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">Final Countdown <br /> <span className="gold-text">Join The Best</span></h2>
                 <p className="text-slate-400 text-lg">Stop just searching. Start achieving. Connect with our advisors and map your 5-year career growth today.</p>
              </div>
              <div className="flex flex-col gap-4 relative z-10">
                 <a href="#admission" className="gold-gradient text-navy-dark px-12 py-5 rounded-full font-bold text-xl text-center shadow-2xl hover:scale-105 transition-transform">Get Started Today</a>
                 <div className="flex items-center gap-6 justify-center">
                    <div className="flex -space-x-3">
                       {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-navy-dark bg-slate-700" />)}
                    </div>
                    <span className="text-xs font-bold text-slate-400">Join 100+ Enrolled This Week</span>
                 </div>
              </div>
           </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-navy-dark pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
        {/* Accents */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
             <div className="lg:col-span-1">
                <a href="#" className="flex items-center gap-3 mb-10 group">
                  <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center font-display font-extrabold text-navy-dark text-md shadow-lg group-hover:rotate-6 transition-transform">
                    WW<br/>NDT
                  </div>
                  <div>
                    <span className="text-lg font-bold tracking-tighter block leading-none">WORLD WIDE</span>
                    <span className="text-[8px] uppercase font-black tracking-widest text-gold text-center">NDT Institute</span>
                  </div>
                </a>
                <p className="text-slate-500 text-sm leading-relaxed mb-10 max-w-xs">India's premier institute for NDT training and industrial safety. Setting global benchmarks in certification excellence.</p>
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
                     <li key={l}><a href="#" className="text-sm font-bold text-slate-400 hover:text-white transition-colors">{l}</a></li>
                   ))}
                </ul>
             </div>

             <div className="space-y-8">
                <h5 className="text-[11px] font-black uppercase tracking-[0.3em] text-gold">Company</h5>
                <ul className="space-y-4">
                   {["About Our Institute", "Meet The Faculty", "Placement Track", "Success Stories", "Scholarship Docs"].map(l => (
                     <li key={l}><a href="#" className="text-sm font-bold text-slate-400 hover:text-white transition-colors">{l}</a></li>
                   ))}
                </ul>
             </div>

             <div className="space-y-8">
                <h5 className="text-[11px] font-black uppercase tracking-[0.3em] text-gold">Headquarters</h5>
                <ul className="space-y-5">
                   <li className="flex gap-4 items-start">
                      <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                      <span className="text-sm text-slate-400 font-medium">Global Plaza Complex, <br /> Sector 135, Noida, UP • India</span>
                   </li>
                   <li className="flex gap-4 items-center">
                      <Phone className="w-5 h-5 text-gold shrink-0" />
                      <span className="text-sm text-slate-400 font-bold">+91 72900 95961</span>
                   </li>
                   <li className="flex gap-4 items-center">
                      <Mail className="w-5 h-5 text-gold shrink-0" />
                      <span className="text-sm text-slate-400 font-bold">info@ndtis.in</span>
                   </li>
                </ul>
             </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
             <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">© 2024 WORLD WIDE NDT INSTITUTE & SERVICES • ALL RIGHTS RESERVED</p>
             <div className="flex gap-10">
                {["Privacy", "Liability", "Standards"].map(l => (
                  <a key={l} href="#" className="text-[10px] font-bold text-slate-600 uppercase tracking-widest hover:text-gold transition-colors">{l}</a>
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

