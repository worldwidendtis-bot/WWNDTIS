import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileBadge,
  Flame,
  Globe2,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wrench,
} from 'lucide-react';
import wwndtLogo from './assets/wwndt-logo.png';
import heroRecognition from './assets/hero-recognition.jpeg';

const outcomes = [
  'NDT Level II Certification',
  'QA/QC Interview Preparation',
  'Gulf Job Readiness',
  'Hands-on Equipment Practice',
];

const schedule = [
  { icon: CalendarDays, label: 'Batch Starts', value: 'May 2026' },
  { icon: Clock3, label: 'Training Mode', value: 'Live + Practical' },
  { icon: FileBadge, label: 'Certificate', value: 'Industry Aligned' },
  { icon: Users, label: 'Seats', value: 'Limited Intake' },
];

const modules = [
  {
    icon: ShieldCheck,
    title: 'Ultrasonic Testing',
    text: 'Learn inspection workflow, flaw detection, calibration, and report writing with real equipment.',
  },
  {
    icon: Sparkles,
    title: 'Magnetic Particle Testing',
    text: 'Practice surface defect detection used across fabrication, oil and gas, and maintenance sites.',
  },
  {
    icon: Wrench,
    title: 'Penetrant Testing',
    text: 'Build confidence with consumables, indications, procedures, and acceptance standards.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'QA/QC Career Prep',
    text: 'Get resume support, mock interviews, site vocabulary, and practical job-readiness guidance.',
  },
];

const bonuses = [
  'Resume and Gulf interview kit',
  'Inspection report templates',
  'WhatsApp doubt support',
];

const faqs = [
  {
    q: 'Is this course for freshers?',
    a: 'Yes. Freshers, diploma holders, engineers, and working technicians can join. The training starts with fundamentals and moves into practical inspection.',
  },
  {
    q: 'Do you provide placement support?',
    a: 'Yes. WWNDTIS supports students with interview preparation, hiring guidance, and job opportunity updates after certification.',
  },
  {
    q: 'Where is the institute located?',
    a: 'The institute is at Assotech Business Cresterra, Sector 135, Noida, Uttar Pradesh.',
  },
];

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="stat-tile">
    <strong>{value}</strong>
    <span>{label}</span>
  </div>
);

const CTAButton = ({ children, href = '#apply' }: { children: React.ReactNode; href?: string }) => (
  <a className="cta-button" href={href}>
    {children}
    <ArrowRight size={19} strokeWidth={2.6} />
  </a>
);

function App() {
  return (
    <main className="site-shell">
      <div className="top-alert">
        <span>Admissions open for May 2026 batch</span>
        <span>100% practical training</span>
        <span>Placement assistance included</span>
      </div>

      <header className="nav">
        <a href="#" className="brand" aria-label="World Wide NDT Institute">
          <img src={wwndtLogo} alt="World Wide NDT Institute logo" />
          <span>
            <strong>WWNDTIS</strong>
            <small>NDT Institute & Services</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#modules">Courses</a>
          <a href="#mentor">Mentor</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="nav-call" href="tel:+917290095961">
          <Phone size={16} />
          Call Now
        </a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <Flame size={16} />
            No prior NDT experience required
          </div>
          <h1>Become a certified NDT professional with practical training.</h1>
          <p>
            Learn industrial inspection, QA/QC documentation, and job-ready site skills from experienced trainers in Noida.
          </p>

          <div className="hero-actions">
            <CTAButton>Enroll Now</CTAButton>
            <a className="secondary-button" href="https://wa.me/917290095961" target="_blank" rel="noreferrer">
              <MessageCircle size={19} />
              WhatsApp Advisor
            </a>
          </div>

          <div className="outcome-list">
            {outcomes.map((item) => (
              <span key={item}>
                <CheckCircle2 size={18} />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-card">
          <img src={heroRecognition} alt="WWNDTIS student recognition ceremony" />
          <div className="hero-card-footer">
            <div>
              <small>Next live batch</small>
              <strong>May 2026</strong>
            </div>
            <div className="rating">
              <Star size={17} fill="currentColor" />
              4.8/5
            </div>
          </div>
        </div>
      </section>

      <section className="stats-band" aria-label="Institute highlights">
        <Stat value="10K+" label="students trained" />
        <Stat value="45 days" label="focused program" />
        <Stat value="100%" label="practical support" />
        <Stat value="India + Gulf" label="career guidance" />
      </section>

      <section className="section split">
        <div>
          <span className="section-kicker">Workshop Style Training</span>
          <h2>Everything you need to move from classroom to inspection site.</h2>
        </div>
        <div className="schedule-grid">
          {schedule.map(({ icon: Icon, label, value }) => (
            <div className="info-card" key={label}>
              <Icon size={24} />
              <small>{label}</small>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="modules">
        <div className="section-heading">
          <span className="section-kicker">What You Will Learn</span>
          <h2>NDT and QA/QC skills taught in a clear, job-focused format.</h2>
        </div>
        <div className="module-grid">
          {modules.map(({ icon: Icon, title, text }) => (
            <article className="module-card" key={title}>
              <div className="module-icon">
                <Icon size={25} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bonus-strip">
        <div>
          <span className="section-kicker">Register Before Midnight</span>
          <h2>Unlock student bonuses worth real career time.</h2>
        </div>
        <ul>
          {bonuses.map((bonus) => (
            <li key={bonus}>
              <Award size={18} />
              {bonus}
            </li>
          ))}
        </ul>
        <CTAButton>Reserve Seat</CTAButton>
      </section>

      <section className="section mentor" id="mentor">
        <div className="mentor-badge">
          <GraduationCap size={42} />
          <strong>Learn from industry trainers</strong>
          <span>Practical site experience, documentation discipline, and interview preparation in one program.</span>
        </div>
        <div>
          <span className="section-kicker">Why WWNDTIS</span>
          <h2>Training built for students who want a serious industrial career.</h2>
          <p>
            The page style follows the bold, direct Be10X workshop feel: high contrast, yellow action blocks, compact proof cards, and large readable typography. The content stays specific to WWNDTIS and NDT training.
          </p>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="section-heading">
          <span className="section-kicker">Questions</span>
          <h2>Quick answers before you enroll.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="apply" id="apply">
        <div>
          <span className="section-kicker">Final Step</span>
          <h2>Speak with an admission advisor today.</h2>
          <p>Share your background, choose the right NDT path, and confirm the next batch availability.</p>
        </div>
        <div className="contact-actions">
          <a href="tel:+917290095961">
            <Phone size={20} />
            +91 72900 95961
          </a>
          <a href="mailto:info@wwndtis.in">
            <Mail size={20} />
            info@wwndtis.in
          </a>
          <a href="https://maps.google.com/?q=Assotech%20Business%20Cresterra%20Sector%20135%20Noida" target="_blank" rel="noreferrer">
            <MapPin size={20} />
            Sector 135, Noida
          </a>
        </div>
      </section>

      <footer>
        <span>© 2026 World Wide NDT Institute & Services</span>
        <a href="https://wa.me/917290095961" target="_blank" rel="noreferrer">
          WhatsApp Support
        </a>
      </footer>
    </main>
  );
}

export default App;
