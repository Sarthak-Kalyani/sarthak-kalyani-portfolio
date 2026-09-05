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

const LINKEDIN_URL = "https://www.linkedin.com/in/sarthak-kalyani/"; 
const GITHUB_URL = "https://github.com/Sarthak-Kalyani";
const EMAIL = "sarthakkalyani007@gmail.com";
const PHONE = "+91 8882336756";

const projects = [
  {
    number: "01",
    title: "CIFAKE",
    subtitle: "AI-Generated Image Detection",
    description:
      "Developed and deployed a CNN-based web application to classify REAL and AI-generated FAKE images, with Grad-CAM visualizations for explainable predictions.",
    tech: ["Python", "TensorFlow", "CNN", "Flask", "Grad-CAM"],
    accent: "violet",
    href: "https://github.com/Sarthak-Kalyani/CIFAKE-Image-Classification",
  },
  {
    number: "02",
    title: "ForensiChain",
    subtitle: "Digital Evidence Investigation Platform",
    description:
      "Built a digital forensics platform for evidence management, SHA-256 integrity verification, tamper detection, OCR, metadata extraction, chain-of-custody auditing, and forensic reporting.",
    tech: ["Java", "Spring Boot", "MySQL", "AWS", "OCR", "AI", "SHA-256"],
    accent: "cyan",
    href: "https://github.com/Sarthak-Kalyani/Smart-Digital-Consent-Evidence-System",
  },
  {
    number: "03",
    title: "AI Virtual Mouse",
    subtitle: "Real-Time Hand Gesture Control",
    description:
      "Developed a gesture-controlled virtual mouse using real-time hand tracking to detect hand landmarks and perform cursor movement and click operations.",
    tech: ["Python", "OpenCV", "MediaPipe"],
    accent: "blue",
    href: "https://github.com/Sarthak-Kalyani/AI-Virtual-Mouse",
  },
  {
    number: "04",
    title: "Kolam Pattern Generator & Detector",
    subtitle: "AI-Powered Computer Vision Application",
    description:
      "Developed an AI-powered application for generating and detecting Kolam patterns using computer vision, YOLOv8, and a full-stack web architecture.",
    tech: ["Next.js", "Tailwind CSS", "Python", "YOLOv8", "PostgreSQL"],
    accent: "gold",
    href: "https://github.com/Sarthak-Kalyani/Kolam-Design-Generator",
  },
  {
    number: "05",
    title: "DBMS Movie Ticket Booking System",
    subtitle: "Python + SQL + MySQL",
    description:
      "Built a movie ticket booking system to manage schedules, seat reservations, customer details, and CRUD operations using MySQL.",
    tech: ["Python", "SQL", "MySQL", "DBMS"],
    accent: "violet",
    href: "https://github.com/Sarthak-Kalyani/DBMS-Movie-Ticket-Booking-System-",
  },
];

const skillGroups = [
  { label: "Languages", icon: Code, items: ["Java", "Python", "C", "C++", "SQL"] },
  {
    label: "Frontend",
    icon: Sparkles,
    items: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Thymeleaf", "Bootstrap"],
  },
  {
    label: "Backend",
    icon: Database,
    items: ["Node.js", "Express.js", "Spring Boot", "REST APIs"],
  },
  {
    label: "AI & Machine Learning",
    icon: Sparkles,
    items: [
      "Machine Learning",
      "Deep Learning",
      "CNN",
      "Computer Vision",
      "TensorFlow",
      "Keras",
      "Explainable AI (XAI)",
      "Grad-CAM",
      "Image Classification",
    ],
  },
  {
    label: "Cybersecurity",
    icon: Shield,
    items: [
      "Linux Security",
      "Networking",
      "Ethical Hacking",
      "VAPT",
      "Web Application Security",
      "Kali Linux",
      "Burp Suite",
      "Digital Forensics",
    ],
  },
  {
    label: "Tools & Cloud",
    icon: Database,
    items: ["Git", "GitHub", "AWS", "MySQL", "Wireshark", "Nmap", "Flask"],
  },
];

const certifications = [
  { issuer: "Cisco Networking Academy", count: "12 Certifications" },
  { issuer: "Palo Alto Networks Cybersecurity Academy", count: "7 Certifications" },
  { issuer: "Red Hat Academy", count: "3 Certifications" },
];

