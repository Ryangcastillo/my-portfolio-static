import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Mail, Phone, Linkedin, Github, ExternalLink, BarChart3, Database, Brain, Zap, Users, TrendingUp,
  Moon, Sun, User, FolderOpen, Heart, Home, Calendar, MapPin, Award, BookOpen, Camera, Music,
  Gamepad2, Plane, Coffee, Code, Trophy, Target, Clock, Star
} from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const skills = [
    { name: 'Power BI', category: 'Analytics', icon: BarChart3 },
    { name: 'Python', category: 'Programming', icon: Brain },
    { name: 'SQL', category: 'Database', icon: Database },
    { name: 'D365 FinOps', category: 'Systems', icon: Zap },
    { name: 'Process Automation', category: 'Optimization', icon: TrendingUp },
    { name: 'Stakeholder Management', category: 'Leadership', icon: Users }
  ]

  const projects = [
    {
      title: 'NZ Government Procurement Analytics Dashboard',
      description: 'Comprehensive analysis of New Zealand government procurement patterns using GETS data. Built interactive Power BI dashboards analyzing spending patterns, regional distribution, and supplier diversity across 36 data dimensions.',
      technologies: ['Power BI', 'Python', 'SQL', 'Excel'],
      highlights: [
        'Analyzed 14MB+ of procurement data',
        'Created automated data refresh processes',
        'Improved transparency in government spending',
        'Generated executive summary reports'
      ],
      category: 'Data Analytics',
      status: 'Completed',
      duration: '3 months',
      impact: 'High'
    },
    {
      title: '2Degrees Procurement Optimization',
      description: 'Led development and maintenance of procurement spending reports using Microsoft Power BI with multiple data sources. Administered D365 FinOps system and resolved escalation requests.',
      technologies: ['D365 FinOps', 'Power BI', 'PowerApps', 'Azure DevOps'],
      highlights: [
        'Streamlined vendor onboarding process',
        'Reduced data discrepancies by 40%',
        'Automated reporting workflows',
        'Enhanced stakeholder communication'
      ],
      category: 'System Administration',
      status: 'Completed',
      duration: '16 months',
      impact: 'High'
    },
    {
      title: 'Auckland Transport Data Insights Platform',
      description: 'Developed and maintained procurement and finance Power BI reports with multiple data sources. Led agile projects for SAP integration and process improvement initiatives.',
      technologies: ['SAP FICO', 'Power BI', 'ServiceNow', 'SharePoint'],
      highlights: [
        'Improved data accuracy by 35%',
        'Led automation initiatives',
        'Trained 50+ users on Power BI',
        'Supported executive reporting'
      ],
      category: 'Business Intelligence',
      status: 'Completed',
      duration: '24 months',
      impact: 'Medium'
    },
    {
      title: 'AI-Powered Spend Analysis Tool',
      description: 'Developed a machine learning model to predict procurement spending patterns and identify cost-saving opportunities using Python and scikit-learn.',
      technologies: ['Python', 'scikit-learn', 'Pandas', 'Matplotlib'],
      highlights: [
        'Achieved 85% prediction accuracy',
        'Identified $2M+ in potential savings',
        'Automated anomaly detection',
        'Real-time dashboard integration'
      ],
      category: 'Machine Learning',
      status: 'In Progress',
      duration: '4 months',
      impact: 'High'
    },
    {
      title: 'Supply Chain Risk Assessment Dashboard',
      description: 'Created a comprehensive risk assessment tool for supply chain management using advanced analytics and visualization techniques.',
      technologies: ['Power BI', 'Azure', 'Python', 'REST APIs'],
      highlights: [
        'Real-time risk monitoring',
        'Integrated multiple data sources',
        'Automated alert system',
        'Executive-level reporting'
      ],
      category: 'Risk Management',
      status: 'Planning',
      duration: '6 months',
      impact: 'Medium'
    },
    {
      title: 'Vendor Performance Analytics',
      description: 'Developed KPI tracking and performance measurement system for vendor management across multiple categories and regions.',
      technologies: ['Power BI', 'SQL Server', 'Excel', 'SharePoint'],
      highlights: [
        'Tracked 200+ vendors',
        'Automated performance scoring',
        'Quarterly review automation',
        'Cost optimization insights'
      ],
      category: 'Performance Management',
      status: 'Completed',
      duration: '8 months',
      impact: 'Medium'
    }
  ]

  const experience = [
    {
      company: '2Degrees',
      role: 'Procurement Data Analyst | D365 FinOps System Administrator',
      period: 'Nov 2023 - Mar 2025',
      description: 'Led procurement analytics and system administration for telecommunications company.'
    },
    {
      company: 'Auckland Transport',
      role: 'Procurement Advisor – Excellence | Data and Insights Analyst',
      period: 'Sep 2021 - Nov 2023',
      description: 'Developed comprehensive BI solutions and led process improvement initiatives.'
    },
    {
      company: 'Auckland Transport',
      role: 'Procurement Advisor – Excellence | Capability & Process Analyst',
      period: 'Sep 2019 - Aug 2021',
      description: 'Drove strategic initiatives to enhance internal processes and digital solutions.'
    }
  ]

  const hobbies = [
    {
      name: 'Photography',
      icon: Camera,
      description: 'Landscape and street photography, particularly capturing Auckland\'s urban development',
      level: 'Intermediate',
      timeSpent: '5+ years'
    },
    {
      name: 'Music Production',
      icon: Music,
      description: 'Electronic music production using Ableton Live and various synthesizers',
      level: 'Beginner',
      timeSpent: '2 years'
    },
    {
      name: 'Gaming',
      icon: Gamepad2,
      description: 'Strategy games and competitive esports, particularly data-driven games like Civilization',
      level: 'Advanced',
      timeSpent: '10+ years'
    },
    {
      name: 'Travel',
      icon: Plane,
      description: 'Exploring Southeast Asia and documenting cultural differences in business practices',
      level: 'Enthusiast',
      timeSpent: '8+ years'
    },
    {
      name: 'Coffee Culture',
      icon: Coffee,
      description: 'Third-wave coffee appreciation and home brewing techniques',
      level: 'Intermediate',
      timeSpent: '3 years'
    },
    {
      name: 'Open Source',
      icon: Code,
      description: 'Contributing to data visualization and analytics tools on GitHub',
      level: 'Beginner',
      timeSpent: '1 year'
    }
  ]

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: '#', color: 'hover:text-gray-900 dark:hover:text-white' },
    { name: 'LinkedIn', icon: Linkedin, url: '#', color: 'hover:text-blue-600' },
    { name: 'Notion', icon: BookOpen, url: '#', color: 'hover:text-gray-800 dark:hover:text-gray-200' },
    { name: 'Hugging Face', icon: Brain, url: '#', color: 'hover:text-yellow-500' },
    { name: 'Kaggle', icon: Trophy, url: '#', color: 'hover:text-blue-500' },
    { name: 'Google Analytics', icon: BarChart3, url: '#', color: 'hover:text-orange-500' }
  ]

  const aboutData = {
    personalInfo: {
      location: 'Auckland, New Zealand',
      experience: '6+ years',
      education: 'Masters in Analytics (In Progress)',
      languages: ['English (Native)', 'Filipino (Native)', 'Spanish (Conversational)']
    },
    values: [
      'Data-driven decision making',
      'Continuous learning and improvement',
      'Collaborative problem solving',
      'Ethical AI and responsible analytics'
    ],
    interests: [
      'Machine Learning & AI',
      'Business Process Optimization',
      'Data Visualization',
      'Procurement Analytics',
      'Digital Transformation'
    ]
  }

  const SkillIcon = ({ skill }) => {
    const IconComponent = skill.icon
    return <IconComponent className="w-5 h-5" />
  }

  const SocialIcon = ({ social }) => {
    const IconComponent = social.icon
    return <IconComponent className="w-5 h-5" />
  }

  const HobbyIcon = ({ hobby }) => {
    const IconComponent = hobby.icon
    return <IconComponent className="w-6 h-6" />
  }

  const renderHome = () => (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 dark:text-white mb-6">
            Hello
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 font-light">
            I'm Ryan Castillo, a Data & Analytics Professional
          </p>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Passionate Data and Reporting Analyst with six years of experience across various industries. 
              Skilled in business process optimization, digital solution integration, and transforming data into actionable insights.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                    <SkillIcon skill={skill} />
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{skill.name}</span>
                  <Badge variant="secondary" className="text-xs">{skill.category}</Badge>
                </div>
              </div>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className={`p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg transition-all duration-200 ${social.color}`}
                title={social.name}
              >
                <SocialIcon social={social} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Projects Preview */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{project.category}</Badge>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </div>
                  <CardTitle className="text-lg dark:text-white">{project.title}</CardTitle>
                  <CardDescription className="text-sm dark:text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Key Highlights</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        {project.highlights.slice(0, 2).map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button 
              onClick={() => setActiveSection('projects')}
              className="bg-green-600 hover:bg-green-700"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </section>
    </>
  )

  const renderAbout = () => (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-gray-900 dark:text-white mb-12 text-center">About Me</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 dark:text-white">
                <User className="w-5 h-5" />
                <span>Personal Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-green-600" />
                <span className="dark:text-gray-300">{aboutData.personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-green-600" />
                <span className="dark:text-gray-300">{aboutData.personalInfo.experience} in Data Analytics</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-4 h-4 text-green-600" />
                <span className="dark:text-gray-300">{aboutData.personalInfo.education}</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Languages</h4>
                <div className="space-y-1">
                  {aboutData.personalInfo.languages.map((lang, index) => (
                    <Badge key={index} variant="outline" className="mr-2 mb-1">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 dark:text-white">
                <Target className="w-5 h-5" />
                <span>Core Values</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {aboutData.values.map((value, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Star className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="dark:text-gray-300">{value}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12 dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 dark:text-white">
              <Brain className="w-5 h-5" />
              <span>Professional Interests</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {aboutData.interests.map((interest, index) => (
                <div key={index} className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 text-center">
                  <span className="text-sm font-medium text-green-800 dark:text-green-300">{interest}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Current Journey</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Currently pursuing my Masters in Analytics at Auckland University of Technology while expanding my 
            technical skills through IBM's Python for Data Science certification. I'm passionate about leveraging 
            AI and machine learning to solve complex business problems and drive data-driven decision making.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            When I'm not analyzing data or building dashboards, you'll find me exploring Auckland's coffee scene, 
            capturing the city's urban development through photography, or contributing to open-source analytics projects.
          </p>
        </div>
      </div>
    </section>
  )

  const renderProjects = () => (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-light text-gray-900 dark:text-white mb-12 text-center">Project Gallery</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{project.category}</Badge>
                  <div className="flex items-center space-x-2">
                    <Badge 
                      variant={project.status === 'Completed' ? 'default' : project.status === 'In Progress' ? 'secondary' : 'outline'}
                      className="text-xs"
                    >
                      {project.status}
                    </Badge>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <CardTitle className="text-lg dark:text-white">{project.title}</CardTitle>
                <CardDescription className="text-sm dark:text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">Duration:</span>
                      <p className="text-gray-600 dark:text-gray-400">{project.duration}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">Impact:</span>
                      <p className="text-gray-600 dark:text-gray-400">{project.impact}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Key Highlights</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )

  const renderHobbies = () => (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-gray-900 dark:text-white mb-12 text-center">Hobbies & Interests</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {hobbies.map((hobby, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 dark:text-white">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                    <HobbyIcon hobby={hobby} />
                  </div>
                  <span>{hobby.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{hobby.description}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">Level:</span>
                    <p className="text-gray-600 dark:text-gray-400">{hobby.level}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">Experience:</span>
                    <p className="text-gray-600 dark:text-gray-400">{hobby.timeSpent}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Life Philosophy</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I believe in maintaining a healthy work-life balance and pursuing diverse interests that complement my professional growth. 
            My hobbies often intersect with my career - photography teaches me about visual storytelling for data presentation, 
            gaming develops strategic thinking, and travel broadens my perspective on global business practices.
          </p>
        </div>
      </div>
    </section>
  )

  const renderContact = () => (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-light text-gray-900 dark:text-white mb-8">Let's Connect</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Ready to explore opportunities in Data & Insights Analytics, Business Process Automation, and AI integrations.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a href="mailto:ryangcastillo@outlook.com" className="flex items-center justify-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
            <Mail className="w-5 h-5 text-green-600" />
            <span className="text-gray-900 dark:text-white">ryangcastillo@outlook.com</span>
          </a>
          <a href="tel:+64223565108" className="flex items-center justify-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
            <Phone className="w-5 h-5 text-green-600" />
            <span className="text-gray-900 dark:text-white">+64 22 356 5108</span>
          </a>
          <a href="https://www.linkedin.com/in/castillo-ryan/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
            <Linkedin className="w-5 h-5 text-green-600" />
            <span className="text-gray-900 dark:text-white">LinkedIn Profile</span>
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-12">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className={`p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg transition-all duration-200 ${social.color}`}
              title={social.name}
            >
              <SocialIcon social={social} />
            </a>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Current Focus</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Currently pursuing Masters in Analytics at Auckland University of Technology and 
            Python for Data Science certification through IBM/Coursera.
          </p>
          <Button className="bg-green-600 hover:bg-green-700">
            Schedule a Conversation
          </Button>
        </div>
      </div>
    </section>
  )

  const renderExperience = () => (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-12 text-center">Professional Experience</h2>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="border-l-2 border-green-500 pl-6 pb-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.company}</h3>
                  <Badge variant="outline">{exp.period}</Badge>
                </div>
                <h4 className="text-md font-medium text-green-600 mb-2">{exp.role}</h4>
                <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Navigation */}
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

      {/* Main Content */}
      <main>
        {activeSection === 'home' && renderHome()}
        {activeSection === 'about' && renderAbout()}
        {activeSection === 'projects' && renderProjects()}
        {activeSection === 'hobbies' && renderHobbies()}
        {activeSection === 'contact' && renderContact()}
        {activeSection === 'home' && renderExperience()}
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © 2025 Ryan Castillo. Designed with inspiration from modern UI/UX principles.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
