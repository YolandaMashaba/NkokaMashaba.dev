// src/components/Hero.jsx - Updated version
import { useEffect, useState } from 'react'
import { config } from '../config'

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0)
  
  const roles = ["Full Stack Developer", "UI/UX Designer", "Problem Solver"]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % roles.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [roles.length])

  const handleContactClick = (e) => {
    e.preventDefault()
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      const offset = 80
      const elementPosition = contactSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="hero fade-in">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text slide-in-left">
            <h4 className="hero-subtitle">Hello, I'm</h4>
            <h1 className="hero-title">
              Nkoka <span className="highlight">Mashaba</span>
            </h1>
            
            <div className="typewriter">
              <h2 className="hero-role">
                {roles[textIndex]}
                <span className="cursor">|</span>
              </h2>
            </div>
            
            <p className="hero-description">
              I create beautiful, functional websites and applications 
              with a focus on user experience and clean code. Passionate 
              about turning ideas into interactive reality.
            </p>
            
            <div className="hero-buttons">
              <a 
                href="#projects" 
                className="btn"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                  <polyline points="2 17 12 22 22 17"/>
                  <polyline points="2 12 12 17 22 12"/>
                </svg>
                View Projects
              </a>
              <a 
                href="#contact" 
                className="btn-outline"
                onClick={handleContactClick}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
                Contact Me
              </a>
              <div className="hero-social" aria-label="Social links">
                {config.social?.github && (
                  <a href={config.social.github} target="_blank" rel="noopener noreferrer" className="btn-outline" aria-label="GitHub">
                    GitHub
                  </a>
                )}
                {config.social?.linkedin && (
                  <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline" aria-label="LinkedIn">
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
            
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">2</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">0+</div>
                <div className="stat-label">Projects</div>
              </div>
            </div>
          </div>
          
          <div className="hero-image slide-in-right">
            <div className="image-wrapper">
              <div className="gradient-border">
                <div className="profile-image">
                  <div className="profile-initials">NM</div>
                </div>
              </div>
              
              <div className="floating-elements">
                <div className="element element-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <div className="element element-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                  </svg>
                </div>
                <div className="element element-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .hero {
          padding-top: 120px;
          overflow: hidden;
        }
        
        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        
        .hero-text {
          max-width: 600px;
        }
        
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
          font-weight: 500;
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1rem;
        }
        
        .typewriter {
          height: 3.5rem;
          margin-bottom: 1.5rem;
          overflow: hidden;
        }
        
        .hero-role {
          font-size: 1.75rem;
          color: var(--secondary-color);
          font-weight: 600;
          display: inline-block;
          animation: slideIn 0.5s ease;
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .cursor {
          animation: blink 1s infinite;
          margin-left: 2px;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .hero-description {
          font-size: 1.125rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.7;
        }
        
        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }
        
        .btn-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          border-radius: 9999px;
          font-weight: 600;
          text-decoration: none;
          border: 1px solid var(--border-color);
          color: var(--text-color);
          background: transparent;
          cursor: pointer;
          transition: var(--transition);
          font-size: 1rem;
        }
        
        .btn-outline:hover {
          border-color: var(--primary-color);
          color: var(--primary-color);
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
        }
        
        .hero-stats {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }
        
        .stat {
          text-align: center;
        }
        
        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 0.25rem;
        }
        
        .stat-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }
        
        .hero-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .image-wrapper {
          position: relative;
          width: 100%;
          max-width: 400px;
        }
        
        .gradient-border {
          position: relative;
          padding: 8px;
          border-radius: 50%;
          background: transparent;
          border: 1px solid var(--border-color);
        }
        
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .profile-image {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: var(--card-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
        }
        
        .profile-initials {
          font-size: 5rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .floating-elements {
          display: none;
        }
        
        .element {
          position: absolute;
          background: var(--card-bg);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-lg);
          border: 2px solid var(--border-color);
          animation: float 3s ease-in-out infinite;
        }
        
        .element svg {
          color: var(--primary-color);
        }
        
        .element-1 {
          width: 60px;
          height: 60px;
          top: 10%;
          right: 5%;
          animation-delay: 0s;
        }
        
        .element-2 {
          width: 50px;
          height: 50px;
          bottom: 20%;
          left: 5%;
          animation-delay: 0.5s;
        }
        
        .element-3 {
          width: 70px;
          height: 70px;
          bottom: 10%;
          right: 15%;
          animation-delay: 1s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @media (max-width: 1024px) {
          .hero-content {
            gap: 3rem;
          }
          
          .hero-title {
            font-size: 3rem;
          }
          
          .profile-image {
            width: 280px;
            height: 280px;
          }
        }
        
        @media (max-width: 768px) {
          .hero {
            padding-top: 100px;
          }
          
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-role {
            font-size: 1.5rem;
          }
          
          .hero-buttons {
            justify-content: center;
          }
          
          .hero-stats {
            justify-content: center;
          }
          
          .image-wrapper {
            margin: 0 auto;
          }
          
          .profile-image {
            width: 250px;
            height: 250px;
          }
          
          .profile-initials {
            font-size: 4rem;
          }
        }
        
        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-role {
            font-size: 1.25rem;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .btn,
          .btn-outline {
            width: 100%;
            max-width: 250px;
          }
          
          .profile-image {
            width: 220px;
            height: 220px;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero