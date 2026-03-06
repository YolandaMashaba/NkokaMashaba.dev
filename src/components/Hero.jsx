// src/components/Hero.jsx - Minimal hero redesigned to match reference
import { useEffect, useState } from 'react'

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0)
  const roles = [
    'Product Designer',
    'Full‑Stack Developer',
    'UI/UX Designer',
    'Problem Solver'
  ]

  useEffect(() => {
    const id = setInterval(() => {
      setTextIndex((i) => (i + 1) % roles.length)
    }, 3000)
    return () => clearInterval(id)
  }, [roles.length])

  const handleContactClick = (e) => {
    e.preventDefault()
    const el = document.getElementById('contact')
    if (!el) return
    const offset = 80
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero fade-in">
      {/* Decorative top-right blob */}
      <div className="hero-blob" aria-hidden="true" />

      <div className="container">
        <div className="hero-content">
          {/* Left column: copy */}
          <div className="hero-text">
            {/* Paper container with torn edges and pin */}
            <div className="torn-paper-hero">
              <div className="torn-edge torn-edge-top" />
              <div className="torn-edge torn-edge-bottom" />
              
              {/* Single decorative push pin in middle */}
              <div className="pin pin-center" aria-hidden="true">
                <div className="pin-head" />
                <div className="pin-point" />
              </div>
              
              <div className="hero-content-box">
                <h1 className="hero-headline">
                  Hello,
                  <br />
                  My name is <span className="underline">Nkoka Mashaba</span>
                </h1>

                <p className="hero-lead">
                  I am a {roles[textIndex]}, helping teams deliver beautiful, intuitive online
                  experiences through solid research, thoughtful design and accessible code
                  <span className="cursor">|</span>
                </p>

                <div className="cta-row">
                  <a
                    href="#about"
                    className="pill"
                    onClick={(e) => {
                      e.preventDefault()
                      document
                        .getElementById('about')
                        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}
                  >
                    A little bit about me
                  </a>
                  <a href="#contact" className="text-link" onClick={handleContactClick}>
                    or get in touch →
                  </a>
                </div>
                
                <div className="cv-row">
                  <a href="/NkokaMashaba-CV.pdf" download className="cv-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right column left intentionally empty to keep airy composition */}
          <div className="hero-right" />
        </div>
      </div>
    </section>
  )
}

export default Hero

