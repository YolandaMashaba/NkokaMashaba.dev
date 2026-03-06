// src/components/Footer.jsx - Minimal footer matching new aesthetic

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="torn-paper-footer">
        <div className="torn-edge torn-edge-top"></div>
        
        <div className="container footer-inner">
          <div className="copy">© {new Date().getFullYear()} Nkoka Mashaba</div>
          <nav className="foot-links" aria-label="Footer">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        
        <div className="torn-edge torn-edge-bottom"></div>
      </div>
    </footer>
  )
}

export default Footer

