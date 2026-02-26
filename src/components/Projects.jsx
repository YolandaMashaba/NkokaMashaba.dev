// src/components/Projects.jsx - Minimal/pastel layout
import { useState, useMemo, useCallback } from 'react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    { id: 1, title: 'E-Commerce Platform', description: 'A full-featured online shopping platform with cart, checkout, and payment integration.', category: 'web', tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'], github: '#', demo: '#', imageColor: '#fde68a', featured: true },
    { id: 2, title: 'Task Management App', description: 'A productivity application for managing tasks with team collaboration features.', category: 'web', tags: ['React', 'Firebase', 'Material-UI', 'Context API'], github: '#', demo: '#', imageColor: '#c7d2fe' },
    { id: 3, title: 'Weather Dashboard', description: 'Real-time weather application with interactive maps and forecasting.', category: 'web', tags: ['React', 'API Integration', 'Chart.js', 'OpenWeather'], github: '#', demo: '#', imageColor: '#a7f3d0' },
    { id: 4, title: 'Fitness Tracker', description: 'Mobile-responsive fitness application for tracking workouts and progress.', category: 'mobile', tags: ['React Native', 'Redux', 'Firebase', 'HealthKit'], github: '#', demo: '#', imageColor: '#fca5a5' },
    { id: 5, title: 'Portfolio Website', description: 'A modern portfolio website with animations and dark mode.', category: 'web', tags: ['React', 'Vite', 'CSS', 'Animations'], github: '#', demo: '#', imageColor: '#bae6fd' },
    { id: 6, title: 'Social Media Dashboard', description: 'Analytics dashboard for tracking social media metrics.', category: 'web', tags: ['React', 'D3.js', 'Express', 'Socket.io'], github: '#', demo: '#', imageColor: '#fbcfe8' },
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'featured', label: 'Featured' },
  ]

  const filteredProjects = useMemo(() => {
    let filtered =
      activeFilter === 'all'
        ? projects
        : activeFilter === 'featured'
        ? projects.filter((p) => p.featured)
        : projects.filter((p) => p.category === activeFilter)
    return filtered.map((p, i) => ({ ...p, animationDelay: `${i * 0.1}s` }))
  }, [activeFilter, projects])

  const handleFilterClick = useCallback((id) => setActiveFilter(id), [])

  return (
    <section id="projects" className="projects fade-in">
      <div className="container">
        <h2 className="projects-title">My <span className="serif">Projects</span></h2>

        <div className="projects-intro">
          <p>Selected work. Clean, approachable UI with a focus on usability and performance.</p>
        </div>

        <div className="project-filters">
          {filters.map((f) => (
            <button key={f.id} className={`filter-btn ${activeFilter === f.id ? 'active' : ''}`} onClick={() => handleFilterClick(f.id)}>
              {f.label}
              {f.id === 'featured' && <span className="featured-badge"></span>}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card pastel-card" style={{ animationDelay: project.animationDelay }}>
              <div className="project-header">
                <div className="thumb" style={{ background: project.imageColor }} />
                <div className="project-badges">
                  {project.featured && <span className="featured-badge">Featured</span>}
                  <span className="category-badge">{project.category}</span>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((t, i) => (
                    <span key={i} className="project-tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="project-actions">
                <a href={project.demo} className="text-link" target="_blank" rel="noopener noreferrer">Live demo →</a>
                <a href={project.github} className="text-link" target="_blank" rel="noopener noreferrer">View code →</a>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Want to see more? Check my GitHub for additional projects and experiments.</p>
          <a href="https://github.com" className="pill" target="_blank" rel="noopener noreferrer">View all projects</a>
        </div>
      </div>

      <style jsx>{`
        .projects-title { font-family: ui-serif, Georgia, 'Times New Roman', serif; font-size: 2.25rem; font-weight: 800; margin-bottom: 2rem; letter-spacing: -0.01em; }
        .projects-title .serif { box-shadow: inset 0 -0.25em 0 rgba(255, 192, 203, 0.55); }
        .projects-intro { text-align: center; max-width: 700px; margin: 0 auto 2rem; color: var(--text-secondary); }

        .project-filters { display: flex; justify-content: center; gap: 0.5rem; margin-bottom: 2rem; flex-wrap: wrap; }
        .filter-btn { padding: 0.55rem 1.15rem; border-radius: 9999px; border: 1px solid var(--border-color); background: #fff; color: var(--text-secondary); font-weight: 500; cursor: pointer; transition: var(--transition); display: flex; align-items: center; gap: 0.4rem; }
        .filter-btn:hover { border-color: var(--primary-color); color: var(--primary-color); }
        .filter-btn.active { background: #d7f3fb; border-color: #bae6fd; color: #0f172a; }

        .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.25rem; margin-bottom: 2rem; }
        .pastel-card { background: #fff; border: 1px solid var(--border-color); border-radius: 0.75rem; padding: 1.25rem; box-shadow: var(--shadow-sm); opacity: 0; transform: translateY(20px); animation: fadeInUp 0.6s ease-out forwards; }

        @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }

        .project-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; }
        .thumb { width: 100%; height: 180px; border-radius: 0.6rem; background: #e5e7eb; box-shadow: inset 0 0 0 1px rgba(0,0,0,0.04); }
        .project-badges { display: flex; gap: 0.5rem; }
        .project-badges span { padding: 0.25rem 0.6rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 500; }
        .featured-badge { background: #fde68a; color: #92400e; }
        .category-badge { background: #f8fafc; color: var(--text-secondary); border: 1px solid var(--border-color); }

        .project-title { font-size: 1.25rem; font-weight: 600; margin: 0.25rem 0 0.6rem; color: var(--text-color); }
        .project-description { color: var(--text-secondary); margin-bottom: 1rem; line-height: 1.6; }
        .project-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 0.6rem; }
        .project-tag { background: #f8fafc; color: var(--text-secondary); padding: 0.35rem 0.7rem; border-radius: 9999px; font-size: 0.85rem; border: 1px solid var(--border-color); }

        .project-actions { display: flex; gap: 1rem; padding-top: 0.8rem; border-top: 1px solid var(--border-color); }
        .text-link { color: var(--text-secondary); text-decoration: none; border-bottom: 1px dashed #cbd5e1; padding-bottom: 2px; }
        .text-link:hover { color: var(--text-color); border-bottom-color: var(--text-color); }

        .projects-cta { text-align: center; padding: 2rem; background: var(--card-bg); border-radius: 1rem; border: 1px solid var(--border-color); }
        .projects-cta p { color: var(--text-secondary); margin-bottom: 0.75rem; max-width: 520px; margin-left: auto; margin-right: auto; }
        .pill { background: #d7f3fb; color: #0f172a; padding: 0.6rem 1rem; border-radius: 12px; font-weight: 600; text-decoration: none; box-shadow: 0 2px 0 rgba(0,0,0,0.06); }

        @media (max-width: 768px) { .projects-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}

export default Projects
