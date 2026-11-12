// src/components/Skills.jsx - Simple chip-based skills (no progress bars)
import { useEffect, useState } from 'react'

const Skills = () => {
  const skillCategories = [
    { title: 'Frontend', skills: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Vite', 'Blazor'] },
    { title: 'Backend', skills: ['Node.js', 'MongoDB', 'PostgreSQL', 'REST APIs', 'Java', 'C#', '.NET'] },
    { title: 'Mobile', skills: ['Android Development', 'Kotlin'] },
    { title: 'Tools & Others', skills: ['Git', 'Figma', 'Testing', 'CI/CD'] },
  ]

  const [visible, setVisible] = useState(() => skillCategories.map(() => false))

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
        <h2 className="skills-title">My <span className="serif">Skills</span></h2>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className={`skill-category ${visible[categoryIndex] ? 'in' : ''}`}>
              <div className="torn-paper-skill">
                <div className="torn-edge torn-edge-top"></div>
                
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h3>{category.title}</h3>
                </div>
                <div className="chip-wrap">
                  {category.skills.map((name, i) => (
                    <span key={i} className="chip">{name}</span>
                  ))}
                </div>
                
                <div className="torn-edge torn-edge-bottom"></div>
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
    </section>
  )
}

export default Skills

