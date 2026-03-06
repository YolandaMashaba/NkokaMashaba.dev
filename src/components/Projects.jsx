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
            <div key={project.id} className="project-card" style={{ animationDelay: project.animationDelay }}>
              <div className="torn-paper-project">
                <div className="torn-edge torn-edge-top"></div>
                
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
                
                <div className="torn-edge torn-edge-bottom"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Want to see more? Check my GitHub for additional projects and experiments.</p>
          <a href="https://github.com" className="pill" target="_blank" rel="noopener noreferrer">View all projects</a>
        </div>
      </div>
    </section>
  )
}

export default Projects

