"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Briefcase,
  ChevronDown,
  Code,
  Database,
  External,
  Github,
  Linkedin,
  Mail,
  Shield,
  Sparkles,
} from "../components/Icons";

const projects = [
  {
    number: "01",
    title: "ForensiChain",
    subtitle: "Digital Evidence Investigation Platform",
    description:
      "A digital forensics platform for secure evidence management, case tracking, SHA-256 integrity verification, forensic metadata extraction, OCR, AI-assisted risk assessment, and chain-of-custody auditing.",
    tech: ["Java", "Spring Boot", "MySQL", "AWS", "SHA-256", "OCR", "AI"],
    accent: "violet",
    href: "https://github.com/Sarthak-Kalyani/Smart-Digital-Consent-Evidence-System",
  },
  {
    number: "02",
    title: "Kolam Pattern Generator & Detector",
    subtitle: "AI-powered image processing application",
    description:
      "A full-stack application for generating and detecting Kolam patterns using AI-based image processing and computer vision, with a modern Next.js interface and dedicated detection pipeline.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Python", "YOLOv8", "Kotlin", "PostgreSQL"],
    accent: "cyan",
    href: "https://github.com/Sarthak-Kalyani/Kolam-Design-Generator",
  },
  {
    number: "03",
    title: "AI Virtual Mouse",
    subtitle: "Real-time hand gesture control",
    description:
      "A gesture-controlled virtual mouse using real-time hand tracking. OpenCV and MediaPipe detect hand landmarks and translate gestures into cursor movement and click operations.",
    tech: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
    accent: "blue",
    href: "https://github.com/Sarthak-Kalyani/AI-Virtual-Mouse",
  },
  {
    number: "04",
    title: "DBMS Movie Ticket Booking System",
    subtitle: "Python + MySQL booking platform",
    description:
      "A relational database application for movie schedules, seat reservations, customer details, and ticket bookings, with Python-driven CRUD operations over MySQL.",
    tech: ["Python", "SQL", "MySQL", "DBMS"],
    accent: "gold",
    href: "https://github.com/Sarthak-Kalyani/DBMS-Movie-Ticket-Booking-System-",
  },
];

const skillGroups = [
  {
    label: "Languages",
    icon: Code,
    items: ["Java", "Python", "C", "C++", "SQL"],
  },
  {
    label: "Frontend",
    icon: Sparkles,
    items: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
  },
  {
    label: "Backend",
    icon: Database,
    items: ["Node.js", "Express.js", "Spring Boot", "REST APIs"],
  },
  {
    label: "Cybersecurity",
    icon: Shield,
    items: [
      "Linux Security",
      "Networking",
      "Ethical Hacking",
      "VAPT",
      "Web App Security",
      "Kali Linux",
      "Burp Suite",
      "Wireshark",
      "Nmap",
      "Zenmap",
    ],
  },
];

