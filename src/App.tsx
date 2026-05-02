/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
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
  Linkedin
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-black text-[#00263f] tracking-tighter uppercase">NDT CERTIFY</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Courses', 'Placement', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`text-sm font-semibold transition-colors duration-200 ${
                  item === 'Home' ? 'text-[#FF6B00] border-b-2 border-[#FF6B00]' : 'text-slate-600 hover:text-[#FF6B00]'
                }`}
              >
                {item}
              </a>
            ))}
            <button className="bg-[#FF6B00] text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-orange-200 hover:bg-orange-600 transition-all active:scale-95">
              Get Certified
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600">
              <Navigation className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const CourseCard = ({ title, duration, description, isBestSeller, image }: any) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100 flex flex-col"
  >
    <div className="relative h-48 sm:h-56">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      {isBestSeller && (
        <span className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
          Bestseller
        </span>
      )}
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-[#00263f] mb-2">{title}</h3>
      <p className="text-slate-500 text-sm mb-6 flex-grow">{description}</p>
      <div className="flex items-center gap-2 text-orange-600 text-sm font-bold mb-6">
        <Clock className="w-4 h-4" />
        {duration}
      </div>
      <button className="w-full py-3 border-2 border-slate-200 text-slate-800 font-bold rounded-xl hover:bg-[#00263f] hover:text-white hover:border-[#00263f] transition-all flex items-center justify-center gap-2">
        View Details <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  </motion.div>
);

const TrustMetric = ({ icon: Icon, label, subtext }: any) => (
  <div className="flex items-center gap-4 py-8 lg:py-0">
    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
      <Icon className="w-6 h-6 text-orange-500" />
    </div>
    <div>
      <div className="text-lg font-bold text-[#00263f]">{label}</div>
      <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">{subtext}</div>
    </div>
  </div>
);

const Feature = ({ icon: Icon, title, desc }: any) => (
  <div className="text-center group p-6">
    <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-8 h-8 text-orange-500" />
    </div>
    <h4 className="text-lg font-bold text-[#00263f] mb-2">{title}</h4>
    <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
  </div>
);

const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden mb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
      >
        <span className="font-bold text-[#00263f]">{question}</span>
        <ChevronDown className={`w-5 h-5 text-orange-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-2">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans selection:bg-orange-100 selection:text-orange-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#00263f]">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0b3c5d] -skew-x-12 translate-x-32 hidden lg:block opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-6">
                  Get NDT Level 2 Certified & <span className="text-orange-500">Start Your Career</span> in Oil & Gas
                </h1>
                <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-xl">
                  Master Non-Destructive Testing with industry-leading experts. Global standard certification designed for high-performance industrial careers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-[#FF6B00] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-orange-900/20 hover:scale-105 transition-transform flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" /> Call Now
                  </button>
                  <button className="bg-white/10 text-white backdrop-blur-md px-10 py-4 rounded-xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                    Free Counseling
                  </button>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-2xl relative"
              >
                <h3 className="text-2xl font-bold text-[#00263f] mb-6">Quick Enquiry</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">Full Name</label>
                    <input type="text" placeholder="Enter your name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">Phone Number</label>
                    <input type="tel" placeholder="+91 00000 00000" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">Preferred Course</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none appearance-none">
                      <option>NDT Level 2 (Combo)</option>
                      <option>Radiographic Testing</option>
                      <option>Ultrasonic Testing</option>
                    </select>
                  </div>
                  <button className="w-full bg-[#FF6B00] text-white py-4 rounded-xl font-black uppercase tracking-widest text-sm shadow-lg shadow-orange-200 hover:bg-orange-600 transition-all active:scale-95 mt-4">
                    Submit Enrollment
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <TrustMetric icon={Star} label="4.8 Rating" subtext="Google Reviews" />
            <TrustMetric icon={CheckCircle2} label="Certified Institute" subtext="ISO 9001:2015" />
            <TrustMetric icon={Users} label="1000+ Students" subtext="Successfully Certified" />
            <TrustMetric icon={Handshake} label="Industry Tie-ups" subtext="50+ Global Partners" />
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-orange-600 font-black uppercase tracking-widest text-xs mb-3 block">Top Certifications</span>
              <h2 className="text-4xl font-black text-[#00263f] mb-4">Our Popular Courses</h2>
              <div className="h-1.5 w-20 bg-orange-500 rounded-full" />
            </div>
            <button className="text-[#00263f] font-bold border-b-2 border-[#00263f] pb-1 hover:text-orange-500 hover:border-orange-500 transition-all">
              View All Modules
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <CourseCard 
              image="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
              title="NDT Level 2 (Combo)"
              description="Complete package covering VT, PT, MT, and UT methods for comprehensive industrial inspection skills."
              duration="45 Days Duration"
              isBestSeller
            />
            <CourseCard 
              image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
              title="Radiographic Testing"
              description="Specialized training in RT film interpretation and radiation safety protocols for pipeline testing."
              duration="20 Days Duration"
            />
            <CourseCard 
              image="https://images.unsplash.com/photo-1531945086322-64e2ffae14a6?auto=format&fit=crop&q=80&w=800"
              title="Ultrasonic Testing"
              description="Master advanced UT techniques for flaw detection and thickness gauging in high-pressure vessels."
              duration="15 Days Duration"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#F0F7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#00263f] mb-4">Why Choose NDT Certify?</h2>
            <p className="text-slate-500">Built by industry veterans for the next generation of inspectors.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <Feature icon={GraduationCap} title="Expert Faculty" desc="Train under inspectors with 20+ years of global field experience." />
            <Feature icon={Microscope} title="Modern Labs" desc="Hands-on experience with the latest NDT equipment and software." />
            <Feature icon={Briefcase} title="100% Placement" desc="Dedicated cell connecting you to top MNCs in Oil & Gas." />
            <Feature icon={FileCheck} title="Govt. Certified" desc="Globally recognized certifications valid in Gulf and Europe." />
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-50 rounded-full mix-blend-multiply" />
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" 
                  alt="Success Story" 
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute bottom-6 right-6 bg-orange-500 p-6 rounded-2xl text-white shadow-xl">
                  <div className="text-3xl font-black">250%</div>
                  <div className="text-[10px] uppercase font-black tracking-widest opacity-80">Avg. Salary Hike</div>
                </div>
              </div>
            </div>
            
            <div>
              <span className="text-orange-600 font-black uppercase tracking-widest text-xs mb-4 block">Student Spotlight</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#00263f] mb-8 leading-tight">From Trainee to Senior Inspector in 18 Months</h2>
              <div className="relative pl-8 border-l-4 border-orange-500 mb-10">
                <p className="text-xl italic text-slate-600 leading-relaxed mb-6">
                  "The hands-on training at NDT Certify was a game changer. I transitioned from a general mechanical background to a specialized RT Inspector role at a leading oil refinery. The certification opened doors globally."
                </p>
                <div>
                  <div className="font-black text-[#00263f]">Rahul Sharma</div>
                  <div className="text-sm font-bold text-slate-400">Senior NDT Inspector, ADNOC Group</div>
                </div>
              </div>
              <button className="bg-[#00263f] text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
                Read More Stories
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-[#00263f] text-center mb-16">What Our Trainees Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative aspect-video rounded-3xl overflow-hidden shadow-xl shadow-slate-100">
                <img 
                  src={`https://images.unsplash.com/photo-1507537330574-c38a35c485f8?auto=format&fit=crop&q=80&w=800&sig=${i}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt="Testimonial"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white fill-current" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="text-white font-bold">{i === 1 ? 'Practical Training' : i === 2 ? 'My Journey' : 'Placement Success'}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#F0F7FF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-[#00263f] text-center mb-16">Frequently Asked Questions</h2>
          <FAQItem 
            question="What are the eligibility criteria for NDT Level 2?" 
            answer="Candidates should ideally have a Diploma or Degree in Mechanical, Production, or Civil engineering. However, high school graduates with relevant industrial experience can also apply after a foundational assessment."
          />
          <FAQItem 
            question="Is the certification valid internationally?" 
            answer="Yes, NDT Certify provides certifications that comply with ASNT and SNT-TC-1A standards, which are recognized across the Gulf, Europe, and Asia."
          />
          <FAQItem 
            question="Do you provide hostel facilities?" 
            answer="We offer fully-furnished hostel accommodations for outstation students near our training facility in Noida."
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-500 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-orange-200">
            {/* Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <h2 className="text-4xl md:text-5xl font-black text-white mb-12 max-w-4xl mx-auto leading-tight">
              Ready to Start Your Career in Industrial Inspection?
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-orange-600 px-12 py-5 rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-3">
                <Phone className="w-6 h-6" /> Talk to Experts
              </button>
              <button className="bg-[#25D366] text-white px-12 py-5 rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-3">
                <MessageCircle className="w-6 h-6" /> WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#00263f] pt-24 pb-12 text-white border-t-8 border-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1">
              <span className="text-2xl font-black mb-6 block tracking-tighter uppercase">NDT CERTIFY</span>
              <p className="text-slate-400 leading-relaxed mb-8">
                Premier institute for Non-Destructive Testing and industrial safety certifications. Shaping careers for the global oil & gas sector since 2010.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-orange-500 transition-colors">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-black mb-8 uppercase tracking-widest text-xs opacity-50">Popular Courses</h4>
              <ul className="space-y-4 font-bold text-slate-300">
                {['NDT Level 2 Combo', 'Radiographic Testing', 'Ultrasonic Testing', 'Magnetic Particle', 'Dye Penetrant'].map(link => (
                  <li key={link}><a href="#" className="hover:text-orange-500 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-black mb-8 uppercase tracking-widest text-xs opacity-50">Quick Links</h4>
              <ul className="space-y-4 font-bold text-slate-300">
                {['Success Portal', 'Job Board', 'Safety Standards', 'Privacy Policy', 'Terms of Service'].map(link => (
                  <li key={link}><a href="#" className="hover:text-orange-500 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-black mb-8 uppercase tracking-widest text-xs opacity-50">Contact Us</h4>
              <ul className="space-y-6 text-slate-300">
                <li className="flex gap-4">
                  <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>12th Floor, Industrial Hub, Sector 62, Noida, India</span>
                </li>
                <li className="flex gap-4">
                  <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>+91 99999 88888</span>
                </li>
                <li className="flex gap-4">
                  <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>admissions@ndtcertify.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 text-center text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} NDT Certify. Industrial Precision. Safety First. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
