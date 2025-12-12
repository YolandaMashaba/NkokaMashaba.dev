// src/components/Projects.jsx - Fixed version
import { useState, useMemo, useCallback } from 'react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with cart, checkout, and payment integration.",
      category: "web",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      github: "#",
      demo: "#",
      imageColor: "#4f46e5",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application for managing tasks with team collaboration features.",
      category: "web",
      tags: ["React", "Firebase", "Material-UI", "Context API"],
      github: "#",
      demo: "#",
      imageColor: "#7c3aed"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather application with interactive maps and forecasting.",
      category: "web",
      tags: ["React", "API Integration", "Chart.js", "OpenWeather"],
      github: "#",
      demo: "#",
      imageColor: "#10b981"
    },
    {
      id: 4,
      title: "Fitness Tracker",
      description: "Mobile-responsive fitness application for tracking workouts and progress.",
      category: "mobile",
      tags: ["React Native", "Redux", "Firebase", "HealthKit"],
      github: "#",
      demo: "#",
      imageColor: "#f59e0b"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern portfolio website with animations and dark mode.",
      category: "web",
      tags: ["React", "Vite", "CSS", "Animations"],
      github: "#",
      demo: "#",
      imageColor: "#ef4444"
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for tracking social media metrics.",
      category: "web",
      tags: ["React", "D3.js", "Express", "Socket.io"],
      github: "#",
      demo: "#",
      imageColor: "#3b82f6"
    },
    {
      id: 7,
      title: "Recipe Finder",
      description: "Find recipes based on ingredients you have at home.",
      category: "web",
      tags: ["React", "Spoonacular API", "Tailwind", "Vite"],
      github: "#",
      demo: "#",
      imageColor: "#8b5cf6"
    },
    {
      id: 8,
      title: "Travel Planning App",
      description: "Plan your trips with itinerary and budget management.",
      category: "mobile",
      tags: ["React Native", "Maps API", "Firebase", "Stripe"],
      github: "#",
      demo: "#",
      imageColor: "#06b6d4"
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'featured', label: 'Featured' }
  ]

  // Use useMemo to compute filtered projects without causing re-renders
  const filteredProjects = useMemo(() => {
    let filtered = activeFilter === 'all' 
      ? projects 
      : activeFilter === 'featured'
      ? projects.filter(project => project.featured)
      : projects.filter(project => project.category === activeFilter)
    
    // Add animation delay to each project
    return filtered.map((project, index) => ({
      ...project,
      animationDelay: `${index * 0.1}s`
    }))
  }, [activeFilter, projects])

  const handleFilterClick = useCallback((filterId) => {
    setActiveFilter(filterId)
  }, [])

  return (
    <section id="projects" className="projects fade-in">
      <div className="container">
        <h2 className="section-title">
          My <span className="highlight">Projects</span>
        </h2>
        
        <div className="projects-intro">
          <p>
            Here are some of my recent projects. Each project represents 
            a unique challenge and solution, showcasing my skills and 
            approach to problem-solving.
          </p>
        </div>
        
        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => handleFilterClick(filter.id)}
            >
              {filter.label}
              {filter.id === 'featured' && (
                <span className="featured-badge">🔥</span>
              )}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="project-card card"
              style={{ animationDelay: project.animationDelay }}
            >
              <div className="project-header">
                <div 
                  className="project-icon"
                  style={{ backgroundColor: project.imageColor }}
                >
                  {project.title.split(' ').map(word => word[0]).join('')}
                </div>
                <div className="project-badges">
                  {project.featured && (
                    <span className="featured-badge">Featured</span>
                  )}
                  <span className="category-badge">{project.category}</span>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-actions">
                <a 
                  href={project.demo} 
                  className="project-link demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2 2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Live Demo
                </a>
                <a 
                  href={project.github} 
                  className="project-link github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-cta">
          <p>Want to see more? Check out my GitHub for additional projects and contributions.</p>
          <a 
            href="https://github.com" 
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            View All Projects
          </a>
        </div>
      </div>
      
      <style jsx>{`
        .projects-intro {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 3rem;
          color: var(--text-secondary);
        }
        
        .project-filters {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }
        
        .filter-btn {
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          border: 2px solid var(--border-color);
          background: transparent;
          color: var(--text-secondary);
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .filter-btn:hover {
          border-color: var(--primary-color);
          color: var(--primary-color);
        }
        
        .filter-btn.active {
          background: var(--primary-color);
          border-color: var(--primary-color);
          color: white;
        }
        
        .featured-badge {
          font-size: 0.75rem;
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .project-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }
        
        .project-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.25rem;
          color: white;
          box-shadow: var(--shadow-md);
        }
        
        .project-badges {
          display: flex;
          gap: 0.5rem;
        }
        
        .project-badges span {
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;
        }
        
        .featured-badge {
          background: linear-gradient(135deg, #f59e0b, #fbbf24);
          color: white;
        }
        
        .category-badge {
          background: var(--bg-color);
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
        }
        
        .project-content {
          flex: 1;
        }
        
        .project-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text-color);
        }
        
        .project-description {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        
        .project-tag {
          background: var(--bg-color);
          color: var(--text-secondary);
          padding: 0.375rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 500;
          border: 1px solid var(--border-color);
        }
        
        .project-actions {
          display: flex;
          gap: 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-color);
        }
        
        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 1.25rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.875rem;
          transition: var(--transition);
          flex: 1;
          justify-content: center;
        }
        
        .project-link.demo {
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          color: white;
        }
        
        .project-link.github {
          background: var(--bg-color);
          color: var(--text-color);
          border: 1px solid var(--border-color);
        }
        
        .project-link:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        
        .projects-cta {
          text-align: center;
          padding: 3rem;
          background: var(--card-bg);
          border-radius: 1rem;
          border: 1px solid var(--border-color);
        }
        
        .projects-cta p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }
        
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          
          .project-filters {
            gap: 0.5rem;
          }
          
          .filter-btn {
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
          }
          
          .projects-cta {
            padding: 2rem 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .project-actions {
            flex-direction: column;
          }
          
          .project-link {
            width: 100%;
          }
        }
      `}</style>
    </section>
  )
}

export default Projects