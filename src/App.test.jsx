import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App.jsx'

// Mock the data import
vi.mock('./constants/data.js', () => ({
  skills: [
    { name: 'Power BI', category: 'Analytics', icon: 'BarChart3' },
    { name: 'Python', category: 'Programming', icon: 'Brain' }
  ],
  projects: [
    {
      title: 'Test Project',
      description: 'A test project',
      technologies: ['React', 'Node.js'],
      highlights: ['Feature 1', 'Feature 2'],
      category: 'Web Development',
      status: 'Completed',
      duration: '3 months',
      impact: 'High'
    }
  ],
  experience: [
    {
      company: 'Test Company',
      role: 'Test Role',
      period: '2023 - 2024',
      description: 'Test description'
    }
  ],
  hobbies: [
    {
      name: 'Test Hobby',
      icon: 'TestIcon',
      description: 'Test hobby description',
      level: 'Beginner',
      timeSpent: '1 year'
    }
  ],
  socialLinks: [
    { name: 'GitHub', icon: 'Github', url: 'https://github.com', color: 'hover:text-gray-900' }
  ],
  aboutData: {
    personalInfo: {
      location: 'Test Location',
      experience: '5+ years',
      education: 'Test Degree',
      languages: ['English', 'Spanish']
    },
    values: ['Test Value 1', 'Test Value 2'],
    interests: ['Test Interest 1', 'Test Interest 2']
  }
}))

describe('App', () => {
  beforeEach(() => {
    render(<App />)
  })

  it('renders the main navigation', () => {
    expect(screen.getByText('ryan castillo')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Hobbies')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders the hero section by default', () => {
    expect(screen.getByText('Hello')).toBeInTheDocument()
    expect(screen.getByText("I'm Ryan Castillo, a Data & Analytics Professional")).toBeInTheDocument()
  })

  it('renders skills in the hero section', () => {
    expect(screen.getByText('Power BI')).toBeInTheDocument()
    expect(screen.getByText('Python')).toBeInTheDocument()
  })

  it('renders featured projects', () => {
    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText('A test project')).toBeInTheDocument()
  })

  it('navigates to about section when About Me is clicked', async () => {
    const user = userEvent.setup()
    await user.click(screen.getByText('About Me'))

    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText('Personal Information')).toBeInTheDocument()
  })

  it('navigates to projects section when Projects is clicked', async () => {
    const user = userEvent.setup()
    await user.click(screen.getByText('Projects'))

    expect(screen.getByText('Project Gallery')).toBeInTheDocument()
  })

  it('toggles dark mode when dark mode button is clicked', async () => {
    const user = userEvent.setup()

    // Initially should be light mode
    expect(document.documentElement).not.toHaveClass('dark')

    // Click dark mode toggle
    const darkModeButton = screen.getByRole('button', { name: /moon|sun/i })
    await user.click(darkModeButton)

    // Should now have dark class
    expect(document.documentElement).toHaveClass('dark')
  })

  it('renders contact information', async () => {
    const user = userEvent.setup()
    await user.click(screen.getByText('Contact'))

    expect(screen.getByText("Let's Connect")).toBeInTheDocument()
    expect(screen.getByText('Ready to explore opportunities in Data & Insights Analytics, Business Process Automation, and AI integrations.')).toBeInTheDocument()
  })

  it('renders social links', () => {
    expect(screen.getByText('GitHub')).toBeInTheDocument()
  })

  it('renders footer with copyright information', () => {
    expect(screen.getByText('© 2025 Ryan Castillo. Designed with inspiration from modern UI/UX principles.')).toBeInTheDocument()
  })
})