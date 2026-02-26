// src/components/Footer.jsx - Minimal footer matching new aesthetic

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="copy">© {new Date().getFullYear()} Nkoka Mashaba</div>
        <nav className="foot-links" aria-label="Footer">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>

      <style>{`
        .site-footer { border-top: 1px solid var(--border-color); margin-top: 4rem; padding: 1.25rem 0; background: var(--card-bg); }
        .footer-inner { display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
        .copy { color: var(--text-secondary); font-size: .95rem; }
        .foot-links { display: flex; gap: 1rem; }
        .foot-links a { color: var(--text-secondary); text-decoration: none; border-bottom: 1px dashed transparent; padding-bottom: 1px; }
        .foot-links a:hover { color: var(--text-color); border-bottom-color: #cbd5e1; }
        @media (max-width: 640px) { .footer-inner { flex-direction: column; } }
      `}</style>
    </footer>
  )
}

export default Footer
