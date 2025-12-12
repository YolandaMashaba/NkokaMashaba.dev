// src/components/Skills.jsx
import { useEffect, useState } from 'react'

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState([])

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "💻",
      skills: [
        { name: "React", level: 95, color: "#61DAFB" },
        { name: "JavaScript", level: 90, color: "#F7DF1E" },
        { name: "TypeScript", level: 85, color: "#3178C6" },
        { name: "HTML/CSS", level: 95, color: "#E34F26" },
        { name: "Vite", level: 85, color: "#646CFF" },
        { name: "Blazor", level: 85, color: "#646CFF" }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 85, color: "#339933" },
        { name: "MongoDB", level: 75, color: "#47A248" },
        { name: "PostgreSQL", level: 70, color: "#336791" },
        { name: "REST APIs", level: 90, color: "#FF6B6B" },
        { name: "Java", level: 65, color: "#FF9900" },
        { name: "C#", level: 80, color: "#C21325" },
      ]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 90, color: "#F05032" },
        { name: "Figma", level: 75, color: "#F24E1E" },
        
      ]
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const categoryIndex = parseInt(entry.target.dataset.index)
            const skills = skillCategories[categoryIndex].skills
            setAnimatedSkills(prev => {
              const newState = [...prev]
              newState[categoryIndex] = skills
              return newState
            })
          }
        })
      },
      { threshold: 0.5 }
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
        <h2 className="section-title">
          My <span className="highlight">Skills</span>
        </h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category card">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {(animatedSkills[categoryIndex] || []).map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: skill.color,
                          backgroundImage: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-footer card">
          <h3>Always Learning</h3>
          <p>
            I'm constantly exploring new technologies and improving my skills. 
            Currently diving deeper into performance optimization, serverless 
            architecture, and advanced React patterns.
          </p>
          <div className="learning-tags">
            <span className="tag">React 18</span>
            <span className="tag">Next.js 14</span>
            <span className="tag">Web3</span>
            <span className="tag">Three.js</span>
            <span className="tag">Testing</span>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .category-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        .category-icon {
          font-size: 2rem;
        }
        
        .skill-category h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-color);
          margin: 0;
        }
        
        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .skill-item {
          width: 100%;
        }
        
        .skill-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        
        .skill-name {
          font-weight: 500;
          color: var(--text-color);
        }
        
        .skill-percent {
          font-weight: 600;
          color: var(--primary-color);
          font-size: 0.875rem;
        }
        
        .skill-bar {
          height: 8px;
          background-color: var(--border-color);
          border-radius: 4px;
          overflow: hidden;
          position: relative;
        }
        
        .skill-progress {
          height: 100%;
          border-radius: 4px;
          width: 0;
          transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .skill-progress::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          animation: shimmer 2s infinite;
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .skills-footer {
          text-align: center;
          background: linear-gradient(135deg, var(--primary-color)15, var(--card-bg) 15%);
        }
        
        .skills-footer h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--primary-color);
        }
        
        .skills-footer p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .learning-tags {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        
        .tag {
          background: var(--bg-color);
          color: var(--primary-color);
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 500;
          border: 1px solid var(--border-color);
          transition: var(--transition);
        }
        
        .tag:hover {
          background: var(--primary-color);
          color: white;
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
          
          .skill-category {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Skills