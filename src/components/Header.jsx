// src/components/Header.jsx - Minimal navbar (dark mode removed)
import { useState } from 'react'

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleNavClick = (id) => {
    setIsMenuOpen(false)
    const el = document.getElementById(id)
    if (!el) return
    const offset = 80
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  return (
    <header className="site-header">
      <div className="container">
        <nav className="nav">
          <a href="#home" className="brand" onClick={(e) => { e.preventDefault(); handleNavClick('home') }}>
            NkokaMashaba.dev
          </a>

          <button className="hamburger" aria-label="Toggle menu" onClick={() => setIsMenuOpen((v) => !v)}>
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            )}
          </button>

          <ul className={`links ${isMenuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
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
        </nav>
      </div>

      <style>{`
        .site-header { position: fixed; top: 0; left: 0; right: 0; height: 80px; background: rgba(255,255,255,0.85); backdrop-filter: saturate(160%) blur(8px); border-bottom: 1px solid var(--border-color); z-index: 1000; }
        .nav { display: flex; align-items: center; justify-content: space-between; height: 80px; }
        .brand { font-weight: 700; text-decoration: none; color: var(--text-color); letter-spacing: -0.01em; }
        .links { display: flex; align-items: center; list-style: none; gap: 1.25rem; margin: 0; padding: 0; }
        .links a { text-decoration: none; color: var(--text-secondary); padding: 0.25rem 0; }
        .links a.active, .links a:hover { color: var(--text-color); }
        .links a.active { box-shadow: inset 0 -2px 0 #f6d6dc; }
        .hamburger { display: none; background: none; border: none; color: var(--text-color); padding: 0.4rem; border-radius: 8px; }
        .hamburger:hover { background: var(--border-color); }
        @media (max-width: 768px) {
          .hamburger { display: inline-flex; }
          .links { position: fixed; top: 80px; left: 0; right: 0; background: #fff; border-bottom: 1px solid var(--border-color); transform: translateY(-110%); opacity: 0; visibility: hidden; transition: transform .25s ease, opacity .25s ease; flex-direction: column; align-items: flex-start; gap: 0.75rem; padding: 1rem 1.5rem; }
          .links.open { transform: translateY(0); opacity: 1; visibility: visible; }
        }
      `}</style>
    </header>
  )
}

export default Header
