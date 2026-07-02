// src/components/About.jsx - Minimal aesthetic with required pink accents
import React from 'react'

const About = () => {
  return (
    <section id="about" className="about fade-in minimal">
      <div className="container">
        <h2 className="about-title">About <span className="serif">Me</span></h2>

        <div className="about-content">
          <div className="about-text">
            <div className="about-text-box">
              <h3 className="about-intro">Hi, I'm Nkoka Mashaba</h3>
              <p className="muted">I craft clean, accessible user experiences with a focus on clarity and thoughtful details. I care about performance, accessibility and maintainable design systems.</p>
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
          </div>

          <div className="about-stats">
            <div className="stat-grid">
              <div className="stat-card">
                <div className="stat-number">2</div>
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
    </section>
  )
}

export default About

