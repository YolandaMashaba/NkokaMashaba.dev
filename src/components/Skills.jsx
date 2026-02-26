// src/components/Skills.jsx - Simple chip-based skills (no progress bars)
import { useEffect, useState } from 'react'

const Skills = () => {
  const [visible, setVisible] = useState([false, false, false])

  const skillCategories = [
    { title: 'Frontend', skills: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Vite', 'Blazor'] },
    { title: 'Backend', skills: ['Node.js', 'MongoDB', 'PostgreSQL', 'REST APIs', 'Java', 'C#'] },
    { title: 'Tools & Others', skills: ['Git', 'Figma', 'Testing', 'CI/CD'] },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = parseInt(entry.target.dataset.index)
            setVisible((prev) => {
              const next = [...prev]
              next[i] = true
              return next
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    document.querySelectorAll('.skill-category').forEach((el, index) => {
      el.dataset.index = index
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="skills fade-in">
      <div className="container">
        <h2 className="skills-title">My <span className="serif">skills</span></h2>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className={`skill-category pastel-card ${visible[categoryIndex] ? 'in' : ''}`}>
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="chip-wrap">
                {category.skills.map((name, i) => (
                  <span key={i} className="chip">{name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-note">
          <p className="muted center">Constantly learning and exploring new patterns. Recently: performance, serverless, advanced React.</p>
          <div className="chip-row">
            {['React 18', 'Next.js', 'Testing', 'Serverless', 'Three.js'].map((t) => (
              <span className="chip" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .skills-title { font-family: ui-serif, Georgia, 'Times New Roman', serif; font-size: 2.25rem; font-weight: 800; margin-bottom: 2rem; letter-spacing: -0.01em; }
        .skills-title .serif { box-shadow: inset 0 -0.25em 0 rgba(255, 192, 203, 0.55); }

        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; margin-bottom: 2rem; }
        .pastel-card { background: #fff; border: 1px solid var(--border-color); border-radius: 0.75rem; padding: 1.25rem; box-shadow: var(--shadow-sm); opacity: 0; transform: translateY(12px); transition: opacity .35s ease, transform .35s ease; }
        .pastel-card.in { opacity: 1; transform: translateY(0); }
        .category-header { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem; }
        .category-icon { font-size: 1.3rem; }
        .skill-category h3 { font-size: 1.1rem; font-weight: 600; margin: 0; }

        .chip-wrap { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.5rem; }
        .chip { background: #f8fafc; border: 1px solid var(--border-color); color: var(--text-color); padding: 0.45rem 0.75rem; border-radius: 999px; font-size: 0.9rem; }

        .skills-note { text-align: center; }
        .muted { color: #6b7280; }
        .center { text-align: center; }
        .chip-row { display: flex; justify-content: center; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.75rem; }

        @media (max-width: 768px) { .skills-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}

export default Skills
