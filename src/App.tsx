import React, { useState, useRef, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Star, 
  CheckCircle2, 
  Users, 
  Handshake, 
  ChevronRight, 
  Clock, 
  GraduationCap, 
  Microscope, 
  Briefcase, 
  FileCheck,
  Play,
  ChevronDown,
  Navigation,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ShieldCheck,
  Award
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring, useInView } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (latest) => setIsScrolled(latest > 50));
  }, [scrollY]);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "circOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] border-b border-white/20' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center rotate-3 shadow-lg shadow-orange-500/20">
              <ShieldCheck className="text-white w-6 h-6" />
            </div>
            <span className={`text-2xl font-black tracking-tighter uppercase transition-colors duration-300 ${isScrolled ? 'text-[#00263f]' : 'text-white'}`}>
              World Wide NDT Institute
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Courses', 'Placement', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`text-sm font-bold transition-all duration-300 relative group ${
                  isScrolled ? 'text-slate-600' : 'text-white/80'
                } hover:text-orange-500`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full" />
              </a>
            ))}
            <button className="bg-orange-500 text-white px-7 py-3 rounded-xl text-sm font-black shadow-xl shadow-orange-500/30 hover:scale-105 active:scale-95 transition-all">
              GET CERTIFIED
            </button>
          </div>

          <div className="md:hidden">
            <button className={`p-2 transition-colors ${isScrolled ? 'text-slate-600' : 'text-white'}`}>
              <Navigation className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

const Card3D = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setRotateX(y * -15);
    setRotateY(x * 15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ perspective: "1000px" }}
      className={`relative group ${className}`}
    >
      <div className="transition-all duration-300 transform group-hover:scale-[1.02]">
        {children}
      </div>
    </motion.div>
  );
};

const CourseCard = ({ title, duration, description, isBestSeller, image, index }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
  >
    <Card3D className="h-full">
      <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,38,63,0.1)] overflow-hidden border border-slate-100 flex flex-col h-full ring-1 ring-slate-100/50">
        <div className="relative h-56 sm:h-64 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00263f]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {isBestSeller && (
            <span className="absolute top-4 left-4 bg-orange-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
              Bestseller
            </span>
          )}
        </div>
        <div className="p-8 flex flex-col flex-grow relative">
          <div className="absolute -top-10 right-8 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center rotate-6 border border-slate-50 transition-transform group-hover:rotate-12">
            <Award className="w-8 h-8 text-orange-500" />
          </div>
          <h3 className="text-2xl font-black text-[#00263f] mb-3 leading-tight">{title}</h3>
          <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">{description}</p>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-2 text-orange-600 font-black text-sm">
              <Clock className="w-4 h-4" />
              {duration}
            </div>
          </div>
          <button className="mt-8 w-full py-4 bg-[#F8FAFC] text-[#00263f] font-black rounded-2xl hover:bg-[#00263f] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-widest text-xs">
            Course Module <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Card3D>
  </motion.div>
);

const Feature = ({ icon: Icon, title, desc, index }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
      className="text-center group p-8 bg-white/50 backdrop-blur-sm rounded-[3rem] border border-white hover:bg-white hover:shadow-2xl hover:shadow-orange-200/20 transition-all duration-500"
    >
      <div className="w-20 h-20 bg-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-orange-500/20 rotate-3 group-hover:rotate-12 transition-transform duration-500">
        <Icon className="w-10 h-10 text-white" />
      </div>
      <h4 className="text-xl font-black text-[#00263f] mb-3 uppercase tracking-tighter">{title}</h4>
      <p className="text-sm text-slate-500 leading-relaxed font-medium">{desc}</p>
    </motion.div>
  );
};

const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-8 py-6 text-left flex justify-between items-center transition-all duration-300 rounded-[2rem] shadow-sm border ${
          isOpen ? 'bg-white border-orange-200 shadow-xl shadow-orange-100/50' : 'bg-white/60 border-slate-100 hover:bg-white'
        }`}
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-orange-600' : 'text-[#00263f]'}`}>{question}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-orange-500 text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0, y: -10 }}
            animate={{ height: 'auto', opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -10 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0 }}
            className="overflow-hidden"
          >
            <div className="px-10 py-8 text-slate-500 text-base leading-relaxed bg-white rounded-b-[2rem] -mt-4 pt-10 shadow-inner">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FloatCircle = ({ className = "", delay = 0 }: { className?: string, delay?: number }) => (
  <motion.div
    animate={{ 
      y: [0, -20, 0],
      rotate: [0, 15, 0],
      scale: [1, 1.05, 1]
    }}
    transition={{ 
      duration: 5, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut" 
    }}
    className={`absolute rounded-full pointer-events-none opacity-20 blur-3xl ${className}`}
  />
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="min-h-screen bg-[#FDFEFE] font-sans overflow-x-hidden selection:bg-orange-500 selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-orange-500 origin-left z-[60]" style={{ scaleX }} />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#001D35]">
        {/* Animated Background Elements */}
        <FloatCircle className="w-[600px] h-[600px] bg-orange-500 -top-40 -left-60" delay={0} />
        <FloatCircle className="w-[500px] h-[500px] bg-blue-400 -bottom-40 -right-40" delay={1} />
        <div className="absolute inset-0 bg-[#001D35] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-40 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "circOut" }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-12 h-[2px] bg-orange-500" />
                  <span className="text-orange-500 font-black tracking-[0.3em] uppercase text-xs">Industry Leader Since 2010</span>
                </div>
                <h1 className="text-5xl md:text-[5.5rem] font-black text-white leading-[0.9] mb-8 tracking-tighter drop-shadow-2xl">
                  LEVEL UP <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">INSPECTION</span> CAREERS
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed mb-12 max-w-xl font-medium opacity-80 italic">
                  Premium certification for the specialized world of Oil & Gas engineering. Validated globally. Built for excellence.
                </p>
                <div className="flex flex-wrap gap-6">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-orange-500 text-white px-12 py-5 rounded-[2rem] font-black text-lg shadow-2xl shadow-orange-500/30 flex items-center gap-3 transition-shadow hover:shadow-orange-500/50"
                  >
                    <Phone className="w-6 h-6" /> ADMISSIONS OPEN
                  </motion.button>
                  <motion.button 
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                    className="bg-white/10 text-white backdrop-blur-xl px-12 py-5 rounded-[2rem] font-black text-lg border border-white/20 flex items-center gap-3"
                  >
                    BROCHURE 2024
                  </motion.button>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 100, rotateY: 15 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
                className="relative"
              >
                {/* Decorative 3D Elements */}
                <motion.div 
                  animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-12 -right-8 w-24 h-24 bg-white/10 backdrop-blur-3xl rounded-3xl border border-white/20 z-20 flex items-center justify-center rotate-12"
                >
                  <Star className="text-orange-500 w-10 h-10 fill-orange-500" />
                </motion.div>

                <div className="bg-white/95 backdrop-blur-2xl p-10 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/50">
                  <div className="mb-10 text-center">
                    <h3 className="text-3xl font-black text-[#00263f] mb-2 tracking-tighter uppercase">Quick Access</h3>
                    <p className="text-slate-400 text-sm font-bold opacity-60">Join 10,000+ Alumni World Wide</p>
                  </div>
                  <form className="space-y-6">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black text-[#00263f] uppercase tracking-widest pl-4">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-orange-500 transition-all font-bold text-slate-800" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black text-[#00263f] uppercase tracking-widest pl-4">Contact Phone</label>
                      <input type="tel" placeholder="+91 99999 999" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-orange-500 transition-all font-bold text-slate-800" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black text-[#00263f] uppercase tracking-widest pl-4">Course Choice</label>
                      <div className="relative">
                        <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-orange-500 transition-all font-bold text-slate-800 appearance-none cursor-pointer">
                          <option>NDT Level 2 (Elite)</option>
                          <option>Radiographic Expert</option>
                          <option>Ultrasonic Specialist</option>
                        </select>
                        <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                      </div>
                    </div>
                    <button className="w-full bg-[#00263f] text-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl hover:bg-orange-500 transition-all group overflow-hidden relative">
                      <span className="relative z-10">Start Career Now</span>
                      <motion.div className="absolute inset-0 bg-orange-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Metrics with Floating Effect */}
      <section className="relative z-20 -mt-16 mb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white/80 backdrop-blur-3xl rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,38,63,0.1)] border border-white p-8 grid md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="flex flex-col items-center justify-center text-center p-4">
              <div className="text-4xl font-black text-orange-500 mb-1">4.8</div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Google Stars</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4">
              <div className="text-4xl font-black text-[#00263f] mb-1">ISO</div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Standard 9001</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4">
              <div className="text-4xl font-black text-[#00263f] mb-1">10k+</div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Certified</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4">
              <div className="text-4xl font-black text-[#00263f] mb-1">50+</div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Ties</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-black text-[#00263f] mb-6 tracking-tighter leading-none">
                PREMIUM <span className="text-orange-500">TRAINING</span> PATHS
              </h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                Unlock the most sought-after skillsets in the heavy industry. Our courses are optimized for rapid career advancement.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <CourseCard 
              index={0}
              image="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
              title="NDT LEVEL 2 COMBO"
              description="Master the core 4: Visual, Penetrant, Magnetic, and Ultrasonic inspection methods."
              duration="7 Weeks Professional"
              isBestSeller
            />
            <CourseCard 
              index={1}
              image="https://images.unsplash.com/photo-1531945086322-64e2ffae14a6?auto=format&fit=crop&q=80&w=800"
              title="ULTRASONIC ELITE"
              description="Learn phased-array and digital flaw detection for high-pressure industrial systems."
              duration="3 Weeks Intensive"
            />
            <CourseCard 
              index={2}
              image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
              title="X-RAY SPECIALIST"
              description="Become a certified radiographer. Full radiation safety and film interpretation mastery."
              duration="4 Weeks Expert"
            />
          </div>
        </div>
      </section>

      {/* Why Us with Grid Background */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#00263f 2px, transparent 2px)", backgroundSize: "40px 40px" }} />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 lg:grid-cols-4 gap-12">
            <Feature index={0} icon={GraduationCap} title="Field Vets" desc="Mentors with decades of experience in Kuwait, Saudi & Gulf projects." />
            <Feature index={1} icon={Microscope} title="Sim Labs" desc="Train on the exact equipment used in offshore rigs and refineries." />
            <Feature index={2} icon={Briefcase} title="Career Hub" desc="Exclusive hiring access to top tier EPC contractors globally." />
            <Feature index={3} icon={FileCheck} title="Govt Regs" desc="Certifications recognized by major world-wide safety boards." />
          </div>
        </div>
      </section>

      {/* Success Story / Spotlight */}
      <section className="py-40 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#00263f] rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden shadow-[0_60px_120px_-20px_rgba(0,38,63,0.4)]">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-500 skew-x-12 translate-x-1/2 opacity-10" />
            
            <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
              <div className="relative">
                <motion.div 
                  style={{ perspective: "2000px" }}
                  whileHover={{ rotateY: -10, rotateX: 5 }}
                  className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" 
                    alt="Success Story" 
                    className="w-full aspect-[4/5] object-cover"
                  />
                </motion.div>
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-10 -right-10 bg-orange-500 px-10 py-10 rounded-[3rem] text-white shadow-3xl text-center"
                >
                  <div className="text-5xl font-black mb-1 leading-none tracking-tighter">3x</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Salary Jump</div>
                </motion.div>
              </div>

              <div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-orange-500 font-black uppercase tracking-widest text-xs mb-8 block underline underline-offset-8">Alumni Spotlight</span>
                  <h2 className="text-5xl lg:text-7xl font-black mb-12 leading-[0.95] tracking-tighter">THE FASTEST ROUTE TO <span className="text-orange-500">EXPERT</span> STATUS</h2>
                  <div className="space-y-12">
                    <div className="relative pl-12 border-l-2 border-orange-500/50">
                      <p className="text-2xl font-medium italic text-slate-300 leading-relaxed mb-8">
                        "NDT Certify didn't just teach me the technicals; they taught me how to survive and thrive in international field teams. Within 2 years, I'm already leading a team in ADNOC."
                      </p>
                      <div>
                        <div className="text-2xl font-black tracking-tight">RAHUL SHARMA</div>
                        <div className="text-orange-500 font-bold text-sm tracking-widest uppercase">Senior Lead Inspector • Abu Dhabi</div>
                      </div>
                    </div>
                    <motion.button 
                      whileHover={{ x: 10 }}
                      className="bg-white text-[#00263f] px-12 py-5 rounded-[2rem] font-black text-lg flex items-center gap-4 group"
                    >
                      READ HIS FULL CASE STUDY <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ with Modern Accordion */}
      <section className="py-40 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-[#00263f] tracking-tighter mb-6 uppercase">Transparency Center</h2>
            <p className="text-slate-500 font-bold text-sm tracking-widest">EVERYTHING YOU NEED TO KNOW ABOUT CERTIFICATION</p>
          </div>
          
          <div className="space-y-4">
            <FAQItem 
              question="What are the basic eligibility requirements?" 
              answer="We look for candidates with a technical mindset. While an Engineering Diploma/Degree is preferred, we have specialized bridge courses for enthusiastic school graduates with industrial exposure."
            />
            <FAQItem 
              question="Is my certificate valid in the USA and Gulf?" 
              answer="Absolutely. All our training modules follow ASNT Level II standards (American Society for Non-destructive Testing), ensuring your qualification is accepted by every major oil field in the world."
            />
            <FAQItem 
              question="Do you help with visas and international jobs?" 
              answer="Yes, our Placement Cell works directly with staffing partners in UAE, Qatar, and Saudi Arabia to fast-track our high-performing alumni into open field roles."
            />
          </div>
        </div>
      </section>

      {/* Immersive CTA */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-[5rem] p-16 lg:p-32 text-center relative overflow-hidden shadow-[0_80px_100px_-30px_rgba(255,107,0,0.3)]"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
            <h2 className="text-6xl lg:text-[7rem] font-black text-white leading-[0.8] mb-16 tracking-tighter drop-shadow-lg">
              READY FOR THE <br /> <span className="opacity-40">BIG LEAGUE?</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="bg-white text-orange-600 px-16 py-7 rounded-[2.5rem] font-black text-xl shadow-3xl flex items-center justify-center gap-4"
              >
                <Phone className="w-7 h-7" /> TALK TO ADVISORS
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="bg-[#21C063] text-white px-16 py-7 rounded-[2.5rem] font-black text-xl shadow-3xl flex items-center justify-center gap-4"
              >
                <MessageCircle className="w-7 h-7" /> WHATSAPP CHAT
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Futuristic Footer */}
      <footer className="bg-[#001D35] text-white pt-40 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-white/20 to-orange-500" />
        
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-24 mb-32">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center shrink-0">
                  <ShieldCheck className="text-white w-5 h-5" />
                </div>
                <span className="text-2xl font-black tracking-tighter uppercase whitespace-nowrap">World Wide NDT Institute</span>
              </div>
              <p className="text-slate-400 font-medium leading-relaxed mb-10 text-base">
                Global precision certification center for Non-Destructive Testing. Validated by industry veterans for the next generation of engineers.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-orange-500 transition-all border border-white/10 hover:border-orange-400">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-orange-500 font-black uppercase tracking-widest text-xs mb-10">Certification Paths</h4>
              <ul className="space-y-5">
                {['NDT Level II Expert', 'Phased Array UT', 'Digital Radiography', 'Welding Inspection', 'Safety Audits'].map(link => (
                  <li key={link}><a href="#" className="text-slate-300 font-bold hover:text-white transition-colors flex items-center gap-3 group"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full group-hover:scale-150 transition-transform" /> {link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-orange-500 font-black uppercase tracking-widest text-xs mb-10">Global Access</h4>
              <ul className="space-y-5">
                {['Direct Hire Portal', 'Expatriate Visa Help', 'Alumni Network', 'Lab Facilities', 'Corporate Training'].map(link => (
                  <li key={link}><a href="#" className="text-slate-300 font-bold hover:text-white transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-orange-500 font-black uppercase tracking-widest text-xs mb-10">Headquarters</h4>
              <ul className="space-y-8">
                <li className="flex gap-4 items-start">
                  <MapPin className="w-6 h-6 text-white shrink-0 mt-1" />
                  <span className="text-slate-300 font-medium">Cyber Hub Tower II, Floor 14, <br /> NCR Region • India</span>
                </li>
                <li className="flex gap-4 items-center">
                  <Mail className="w-6 h-6 text-white shrink-0" />
                  <span className="text-slate-300 font-bold">global@ndtcertify.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-500 text-sm font-black uppercase tracking-widest">
              © {new Date().getFullYear()} World Wide NDT Institute  • PRECISION ENGINEERED
            </div>
            <div className="flex gap-8 text-slate-500 text-xs font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Safety Code</a>
              <a href="#" className="hover:text-white transition-colors">Liability</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

