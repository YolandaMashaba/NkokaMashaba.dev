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
            <span className="logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 40 40">
                <defs>
                  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#f6d6dc', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#efc4cf', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <rect width="40" height="40" rx="8" fill="url(#logoGrad)"/>
                <text x="20" y="27" font-family="Caveat, cursive" font-size="22" font-weight="700" fill="#111827" text-anchor="middle">N</text>
              </svg>
            </span>
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
    </header>
  )
}

export default Header

