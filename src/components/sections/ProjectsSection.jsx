import { useState, useMemo } from 'react'
import ProjectCard from './projects/ProjectCard'
import ProjectFilter from './projects/ProjectFilter'
import { projects } from '@/data/projects'

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Extract unique categories from projects
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(projects.map(project => project.category))]
    return uniqueCategories.sort()
  }, [])

  // Count projects per category
  const projectCounts = useMemo(() => {
    return projects.reduce((counts, project) => {
      counts[project.category] = (counts[project.category] || 0) + 1
      return counts
    }, {})
  }, [])

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return projects
    }
    return projects.filter(project => project.category === selectedCategory)
  }, [selectedCategory])

  return (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-4">
            Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my work in data analytics, business intelligence, and system optimization
          </p>
        </div>

        <ProjectFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          projectCounts={projectCounts}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectsSection