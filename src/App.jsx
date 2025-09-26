import { useState, useEffect } from 'react'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import HomeSection from './components/sections/HomeSection'
import AboutSection from './components/sections/AboutSection'
import ProjectsSection from './components/sections/ProjectsSection'
import HobbiesSection from './components/sections/HobbiesSection'
import ContactSection from './components/sections/ContactSection'
import ExperienceSection from './components/sections/ExperienceSection'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [darkMode, setDarkMode] = useState(false)

  // Handle dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  // Section renderer - maps section names to components
  const renderSection = () => {
    const sections = {
      home: <HomeSection />,
      about: <AboutSection />,
      projects: <ProjectsSection />,
      hobbies: <HobbiesSection />,
      contact: <ContactSection />,
      experience: <ExperienceSection />
    }

    return sections[activeSection] || sections.home
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>
        {renderSection()}
        {/* Show experience section on home page */}
        {activeSection === 'home' && <ExperienceSection />}
      </main>

      <Footer />
    </div>
  )
}

export default App