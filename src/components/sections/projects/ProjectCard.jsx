import PropTypes from 'prop-types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Calendar, Target } from 'lucide-react'

const ProjectCard = ({ project }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'in progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'planning':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const getImpactColor = (impact) => {
    switch (impact.toLowerCase()) {
      case 'high':
        return 'text-green-600 dark:text-green-400'
      case 'medium':
        return 'text-yellow-600 dark:text-yellow-400'
      case 'low':
        return 'text-gray-600 dark:text-gray-400'
      default:
        return 'text-gray-600 dark:text-gray-400'
    }
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] h-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
              {project.title}
            </CardTitle>
            <CardDescription className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {project.duration}
              </span>
              <Badge className={`${getStatusColor(project.status)} text-xs`}>
                {project.status}
              </Badge>
              <span className={`flex items-center gap-1 ${getImpactColor(project.impact)}`}>
                <Target className="w-3 h-3" />
                {project.impact} Impact
              </span>
            </CardDescription>
          </div>
          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors flex-shrink-0 ml-2" />
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">
          {project.description}
        </p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <Badge key={techIndex} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-2 mt-auto">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
            Key Achievements:
          </h4>
          <ul className="space-y-1">
            {project.highlights.map((highlight, highlightIndex) => (
              <li key={highlightIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                <span className="text-green-500 mr-2 flex-shrink-0 mt-0.5">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
    category: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    impact: PropTypes.string.isRequired
  }).isRequired
}

export default ProjectCard