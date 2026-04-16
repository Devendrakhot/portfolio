import { useEffect, useRef, useState } from 'react';
import {
  Github, Linkedin, Mail, Phone, MapPin, Download,
  ExternalLink, ArrowUpRight, Terminal, Code2, Database,
  Cloud, Wrench, Layers, ChevronRight
} from 'lucide-react';

/* ─── Visitor tracking ─── */
function trackVisitor() {
  try {
    fetch('https://visitor-jbk2.onrender.com/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page: window.location.href, referrer: document.referrer }),
    }).catch(() => {});
  } catch {}
}

/* ─── IntersectionObserver reveal ─── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.rv, .rvl');
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); }),
      { threshold: 0.12 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── Data ─── */
const SKILLS = [
  {
    label: 'Frontend', icon: <Layers size={13} />,
    pills: ['JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'HTML / CSS', 'Shopify Liquid'],
  },
  {
    label: 'Backend', icon: <Terminal size={13} />,
    pills: ['Node.js', 'Express.js', 'Python', 'Strapi CMS'],
  },
  {
    label: 'Database', icon: <Database size={13} />,
    pills: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    label: 'Cloud & DevOps', icon: <Cloud size={13} />,
    pills: ['AWS', 'Docker', 'Git', 'GitHub Actions'],
  },
  {
    label: 'AI & Tools', icon: <Wrench size={13} />,
    pills: ['Claude', 'Cursor', 'VS Code', 'Postman'],
  },
];

const EXPERIENCE = [
  {
    role: 'Jr. Software Developer',
    company: 'Central Chinmaya Mission Trust (CCMT)',
    period: 'Dec 2024 – Present',
    location: 'Mumbai, India',
    bullets: [
      'Built Everlink — a multi-tenant SaaS platform for URL shortening, QR code generation, vCard profiles, and analytics dashboard',
      'Developed custom Strapi CMS components for the Chinmaya Mission website serving 350+ global centres',
      'Built and deployed a Shopify E-Shop with Shiprocket API integration for the mission\'s e-commerce operations',
      'Authored database migration scripts and integrated AWS services (S3, SES, EC2) into production workflows',
    ],
  },
  {
    role: 'Software Trainer & IT Admin',
    company: 'Sky Infonet Computer Education',
    period: 'Feb 2022 – Dec 2024',
    location: 'Mumbai, India',
    bullets: [
      'Trained 60+ students in programming fundamentals, web development, and office productivity tools',
      'Managed 3 computer labs with 60+ devices — network configuration, hardware maintenance, OS provisioning',
      'Designed structured curriculum covering HTML/CSS, JavaScript, and basic database concepts',
    ],
  },
];

const PROJECTS = [
  {
    name: 'Everlink',
    tagline: 'Multi-tenant URL Shortener & QR Platform',
    desc: 'SaaS product built at CCMT. Supports custom short links, QR code generation, vCard profiles, and a real-time analytics dashboard — all with per-tenant isolation.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL', 'AWS'],
    featured: true,
  },
  {
    name: 'CCMT POS Platform',
    tagline: 'Multi-Center Book Store POS',
    desc: 'Full-stack point-of-sale system for Chinmaya Mission book stores across India. Barcode scanning, Cash & UPI payment flows, inventory management, and AWS SES receipt emails.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS SES', 'Barcode'],
    featured: true,
  },
  {
    name: 'Chinmaya Mission Website',
    tagline: '350+ Global Centres — Dynamic CMS',
    desc: 'Large-scale multilingual website for one of India\'s largest spiritual organisations, serving 350+ centres worldwide. Custom Strapi CMS components powering all content.',
    tags: ['Strapi CMS', 'React', 'Node.js', 'PostgreSQL'],
    link: 'https://www.chinmayamission.com/',
  },
  {
    name: 'Chinmaya Mission E-Shop',
    tagline: 'Shopify + Shiprocket Commerce',
    desc: 'Shopify store with custom Liquid theme development and Shiprocket API integration for automated order fulfilment and real-time shipment tracking.',
    tags: ['Shopify Liquid', 'Shiprocket API', 'JavaScript'],
  },
  {
    name: 'Job Skill Pro',
    tagline: 'React Course Platform with Chatbot',
    desc: 'Static course-catalogue site built with React, featuring an integrated AI chatbot to guide learners through course selection.',
    tags: ['React', 'JavaScript', 'Chatbot'],
    link: 'https://jspor.netlify.app/',
  },
  {
    name: 'Let the Heart Sing',
    tagline: 'Audiobook Streaming Platform',
    desc: 'Performance-focused audiobook web app with chapter navigation, audio player, and Lighthouse scores above 90 across all categories.',
    tags: ['React', 'Web Audio API', 'Tailwind'],
  },
];

const CERTS = [
  { title: 'Azure Fundamentals (AZ-900)', issuer: 'Microsoft', year: '2024' },
  { title: 'Docker for Beginners', issuer: 'Udemy', year: '2024' },
  { title: 'Introduction to Big Data', issuer: 'Coursera', year: '2023' },
  { title: 'Prompt Design in Vertex AI', issuer: 'Google', year: '2024' },
];

const NAV_LINKS = ['About', 'Skills', 'Experience', 'Projects', 'Certifications'];

const MARQUEE_SKILLS = [
  'JavaScript', 'TypeScript', 'React', 'Node.js', 'Express.js', 'PostgreSQL',
  'MongoDB', 'AWS', 'Docker', 'Tailwind CSS', 'Strapi CMS', 'Shopify Liquid',
  'Python', 'Git', 'GitHub Actions', 'Claude AI', 'Cursor',
];

/* ─── Custom Cursor ─── */
function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const rpos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => { pos.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener('mousemove', onMove);

    let raf: number;
    const loop = () => {
      rpos.current.x += (pos.current.x - rpos.current.x) * 0.14;
      rpos.current.y += (pos.current.y - rpos.current.y) * 0.14;
      if (dot.current) {
        dot.current.style.left = pos.current.x + 'px';
        dot.current.style.top = pos.current.y + 'px';
      }
      if (ring.current) {
        ring.current.style.left = rpos.current.x + 'px';
        ring.current.style.top = rpos.current.y + 'px';
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div id="c-dot" ref={dot} />
      <div id="c-ring" ref={ring} />
    </>
  );
}

/* ─── Navbar ─── */
function Navbar() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`nav ${stuck ? 'stuck' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a
          href="#"
          className="font-mono text-sm tracking-widest"
          style={{ color: 'var(--mint)', fontFamily: "'Fira Code', monospace" }}
        >
          {'<DK />'}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <button key={l} onClick={() => scrollTo(l)} className="nl bg-transparent border-0 p-0">
              {l}
            </button>
          ))}
        </div>

        <a href="Devendra Khot.pdf" download className="btn-mint text-sm py-2 px-4">
          <Download size={14} /> Resume
        </a>
      </div>
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  const [typed, setTyped] = useState('');
  const full = 'Junior Software Developer';

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setTyped(full.slice(0, ++i));
      if (i >= full.length) clearInterval(t);
    }, 55);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="hero"
      className="code-grid relative min-h-screen flex flex-col justify-center pt-20"
      style={{ background: 'var(--bg)' }}
    >
      <div
        className="blob"
        style={{ width: 500, height: 500, background: 'rgba(0,255,171,0.06)', top: -100, right: -100 }}
      />
      <div
        className="blob"
        style={{ width: 400, height: 400, background: 'rgba(59,130,246,0.05)', bottom: 0, left: -100 }}
      />

      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <div className="rv flex items-center gap-2 mb-8">
          <span className="gdot" />
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: 'var(--mint)', fontFamily: "'Fira Code', monospace" }}
          >
            Open to opportunities
          </span>
        </div>

        <h1 className="rv d1 hero-name mb-4">
          Devendra<br />Khot
          <span className="blink ml-1">_</span>
        </h1>

        <div className="rv d2 flex items-center gap-3 mb-6">
          <span style={{ fontFamily: "'Fira Code', monospace", color: 'var(--muted)', fontSize: '0.85rem' }}>
            {/* $&nbsp; */}
          </span>
          <p style={{ fontFamily: "'Fira Code', monospace", fontSize: 'clamp(1rem, 2.5vw, 1.35rem)', color: 'var(--text)' }}>
            {typed}
            {typed.length < full.length && <span className="blink">|</span>}
          </p>
        </div>

        <p className="rv d3 max-w-xl text-lg mb-10" style={{ color: 'var(--muted)', lineHeight: 1.7 }}>
          Building full-stack products at{' '}
          <span style={{ color: 'var(--text)' }}>Central Chinmaya Mission Trust</span>.
          From SaaS platforms to CMS pipelines — I ship things that scale.
        </p>

        <div className="rv d4 flex flex-wrap gap-4 mb-12">
          <a
            href="#projects"
            className="btn-mint"
            onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            View Projects <ArrowUpRight size={16} />
          </a>
          <a href="Devendra Khot.pdf" download className="btn-outline">
            <Download size={16} /> Download Resume
          </a>
        </div>

        <div className="rv d5 flex flex-wrap gap-3">
          <a href="https://github.com/Devendrakhot" target="_blank" rel="noreferrer" className="soc">
            <Github size={15} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/devendra-khot/" target="_blank" rel="noreferrer" className="soc">
            <Linkedin size={15} /> LinkedIn
          </a>
          <a href="mailto:khotdevendra1@gmail.com" className="soc">
            <Mail size={15} /> Email
          </a>
          <a href="tel:+919372471869" className="soc">
            <Phone size={15} /> +91 93724 71869
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Marquee Strip ─── */
function MarqueeStrip() {
  const double = [...MARQUEE_SKILLS, ...MARQUEE_SKILLS];
  return (
    <div
      className="py-4 overflow-hidden"
      style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--bg1)' }}
    >
      <div className="mq-track">
        {double.map((s, i) => (
          <span
            key={i}
            className="mx-6 text-xs tracking-widest uppercase flex-shrink-0"
            style={{ fontFamily: "'Fira Code', monospace", color: 'var(--muted2)' }}
          >
            <span style={{ color: 'var(--mint)', marginRight: 8 }}>▸</span>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── About ─── */
function About() {
  return (
    <section id="about" className="py-28" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="rv slabel mb-4">// about me</p>
            <h2 className="rv d1 shead mb-6">
              Developer by craft,<br />problem-solver by nature
            </h2>
            <p className="rv d2 text-base mb-4" style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
              I'm a full-stack developer based in Mumbai with 2+ years of experience turning product requirements into working software. Currently at CCMT, I build internal platforms, CMS-driven websites, and e-commerce solutions that serve a global audience.
            </p>
            <p className="rv d3 text-base mb-8" style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
              I enjoy the full lifecycle — from schema design and API architecture to polished UIs and production deployments. I'm comfortable with both the backend and the browser, and I take Lighthouse scores personally.
            </p>
            <div className="rv d4 flex flex-col gap-3">
              {[
                { icon: <MapPin size={14} />, val: 'Mumbai, India' },
                { icon: <Mail size={14} />, val: 'khotdevendra1@gmail.com' },
                { icon: <Phone size={14} />, val: '+91 93724 71869' },
              ].map(({ icon, val }) => (
                <div key={val} className="flex items-center gap-3 text-sm" style={{ color: 'var(--muted)' }}>
                  <span style={{ color: 'var(--mint)' }}>{icon}</span>
                  {val}
                </div>
              ))}
            </div>
          </div>

          <div className="rv d2 grid grid-cols-2 gap-4">
            {[
              { n: '2+', label: 'Years Experience' },
              { n: '6+', label: 'Projects Shipped' },
              { n: '350+', label: 'Centres Served' },
              { n: '60+', label: 'Students Trained' },
            ].map(({ n, label }) => (
              <div
                key={label}
                className="p-6 rounded-xl"
                style={{ border: '1px solid var(--border)', background: 'var(--surface)' }}
              >
                <div className="stat-n mb-1" style={{ color: 'var(--mint)' }}>{n}</div>
                <div className="text-sm" style={{ color: 'var(--muted)', fontFamily: "'Fira Code', monospace" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Skills ─── */
function Skills() {
  return (
    <section id="skills" className="py-28" style={{ background: 'var(--bg1)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="rv slabel mb-4">// tech stack</p>
          <h2 className="rv d1 shead">Skills & Technologies</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((g, gi) => (
            <div key={g.label} className={`rv sk-group d${Math.min(gi + 1, 5)}`}>
              <div className="sk-group-title flex items-center gap-2">
                {g.icon} {g.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {g.pills.map(p => (
                  <span key={p} className="sk-pill">{p}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Experience ─── */
function Experience() {
  return (
    <section id="experience" className="py-28" style={{ background: 'var(--bg)' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="rv slabel mb-4">// career</p>
          <h2 className="rv d1 shead">Experience</h2>
        </div>

        <div className="relative">
          <div
            className="absolute left-4 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'var(--border)' }}
          />

          <div className="flex flex-col gap-8">
            {EXPERIENCE.map((exp, i) => (
              <div key={exp.company} className={`rv d${i + 1} md:pl-14 relative`}>
                <div className="tdot hidden md:block absolute left-0 top-1" style={{ marginLeft: '-1px' }} />

                <div className="exp-card">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3
                        className="text-lg font-semibold mb-1"
                        style={{ fontFamily: "'Bricolage Grotesque', sans-serif", color: 'var(--text)' }}
                      >
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium" style={{ color: 'var(--mint)', fontFamily: "'Fira Code', monospace" }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs mb-1" style={{ color: 'var(--muted)', fontFamily: "'Fira Code', monospace" }}>
                        {exp.period}
                      </p>
                      <p className="text-xs flex items-center justify-end gap-1" style={{ color: 'var(--muted2)' }}>
                        <MapPin size={11} /> {exp.location}
                      </p>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-2">
                    {exp.bullets.map(b => (
                      <li key={b} className="flex items-start gap-3 text-sm" style={{ color: 'var(--muted)' }}>
                        <ChevronRight size={14} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--mint)' }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Projects ─── */
function Projects() {
  return (
    <section id="projects" className="py-28" style={{ background: 'var(--bg1)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="rv slabel mb-4">// work</p>
          <h2 className="rv d1 shead">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((p, i) => (
            <div key={p.name} className={`rv proj-card ${p.featured ? 'proj-featured' : ''} d${Math.min(i % 3 + 1, 5)}`}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="slabel mb-1">{p.featured ? '★ featured' : '// project'}</div>
                  <h3
                    className="text-lg font-bold"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif", color: 'var(--text)' }}
                  >
                    {p.name}
                  </h3>
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-shrink-0 p-1.5 rounded-lg transition-colors"
                    style={{ color: 'var(--muted2)', border: '1px solid var(--border)' }}
                    aria-label="Live demo"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>

              <p className="text-xs mb-3" style={{ color: 'var(--mint)', fontFamily: "'Fira Code', monospace" }}>
                {p.tagline}
              </p>

              <p className="text-sm flex-1 mb-5" style={{ color: 'var(--muted)', lineHeight: 1.75 }}>
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Certifications ─── */
function Certifications() {
  const ICONS: Record<string, string> = {
    Microsoft: '🪟',
    Udemy: '🎓',
    Coursera: '📘',
    Google: '🔷',
  };

  return (
    <section id="certifications" className="py-28" style={{ background: 'var(--bg)' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="rv slabel mb-4">// credentials</p>
          <h2 className="rv d1 shead">Certifications</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {CERTS.map((c, i) => (
            <div key={c.title} className={`rv cert d${i + 1}`}>
              <div
                className="flex-shrink-0 text-2xl flex items-center justify-center w-10 h-10 rounded-lg"
                style={{ background: 'var(--bg2)' }}
              >
                {ICONS[c.issuer] ?? '📄'}
              </div>
              <div>
                <p className="text-sm font-semibold mb-0.5" style={{ color: 'var(--text)' }}>{c.title}</p>
                <p className="text-xs" style={{ color: 'var(--muted)', fontFamily: "'Fira Code', monospace" }}>
                  {c.issuer} · {c.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer
      className="py-12"
      style={{ background: 'var(--bg1)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p
              className="text-2xl font-bold mb-1"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif", color: 'var(--text)' }}
            >
              Devendra Khot
            </p>
            <p className="text-sm" style={{ color: 'var(--muted)', fontFamily: "'Fira Code', monospace" }}>
              Junior Software Developer · Mumbai
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://github.com/Devendrakhot" target="_blank" rel="noreferrer" className="soc">
              <Github size={14} />
            </a>
            <a href="https://www.linkedin.com/in/devendra-khot/" target="_blank" rel="noreferrer" className="soc">
              <Linkedin size={14} />
            </a>
            <a href="mailto:khotdevendra1@gmail.com" className="soc">
              <Mail size={14} />
            </a>
          </div>
        </div>

        <div
          className="mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: '1px solid var(--border)', color: 'var(--muted2)', fontFamily: "'Fira Code', monospace" }}
        >
          <span>© {new Date().getFullYear()} Devendra Khot. All rights reserved.</span>
          <a
            href="https://devendrakhot.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:opacity-80 transition-opacity"
          >
            <Code2 size={11} /> devendrakhot.netlify.app
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ─── App ─── */
export default function App() {
  useReveal();

  useEffect(() => {
    trackVisitor();
  }, []);

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
      </main>
      <Footer />
    </>
  );
}
