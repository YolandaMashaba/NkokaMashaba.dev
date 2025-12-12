// src/components/Header.jsx
import { useState } from 'react'

const Header = ({ activeSection, toggleTheme, darkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (id) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home') }}>
              NkokaMashaba.dev<span className="highlight"></span>
            </a>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              {navItems.map(item => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.id) }}
                    className={activeSection === item.id ? 'active' : ''}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="nav-actions">
            <button 
              className="theme-toggle" 
              onClick={toggleTheme}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>
            
            <button 
              className="menu-toggle" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
              )}
            </button>
            
            <a 
              href="#contact" 
              className="btn contact-btn"
              onClick={(e) => { e.preventDefault(); handleNavClick('contact') }}
            >
              Get In Touch
            </a>
          </div>
        </nav>
      </div>
      
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background-color: var(--card-bg);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-color);
          transition: var(--transition);
        }
        
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
          height: 80px;
        }
        
        .logo a {
          font-size: 1.75rem;
          font-weight: 700;
          text-decoration: none;
          color: var(--text-color);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .logo a .highlight {
          color: var(--primary-color);
        }
        
        .nav-menu ul {
          display: flex;
          list-style: none;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }
        
        .nav-menu a {
          text-decoration: none;
          color: var(--text-secondary);
          font-weight: 500;
          position: relative;
          padding: 0.5rem 0;
          transition: var(--transition);
        }
        
        .nav-menu a:hover,
        .nav-menu a.active {
          color: var(--primary-color);
        }
        
        .nav-menu a.active::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          background-color: var(--primary-color);
          bottom: 0;
          left: 0;
          border-radius: 1px;
        }
        
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .theme-toggle,
        .menu-toggle {
          background: none;
          border: none;
          color: var(--text-color);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
          width: 44px;
          height: 44px;
        }
        
        .theme-toggle:hover,
        .menu-toggle:hover {
          background-color: var(--border-color);
        }
        
        .contact-btn {
          display: none;
        }
        
        .menu-toggle {
          display: none;
        }
        
        @media (max-width: 768px) {
          .nav-menu {
            position: fixed;
            top: 80px;
            left: 0;
            width: 100%;
            background-color: var(--card-bg);
            border-top: 1px solid var(--border-color);
            border-bottom: 1px solid var(--border-color);
            padding: 1.5rem;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: var(--transition);
          }
          
          .nav-menu.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
            box-shadow: var(--shadow-lg);
          }
          
          .nav-menu ul {
            flex-direction: column;
            gap: 1rem;
          }
          
          .menu-toggle {
            display: flex;
          }
          
          .contact-btn {
            display: inline-flex;
          }
        }
        
        @media (min-width: 769px) {
          .nav-menu {
            display: block !important;
            opacity: 1 !important;
            visibility: visible !important;
            transform: none !important;
            position: static !important;
            background: none !important;
            border: none !important;
            padding: 0 !important;
          }
        }
      `}</style>
    </header>
  )
}

export default Header