const certifications = [
  "Cisco Networking Academy — 12 Certifications",
  "Palo Alto Networks Cybersecurity Academy — 7 Certifications",
  "Red Hat Academy — 3 Certifications",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = ["home", "about", "skills", "experience", "projects", "achievements", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.15, 0.3, 0.5] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <button className="brand" onClick={() => scrollTo("home")} aria-label="Go home">
            <span className="brand-mark">SK</span>
            <span className="brand-name">Sarthak Kalyani</span>
          </button>

          <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
            {["about", "skills", "experience", "projects", "achievements", "contact"].map((id) => (
              <button
                key={id}
                className={active === id ? "nav-link active" : "nav-link"}
                onClick={() => scrollTo(id)}
              >
                {id[0].toUpperCase() + id.slice(1)}
              </button>
            ))}
          </nav>

          <div className="header-actions">
            <a className="icon-btn" href="https://github.com/Sarthak-Kalyani" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github />
            </a>
            <a className="icon-btn" href="https://www.linkedin.com/in/sarthak-kalyani/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin />
            </a>
            <button className="menu-btn" onClick={() => setMenuOpen((v) => !v)} aria-label="Open menu">
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-grid" />
        <div className="glow glow-a" />
        <div className="glow glow-b" />
        <div className="container hero-content">
          <div className="eyebrow"><span /> AVAILABLE FOR OPPORTUNITIES</div>
          <h1>
            Building <span className="gradient-text">smart</span> digital
            <br />
            solutions with <span className="gradient-text">code</span> & security.
          </h1>
          <p className="hero-sub">
            Computer Science Engineering student focused on Java full-stack development,
            AI, and cybersecurity — turning ideas into practical software.
          </p>

          <div className="hero-actions">
            <button className="primary-btn" onClick={() => scrollTo("projects")}>
              View Projects <ArrowUpRight />
            </button>
            <a className="secondary-btn" href="/resume.pdf" download>
              Download Resume <External />
            </a>
          </div>

          <div className="hero-stats">
            <div><strong>2023–27</strong><span>B.Tech CSE</span></div>
            <div><strong>3</strong><span>Major certifications</span></div>
            <div><strong>4</strong><span>Featured projects</span></div>
          </div>

          <button className="scroll-cue" onClick={() => scrollTo("about")}>
            <span>SCROLL TO EXPLORE</span><ChevronDown />
          </button>
        </div>
      </section>

      <section id="about" className="section section-soft">
        <div className="container two-col">
          <div>
            <p className="section-kicker">01 / ABOUT</p>
            <h2>A developer who likes solving real problems.</h2>
          </div>
          <div className="about-copy">
            <p>
              I&apos;m Sarthak Kalyani, a Computer Science Engineering student at GL Bajaj
              Institute of Technology and Management. My work sits at the intersection of
              software development, AI, and cybersecurity.
            </p>
            <p>
              I enjoy building systems that are not just functional, but useful — from
              digital evidence investigation and integrity verification to computer vision
              tools and full-stack applications.
            </p>
            <p>
              I&apos;m currently strengthening my skills across Java, Python, SQL,
              Spring Boot, web development, cloud, and security technologies.
            </p>
            <div className="about-meta">
              <span>Greater Noida, Uttar Pradesh</span>
              <span>CGPA 7.4</span>
              <span>Open to opportunities</span>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-kicker">02 / STACK</p>
              <h2>Technical skills</h2>
            </div>
            <p>Tools I use to build, ship, analyze, and secure applications.</p>
          </div>

          <div className="skill-grid">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article className="skill-card" key={group.label}>
                  <div className="skill-icon"><Icon /></div>
                  <h3>{group.label}</h3>
                  <div className="tag-wrap">
                    {group.items.map((item) => <span className="tag" key={item}>{item}</span>)}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="core-row">
            <span>CORE SUBJECTS</span>
            <div>{["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks"].map((x) => <span key={x}>{x}</span>)}</div>
          </div>
        </div>
      </section>

      <section id="experience" className="section section-soft">
        <div className="container">
          <p className="section-kicker">03 / EXPERIENCE</p>
          <h2>Professional experience</h2>
          <article className="experience-card">
            <div className="experience-top">
              <div>
                <p className="experience-company">Vault of Codes</p>
                <h3>AI & Prompt Engineering Intern</h3>
              </div>
              <span className="date-pill">SEP 2025 — OCT 2025</span>
            </div>
            <div className="experience-body">
              <div className="timeline-dot" />
              <div>
                <p>Worked with Generative AI tools and designed structured prompts for automation and content generation.</p>
                <p>Improved AI-assisted workflows through prompt engineering techniques and iterative optimization.</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-kicker">04 / WORK</p>
              <h2>Selected projects</h2>
            </div>
            <p>Projects built across full-stack development, AI, databases, and digital forensics.</p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className={`project-row ${project.accent}`} key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <p className="project-subtitle">{project.subtitle}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-wrap">{project.tech.map((x) => <span className="tag" key={x}>{x}</span>)}</div>
                </div>
                <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                  <ArrowUpRight />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="section section-soft">
        <div className="container">
          <p className="section-kicker">05 / CREDENTIALS</p>
          <div className="section-heading">
            <h2>Achievements & certifications</h2>
            <p>A quick snapshot of ongoing learning and hands-on involvement.</p>
          </div>

          <div className="achievement-grid">
            <article className="credential-card">
              <div className="credential-num">01</div>
              <h3>National Hackathon Participation</h3>
              <p>Competed in Smart India Hackathon and Guidewire DevTrails, showcasing innovative solutions.</p>
            </article>
            <article className="credential-card">
              <div className="credential-num">02</div>
              <h3>AI & Prompt Engineering Internship</h3>
              <p>Completed professional internship work focused on AI-assisted workflows and prompt engineering.</p>
            </article>
            <article className="credential-card">
              <div className="credential-num">03</div>
              <h3>Real-World Project Building</h3>
              <p>Built multiple substantial academic and personal projects across software, AI, and security.</p>
            </article>
          </div>

          <div className="cert-list">
            <div className="cert-title">CERTIFICATIONS</div>
            {certifications.map((cert, i) => (
              <div className="cert-item" key={cert}><span>{String(i + 1).padStart(2, "0")}</span><strong>{cert}</strong></div>
            ))}
          </div>

          <div className="education-card">
            <div className="edu-icon"><Briefcase /></div>
            <div>
              <p className="section-kicker">EDUCATION</p>
              <h3>B.Tech in Computer Science Engineering</h3>
              <p>GL Bajaj Institute of Technology and Management · 2023–2027</p>
              <div className="edu-stats"><span>CGPA 7.4</span><span>Class XII 67%</span><span>Class X 76.4%</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-wrap">
          <p className="section-kicker">06 / CONTACT</p>
          <h2>Let&apos;s build something useful.</h2>
          <p>
            I&apos;m interested in software engineering, full-stack development, AI, and cybersecurity
            opportunities where I can learn fast and contribute meaningfully.
          </p>
          <div className="contact-actions">
            <a className="primary-btn" href="mailto:sarthakkalyani007@gmail.com">
              <Mail /> Email me
            </a>
            <a className="secondary-btn" href="https://github.com/Sarthak-Kalyani" target="_blank" rel="noreferrer">
              <Github /> GitHub
            </a>
            <a className="secondary-btn" href="https://www.linkedin.com/in/sarthak-kalyani/" target="_blank" rel="noreferrer">
              <Linkedin /> LinkedIn
            </a>
          </div>
          <div className="contact-details">
            <span>sarthakkalyani007@gmail.com</span>
            <span>+91 8882336756</span>
            <span>Greater Noida, Uttar Pradesh</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Sarthak Kalyani</span>
          <span>Built with Next.js · Designed for the web</span>
        </div>
      </footer>
    </main>
  );
}
