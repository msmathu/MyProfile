import { Mail, Phone, MapPin, ExternalLink, GraduationCap, Briefcase, Code2, User } from 'lucide-react';
import './App.css';
import { profile, skills, experience, education, certifications } from './data';

function GithubIcon({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

const CERT_ICONS = {
  azure: '☁️',
  devops: '⚙️',
  nptel: '🎓',
};

export default function App() {
  return (
    <div className="app">
      {/* NAV */}
      <nav>
        <span className="nav-logo">MS</span>
        <ul className="nav-links">
          {['About', 'Skills', 'Experience', 'Education', 'Contact'].map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
          ))}
        </ul>
        <a className="btn-primary" href={`mailto:${profile.email}`} style={{ padding: '0.45rem 1.1rem', fontSize: '0.8rem' }}>
          <Mail size={14} /> Hire Me
        </a>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-glow-1" />
        <div className="hero-glow-2" />
        <div className="hero-grid">
          <div>
            <div className="hero-badge">
              <span className="dot" />
              Available for Opportunities
            </div>
            <h1 className="hero-name">
              <span>{profile.name}</span>
            </h1>
            <div className="hero-role">{profile.role}</div>
            <p className="hero-tagline">{profile.tagline}</p>
            <div className="hero-cta">
              <a className="btn-primary" href={`mailto:${profile.email}`}>
                <Mail size={15} /> Get In Touch
              </a>
              <a className="btn-outline" href={profile.github} target="_blank" rel="noreferrer">
                <GithubIcon size={15} /> GitHub
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-num">3.5+</span>
                <span className="stat-label">Years Exp</span>
              </div>
              <div className="stat">
                <span className="stat-num">4+</span>
                <span className="stat-label">Companies</span>
              </div>
              <div className="stat">
                <span className="stat-num">4</span>
                <span className="stat-label">Certifications</span>
              </div>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <div className="hero-photo-ring" />
            <img className="hero-photo" src={`${import.meta.env.BASE_URL}photo.png`} alt={profile.name} />
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ABOUT */}
      <section id="about">
        <p className="section-label"><User size={12} style={{ display: 'inline', marginRight: 6 }} />About Me</p>
        <h2 className="section-title">Profile Summary</h2>
        <p className="section-sub">A passionate .NET developer who loves building fast, scalable systems.</p>
        <div className="about-grid">
          <ul className="about-bullets">
            {profile.summary.map((s, i) => (
              <li key={i}>
                <span className="about-bullet-dot" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
          <div className="contact-card">
            <div className="contact-item">
              <div className="contact-icon"><Mail size={17} /></div>
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-val">{profile.email}</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><Phone size={17} /></div>
              <div>
                <div className="contact-label">Phone</div>
                <div className="contact-val">{profile.phone}</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><MapPin size={17} /></div>
              <div>
                <div className="contact-label">Location</div>
                <div className="contact-val">{profile.location}</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><GithubIcon size={17} /></div>
              <div>
                <div className="contact-label">GitHub</div>
                <a className="contact-val" href={profile.github} target="_blank" rel="noreferrer"
                   style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: 4 }}>
                  msmathu <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* SKILLS */}
      <section id="skills">
        <p className="section-label"><Code2 size={12} style={{ display: 'inline', marginRight: 6 }} />Technical Skills</p>
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-sub">Technologies I work with daily to build production-grade applications.</p>
        <div className="skills-grid">
          {Object.entries(skills).map(([cat, tags]) => (
            <div className="skill-card" key={cat}>
              <div className="skill-card-title">{cat}</div>
              <div className="skill-tags">
                {tags.map((t) => <span className="skill-tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* EXPERIENCE */}
      <section id="experience">
        <p className="section-label"><Briefcase size={12} style={{ display: 'inline', marginRight: 6 }} />Work History</p>
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-sub">3.5+ years building enterprise applications across multiple domains.</p>
        <div className="timeline">
          {experience.map((job) => (
            <div className="timeline-item" key={job.id}>
              <div className={`timeline-dot${job.current ? ' current' : ''}`} />
              <div className="exp-card">
                <div className="exp-header">
                  <div>
                    <div className="exp-company">{job.company}</div>
                    <div className="exp-location">{job.location}</div>
                  </div>
                  <span className={`exp-period${job.current ? ' current' : ''}`}>{job.period}</span>
                </div>
                <div className="exp-role">{job.role}</div>
                {job.projects.map((proj, pi) => (
                  <div className="project-block" key={pi}>
                    {proj.name && (
                      <>
                        <div className="project-name">
                          <span className="project-name-bar" />
                          {proj.name}
                        </div>
                        {proj.description && <div className="project-desc">{proj.description}</div>}
                      </>
                    )}
                    <ul className="project-bullets">
                      {proj.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* EDUCATION + CERTS */}
      <section id="education">
        <p className="section-label"><GraduationCap size={12} style={{ display: 'inline', marginRight: 6 }} />Academics & Credentials</p>
        <h2 className="section-title">Education & Certifications</h2>
        <p className="section-sub">Academic background and professional certifications.</p>
        <div className="edu-cert-row">
          <div>
            <div className="section-label" style={{ marginBottom: '1rem', color: 'var(--accent)' }}>Education</div>
            <div className="edu-cards">
              {education.map((e, i) => (
                <div className="edu-card" key={i}>
                  <div className="edu-degree">{e.degree}</div>
                  <div className="edu-inst">{e.institution}</div>
                  <div className="edu-meta">
                    <span className="edu-badge year">{e.year}</span>
                    <span className="edu-badge score">{e.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="section-label" style={{ marginBottom: '1rem', color: 'var(--accent)' }}>Certifications</div>
            <div className="certs-cards">
              {certifications.map((c, i) => (
                <div className="cert-card" key={i}>
                  <div className="cert-icon">{CERT_ICONS[c.icon] || '📜'}</div>
                  <div>
                    <div className="cert-name">{c.name}</div>
                    <div className="cert-issuer">{c.issuer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* CONTACT */}
      <section id="contact" style={{ textAlign: 'center' }}>
        <p className="section-label">Let's Connect</p>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-sub" style={{ margin: '0 auto 2.5rem', maxWidth: 480 }}>
          Open to .NET developer roles, freelance projects, and collaboration opportunities.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a className="btn-primary" href={`mailto:${profile.email}`}>
            <Mail size={15} /> {profile.email}
          </a>
          <a className="btn-outline" href={profile.github} target="_blank" rel="noreferrer">
            <GithubIcon size={15} /> View GitHub
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <span className="footer-copy">© 2026 Madhu Suthanan M · Built with React + Vite</span>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon size={18} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>
        </div>
      </footer>
    </div>
  );
}
