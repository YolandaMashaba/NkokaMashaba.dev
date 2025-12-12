// src/App.jsx
import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem('portfolio-theme')
    return savedTheme ? savedTheme === 'dark' : false
  })
  
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light')
    
    // Add/remove dark class to body for better browser compatibility
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Initial check
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="App">
      <Header 
        activeSection={activeSection} 
        toggleTheme={toggleTheme} 
        darkMode={darkMode}
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App