const coreSubjects = ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = ["home", "about", "skills", "experience", "projects", "achievements", "education", "contact"];
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
      const element = document.getElementById(id);
      if (element) observer.observe(element);
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
            {["about", "skills", "experience", "projects", "achievements", "education", "contact"].map((id) => (
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
            <a className="icon-btn" href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github />
            </a>
            <a className="icon-btn" href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn">
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
            Building <span className="gradient-text">intelligent</span> software
            <br />
            across <span className="gradient-text">AI</span>, code & security.
          </h1>
          <p className="hero-sub">
            Computer Science Engineering student with hands-on experience in Java, Python,
            web development, AI, machine learning, and cybersecurity — focused on solving
            real-world problems through practical software.
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
            <div><strong>5</strong><span>Featured projects</span></div>
            <div><strong>2</strong><span>Internships</span></div>
            <div><strong>22</strong><span>Certifications</span></div>
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
            <h2>A developer focused on practical, real-world systems.</h2>
          </div>
          <div className="about-copy">
            <p>
              I&apos;m Sarthak Kalyani, a Computer Science Engineering student at GL Bajaj Institute
              of Technology and Management. My interests span software engineering, artificial
              intelligence, machine learning, and cybersecurity.
            </p>
            <p>
              My projects range from digital forensics and evidence integrity to AI-generated image
              detection, gesture-based computer vision, database applications, and AI-powered web systems.
            </p>
            <p>
              I enjoy learning by building: designing APIs, working with databases and cloud platforms,
              experimenting with computer vision models, and turning technical ideas into usable applications.
            </p>
            <div className="about-meta">
              <span>Greater Noida, Uttar Pradesh</span>
              <span>AI + ML</span>
              <span>Software Development</span>
              <span>Cybersecurity</span>
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
            <p>
              A broad engineering stack spanning programming, frontend and backend development,
              AI/ML, security, databases, tooling, and cloud.
            </p>
          </div>

          <div className="skill-grid six-grid">
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
            <div>{coreSubjects.map((x) => <span key={x}>{x}</span>)}</div>
          </div>
        </div>
      </section>

      <section id="experience" className="section section-soft">
        <div className="container">
          <p className="section-kicker">03 / EXPERIENCE</p>
          <h2>Professional experience</h2>

          <div className="experience-stack">
            <article className="experience-card">
              <div className="experience-top">
                <div>
                  <p className="experience-company">XTRAGRAD Technologies Pvt. Ltd. · AICTE Listed</p>
                  <h3>Artificial Intelligence Intern</h3>
                </div>
                <span className="date-pill">AUG 2026</span>
              </div>
              <div className="experience-body">
                <div className="timeline-dot" />
                <div>
                  <p>Developed and deployed a CNN-based system to classify REAL and AI-generated FAKE images.</p>
                  <p>Integrated Grad-CAM visualizations to make model predictions explainable and interpretable.</p>
                </div>
              </div>
            </article>

            <article className="experience-card">
              <div className="experience-top">
                <div>
                  <p className="experience-company">Vault of Codes</p>
                  <h3>AI &amp; Prompt Engineering Intern</h3>
                </div>
                <span className="date-pill">SEP 2025 — OCT 2025</span>
              </div>
              <div className="experience-body">
                <div className="timeline-dot" />
                <div>
                  <p>Worked with Generative AI tools and prompt engineering to improve AI-assisted automation and content workflows.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-kicker">04 / WORK</p>
              <h2>Selected projects</h2>
            </div>
            <p>Five projects covering AI/ML, computer vision, digital forensics, full-stack development, and DBMS.</p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className={`project-row ${project.accent}`} key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <p className="project-subtitle">{project.subtitle}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-wrap">
                    {project.tech.map((x) => <span className="tag" key={x}>{x}</span>)}
                  </div>
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
            <h2>Certifications</h2>
            <p>Professional learning across networking, cybersecurity, and Red Hat technologies.</p>
          </div>

          <div className="achievement-grid cert-grid">
            {certifications.map((cert, index) => (
              <article className="credential-card" key={cert.issuer}>
                <div className="credential-num">{String(index + 1).padStart(2, "0")}</div>
                <h3>{cert.issuer}</h3>
                <p>{cert.count}</p>
              </article>
            ))}
          </div>

          <div className="cert-total">
            <span className="cert-total-label">TOTAL</span>
            <strong>22 certifications</strong>
            <span>Across Cisco Networking Academy, Palo Alto Networks Cybersecurity Academy, and Red Hat Academy.</span>
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <div className="container">
          <p className="section-kicker">06 / EDUCATION</p>
          <h2>Academic journey</h2>

          <div className="education-timeline">
            <article className="education-card">
              <div className="edu-icon"><Briefcase /></div>
              <div>
                <p className="edu-year">2023 — 2027</p>
                <h3>B.Tech in Computer Science Engineering</h3>
                <p>GL Bajaj Institute of Technology and Management</p>
              </div>
            </article>

            <article className="education-card compact">
              <div className="edu-icon"><Briefcase /></div>
              <div>
                <p className="edu-year">2022</p>
                <h3>Class XII · CBSE</h3>
                <p>DAV Public School</p>
              </div>
            </article>

            <article className="education-card compact">
              <div className="edu-icon"><Briefcase /></div>
              <div>
                <p className="edu-year">2020</p>
                <h3>Class X · CBSE</h3>
                <p>DAV Public School</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-wrap">
          <p className="section-kicker">07 / CONTACT</p>
          <h2>Let&apos;s build something useful.</h2>
          <p>
            I&apos;m interested in software engineering, full-stack development, AI/ML, and cybersecurity
            opportunities where I can learn fast, solve practical problems, and contribute meaningfully.
          </p>
          <div className="contact-actions">
            <a className="primary-btn" href={`mailto:${EMAIL}`}><Mail /> Email me</a>
            <a className="secondary-btn" href={GITHUB_URL} target="_blank" rel="noreferrer"><Github /> GitHub</a>
            <a className="secondary-btn" href={LINKEDIN_URL} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
          </div>
          <div className="contact-details">
            <span>{EMAIL}</span>
            <span>{PHONE}</span>
            <span>Greater Noida, Uttar Pradesh</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Sarthak Kalyani</span>
          <span>Built with Next.js · AI · Software · Cybersecurity</span>
        </div>
      </footer>
    </main>
  );
}
