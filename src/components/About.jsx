// src/components/About.jsx
import React from 'react'

const About = () => {
  return (
    <section id="about" className="about fade-in">
      <div className="container">
        <h2 className="section-title">
          About <span className="highlight">Me</span>
        </h2>
        
        <div className="about-content card">
          <div className="about-text">
            <h3>Hi, I'm Nkoka Mashaba</h3>
            <p>
              I'm a passionate Frontend Developer with over 5 years of experience 
              creating digital experiences. My journey started with a Computer 
              Science degree and has evolved into a career focused on modern 
              frontend development with React, TypeScript, and modern tooling.
            </p>
            
            <p>
              I believe in writing clean, efficient code and creating intuitive 
              user interfaces. I'm passionate about performance optimization, 
              accessibility, and staying up-to-date with the latest web technologies.
            </p>
            
            <div className="about-details">
              <div className="detail-item">
                <strong>Name:</strong> Nkoka Mashaba
              </div>
              <div className="detail-item">
                <strong>Email:</strong> nkokayolanda@gmail.com
              </div>
              <div className="detail-item">
                <strong>Location:</strong> Johannesburg, Gauteng
              </div>
              <div className="detail-item">
                <strong>Availability:</strong> Open to new opportunities
              </div>
            </div>
            
            <div className="about-actions">
              <a 
                href="#contact" 
                className="btn"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Contact Me
              </a>
              <a 
                href="#" 
                className="btn-outline"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2 2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download CV
              </a>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-grid">
              <div className="stat-card">
                <div className="stat-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                </div>
                <div className="stat-number">0+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                </div>
                <div className="stat-number">2</div>
                <div className="stat-label">Years Experience</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div className="stat-number">13</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .about-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        
        .about-text h3 {
          font-size: 1.875rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--primary-color);
        }
        
        .about-text p {
          margin-bottom: 1.25rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }
        
        .about-details {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          margin: 2rem 0;
          padding: 1.5rem;
          background: var(--bg-color);
          border-radius: 0.75rem;
          border: 1px solid var(--border-color);
        }
        
        .detail-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        
        .detail-item strong {
          color: var(--primary-color);
          font-weight: 600;
        }
        
        .about-actions {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }
        
        .about-stats {
          position: relative;
        }
        
        .stat-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        
        .stat-card {
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: 0.75rem;
          padding: 1.5rem;
          text-align: center;
          transition: var(--transition);
        }
        
        .stat-card:hover {
          transform: translateY(-0.5rem);
          border-color: var(--primary-color);
        }
        
        .stat-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }
        
        .stat-icon svg {
          color: white;
        }
        
        .stat-number {
          font-size: 1.875rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 0.25rem;
        }
        
        .stat-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
          font-weight: 500;
        }
        
        @media (max-width: 1024px) {
          .about-content {
            gap: 3rem;
          }
        }
        
        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
          }
          
          .about-details {
            grid-template-columns: 1fr;
          }
          
          .about-actions {
            justify-content: center;
          }
        }
        
        @media (max-width: 480px) {
          .stat-grid {
            grid-template-columns: 1fr;
          }
          
          .about-actions {
            flex-direction: column;
            align-items: center;
          }
          
          .btn,
          .btn-outline {
            width: 100%;
            max-width: 250px;
          }
        }
      `}</style>
    </section>
  )
}

export default About