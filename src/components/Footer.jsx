// src/components/Footer.jsx
import { config } from '../config'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <a href="#home" onClick={scrollToTop}>
                NkokaMashaba.dev<span className="highlight"></span>
              </a>
            </div>
            <p className="footer-tagline">
              Creating digital experiences that make a difference.
            </p>
            <div className="footer-social">
              {config.social?.github && (
                <a href={config.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                </a>
              )}
              {config.social?.linkedin && (
                <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToTop() }}>Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#">Web Development</a></li>
              <li><a href="#">UI/UX Design</a></li>
              <li><a href="#">React Development</a></li>
              <li><a href="#">Consulting</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Johannesburg, Gauteng
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                nkokayolanda@gmail.com
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +27 (64) 011 0752
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Nkoka Mashaba. All rights reserved.</p>
            <p>Built with React & Vite </p>
          </div>
          
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"/>
            </svg>
          </button>
        </div>
      </div>
      
      <style jsx>{`
        .footer {
          background: var(--card-bg);
          border-top: 1px solid var(--border-color);
          padding: 4rem 0 2rem;
          transition: var(--transition);
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        
        .footer-section h4 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--text-color);
        }
        
        .footer-logo a {
          font-size: 1.75rem;
          font-weight: 700;
          text-decoration: none;
          color: var(--text-color);
          display: inline-block;
          margin-bottom: 1rem;
        }
        
        .footer-logo a .highlight {
          color: var(--primary-color);
        }
        
        .footer-tagline {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .footer-social {
          display: flex;
          gap: 1rem;
        }
        
        .footer-social a {
          width: 40px;
          height: 40px;
          background: var(--bg-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-color);
          transition: var(--transition);
          text-decoration: none;
        }
        
        .footer-social a:hover {
          background: var(--primary-color);
          color: white;
          transform: translateY(-3px);
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-links li {
          margin-bottom: 0.75rem;
        }
        
        .footer-links a {
          color: var(--text-secondary);
          text-decoration: none;
          transition: var(--transition);
          display: inline-block;
        }
        
        .footer-links a:hover {
          color: var(--primary-color);
          transform: translateX(5px);
        }
        
        .footer-contact {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-contact li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 1rem;
          color: var(--text-secondary);
        }
        
        .footer-contact svg {
          flex-shrink: 0;
          color: var(--primary-color);
        }
        
        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .footer-copyright p {
          color: var(--text-secondary);
          margin: 0.25rem 0;
          font-size: 0.875rem;
        }
        
        .back-to-top {
          width: 48px;
          height: 48px;
          background: var(--primary-color);
          color: white;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }
        
        .back-to-top:hover {
          background: var(--secondary-color);
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
        }
        
        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }
        
        @media (max-width: 768px) {
          .footer {
            padding: 3rem 0 1.5rem;
          }
          
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .footer-section {
            text-align: center;
          }
          
          .footer-social {
            justify-content: center;
          }
          
          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }
        }
        
        @media (max-width: 480px) {
          .footer {
            padding: 2rem 0 1rem;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer