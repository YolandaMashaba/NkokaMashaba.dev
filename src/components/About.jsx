// src/components/About.jsx - Minimal aesthetic to match hero/nav/footer
import React from 'react'

const About = () => {
  return (
    <section id="about" className="about fade-in minimal">
      <div className="container">
        <h2 className="about-title">About <span className="serif">me</span></h2>

        <div className="about-content">
          <div className="about-text">
            <h3 className="about-intro">Hi, I'm Nkoka Mashaba</h3>
            <p className="muted">I craft clean, accessible user experiences with a focus on clarity and thoughtful details. I care about performance, a11y and maintainable design systems.</p>
            <p className="muted">With a background in front‑end engineering and product thinking, I help teams move from ideas to intuitive, reliable interfaces.</p>

            <div className="about-details">
              <div className="detail-item"><strong>Name</strong><span>Nkoka Mashaba</span></div>
              <div className="detail-item"><strong>Email</strong><span>nkokayolanda@gmail.com</span></div>
              <div className="detail-item"><strong>Location</strong><span>Johannesburg, Gauteng</span></div>
              <div className="detail-item"><strong>Availability</strong><span>Open to new opportunities</span></div>
            </div>

            <div className="about-actions">
              <a href="#contact" className="pill" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}>Contact me</a>
              <a href="#projects" className="text-link" onClick={(e)=>{e.preventDefault(); document.getElementById('projects')?.scrollIntoView({behavior:'smooth', block:'start'})}}>See projects →</a>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-grid">
              <div className="stat-card">
                <div className="stat-number">0+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">2</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">13</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-title { font-family: ui-serif, Georgia, 'Times New Roman', serif; font-size: 2.25rem; font-weight: 800; margin-bottom: 2rem; letter-spacing: -0.01em; }
        .about-title .serif { box-shadow: inset 0 -0.25em 0 rgba(255, 192, 203, 0.55); }
        .about-content { display: grid; grid-template-columns: 2fr 1fr; gap: 3.5rem; align-items: start; }
        .about-intro { font-size: 1.5rem; font-weight: 600; margin-bottom: 0.75rem; }
        .muted { color: #6b7280; margin-bottom: 1rem; }
        .about-text p { margin-bottom: 1.1rem; color: var(--text-secondary); line-height: 1.7; }

        .about-details { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.1rem; margin: 1.5rem 0 0; padding: 1.1rem; background: #f8fafc; border-radius: 0.75rem; border: 1px solid var(--border-color); }
        .detail-item { display: flex; flex-direction: column; gap: 0.25rem; }
        .detail-item strong { color: var(--text-color); font-weight: 600; }
        .detail-item span { color: var(--text-secondary); }

        .about-actions { display: flex; gap: 1rem; margin-top: 1.5rem; flex-wrap: wrap; align-items: center; }
        .pill { background: #d7f3fb; color: #0f172a; padding: 0.6rem 1rem; border-radius: 12px; font-weight: 600; text-decoration: none; box-shadow: 0 2px 0 rgba(0,0,0,0.06); }
        .text-link { color: var(--text-secondary); text-decoration: none; border-bottom: 1px dashed #cbd5e1; padding-bottom: 2px; }
        .text-link:hover { color: var(--text-color); border-bottom-color: var(--text-color); }

        .about-stats { position: relative; }
        .stat-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.25rem; }
        .stat-card { background: #ffffff; border: 1px solid var(--border-color); border-radius: 0.75rem; padding: 1.25rem; text-align: center; transition: var(--transition); }
        .stat-card:hover { transform: translateY(-0.5rem); border-color: var(--primary-color); }
        .stat-number { font-size: 1.875rem; font-weight: 700; color: var(--primary-color); margin-bottom: 0.25rem; }
        .stat-label { font-size: 0.875rem; color: var(--text-secondary); font-weight: 500; }

        @media (max-width: 1024px) { .about-content { gap: 2.5rem; } }
        @media (max-width: 768px) {
          .about-content { grid-template-columns: 1fr; }
          .about-details { grid-template-columns: 1fr; }
          .about-actions { justify-content: center; }
        }
        @media (max-width: 480px) {
          .stat-grid { grid-template-columns: 1fr; }
          .about-actions { flex-direction: column; align-items: center; }
          .btn, .btn-outline { width: 100%; max-width: 250px; }
        }
      `}</style>
    </section>
  )
}

export default About
