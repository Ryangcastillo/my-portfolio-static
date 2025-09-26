import PropTypes from 'prop-types'
import { Button } from '@/components/ui/button'
import { 
  Moon, Sun, User, FolderOpen, Heart, Home
} from 'lucide-react'

const Navigation = ({ 
  activeSection, 
  setActiveSection, 
  darkMode, 
  setDarkMode 
}) => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">RC</span>
            </div>
            <span className="font-semibold text-gray-900 dark:text-white">ryan castillo</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => setActiveSection('home')}
              className={`text-sm font-medium transition-colors flex items-center space-x-1 ${activeSection === 'home' ? 'text-green-600' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
            <button 
              onClick={() => setActiveSection('about')}
              className={`text-sm font-medium transition-colors flex items-center space-x-1 ${activeSection === 'about' ? 'text-green-600' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}
            >
              <User className="w-4 h-4" />
              <span>About Me</span>
            </button>
            <button 
              onClick={() => setActiveSection('projects')}
              className={`text-sm font-medium transition-colors flex items-center space-x-1 ${activeSection === 'projects' ? 'text-green-600' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}
            >
              <FolderOpen className="w-4 h-4" />
              <span>Projects</span>
            </button>
            <button 
              onClick={() => setActiveSection('hobbies')}
              className={`text-sm font-medium transition-colors flex items-center space-x-1 ${activeSection === 'hobbies' ? 'text-green-600' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}
            >
              <Heart className="w-4 h-4" />
              <span>Hobbies</span>
            </button>
            <button 
              onClick={() => setActiveSection('contact')}
              className={`text-sm font-medium transition-colors ${activeSection === 'contact' ? 'text-green-600' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}
            >
              Contact
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button variant="outline" size="sm">
              Download CV
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navigation.propTypes = {
  activeSection: PropTypes.string.isRequired,
  setActiveSection: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired
}

export default Navigation