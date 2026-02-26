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
          </div>

          {/* Right column left intentionally empty to keep airy composition */}
          <div className="hero-right" />
        </div>
      </div>

      <style>{`
        .hero { position: relative; padding-top: 140px; overflow: hidden; }

        /* Organic pink shape on the right, with a soft inner stroke */
        .hero-blob {
          position: absolute;
          top: -140px;
          right: -180px;
          width: 60vw;
          height: 75vh;
          background: #f6d6dc; /* soft pink */
          border-radius: 56% 44% 38% 62% / 60% 38% 62% 40%;
          box-shadow: inset 0 0 0 1px rgba(0,0,0,0.04);
          z-index: 0;
        }
        .hero-blob::after {
          content: '';
          position: absolute;
          inset: 18px 22px 24px 18px; /* creates a subtle inner white stroke */
          border: 2px solid rgba(255,255,255,0.95);
          border-radius: 56% 44% 38% 62% / 60% 38% 62% 40%;
          pointer-events: none;
        }
        /* Slightly dim and shift in dark mode */
        .dark .hero-blob { background: #7b3f4c; box-shadow: inset 0 0 0 1px rgba(255,255,255,0.05); opacity: 0.4; }
        .dark .hero-blob::after { border-color: rgba(255,255,255,0.25); }

        .hero-content {
          position: relative;
          z-index: 1; /* above blob */
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3rem;
          align-items: center;
          min-height: 60vh;
        }

        .hero-text { max-width: 760px; }

        .hero-headline {
          font-family: ui-serif, Georgia, 'Times New Roman', serif;
          font-weight: 800;
          font-size: clamp(2.6rem, 5.2vw, 4.25rem);
          line-height: 1.1;
          color: var(--text-color);
          letter-spacing: -0.01em;
          margin-bottom: 1.1rem;
        }
        .underline { box-shadow: inset 0 -0.28em 0 rgba(255, 192, 203, 0.55); }

        .hero-lead {
          max-width: 64ch;
          font-size: 1.0625rem;
          color: #6b7280; /* neutral-500 */
          margin-bottom: 1.5rem;
        }
        .dark .hero-lead { color: var(--text-secondary); }

        .cursor { margin-left: 3px; animation: blink 1s steps(2, start) infinite; }
        @keyframes blink { 50% { opacity: 0; } }

        .cta-row { display: flex; align-items: center; gap: 1rem; }
        .pill {
          background: #d7f3fb; /* light cyan */
          color: #0f172a;
          padding: 0.7rem 1.1rem;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 2px 0 rgba(0,0,0,0.06);
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .pill:hover { transform: translateY(-2px); box-shadow: 0 6px 14px rgba(16, 185, 129, 0.15); }
        .dark .pill { color: #e2e8f0; }

        .text-link { color: var(--text-secondary); text-decoration: none; border-bottom: 1px dashed #cbd5e1; padding-bottom: 2px; }
        .text-link:hover { color: var(--text-color); border-bottom-color: var(--text-color); }

        .hero-right { min-height: 360px; }

        @media (max-width: 1024px) {
          .hero-blob { width: 66vw; height: 58vh; right: -230px; top: -160px; }
        }
        @media (max-width: 768px) {
          .hero { padding-top: 110px; }
          .hero-content { grid-template-columns: 1fr; min-height: 46vh; }
          .hero-right { display: none; }
          .hero-blob { width: 86vw; height: 52vh; right: -260px; top: -180px; }
          .cta-row { flex-wrap: wrap; }
        }
        @media (max-width: 420px) {
          .hero-blob { width: 95vw; height: 50vh; right: -290px; top: -200px; }
        }
      `}</style>
    </section>
  )
}

export default Hero
